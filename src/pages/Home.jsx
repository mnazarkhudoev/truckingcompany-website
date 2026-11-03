import PageMeta from "@/components/PageMeta";
import About from "./home/About";
import Contact from "./home/Contact";
import Hero from "./home/Hero";
import Pay from "./home/Pay";
import Requirements from "./home/Requirements";

const Home = () => (
  <>
    <PageMeta />
    <Hero />
    <About />
    <Requirements />
    <Pay />
    <Contact />
  </>
);

export default Home;
