// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import image from "../assets/ownwe2.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-linear-to-b from-emerald-50 via-teal-50 to-green-50"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <img
            src={image}
            alt="James Carter"
            className="w-80 md:w-100 rounded-2xl shadow-xl object-cover"
          />
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <p className="text-emerald-600 font-medium mb-2">
            About Photographer
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-emerald-900">
            The Story of <span className="text-teal-600">James Carter</span>
          </h2>

          <p className="mt-5 text-emerald-800/70 leading-relaxed text-sm md:text-base">
            I believe photography is not just about capturing images — it’s
            about preserving emotions, memories, and real human stories that
            last forever.
          </p>

          <p className="mt-4 text-emerald-800/70 leading-relaxed text-sm md:text-base">
            My journey started with a simple passion for light and moments. Over
            time, I developed a style that focuses on natural expression,
            cinematic tones, and authentic storytelling through every frame I
            capture.
          </p>

          <p className="mt-4 text-emerald-800/70 leading-relaxed text-sm md:text-base">
            Whether it’s a wedding, portrait, or lifestyle shoot — I always aim
            to create visuals that feel real, emotional, and timeless.
          </p>

          {/* QUOTE */}
          <div className="mt-8 border-l-4 border-emerald-400 pl-4">
            <p className="text-emerald-700 italic text-sm md:text-base">
              “A photograph is the pause button of life — I just make sure that
              moment is worth remembering.”
            </p>
          </div>

          {/* CTA */}

          <a
            href="#contact"
            className="mt-12 inline-block px-6 py-3 rounded-full bg-linear-to-r from-emerald-500 to-teal-500 text-white shadow-md hover:scale-105 transition"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
