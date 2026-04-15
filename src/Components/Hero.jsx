// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import image from "../../public/Images/owner1.png";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-linear-to-br from-emerald-50 via-teal-50 to-green-100 overflow-hidden py-20 md:py-24"
    >
      {/* Background blur */}
      <div className="absolute w-72 h-72 bg-emerald-200 rounded-full blur-3xl opacity-40 top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-teal-200 rounded-full blur-3xl opacity-40 bottom-10 right-10"></div>

      <div className="max-w-6xl mx-auto px-6 w-full z-10">
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* IMAGE FIRST ON MOBILE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="order-1 md:order-2 flex justify-center relative"
          >
            <img
              src={image}
              alt="photographer"
              loading="lazy"
              className=" w-96    
                object-contain md:object-cover
                rounded-2xl shadow-xl
              "
            />
            <div className="absolute"></div>
          </motion.div>

          {/* TEXT BELOW IMAGE ON MOBILE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1 text-center md:text-left"
          >
            <p className="text-emerald-600 font-medium mb-3 text-sm md:text-base">
              Professional Photographer
            </p>

            <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-emerald-900 leading-tight">
              Capturing Moments <br />
              That Tell Your <span className="text-teal-600">Story</span>
            </h1>

            <p className="mt-5 text-emerald-800/70 text-sm sm:text-base md:text-lg leading-relaxed">
              I create timeless photography that preserves emotions, memories,
              and beauty in every frame. Specializing in portraits, weddings,
              and lifestyle photography.
            </p>

            {/* BUTTONS */}

            <div className="mt-7 flex sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                to="portfolio"
                smooth={true}
                duration={500}
                className="px-6 py-3 rounded-full bg-linear-to-r from-emerald-500 to-teal-500 text-white shadow-md hover:scale-105 transition cursor-pointer"
              >
                View Portfolio
              </Link>

              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="px-6 py-3 rounded-full border border-emerald-300 text-emerald-700 hover:bg-emerald-100 transition cursor-pointer"
              >
                Contact Me
              </Link>
            </div>

            {/* STATS */}
            <div className="mt-10 flex flex-wrap gap-6 justify-center md:justify-start">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-emerald-800">
                  120+
                </h2>
                <p className="text-xs md:text-sm text-emerald-600">Projects</p>
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-emerald-800">
                  5+
                </h2>
                <p className="text-xs md:text-sm text-emerald-600">Years Exp</p>
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-emerald-800">
                  80+
                </h2>
                <p className="text-xs md:text-sm text-emerald-600">Clients</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
