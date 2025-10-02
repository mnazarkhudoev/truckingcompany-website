import Hero from "@/app/index-1/component/Hero";
import Footer from "@/components/Footer";
import BackToTop from "@/components/navbar/BackToTop";
import NavBar from "@/components/navbar/NavBar";
import PageMeta from "@/components/PageMeta";
import AboutUs from "./component/AboutUs";
import BlogSection from "./component/BlogSection";
import Bonuses from "./component/Bonuses";
import ContactSection from "./component/ContactSection";
import Portfolio from "./component/Portfolio";
import Requirements from "./component/Requirements";
import TestimonialSection from "./component/TestimonialSection";
import VideoPlaySection from "./component/VideoPlaySection";
import WorkingProcessSection from "./component/WorkingProcessSection";
const Page = () => {
  return <>
            <PageMeta />
            <NavBar />
            <main>
                <Hero />
                <AboutUs />
                <Requirements />
                <Bonuses />
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