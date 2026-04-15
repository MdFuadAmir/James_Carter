// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="py-20 bg-linear-to-r from-emerald-600 via-teal-600 to-green-600 relative overflow-hidden">

      {/* background glow */}
      <div className="absolute w-72 h-72 bg-white/20 rounded-full blur-3xl top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-white/20 rounded-full blur-3xl bottom-10 right-10"></div>

      <div className="max-w-5xl mx-auto px-6 text-center text-white relative z-10">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Let’s Capture Your <span className="text-emerald-100">Perfect Moment</span>
        </motion.h2>

        {/* SUBTITLE */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-white/80 max-w-2xl mx-auto text-sm md:text-base leading-relaxed"
        >
          Whether it’s a wedding, portrait, or creative shoot — I’m here to turn your moments into timeless memories with professional photography and storytelling.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >

          <a
            href="#contact"
            className="px-6 py-3 rounded-full bg-white text-emerald-700 font-medium hover:scale-105 transition"
          >
            Book a Session
          </a>

          <a
            href="#portfolio"
            className="px-6 py-3 rounded-full border border-white text-white hover:bg-white/20 transition"
          >
            View Portfolio
          </a>

        </motion.div>

      </div>
    </section>
  );
};

export default CTA;