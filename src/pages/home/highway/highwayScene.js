import {
  AdditiveBlending,
  BoxGeometry,
  BufferGeometry,
  Color,
  Float32BufferAttribute,
  Fog,
  InstancedMesh,
  Mesh,
  MeshBasicMaterial,
  Object3D,
  PerspectiveCamera,
  PlaneGeometry,
  Points,
  Scene,
  ShaderMaterial,
  WebGLRenderer,
} from "three";

// A dusk highway seen from the right shoulder. Units are meters; the road runs
// along -z and the "drive" is simulated by moving everything toward the camera.

const ASPHALT = new Color("#0f0f10");
const FOG_NEAR = 18;
const FOG_FAR = 150;
const SPEED = 24; // m/s, about 54 mph
const CAMERA_HEIGHT = 2.1;
const CAMERA_X = 4.6;
const SUBFRAME_FOV = 38; // vertical field of view of the visible canvas, degrees

const ROAD_HALF_WIDTH = 5.4; // three 3.6 m lanes
const LANE_LINE_X = 1.8;
const DASH = 3; // US interstate: 10 ft dashes...
const DASH_CYCLE = 12; // ...every 40 ft

const createRoadMaterial = () =>
  new ShaderMaterial({
  uniforms: {
    uTravel: { value: 0 },
    uFogColor: { value: ASPHALT },
    uFogNear: { value: FOG_NEAR },
    uFogFar: { value: FOG_FAR },
  },
  vertexShader: /* glsl */ `
    varying vec3 vWorld;
    varying float vDepth;
    void main() {
      vec4 world = modelMatrix * vec4(position, 1.0);
      vWorld = world.xyz;
      vec4 view = viewMatrix * world;
      vDepth = -view.z;
      gl_Position = projectionMatrix * view;
    }
  `,
  fragmentShader: /* glsl */ `
    uniform float uTravel;
    uniform vec3 uFogColor;
    uniform float uFogNear;
    uniform float uFogFar;
    varying vec3 vWorld;
    varying float vDepth;

    float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }

    float line(float d, float halfWidth) {
      float aa = fwidth(d);
      return 1.0 - smoothstep(halfWidth - aa, halfWidth + aa, abs(d));
    }

    void main() {
      float x = vWorld.x;
      float z = vWorld.z + uTravel;

      // Asphalt with coarse aggregate and darker wheel tracks.
      vec3 color = vec3(0.07, 0.07, 0.075);
      color += (hash(floor(vec2(x, z) * 6.0)) - 0.5) * 0.018;
      float lanePos = mod(x + ${ROAD_HALF_WIDTH.toFixed(1)}, ${(LANE_LINE_X * 2).toFixed(1)});
      color *= 1.0 - 0.18 * (line(lanePos - 0.9, 0.35) + line(lanePos - 2.7, 0.35));

      // Solid yellow left edge, solid white right edge, dashed white lane lines.
      vec3 white = vec3(0.86, 0.86, 0.84);
      vec3 yellow = vec3(0.9, 0.68, 0.16);
      color = mix(color, yellow, line(x + ${(ROAD_HALF_WIDTH - 0.15).toFixed(2)}, 0.075) * 0.9);
      color = mix(color, white, line(x - ${(ROAD_HALF_WIDTH - 0.15).toFixed(2)}, 0.075) * 0.9);

      float dz = fwidth(z);
      float cycle = mod(z, ${DASH_CYCLE.toFixed(1)});
      float dash = smoothstep(0.0, dz, cycle) * (1.0 - smoothstep(${DASH.toFixed(1)} - dz, ${DASH.toFixed(1)}, cycle));
      float lanes = line(x - ${LANE_LINE_X.toFixed(1)}, 0.07) + line(x + ${LANE_LINE_X.toFixed(1)}, 0.07);
      color = mix(color, white, lanes * dash * 0.85);

      float fog = smoothstep(uFogNear, uFogFar, vDepth);
      gl_FragColor = vec4(mix(color, uFogColor, fog), 1.0);
    }
  `,
  });

