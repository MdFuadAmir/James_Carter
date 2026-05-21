import { FiInstagram, FiFacebook, FiTwitter, FiMail } from "react-icons/fi";

import Logo from "../Utils/Logo";

const Footer = () => {
  return (
    <footer
      className="
        relative overflow-hidden
        bg-linear-to-b
        from-[#f4fbf7]
        via-[#eef7f1]
        to-[#e8f6f0]
        dark:from-[#071a12]
        dark:via-[#081d15]
        dark:to-[#06140f]
        border-t
        border-emerald-200/50
        dark:border-white/10
        pt-16 pb-8
        transition-colors duration-300
      "
    >
      {/* BG GLOW */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-400/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-teal-400/10 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* ========================= */}
        {/* TOP GRID */}
        {/* ========================= */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* BRAND */}
          <div className="md:col-span-2">
            <Logo />

            <p
              className="
                mt-4
                text-sm leading-relaxed
                text-emerald-900/70
                dark:text-white/60
                max-w-md
              "
            >
              Professional photographer specializing in portraits, weddings, and
              cinematic storytelling. Capturing real emotions with timeless
              visuals and artistic direction.
            </p>

            {/* SOCIAL */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="/"
                className="
                  w-11 h-11 rounded-2xl
                  bg-white dark:bg-white/5
                  border border-emerald-200/50 dark:border-white/10
                  flex items-center justify-center
                  text-slate-700 dark:text-white/70
                  hover:text-emerald-600
                  hover:-translate-y-1
                  transition duration-300
                "
              >
                <FiInstagram />
              </a>

              <a
                href="/"
                className="
                  w-11 h-11 rounded-2xl
                  bg-white dark:bg-white/5
                  border border-emerald-200/50 dark:border-white/10
                  flex items-center justify-center
                  text-slate-700 dark:text-white/70
                  hover:text-emerald-600
                  hover:-translate-y-1
                  transition duration-300
                "
              >
                <FiFacebook />
              </a>

              <a
                href="/"
                className="
                  w-11 h-11 rounded-2xl
                  bg-white dark:bg-white/5
                  border border-emerald-200/50 dark:border-white/10
                  flex items-center justify-center
                  text-slate-700 dark:text-white/70
                  hover:text-emerald-600
                  hover:-translate-y-1
                  transition duration-300
                "
              >
                <FiTwitter />
              </a>

              <a
                href="mailto:mdfuadamir@email.com"
                className="
                  w-11 h-11 rounded-2xl
                  bg-white dark:bg-white/5
                  border border-emerald-200/50 dark:border-white/10
                  flex items-center justify-center
                  text-slate-700 dark:text-white/70
                  hover:text-emerald-600
                  hover:-translate-y-1
                  transition duration-300
                "
              >
                <FiMail />
              </a>
            </div>
          </div>

          {/* NAVIGATION */}
          <div>
            <h3 className="text-lg font-semibold text-emerald-950 dark:text-white mb-5">
              Navigation
            </h3>

            <div className="flex flex-col gap-3">
              {[
                "Home",
                "Portfolio",
                "About",
                "Services",
                "Pricing",
                "Contact",
              ].map((item, i) => (
                <a
                  key={i}
                  href={`#${item.toLowerCase()}`}
                  className="
                    text-sm
                    text-emerald-900/70
                    dark:text-white/60
                    hover:text-emerald-600
                    dark:hover:text-emerald-400
                    transition duration-300
                    w-fit
                  "
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-semibold text-emerald-950 dark:text-white mb-5">
              Contact
            </h3>

            <div className="space-y-4">
              <div>
                <p className="text-xs uppercase tracking-wider text-emerald-500 mb-1">
                  Email
                </p>

                <p className="text-sm text-emerald-900/70 dark:text-white/60">
                  mdfuadamir@email.com
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-emerald-500 mb-1">
                  Phone
                </p>

                <p className="text-sm text-emerald-900/70 dark:text-white/60">
                  +880 1705470131
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-emerald-500 mb-1">
                  Location
                </p>

                <p className="text-sm text-emerald-900/70 dark:text-white/60">
                  Kushtia, Bangladesh
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-10 border-t border-emerald-200/50 dark:border-white/10"></div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-emerald-900/60 dark:text-white/50 text-center md:text-left">
            © {new Date().getFullYear()} Md Fuad Amir. All rights reserved.
          </p>

          <p className="text-sm text-emerald-900/60 dark:text-white/50 text-center md:text-right">
            Crafted with{" "}
            <span className="text-emerald-600 dark:text-emerald-400">
              passion
            </span>{" "}
            & precision
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
