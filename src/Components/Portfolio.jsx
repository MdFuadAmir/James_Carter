// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState } from "react";

import img1 from "../assets/w1.jpg";
import img2 from "../assets/p1.jpg";
import img3 from "../assets/n1.jpg";
import img4 from "../assets/w2.jpg";
import img5 from "../assets/p2.jpg";
import img6 from "../assets/n2.jpg";

const Portfolio = () => {
  const [active, setActive] = useState("all");

  const images = [
    { id: 1, img: img1, category: "wedding" },
    { id: 2, img: img2, category: "portrait" },
    { id: 3, img: img3, category: "nature" },
    { id: 4, img: img4, category: "wedding" },
    { id: 5, img: img5, category: "portrait" },
    { id: 6, img: img6, category: "nature" },
  ];

  const filtered =
    active === "all"
      ? images
      : images.filter((item) => item.category === active);

  const categories = ["all", "wedding", "portrait", "nature"];

  return (
    <section
      id="portfolio"
      className="py-20 bg-linear-to-b from-emerald-50 via-teal-50 to-green-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-900">
            Captured <span className="text-teal-600">Moments</span>
          </h2>

          <p className="text-emerald-700/70 mt-3 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            A collection of real emotions, timeless stories, and visual memories
            — crafted through the lens with passion and precision.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                active === cat
                  ? "bg-linear-to-r from-emerald-500 to-teal-500 text-white"
                  : "border border-emerald-300 text-emerald-700 hover:bg-emerald-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="relative overflow-hidden rounded-xl shadow-md group"
            >
              <img
                src={item.img}
                alt="portfolio"
                className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-500 flex items-end p-4">
                <p className="text-white opacity-0 group-hover:opacity-100 transition">
                  {item.category.toUpperCase()}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