// Sky band behind the horizon: a red glow pooled around the vanishing point.
const createSkyMaterial = () =>
  new ShaderMaterial({
  depthWrite: false,
  uniforms: { uHorizon: { value: CAMERA_HEIGHT } },
  vertexShader: /* glsl */ `
    varying vec3 vWorld;
    void main() {
      vec4 world = modelMatrix * vec4(position, 1.0);
      vWorld = world.xyz;
      gl_Position = projectionMatrix * viewMatrix * world;
    }
  `,
  fragmentShader: /* glsl */ `
    uniform float uHorizon;
    varying vec3 vWorld;
    void main() {
      float height = max(vWorld.y - uHorizon, 0.0);
      float side = vWorld.x / 520.0;
      float glow = exp(-height / 80.0) * exp(-side * side * 1.4);
      float core = exp(-height / 7.0) * exp(-side * side * 9.0);
      vec3 base = vec3(0.059, 0.059, 0.063);
      vec3 color = base + vec3(0.34, 0.04, 0.04) * glow + vec3(0.55, 0.16, 0.08) * core;
      gl_FragColor = vec4(color, 1.0);
    }
  `,
  });

// Round, soft light sprites for vehicle lights. Size shrinks with distance.
const lightMaterial = color =>
  new ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: AdditiveBlending,
    uniforms: {
      uColor: { value: new Color(color) },
      uScale: { value: 1 },
      uFogNear: { value: FOG_NEAR },
      uFogFar: { value: FOG_FAR * 1.6 },
    },
    vertexShader: /* glsl */ `
      uniform float uScale;
      varying float vDepth;
      void main() {
        vec4 view = modelViewMatrix * vec4(position, 1.0);
        vDepth = -view.z;
        gl_PointSize = uScale * 26.0 / vDepth;
        gl_Position = projectionMatrix * view;
      }
    `,
    fragmentShader: /* glsl */ `
      uniform vec3 uColor;
      uniform float uFogNear;
      uniform float uFogFar;
      varying float vDepth;
      void main() {
        float d = length(gl_PointCoord - 0.5) * 2.0;
        float alpha = pow(max(1.0 - d, 0.0), 2.2);
        float fade = 1.0 - smoothstep(uFogNear, uFogFar, vDepth) * 0.85;
        gl_FragColor = vec4(uColor * alpha * fade, alpha * fade);
      }
    `,
  });

// Vehicles as pairs of lights: [lane x, starting z, speed relative to the camera].
const createTraffic = (vehicles, y, color) => {
  const positions = new Float32Array(vehicles.length * 6);
  const geometry = new BufferGeometry();
  geometry.setAttribute("position", new Float32BufferAttribute(positions, 3));
  const points = new Points(geometry, lightMaterial(color));
  points.frustumCulled = false;
  const state = vehicles.map(([x, z, v]) => ({ x, z, v }));

  const update = dt => {
    state.forEach((car, i) => {
      car.z += car.v * dt;
      if (car.z > 12) car.z -= 260;
      if (car.z < -260) car.z += 260;
      positions.set([car.x - 0.8, y, car.z, car.x + 0.8, y, car.z], i * 6);
    });
    geometry.attributes.position.needsUpdate = true;
  };
  update(0);
  return { points, update };
};

