// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FiCamera, FiHeart, FiImage, FiVideo } from "react-icons/fi";

const Services = () => {
  const services = [
    {
      icon: <FiCamera />,
      title: "Portrait Photography",
      desc: "Professional portrait sessions with carefully planned lighting, composition, and natural expressions. Perfect for personal branding, modeling, and social media presence.",
    },
    {
      icon: <FiHeart />,
      title: "Wedding Photography",
      desc: "Full-day wedding coverage capturing real emotions, rituals, candid moments, and cinematic storytelling that preserves your most important day forever.",
    },
    {
      icon: <FiImage />,
      title: "Event Coverage",
      desc: "Corporate events, parties, and special occasions covered with a storytelling approach — ensuring every important moment is documented professionally.",
    },
    {
      icon: <FiVideo />,
      title: "Creative Shoots",
      desc: "Concept-based creative photography for brands, artists, and personal projects with artistic direction, mood planning, and unique visual storytelling.",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-linear-to-b from-teal-50 via-emerald-50 to-green-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-900">
            My <span className="text-teal-600">Photography Services</span>
          </h2>

          <p className="text-emerald-700/70 mt-3 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            I provide high-quality photography services focused on storytelling,
            emotion, and detail. Every session is planned carefully to deliver
            professional results that match your vision.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group p-6 rounded-2xl bg-white/40 backdrop-blur-md border border-emerald-100 shadow-sm hover:shadow-xl transition"
            >
              {/* ICON */}
              <div className="text-3xl text-emerald-600 group-hover:scale-110 transition">
                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="mt-4 text-lg font-semibold text-emerald-900">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="mt-3 text-sm text-emerald-700/70 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* EXTRA TRUST LINE */}
        <div className="text-center mt-12">
          <p className="text-emerald-700/60 text-sm md:text-base">
            ✨ Every project is delivered with professional editing, color
            grading, and attention to detail.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
