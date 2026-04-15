// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Process = () => {
  const steps = [
    {
      num: "01",
      title: "Consultation & Understanding",
      desc: "We start with a detailed conversation about your vision, purpose, preferred style, mood, and expectations. This helps me understand exactly what story you want to tell through photography.",
    },
    {
      num: "02",
      title: "Creative Planning & Concept",
      desc: "I carefully plan the shoot including location selection, lighting style, mood board, posing ideas, and visual direction to ensure everything aligns with your concept.",
    },
    {
      num: "03",
      title: "Professional Photoshoot",
      desc: "On the shoot day, I focus on capturing natural emotions, authentic expressions, and cinematic compositions using professional equipment and creative direction.",
    },
    {
      num: "04",
      title: "Editing & Final Delivery",
      desc: "Every selected photo goes through professional editing, color grading, and fine retouching. Final high-resolution images are delivered within the promised time.",
    },
  ];

  return (
    <section
      id="process"
      className="py-20 bg-linear-to-b from-teal-50 via-emerald-50 to-green-50"
    >
      <div className="max-w-4xl mx-auto px-6">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-900">
            How I <span className="text-teal-600">Work</span>
          </h2>

          <p className="text-emerald-700/70 mt-3 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            A transparent and well-structured workflow designed to ensure creativity, clear communication, and high-quality photography results that match your expectations.
          </p>
        </motion.div>

        {/* TIMELINE */}
        <div className="relative border-l-2 border-emerald-200 pl-6 space-y-12">

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative"
            >

              {/* Circle */}
              <div className="absolute -left-8.5 top-1 w-4 h-4 bg-emerald-500 rounded-full shadow-md"></div>

              {/* Content */}
              <div>
                <span className="text-sm font-semibold text-emerald-500">
                  STEP {step.num}
                </span>

                <h3 className="text-xl font-semibold text-emerald-900 mt-1">
                  {step.title}
                </h3>

                <p className="text-emerald-700/70 mt-3 text-sm md:text-base leading-relaxed">
                  {step.desc}
                </p>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Process;