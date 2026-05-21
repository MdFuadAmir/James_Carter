// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import image from "../assets/owner1.webp";

const About = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="
        py-24 md:py-28
        bg-[#eef7f1] dark:bg-[#071a12]
        transition-colors duration-300
      "
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="relative group">
            <div className="absolute -inset-3 rounded-[40%_60%_55%_45%/50%_40%_60%_50%] bg-emerald-300/20 dark:bg-emerald-500/10 blur-2xl opacity-70 group-hover:opacity-100 transition" />

            <div
              className="
                relative overflow-hidden
                w-80 md:w-96
                aspect-4/5
                border border-emerald-200/40 dark:border-white/10
                bg-white/40 dark:bg-white/5
                backdrop-blur-md
                shadow-xl
                transition-all duration-300
                group-hover:-translate-y-2
              "
              style={{
                borderRadius: "58% 42% 32% 68% / 38% 44% 56% 62%",
              }}
            >
              <img
                src={image}
                alt="James Carter portrait photographer"
                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          {/* SECTION LABEL (SEO helper text) */}
          <p className="text-emerald-600 dark:text-emerald-400 font-medium mb-2">
            About Photographer
          </p>

          {/* ✅ H2 = SECTION TITLE */}
          <h2
            id="about-heading"
            className="text-3xl md:text-4xl font-bold text-emerald-900 dark:text-white"
          >
            The Story of <span className="text-teal-600">James Carter</span>
          </h2>

          {/* CONTENT PARAGRAPHS (no heading needed here) */}
          <p className="mt-5 text-emerald-800/70 dark:text-white/70 leading-relaxed text-sm md:text-base">
            I believe photography is not just about capturing images — it’s
            about preserving emotions, memories, and real human stories that
            last forever.
          </p>

          <p className="mt-4 text-emerald-800/70 dark:text-white/70 leading-relaxed text-sm md:text-base">
            My journey started with a simple passion for light and moments. Over
            time, I developed a style that focuses on natural expression,
            cinematic tones, and authentic storytelling.
          </p>

          <p className="mt-4 text-emerald-800/70 dark:text-white/70 leading-relaxed text-sm md:text-base">
            Whether it’s a wedding, portrait, or lifestyle shoot — I always aim
            to create visuals that feel real, emotional, and timeless.
          </p>

          {/* QUOTE (semantic improvement) */}
          <blockquote className="mt-8 border-l-4 border-emerald-500 pl-4">
            <p className="text-emerald-700 dark:text-emerald-300 italic text-sm md:text-base">
              “A photograph is the pause button of life — I just make sure that
              moment is worth remembering.”
            </p>
          </blockquote>

          {/* CTA (no heading needed) */}
          <a
            href="#contact"
            onClick={() => {
              const textarea = document.querySelector(
                'textarea[name="message"]',
              );

              if (textarea) {
                textarea.value = `Hi James Carter,

I would love to book a photography session with you.

I am interested in portraits / lifestyle / wedding photography and would like to know your availability, packages, and pricing details.

Looking forward to your response.`;

                textarea.dispatchEvent(new Event("input", { bubbles: true }));
              }
            }}
            className="
     inline-flex
    items-center justify-center
    px-6 py-3
    rounded-full
    border border-emerald-500
    text-emerald-700 dark:text-emerald-300
    text-sm md:text-base
    font-medium
    bg-transparent
    hover:bg-emerald-500/10
    hover:border-emerald-600
    hover:text-emerald-600 dark:hover:text-white
    hover:-translate-y-1
    transition-all duration-300
    cursor-pointer mt-6
  "
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
