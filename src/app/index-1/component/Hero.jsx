import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import shapeImage3 from "@/assets/img/shape/ca-image-shape3.3.png";
import shape3 from "@/assets/img/shape/ca-shape3.3.png";
import overlay_shape3_2 from "@/assets/img/shape/overlay-shape3.2.png";
import truckSlide3 from "@/assets/img/slider/truck-slide3.png";
import { FaAngleRight } from "react-icons/fa6";

const heroSlides = [
	{
		subtitle: "Iron Bull Trucking - Regional Excellence",
		title: "Strength in Every Mile We Haul",
		description:
			"From local deliveries to regional freight, our dedicated team ensures your cargo arrives safely and on time with the reliability you can count on.",
		buttonLabel: "Contact Us",
		discoverLabel: "Our Services",
	},
	{
		subtitle: "Iron Bull Trucking - Built Tough",
		title: "Your Cargo, Our Commitment",
		description:
			"We understand that your freight is your business. That's why we treat every load with the care and attention it deserves, backed by our iron-clad reliability.",
		buttonLabel: "Contact Us",
		discoverLabel: "Our Services",
	},
	{
		subtitle: "Iron Bull Trucking - Trusted Service",
		title: "Small Enough to Care, Strong Enough to Deliver",
		description:
			"As a growing trucking company, we offer personalized service with the strength and determination to handle your freight needs reliably.",
		buttonLabel: "Contact Us",
		discoverLabel: "Our Services",
	},
];

const Hero = () => {
	const settings = {
		arrows: false,
		dots: true,
		centerPadding: "0px",
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 1,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	return (
		<Slider {...settings} className="ca-slider-active-3">
			{heroSlides.map((slide, index) => (
				<div
					key={index}
					className="ca-slider-3 cream-bg-3 p-relative z-index-1 fix"
				>
					<div className="ca-slider-3-shape d-none d-lg-block">
						<img src={shape3} alt="Shape" />
						<div className="ca-slider-top-shape-img">
							<img src={shapeImage3} alt="Top Shape" />
						</div>
					</div>

					<div className="ca-slider-img-3 p-absolute">
						<img src={truckSlide3} alt="Truck Slide" className="img-fluid" />
					</div>

					<div className="ca-overlay-shape3 p-absolute">
						<img src={overlay_shape3_2} alt="Overlay Shape" />
					</div>

					<Container>
						<Row>
							<Col lg={6} md={10}>
								<div className="ca-hero-content-3">
									<h5 className="ca-section-subtitle subtitle-bg-6 p-relative theme-color-3 br-50">
										{slide.subtitle}
									</h5>
									<h1 className="ca-slider-heading theme-black-3 fnw-600 pt-20 pb-20">
										{slide.title}
									</h1>
									<p className="pt-16 pb-32">{slide.description}</p>
									<div className="hero3-btn">
										<Link
											to="/contact"
											className="ca-btn-primary-3 theme-bg-3 text-white br-50"
										>
											{slide.buttonLabel}
											<span>
												<FaAngleRight />
											</span>
										</Link>
										<Link
											to="/services"
											className="ca-sec-primary-3 theme-color-3 br-50"
										>
											{slide.discoverLabel}
											<span>
												<FaAngleRight />
											</span>
										</Link>
									</div>
								</div>
							</Col>
						</Row>
					</Container>
				</div>
			))}
		</Slider>
	);
};

export default Hero;