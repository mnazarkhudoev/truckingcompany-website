import Hero from "@/app/index-1/component/Hero";
import Footer from "@/components/Footer";
import BackToTop from "@/components/navbar/BackToTop";
import NavBar from "@/components/navbar/NavBar";
import PageMeta from "@/components/PageMeta";
import BlogSection from "./component/BlogSection";
import Commitment from "./component/Commitment";
import ContactSection from "./component/ContactSection";
import Portfolio from "./component/Portfolio";
import Service from "./component/Service";
import TestimonialSection from "./component/TestimonialSection";
import VideoPlaySection from "./component/VideoPlaySection";
import WorkingProcessSection from "./component/WorkingProcessSection";
const Page = () => {
  return <>
            <PageMeta />
            <NavBar />
            <main>
                <Hero />
                <Commitment />
                <Service />
                <Portfolio />
                <VideoPlaySection />
                <WorkingProcessSection />
                <TestimonialSection />
                <ContactSection />
                <BlogSection />
            </main>
            <Footer />
            <BackToTop />
        </>;
};
export default Page;