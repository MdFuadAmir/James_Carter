// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import DarkMood from "../Utils/DarkMood";
import Logo from "../Utils/Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Services", to: "services" },
    { name: "Portfolio", to: "portfolio" },
    { name: "Contact", to: "contact" },
  ];

  const handleClick = (id) => {
    setActive(id);
    setIsOpen(false);
  };

  return (
    <nav
      className="
      fixed top-0 left-0 w-full z-50
      backdrop-blur-xl
      bg-white/70 dark:bg-[#071510]/80
      border-b border-emerald-200/40 dark:border-emerald-500/10
      transition-all duration-500
    "
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Logo />

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => handleClick(link.to)}
              className="relative cursor-pointer"
            >
              <span
                className={`text-sm font-medium transition ${
                  active === link.to
                    ? "text-emerald-700 dark:text-emerald-300"
                    : "text-emerald-900/80 dark:text-white/80 hover:text-emerald-600 dark:hover:text-emerald-300"
                }`}
              >
                {link.name}
              </span>

              {active === link.to && (
                <motion.span
                  layoutId="active-nav"
                  className="absolute left-0 -bottom-1 h-0.5 w-full rounded-full bg-emerald-500"
                />
              )}
            </Link>
          ))}
        </div>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-3">
          <DarkMood />

          {/* CTA */}
          <a
            href="#contact"
            onClick={() => {
              const textarea = document.querySelector(
                'textarea[name="message"]',
              );
              if (textarea) {
                textarea.value = `Hi James Carter,

I would love to book a professional photography session with you.

I'm interested in capturing beautiful, cinematic moments — whether it's portraits, lifestyle, or a special event. Please let me know your availability, packages, and pricing details.

Looking forward to working with you.`;
                textarea.dispatchEvent(new Event("input", { bubbles: true }));
              }
            }}
            className="hidden md:flex px-5 py-2.5 rounded-full bg-linear-to-r from-emerald-500 to-teal-500 text-white text-sm font-medium cursor-pointer"
          >
            Book Session
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsOpen(true)}
            className="
            md:hidden
            text-xl
            text-emerald-700 dark:text-emerald-300
          "
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* OVERLAY */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="
              fixed inset-0 z-40
              bg-black/40 backdrop-blur-sm
            "
            />

            {/* SIDEBAR */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35 }}
              className="
              fixed top-0 right-0 z-50
              w-[80%] max-w-sm
              h-fit
              bg-white dark:bg-[#071510]
              border-l border-emerald-200/20 dark:border-emerald-500/10
              shadow-2xl
              p-6
              flex flex-col
            "
            >
              {/* HEADER */}
              <div className="flex items-center justify-between mb-10">
                <Logo onClick={() => setIsOpen(false)} />

                <button
                  onClick={() => setIsOpen(false)}
                  className="
                  text-2xl
                  text-emerald-700 dark:text-emerald-300
                "
                >
                  <FaTimes />
                </button>
              </div>

              {/* LINKS */}
              <div className="flex flex-col gap-7">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    onClick={() => handleClick(link.to)}
                    className={`
                    text-lg font-medium cursor-pointer transition
                    ${
                      active === link.to
                        ? "text-emerald-600 dark:text-emerald-300"
                        : "text-emerald-900 dark:text-white/80"
                    }
                  `}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-auto pt-8">
                <a
                  href="#contact"
                  onClick={() => {
                    setIsOpen(false);

                    const textarea = document.querySelector(
                      'textarea[name="message"]',
                    );

                    if (textarea) {
                      textarea.value = `Hi James Carter,

I would love to book a professional photography session with you.

I'm interested in capturing beautiful, cinematic moments — whether it's portraits, lifestyle, or a special event. Please let me know your availability, packages, and pricing details.

Looking forward to working with you.`;

                      textarea.dispatchEvent(
                        new Event("input", { bubbles: true }),
                      );
                    }
                  }}
                  className="block text-center px-5 py-3 rounded-2xl bg-linear-to-r from-emerald-500 to-teal-500 text-white font-medium cursor-pointer"
                >
                  Let’s Work Together
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
