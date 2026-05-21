// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import image from "../assets/owner2.webp";
import { Link } from "react-scroll";
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <section
      id="home"
      aria-label="Hero Section"
      className="
      relative overflow-hidden
      min-h-screen flex items-center
      bg-[#eef7f1] dark:bg-[#071a12]
      py-24 md:py-28
    "
    >
      {/* BACKGROUND GREEN VIBES */}
      <div className="absolute top-16 left-8 w-28 h-28 bg-emerald-200/40 dark:bg-emerald-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-teal-200/30 dark:bg-teal-500/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-10 items-center">
          {/* IMAGE SECTION */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative group">
              {/* GLOW */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full bg-emerald-300/30 dark:bg-emerald-500/20 blur-3xl rounded-full opacity-60 group-hover:scale-105 transition" />
              </div>

              {/* IMAGE */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                relative overflow-hidden
                w-65
                sm:w-[320px]
                md:w-95
                lg:w-107
                xl:w-117
                aspect-4/5
                border border-emerald-200/60
                dark:border-white/10
                shadow-xl
                bg-white dark:bg-[#101b17]
                transition-all duration-500
                group-hover:-translate-y-2
              "
                style={{
                  borderRadius: "58% 42% 32% 68% / 38% 44% 56% 62%",
                }}
              >
                <img
                  src={image}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  alt="James Carter professional wedding and portrait photographer"
                  className="
                  w-full h-full
                  object-cover
                  transition-transform duration-700
                  group-hover:scale-105
                "
                />

                <div className="absolute inset-0 bg-black/5 dark:bg-black/20" />
              </motion.div>

              {/* FLOAT CARD */}
              <div
                className="
                absolute
                -bottom-5
                left-1/2 -translate-x-1/2
                md:left-auto md:right-0 md:translate-x-0
                bg-white dark:bg-[#101b17]
                border border-emerald-100 dark:border-white/10
                px-5 py-3
                rounded-2xl
                shadow-lg
                backdrop-blur-xl
              "
              >
                <p className="text-xs text-emerald-600 dark:text-emerald-300">
                  Available for bookings
                </p>

                <p className="text-sm font-semibold text-emerald-900 dark:text-white">
                  Wedding & Lifestyle
                </p>
              </div>
            </div>
          </motion.div>

          {/* TEXT SECTION */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            {/* SMALL LABEL */}
            <div
              className="
              inline-flex items-center gap-2
              px-4 py-2
              rounded-full
              border border-emerald-200
              dark:border-white/10
              bg-white/80 dark:bg-white/5
              mb-6
            "
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>

              <p className="text-xs sm:text-sm text-emerald-700 dark:text-emerald-300 font-medium">
                Professional Photographer
              </p>
            </div>

            {/* MAIN SEO HEADING */}
            <h1
              className="
              font-bold leading-[1.05]
              text-[2.5rem]
              sm:text-[3.4rem]
              md:text-[4.3rem]
              lg:text-[5rem]
              xl:text-[5.5rem]
              text-emerald-950 dark:text-white
              tracking-[-2px]
            "
            >
              Capturing
              <br />
              Real Moments
              <span className="block text-emerald-500 mt-1">Naturally.</span>
            </h1>

            {/* DESCRIPTION */}
            <p
              className="
              mt-6
              max-w-xl
              mx-auto lg:mx-0
              text-sm sm:text-base md:text-lg
              leading-relaxed
              text-emerald-900/70 dark:text-white/65
            "
            >
              Timeless photography crafted with emotion, storytelling, and
              authenticity — from weddings and portraits to lifestyle sessions
              that feel natural and cinematic.
            </p>

            {/* BUTTONS */}
            <div
              className="
              mt-9
              flex flex-wrap gap-4
              justify-center lg:justify-start
            "
            >
              <Link
                to="portfolio"
                smooth={true}
                duration={500}
                offset={-80}
                className="
                group
                px-7 py-3.5
                rounded-full
                bg-emerald-600
                hover:bg-emerald-700
                text-white
                text-sm md:text-base
                font-medium
                transition-all duration-300
                flex items-center gap-2
                cursor-pointer
                hover:-translate-y-1
              "
              >
                View Portfolio
                <FaArrowRight className="group-hover:translate-x-1 transition" />
              </Link>
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

                    textarea.dispatchEvent(
                      new Event("input", { bubbles: true }),
                    );
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
    cursor-pointer
  "
              >
                Contact Me
              </a>
            </div>

            {/* STATS */}
            <div
              className="
              mt-12
              flex flex-wrap gap-8
              justify-center lg:justify-start
            "
            >
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-emerald-900 dark:text-white">
                  120+
                </h3>

                <p className="text-sm text-emerald-700/70 dark:text-white/60">
                  Projects Done
                </p>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-emerald-900 dark:text-white">
                  5+
                </h3>

                <p className="text-sm text-emerald-700/70 dark:text-white/60">
                  Years Experience
                </p>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-emerald-900 dark:text-white">
                  80+
                </h3>

                <p className="text-sm text-emerald-700/70 dark:text-white/60">
                  Happy Clients
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
