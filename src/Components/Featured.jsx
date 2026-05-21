import img1 from "../assets/p1.webp";
import img2 from "../assets/p2.webp";
import img3 from "../assets/p3.webp";

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
    <section
      id="featured"
      aria-labelledby="featured-heading"
      className="
        py-24 md:py-28
        bg-[#eef7f1] dark:bg-[#071a12]"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* TITLE */}
        <header className="text-center mb-12">
          <h2
            id="featured-heading"
            className="text-4xl md:text-5xl font-bold text-emerald-950 dark:text-white"
          >
            Moments That <span className="text-emerald-500">Matter Most</span>
          </h2>

          <p className="mt-3 text-emerald-900/70 dark:text-white/60 max-w-xl mx-auto text-sm md:text-base">
            A handpicked selection of visual stories captured with emotion.
          </p>
        </header>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((item, i) => (
            <article
              key={i}
              className="
                group relative overflow-hidden
                rounded-2xl
                border border-emerald-200/40 dark:border-white/10
                bg-white/70 dark:bg-white/5
                transition-all duration-300
              "
            >
              {/* IMAGE */}
              <div className="h-80 overflow-hidden">
                <img
                  loading="lazy"
                  src={item.img}
                  alt={`${item.title} photography project`}
                  className="
                    w-full h-full object-cover
                    transition duration-300
                    group-hover:scale-105
                  "
                />
              </div>

              {/* OVERLAY */}
              <div
                className="
                  absolute inset-0
                  bg-black/0 group-hover:bg-black/40
                  transition duration-300
                  flex flex-col justify-end
                  p-5
                "
              >
                <h3
                  className="
                    text-white text-lg font-semibold
                    opacity-0 group-hover:opacity-100
                    transition duration-300
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    text-white/80 text-sm mt-1
                    opacity-0 group-hover:opacity-100
                    transition duration-300
                  "
                >
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
