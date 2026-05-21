// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section
      id="cta"
      aria-labelledby="cta-title"
      className="
        relative overflow-hidden
        py-24
        bg-[#eaf6f0] dark:bg-[#071a12]
        transition-colors duration-300
      "
    >
      {/* SOFT BACKGROUND SHAPES */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-emerald-300/20 dark:bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-teal-300/20 dark:bg-teal-500/10 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        {/* TITLE */}
        <motion.h2
          id="cta-title"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
            text-3xl md:text-5xl font-bold
            text-emerald-950 dark:text-white
            leading-tight
          "
        >
          Let’s Capture Your <br />
          <span className="text-emerald-500">Perfect Moments</span>
        </motion.h2>

        {/* SUBTITLE */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="
            mt-5 max-w-2xl mx-auto
            text-emerald-800/70 dark:text-white/60
            text-sm md:text-base leading-relaxed
          "
        >
          Whether it’s weddings, portraits, or creative shoots — I craft
          cinematic visuals that turn your emotions into timeless storytelling.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-wrap gap-4 justify-center"
        >
          {/* PRIMARY BUTTON */}

          <a
            href="#contact"
            onClick={() => {
              const textarea = document.querySelector(
                'textarea[name="message"]',
              );
              if (textarea) {
                textarea.value = `Hi James Carter,

I would love to book a professional photography session with you.

I'm interested in capturing beautiful, cinematic moments — whether it's portraits, lifestyle, or a special event. Please let me know your availability, packages, and pricing details.

Looking forward to working with you.`;
                textarea.dispatchEvent(new Event("input", { bubbles: true }));
              }
            }}
            className="
              px-7 py-3.5 rounded-full
              bg-emerald-600 hover:bg-emerald-700
              text-white font-medium
              transition-all duration-300
              hover:-translate-y-1
              shadow-md hover:shadow-lg
            "
          >
            Book Session
          </a>

          {/* SECONDARY BUTTON */}
          <a
            href="#portfolio"
            className="
              px-7 py-3.5 rounded-full
              border border-emerald-300 dark:border-white/15
              text-emerald-800 dark:text-white
              hover:bg-white/50 dark:hover:bg-white/10
              transition-all duration-300
              hover:-translate-y-1
            "
          >
            View Portfolio
          </a>
        </motion.div>

        {/* TRUST LINE */}
        <p className="mt-10 text-xs md:text-sm text-emerald-700/60 dark:text-white/40">
          ✨ Professional editing • Fast delivery • Cinematic storytelling
        </p>
      </div>
    </section>
  );
};

export default CTA;
