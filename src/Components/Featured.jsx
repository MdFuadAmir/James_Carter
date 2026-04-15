// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import img1 from "../assets/w3.jpg";
import img2 from "../assets/p3.jpg";
import img3 from "../assets/n3.jpg";

const Featured = () => {
  const projects = [
    {
      img: img1,
      title: "Wedding Story",
      desc: "A beautiful emotional wedding moment captured in natural light.",
    },
    {
      img: img2,
      title: "Portrait Session",
      desc: "Clean and cinematic portrait photography with soft tones.",
    },
    {
      img: img3,
      title: "Nature Escape",
      desc: "Peaceful landscape capturing mood and natural beauty.",
    },
  ];

  return (
    <section className="py-20 bg-linear-to-b from-teal-50 via-emerald-50 to-green-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-900">
            Moments That <span className="text-teal-600">Matter Most</span>
          </h2>

          <p className="text-emerald-700/70 mt-3 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            A handpicked selection of my strongest visual stories — where
            emotion, light, and timing come together perfectly.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden shadow-md"
            >
              {/* image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-5">
                <h3 className="text-white text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="text-white/80 text-sm mt-1">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
