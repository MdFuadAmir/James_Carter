// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FiCheck, FiStar } from "react-icons/fi";

const Pricing = () => {
  const plans = [
    {
      name: "Essential Portrait",
      price: "$99",
      desc: "Perfect for personal portraits and simple creative sessions.",
      popular: false,
      features: [
        "1 Hour Professional Shoot",
        "20 High-Resolution Edited Photos",
        "Basic Color Correction",
        "Online Gallery Delivery",
        "Outdoor / Studio Setup",
      ],
    },
    {
      name: "Signature Experience",
      price: "$199",
      desc: "Ideal for couples, lifestyle shoots, and small events.",
      popular: true,
      features: [
        "3 Hour Guided Photoshoot",
        "60+ Professionally Edited Photos",
        "Advanced Skin Retouching",
        "Creative Direction & Posing Help",
        "Multiple Location Options",
        "Fast Delivery (Priority Queue)",
      ],
    },
    {
      name: "Cinematic Coverage",
      price: "$349",
      desc: "Full-scale storytelling for weddings and large events.",
      popular: false,
      features: [
        "Full Day Coverage",
        "150+ Cinematic Edited Photos",
        "Professional Color Grading",
        "Drone / Wide Angle Shots (if available)",
        "Event Storytelling Sequence",
        "Express Delivery Option",
      ],
    },
  ];

  const setContactMessage = (message) => {
    const textarea = document.querySelector('textarea[name="message"]');

    if (textarea) {
      textarea.value = message;

      textarea.dispatchEvent(new Event("input", { bubbles: true }));
    }

    // scroll to contact
    const contact = document.getElementById("contact");
    if (contact) {
      contact.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="pricing"
      className="
        py-24
        bg-[#eef7f1] dark:bg-[#071a12]
        transition-colors duration-300
      "
      aria-label="Photography pricing packages section"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* SECTION HEADER */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          {/* H2 = section title */}
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-950 dark:text-white">
            Photography <span className="text-emerald-500">Packages</span>
          </h2>

          <p className="text-emerald-800/70 dark:text-white/60 mt-3 max-w-2xl mx-auto text-sm md:text-base">
            Flexible packages designed to match your story — from portraits to
            full cinematic coverage.
          </p>
        </motion.header>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8">
          {plans.map((plan, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
              className={`
                relative p-8 rounded-2xl
                bg-white/60 dark:bg-white/5
                backdrop-blur-md
                border transition-all duration-300
                hover:shadow-xl hover:-translate-y-1

                ${
                  plan.popular
                    ? "border-emerald-500 scale-[1.03]"
                    : "border-emerald-200/40 dark:border-white/10"
                }
              `}
            >
              {/* BADGE */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 px-4 py-1 rounded-full bg-emerald-500 text-white text-xs font-medium shadow-md">
                    <FiStar aria-hidden="true" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* PLAN NAME = H3 */}
              <h3 className="text-xl font-semibold text-emerald-950 dark:text-white">
                {plan.name}
              </h3>

              {/* PRICE */}
              <p className="text-3xl font-bold text-emerald-600 mt-3">
                {plan.price}
              </p>

              <p className="text-sm text-emerald-800/70 dark:text-white/60 mt-2">
                {plan.desc}
              </p>

              {/* FEATURES LIST */}
              <ul className="mt-6 space-y-3">
                {plan.features.map((f, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-sm text-emerald-900 dark:text-white/80"
                  >
                    <FiCheck className="text-emerald-500" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              {/* <a
                href="#contact"
                className="
                  mt-8 w-full inline-block text-center
                  py-3 rounded-full
                  bg-emerald-600 hover:bg-emerald-700
                  text-white font-medium
                  transition-all duration-300
                "
              >
                Book Session
              </a> */}
              <a
                href="#contact"
                onClick={() => {
                  const message = `Hi James Carter,

I am interested in your "${plan.name}" package.

📸 Package Details:
- Price: ${plan.price}
- Description: ${plan.desc}

✨ Included Features:
${plan.features.map((f) => `- ${f}`).join("\n")}

I would like to book this package. Please share availability and next steps.

Looking forward to your response.`;

                  setContactMessage(message);
                }}
                className="
    mt-8 w-full inline-block text-center
    py-3 rounded-full
    bg-emerald-600 hover:bg-emerald-700
    text-white font-medium
    transition-all duration-300
    cursor-pointer
  "
              >
                Book Session
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
