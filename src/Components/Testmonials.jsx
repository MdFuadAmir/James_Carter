// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";

const Testimonials = () => {
  const reviews = [
    {
      name: "Sarah Williams",
      role: "Bride",
      text: "James captured our wedding so beautifully. Every emotion, every moment felt alive in the photos. Truly professional work!",
    },
    {
      name: "Michael Brown",
      role: "Model",
      text: "Amazing portrait session! The lighting, direction, and editing were perfect. I felt very comfortable during the shoot.",
    },
    {
      name: "Emily Johnson",
      role: "Event Organizer",
      text: "He covered our corporate event flawlessly. Very punctual, professional, and delivered high-quality photos on time.",
    },
  ];

  return (
    <section
      id="testimonials"
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
            Words From <span className="text-teal-600">Happy Clients</span>
          </h2>

          <p className="text-emerald-700/70 mt-3 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Real experiences shared by clients who trusted my photography to
            capture their most important moments.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-white/40 backdrop-blur-md border border-emerald-100 shadow-sm hover:shadow-xl transition"
            >
              {/* Stars */}

              {/* Stars */}
              <div className="flex gap-1 text-yellow-400 mb-3">
                <FiStar className="fill-yellow-400" />
                <FiStar className="fill-yellow-400" />
                <FiStar className="fill-yellow-400" />
                <FiStar className="fill-yellow-400" />
                <FiStar className="fill-yellow-400" />
              </div>

              {/* TEXT */}
              <p className="text-emerald-800/70 text-sm leading-relaxed">
                "{item.text}"
              </p>

              {/* NAME */}
              <div className="mt-5">
                <h4 className="font-semibold text-emerald-900">{item.name}</h4>
                <p className="text-sm text-emerald-600">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
