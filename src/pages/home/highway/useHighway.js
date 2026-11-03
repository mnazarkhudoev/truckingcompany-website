import { useEffect } from "react";

// Where the truck photo's own perspective lines meet, as a fraction of the
// image box. The 3D road is aimed at this point so the truck sits on it.
const PHOTO_VANISHING_POINT = { x: 1.05, y: 0.44 };

const offsetWithin = (el, ancestor) => {
  let x = 0;
  let y = 0;
  for (let node = el; node && node !== ancestor; node = node.offsetParent) {
    x += node.offsetLeft;
    y += node.offsetTop;
  }
  return { x, y };
};

// Mounts the WebGL highway behind the hero and tilts the truck with the pointer.
// three.js loads as a separate chunk, so the page renders before it arrives.
export const useHighway = (stageRef, canvasRef, truckRef) => {
  useEffect(() => {
    const stage = stageRef.current;
    const canvas = canvasRef.current;
    const truck = truckRef.current;
    const animate = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let scene = null;
    let disposed = false;
    const cleanups = [];

    const layout = () => {
      const { x, y } = offsetWithin(truck, stage);
      const vanish = {
        x: x + truck.offsetWidth * PHOTO_VANISHING_POINT.x,
        y: y + truck.offsetHeight * PHOTO_VANISHING_POINT.y,
      };
      const width = stage.clientWidth;
      const height = stage.clientHeight;
      scene.resize(width, height, { x: vanish.x / width, y: vanish.y / height });
    };

    import("./highwayScene")
      .then(({ createHighwayScene }) => {
        if (disposed) return;
        scene = createHighwayScene(canvas, { animate });
        layout();
        stage.dataset.scene = "ready";

        const resizeObserver = new ResizeObserver(layout);
        resizeObserver.observe(stage);
        cleanups.push(() => resizeObserver.disconnect());

        if (!animate) return;

        // Only spend frames while the hero is on screen and the tab is visible.
        let onScreen = true;
        const sync = () => (onScreen && !document.hidden ? scene.start() : scene.stop());
        const visibility = new IntersectionObserver(([entry]) => {
          onScreen = entry.isIntersecting;
          sync();
        });
        visibility.observe(stage);
        document.addEventListener("visibilitychange", sync);
        cleanups.push(() => {
          visibility.disconnect();
          document.removeEventListener("visibilitychange", sync);
        });

        const onPointerMove = e => {
          if (e.pointerType !== "mouse") return;
          const rect = stage.getBoundingClientRect();
          scene.setPointer(((e.clientX - rect.left) / rect.width) * 2 - 1, ((e.clientY - rect.top) / rect.height) * 2 - 1);
        };
        const onPointerLeave = () => scene.setPointer(0, 0);
        stage.addEventListener("pointermove", onPointerMove);
        stage.addEventListener("pointerleave", onPointerLeave);
        cleanups.push(() => {
          stage.removeEventListener("pointermove", onPointerMove);
          stage.removeEventListener("pointerleave", onPointerLeave);
        });

        // The truck turns toward the pointer on the same smoothed values as the camera.
        scene.onFrame(({ x, y }) => {
          truck.style.setProperty("--tilt-y", `${(x * -7).toFixed(2)}deg`);
          truck.style.setProperty("--tilt-x", `${(y * 3).toFixed(2)}deg`);
          truck.style.setProperty("--shift", `${(x * -10).toFixed(1)}px`);
        });
        sync();
      })
      // No WebGL (old device, disabled GPU): the CSS backdrop stays in place.
      .catch(() => {});

    return () => {
      disposed = true;
      cleanups.forEach(fn => fn());
      scene?.dispose();
      delete stage.dataset.scene;
    };
  }, [stageRef, canvasRef, truckRef]);
};
