import About from "../Components/About";
import Contact from "../Components/Contact";
import CTA from "../Components/CTA";
import Featured from "../Components/Featured";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Portfolio from "../Components/Portfolio";
import Pricing from "../Components/Pricing";
import Process from "../Components/Process";
import Services from "../Components/Services";
import Testmonials from "../Components/Testmonials";
import SEO from "../Utils/SEO";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <SEO
        title="James Carter | Wedding & Portrait Photographer"
        description="Professional photographer specializing in weddings, portraits, and cinematic storytelling."
      />
      <Hero />
      <Featured />
      <About />
      <Services />
      <Portfolio />
      <Process />
      <Pricing />
      <Testmonials />
      <CTA />
      <Contact />
    </div>
  );
};

export default Home;
