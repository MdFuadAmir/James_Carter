import { FiStar } from "react-icons/fi";

const Testimonials = () => {
  const reviews = [
    {
      name: "Sarah Williams",
      role: "Bride",
      text: "James captured our wedding so beautifully. Every emotion felt alive.",
    },
    {
      name: "Michael Brown",
      role: "Model",
      text: "Amazing portrait session! Lighting and editing were perfect.",
    },
    {
      name: "Emily Johnson",
      role: "Event Organizer",
      text: "Very professional and delivered high-quality photos on time.",
    },
    {
      name: "Daniel Smith",
      role: "Groom",
      text: "Incredible storytelling through photography.",
    },
    {
      name: "Olivia Martin",
      role: "Influencer",
      text: "The photos were cinematic and exactly my style.",
    },
    {
      name: "John Carter",
      role: "Business Owner",
      text: "Perfect corporate shoot. Very clean and professional.",
    },
    {
      name: "Sophia Lee",
      role: "Bride",
      text: "Every moment was captured beautifully with emotion.",
    },
    {
      name: "Ethan Walker",
      role: "Client",
      text: "Great experience overall. Smooth communication and delivery.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-24 bg-[#eef7f1] dark:bg-[#071a12] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* SECTION TITLE */}
        <header className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-950 dark:text-white">
            Words From <span className="text-emerald-500">Happy Clients</span>
          </h2>

          <p className="mt-3 text-emerald-800/70 dark:text-white/60 max-w-2xl mx-auto text-sm md:text-base">
            Real experiences from clients who trusted my photography.
          </p>
        </header>

        {/* SCROLL WRAPPER */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto py-6 scroll-smooth snap-x snap-mandatory [&::-webkit-scrollbar]:hidden">
            {reviews.map((item, i) => (
              <article key={i} className="snap-start shrink-0 w-75 md:w-85">
                <div className="h-full p-6 rounded-2xl bg-white/60 dark:bg-white/5 border border-emerald-200/40 dark:border-white/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400 hover:shadow-lg">
                  {/* STARS */}
                  <div
                    className="flex gap-1 text-emerald-500 mb-3"
                    aria-label="5 star rating"
                  >
                    <FiStar />
                    <FiStar />
                    <FiStar />
                    <FiStar />
                    <FiStar />
                  </div>

                  {/* REVIEW TEXT */}
                  <p className="text-emerald-800/70 dark:text-white/70 text-sm leading-relaxed">
                    "{item.text}"
                  </p>

                  {/* AUTHOR */}
                  <div className="mt-5">
                    <h3 className="font-semibold text-emerald-950 dark:text-white">
                      {item.name}
                    </h3>
                    <p className="text-sm text-emerald-600 dark:text-emerald-400">
                      {item.role}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
