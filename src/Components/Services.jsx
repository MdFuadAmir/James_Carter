// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FiCamera, FiHeart, FiImage, FiVideo } from "react-icons/fi";

const Services = () => {
  const services = [
    {
      icon: <FiCamera />,
      title: "Portrait Photography",
      desc: "Professional portrait sessions with carefully planned lighting, composition, and natural expressions.",
    },
    {
      icon: <FiHeart />,
      title: "Wedding Photography",
      desc: "Full-day wedding coverage capturing real emotions and cinematic storytelling.",
    },
    {
      icon: <FiImage />,
      title: "Event Coverage",
      desc: "Corporate events and special occasions documented professionally.",
    },
    {
      icon: <FiVideo />,
      title: "Creative Shoots",
      desc: "Concept-based creative photography with artistic direction and mood planning.",
    },
  ];

  return (
    <section
      id="services"
      className="
        py-24
        bg-[#eef7f1] dark:bg-[#071a12]
        transition-colors duration-300
      "
      aria-label="Photography services section"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* SECTION TITLE */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          {/* H2 = section level heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-950 dark:text-white">
            My <span className="text-emerald-500">Photography Services</span>
          </h2>

          <p className="text-emerald-800/70 dark:text-white/60 mt-3 max-w-2xl mx-auto text-sm md:text-base">
            I provide high-quality photography services focused on storytelling,
            emotion, and detail.
          </p>
        </motion.header>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.15,
                ease: "easeOut",
              }}
              className="
                p-6 rounded-2xl
                bg-white/60 dark:bg-white/5
                backdrop-blur-md
                border border-emerald-200/40 dark:border-white/10
                shadow-sm hover:shadow-xl hover:shadow-white/5
                transition-all duration-300
              "
            >
              {/* ICON */}
              <div
                className="text-3xl text-emerald-600 dark:text-emerald-400"
                aria-hidden="true"
              >
                {item.icon}
              </div>

              {/* H3 = card title */}
              <h3 className="mt-4 text-lg font-semibold text-emerald-950 dark:text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-sm text-emerald-800/70 dark:text-white/60 leading-relaxed">
                {item.desc}
              </p>
            </motion.article>
          ))}
        </div>

        {/* FOOTER LINE */}
        <footer className="text-center mt-14">
          <p className="text-emerald-700/60 dark:text-white/50 text-sm md:text-base">
            ✨ Every project is delivered with professional editing and
            attention to detail.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Services;
