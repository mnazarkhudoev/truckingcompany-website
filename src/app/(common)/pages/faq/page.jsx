import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-bootstrap";
import { FaAngleDown, FaAngleRight, FaStar } from "react-icons/fa6";
import { faqData } from "./data";
import thumb2 from "@/assets/img/faq/ca-faq-sm1.2.png";
import thumb1 from "@/assets/img/faq/ca-faq-thumb-1.1.png";
import breadCrumb from "@/assets/img/shape/breadcrumn-shape.png";
import line from "@/assets/img/shape/ca-line-shape.png";
import Counter from "./components/Counter";
import PageMeta from "@/components/PageMeta";
import { Link } from "react-router-dom";
const FAQPage = () => {
  const star = <FaStar />;
  const stardata = Array(5).fill(star);
  return <>
            <PageMeta title="Faq" />
            <section className="ca-breadcrumb-area cream-bg-3 p-relative z-index-1 fix">
                <div className="ca-breadcrumb-shape p-absolute bre-sh-1">
                    <img src={breadCrumb} alt="" />
                </div>
                <div className="ca-breadcrumb-shape p-absolute bre-sh-2">
                    <img src={line} alt="" />
                </div>
                <div className="container">
                    <div className="ca-breadcrumb-content text-center">
                        <h2 className="ca-breadcrumb-title fnw-600">FAQ’s</h2>
                        <div className="it-breadcum-link">
                            <Link to="/index-1">Home</Link>
                            <span>
                                    {" "}
                                    <FaAngleRight />
                            </span>
                            <a className="active" href="#">
                                FAQ’s
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <div className="ca-faq-inner pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-30">
                            <div className="ca-faq-iner-thumb p-relative mr-65">
                                <img className="w-100" src={thumb1} alt="" />
                                <div className="ca-fa-sm-thumb">
                                    <img src={thumb2} alt="" />
                                </div>

                                <div className="ca-iner-review-text ca-faq-iner-review p-absolute theme-bg-3">
                                    <Counter />
                                    <p>Years Of Experience</p>
                                    <div className="ca-test-3-rating ca-faq-rating">
                                        <div className="ca-ratings-3">
                                            <span className="fa fa-star checked star">
                                                {stardata.map((starElement, index) => <span key={index}>{starElement}</span>)}
                                            </span>
                                        </div>
                                        <div className="ca-rating-num-3">
                                            <h4 className="ca-rating-title-3">
                                                (5) <span className="rat-title">Rating</span>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-30">
                            <div className="ca-about-content-3 ca-sec-content-3 mb-48">
                                <h5 className="ca-section-subtitle subtitle-bg-6 p-relative theme-color-3 br-50">
                                    FAQ'S
                                </h5>
                                <h2 className="ca-section-title theme-black-3 fnw-600 pt-16 ca-text-cap">
                                    Frequently Asked Questions and Answers
                                </h2>
                            </div>
                            <div className="ca-faq-accordion-one">
                                <Accordion defaultActiveKey='0' id="accordionExample">
                                    {faqData[0].faqs.map((faq, index) => <AccordionItem eventKey={index.toString()} className="ca-iner-one" key={faq.id}>
                                            <AccordionHeader as='h2' id={`heading-${faq.id}`}>

                                                <span>
                                                    <FaAngleDown className="mb-1" />
                                                </span>{" "}
                                                {faq.question}
                                            </AccordionHeader>

                                            <AccordionBody>
                                                <p>{faq.answer}</p>
                                            </AccordionBody>
                                        </AccordionItem>)}
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="ca-faq-iner2 pt-100 pb-70">
                <div className="container">
                    <div className="ca-about-content-3 ca-sec-content-3 text-center mb-60">
                        <h5 className="ca-section-subtitle subtitle-bg-6 p-relative theme-color-3 br-50">
                            FAQ'S
                        </h5>
                        <h2 className="ca-section-title theme-black-3 fnw-600 pt-16 ca-text-cap">
                            Answers to Your Questions
                        </h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ca-faq-acc">
                                <div className="ca-accordion home-faq" id="accordionExample1">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <Accordion defaultActiveKey={'1'} id="accordionExample2">
                                                {faqData[1].faqs.slice(0, 4).map((faq, index) => <AccordionItem eventKey={index.toString()} className="ca-iner-accordion-item" key={faq.id}>
                                                        <AccordionHeader as={'h2'}>

                                                            {faq.question}
                                                        </AccordionHeader>

                                                        <AccordionBody>
                                                            <p>{faq.answer}</p>
                                                        </AccordionBody>
                                                    </AccordionItem>)}
                                            </Accordion>
                                        </div>
                                        <div className="col-lg-6">
                                            <Accordion id="accordionExample3">
                                                {faqData[1].faqs.slice(4).map((faq, index) => <AccordionItem eventKey={index.toString()} className="ca-iner-accordion-item" key={faq.id}>
                                                        <AccordionHeader as='h2'>
                                                            {faq.question}
                                                        </AccordionHeader>
                                                        <AccordionBody>
                                                            <p>{faq.answer}</p>
                                                        </AccordionBody>
                                                    </AccordionItem>)}
                                            </Accordion>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>;
};
export default FAQPage;