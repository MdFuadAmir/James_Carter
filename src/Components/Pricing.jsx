// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "$99",
      desc: "Perfect for small portrait sessions or personal shoots.",
      features: [
        "1 Hour Photoshoot",
        "20 Edited Photos",
        "Basic Color Correction",
        "Online Delivery",
      ],
    },
    {
      name: "Standard",
      price: "$199",
      desc: "Best for couples, events, and professional portraits.",
      features: [
        "3 Hour Photoshoot",
        "60 Edited Photos",
        "Advanced Retouching",
        "Location Guidance",
        "Online + HD Delivery",
      ],
    },
    {
      name: "Premium",
      price: "$349",
      desc: "Full coverage for weddings and large events.",
      features: [
        "Full Day Coverage",
        "150+ Edited Photos",
        "Cinematic Editing",
        "Drone Shots (if available)",
        "Priority Delivery",
      ],
    },
  ];

  return (
    <section
      id="pricing"
      className="py-20 bg-linear-to-b from-emerald-50 via-teal-50 to-green-50"
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
            Pricing <span className="text-teal-600">Plans</span>
          </h2>

          <p className="text-emerald-700/70 mt-3 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Flexible photography packages designed to fit your needs — from
            personal portraits to full wedding coverage.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`p-8 rounded-2xl border shadow-sm hover:shadow-xl transition bg-white/40 backdrop-blur-md ${
                plan.name === "Standard"
                  ? "border-emerald-400 scale-105"
                  : "border-emerald-100"
              }`}
            >
              {/* NAME */}
              <h3 className="text-xl font-semibold text-emerald-900">
                {plan.name}
              </h3>

              {/* PRICE */}
              <p className="text-3xl font-bold text-emerald-700 mt-3">
                {plan.price}
              </p>

              {/* DESC */}
              <p className="text-sm text-emerald-700/70 mt-2">{plan.desc}</p>

              {/* FEATURES */}
              <ul className="mt-5 space-y-3">
                {plan.features.map((f, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-sm text-emerald-800"
                  >
                    <FiCheck className="text-emerald-500" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* BUTTON */}

              <a
                href="#contact"
                className="mt-6 w-full inline-block text-center py-3 rounded-full bg-linear-to-r from-emerald-500 to-teal-500 text-white hover:scale-105 transition"
              >
                Book Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
