import Hero from "@/app/index-1/component/Hero";
import Footer from "@/components/Footer";
import BackToTop from "@/components/navbar/BackToTop";
import NavBar from "@/components/navbar/NavBar";
import PageMeta from "@/components/PageMeta";
import AboutUs from "./component/AboutUs";
import Bonuses from "./component/Bonuses";
import ContactSection from "./component/ContactSection";
import Requirements from "./component/Requirements";
const Page = () => {
  return <>
            <PageMeta />
            <style>{`
              /* Make CTA shape static on main page */
              .ca-cta-shape3 { animation: none !important; transform: translateY(0) !important; }
              
              /* Make Become Driver button smaller on mobile */
              @media (max-width: 991.98px) {
                .hero3-btn .ca-sec-primary-3 {
                  padding: 8px 14px !important;
                  font-size: 14px !important;
                  margin-left: 8px !important;
                  margin-top: 10px !important;
                }
                .hero3-btn .ca-sec-primary-3 span {
                  height: 28px !important;
                  width: 28px !important;
                  line-height: 28px !important;
                  font-size: 14px !important;
                }
              }
            `}</style>
            <NavBar />
            <main>
                <Hero />
                <AboutUs />
                <Requirements />
                <Bonuses />
                <ContactSection />
            </main>
            <Footer />
            <BackToTop />
        </>;
};
export default Page;