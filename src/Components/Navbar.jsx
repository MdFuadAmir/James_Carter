// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import Logo from "../Utils/Logo";

const Navbar = () => {
  const [active, setActive] = useState("#home");
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", id: "#home" },
    { name: "Portfolio", id: "#portfolio" },
    { name: "About", id: "#about" },
    { name: "Services", id: "#services" },
    { name: "Contact", id: "#contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-linear-to-r from-emerald-50/90 via-teal-50/80 to-green-50/90 backdrop-blur-xl border-b border-emerald-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO */}
        <Logo />
        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.id}
              onClick={() => setActive(link.id)}
              className="relative text-emerald-700/70 hover:text-emerald-700 transition font-medium"
            >
              {link.name}

              {/* Active underline */}
              {active === link.id && (
                <motion.span
                  layoutId="activeNav"
                  className="absolute left-0 -bottom-1 w-full h-0.5 bg-emerald-500 rounded-full"
                />
              )}
            </a>
          ))}

          {/* CTA */}
          <a
            href="mailto:mdfuadamir@email.com"
            className="px-5 py-2 rounded-full bg-linear-to-r from-emerald-500 to-teal-500 text-white shadow-md hover:scale-105 transition"
          >
            Book Session
          </a>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-emerald-700"
        >
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="md:hidden px-6 pb-6 flex flex-col gap-5 bg-linear-to-b from-emerald-50 to-teal-50"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.id}
                href={link.id}
                onClick={() => {
                  setActive(link.id);
                  setOpen(false);
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className={`text-lg font-medium transition ${
                  active === link.id
                    ? "text-emerald-700"
                    : "text-emerald-600/70"
                }`}
              >
                {link.name}
              </motion.a>
            ))}

            {/* CTA Mobile */}
            <motion.a
              href="mailto:mdfuadamir@email.com"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-2 px-5 py-2 rounded-full bg-linear-to-r from-emerald-500 to-teal-500 text-white w-fit shadow-md"
            >
              Book Session
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
