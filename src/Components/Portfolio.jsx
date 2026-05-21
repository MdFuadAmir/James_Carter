import img1 from "../assets/w1.webp";
import img2 from "../assets/w2.webp";
import img3 from "../assets/w3.webp";
import img4 from "../assets/n1.webp";
import img5 from "../assets/n2.webp";
import img6 from "../assets/n3.webp";

const Portfolio = () => {
  const images = [
    {
      img: img1,
      title: "Wedding Story",
      desc: "Emotional wedding moment captured in natural light.",
    },
    {
      img: img2,
      title: "Portrait Session",
      desc: "Cinematic portrait photography with soft tones.",
    },
    {
      img: img3,
      title: "Nature Escape",
      desc: "Peaceful landscape with natural mood and depth.",
    },
    {
      img: img4,
      title: "Wedding Moment",
      desc: "Elegant couple photography with storytelling style.",
    },
    {
      img: img5,
      title: "Portrait Art",
      desc: "Minimal portrait with professional lighting setup.",
    },
    {
      img: img6,
      title: "Nature Mood",
      desc: "Serene outdoor scene with cinematic color tone.",
    },
  ];

  return (
    <section
      id="portfolio"
      className="
        py-24 md:py-28
        bg-[#eef7f1] dark:bg-[#071a12]"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* TITLE */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-950 dark:text-white">
            Featured <span className="text-emerald-500">Work</span>
          </h2>

          <p className="mt-3 text-emerald-900/70 dark:text-white/60 max-w-xl mx-auto">
            A cinematic collection of photography moments.
          </p>
        </div>

        {/* ================= MOBILE ================= */}
        <div className="grid grid-cols-2 gap-3 md:hidden">
          {images.map((item, i) => (
            <Card key={i} item={item} className="h-40" />
          ))}
        </div>

        {/* ================= MEDIUM ================= */}
        <div className="hidden md:block lg:hidden space-y-4">
          <Card item={images[0]} className="h-80" />

          <div className="grid grid-cols-2 gap-4">
            <Card item={images[1]} className="h-45" />
            <Card item={images[2]} className="h-45" />
          </div>

          <Card item={images[3]} className="h-80" />

          <div className="grid grid-cols-2 gap-4">
            <Card item={images[4]} className="h-45" />
            <Card item={images[5]} className="h-45" />
          </div>
        </div>

        {/* ================= LARGE ================= */}
        <div className="hidden lg:flex flex-col gap-6">
          <div className="grid grid-cols-3 gap-4">
            <Card item={images[0]} className="col-span-2 h-105" />

            <div className="grid grid-rows-2 gap-4">
              <Card item={images[1]} className="h-50" />
              <Card item={images[2]} className="h-50" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="grid grid-rows-2 gap-4">
              <Card item={images[3]} className="h-50" />
              <Card item={images[4]} className="h-50" />
            </div>

            <Card item={images[5]} className="col-span-2 h-105" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

/* ---------------- CARD (FEATURED STYLE) ---------------- */

const Card = ({ item, className }) => {
  return (
    <div
      className={`
        relative overflow-hidden
        rounded-2xl
        border border-emerald-200/30 dark:border-white/10
        group
        ${className}
      `}
    >
      {/* IMAGE */}
      <img
        src={item.img}
        alt={item.title}
        className="
          w-full h-full object-cover
          transition duration-500 ease-out
          group-hover:scale-110
        "
      />

      {/* OVERLAY */}
      <div
        className="
          absolute inset-0
          bg-black/0 group-hover:bg-black/40
          transition duration-300
          flex flex-col justify-end
          p-4
        "
      >
        <h3
          className="
            text-white text-lg font-semibold
            opacity-0 translate-y-3
            group-hover:opacity-100 group-hover:translate-y-0
            transition duration-300
          "
        >
          {item.title}
        </h3>

        <p
          className="
            text-white/80 text-sm mt-1
            opacity-0 translate-y-3
            group-hover:opacity-100 group-hover:translate-y-0
            transition duration-300
          "
        >
          {item.desc}
        </p>
      </div>
    </div>
  );
};