export const createHighwayScene = (canvas, { animate }) => {
  const renderer = new WebGLRenderer({ canvas, antialias: true, powerPreference: "low-power" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  renderer.setClearColor(ASPHALT);

  const scene = new Scene();
  scene.fog = new Fog(ASPHALT, FOG_NEAR, FOG_FAR);

  const camera = new PerspectiveCamera(SUBFRAME_FOV, 1, 0.1, 900);
  camera.position.set(CAMERA_X, CAMERA_HEIGHT, 6);

  const roadMaterial = createRoadMaterial();
  const road = new Mesh(new PlaneGeometry(ROAD_HALF_WIDTH * 2, 600), roadMaterial);
  road.rotation.x = -Math.PI / 2;
  road.position.set(0, 0, -290);
  scene.add(road);

  const ground = new Mesh(new PlaneGeometry(2000, 1000), new MeshBasicMaterial({ color: "#0c0c0d" }));
  ground.rotation.x = -Math.PI / 2;
  ground.position.set(0, -0.02, -480);
  scene.add(ground);

  const sky = new Mesh(new PlaneGeometry(3000, 400), createSkyMaterial());
  sky.position.set(-120, 200, -700);
  scene.add(sky);

  // Delineator posts with red reflectors along the far shoulder.
  const POST_COUNT = 14;
  const POST_GAP = 20;
  const posts = new InstancedMesh(new BoxGeometry(0.1, 1.1, 0.1), new MeshBasicMaterial({ color: "#2b2b30" }), POST_COUNT);
  const reflectors = new InstancedMesh(new BoxGeometry(0.13, 0.22, 0.13), new MeshBasicMaterial({ color: "#ff3b30" }), POST_COUNT);
  const POST_NEAREST = -14; // recycle before posts loom large over the headline
  const postZ = Array.from({ length: POST_COUNT }, (_, i) => POST_NEAREST - i * POST_GAP);
  const dummy = new Object3D();
  const placePosts = () => {
    postZ.forEach((z, i) => {
      dummy.position.set(-ROAD_HALF_WIDTH - 1.3, 0.55, z);
      dummy.updateMatrix();
      posts.setMatrixAt(i, dummy.matrix);
      dummy.position.y = 1.0;
      dummy.updateMatrix();
      reflectors.setMatrixAt(i, dummy.matrix);
    });
    posts.instanceMatrix.needsUpdate = true;
    reflectors.instanceMatrix.needsUpdate = true;
  };
  placePosts();
  scene.add(posts, reflectors);

  // Taillights pulling away in our lanes; headlights on the far carriageway.
  const taillights = createTraffic(
    [
      [0, -70, -4],
      [-3.6, -150, -2.5],
      [3.6, -210, -3],
    ],
    0.9,
    "#ff2a1f"
  );
  const headlights = createTraffic(
    [
      [-17, -40, SPEED * 2],
      [-20.6, -170, SPEED * 2.2],
    ],
    0.8,
    "#ffe6b8"
  );
  scene.add(taillights.points, headlights.points);

  // Everything is laid out around a vanishing point the page chooses (the
  // truck photo's own vanishing point), using an oversized virtual frame.
  let width = 1;
  let height = 1;
  let vanish = { x: 0.7, y: 0.45 };
  const fullFov = (2 * Math.atan(2 * Math.tan(((SUBFRAME_FOV / 2) * Math.PI) / 180)) * 180) / Math.PI;

  const applyView = () => {
    camera.fov = fullFov;
    camera.aspect = width / height;
    camera.setViewOffset(width * 2, height * 2, width - vanish.x * width, height - vanish.y * height, width, height);
    camera.updateProjectionMatrix();
    lightMaterialsScale(height * Math.min(window.devicePixelRatio, 1.5));
  };

  const lightMaterialsScale = px => {
    taillights.points.material.uniforms.uScale.value = px / 18;
    headlights.points.material.uniforms.uScale.value = px / 14;
  };

  // Camera parallax follows the pointer with a critically damped feel.
  const target = { x: 0, y: 0 };
  const current = { x: 0, y: 0 };
  let onFrame = null;

  let travel = 0;
  let frame = 0;
  let last = 0;
  let running = false;

  const step = time => {
    const dt = Math.min((time - last) / 1000, 0.05);
    last = time;
    const ease = 1 - Math.exp(-dt * 6);
    current.x += (target.x - current.x) * ease;
    current.y += (target.y - current.y) * ease;

    travel = (travel + SPEED * dt) % (DASH_CYCLE * 100);
    roadMaterial.uniforms.uTravel.value = travel;
    postZ.forEach((z, i) => {
      const next = z + SPEED * dt;
      postZ[i] = next > POST_NEAREST ? next - POST_COUNT * POST_GAP : next;
    });
    placePosts();
    taillights.update(dt);
    headlights.update(dt);

    camera.position.x = CAMERA_X + current.x * 0.9;
    camera.position.y = CAMERA_HEIGHT + current.y * 0.35;
    renderer.render(scene, camera);
    onFrame?.(current);
    frame = requestAnimationFrame(step);
  };

  const render = () => renderer.render(scene, camera);

  return {
    resize(w, h, vanishingPoint) {
      width = Math.max(w, 1);
      height = Math.max(h, 1);
      vanish = vanishingPoint;
      renderer.setSize(width, height, false);
      applyView();
      if (!running) render();
    },
    setPointer(x, y) {
      target.x = x;
      target.y = y;
    },
    onFrame(callback) {
      onFrame = callback;
    },
    start() {
      if (!animate || running) return;
      running = true;
      last = performance.now();
      frame = requestAnimationFrame(step);
    },
    stop() {
      running = false;
      cancelAnimationFrame(frame);
    },
    dispose() {
      this.stop();
      scene.traverse(object => {
        object.geometry?.dispose();
        object.material?.dispose();
      });
      renderer.dispose();
    },
  };
};
