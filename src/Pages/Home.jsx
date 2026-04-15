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

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <Portfolio />
      <Featured />
      <About />
      <Services />
      <Process />
      <Pricing />
      <Testmonials />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
