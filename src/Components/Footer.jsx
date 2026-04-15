import { FiInstagram, FiFacebook, FiTwitter, FiMail } from "react-icons/fi";
import Logo from "../Utils/Logo";

const Footer = () => {
  return (
    <footer className="bg-linear-to-b from-emerald-100/50 via-emerald-50/40 to-teal-50/60 border-t border-emerald-100 py-14">
      <div className="max-w-6xl mx-auto px-6">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* BRAND */}
          <div className="md:col-span-2">
            <Logo />

            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Professional photographer specializing in portraits, weddings, and
              cinematic storytelling. I focus on capturing real emotions with a
              clean and artistic approach.
            </p>
          </div>

          {/* NAV LINKS */}
          <div>
            <h3 className="text-slate-900 font-semibold mb-3">Navigation</h3>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href="#home"
                className="text-slate-600 hover:text-emerald-600 transition"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-slate-600 hover:text-emerald-600 transition"
              >
                About
              </a>
              <a
                href="#services"
                className="text-slate-600 hover:text-emerald-600 transition"
              >
                Services
              </a>
              <a
                href="#contact"
                className="text-slate-600 hover:text-emerald-600 transition"
              >
                Contact
              </a>
            </div>
          </div>

          {/* CONTACT + SOCIAL */}
          <div>
            <h3 className="text-slate-900 font-semibold mb-3">Connect</h3>

            <p className="text-sm text-slate-600">mdfuadamir@email.com</p>

            <div className="flex gap-4 text-lg text-slate-600 mt-4">
              <a className="hover:text-emerald-600 transition">
                <FiInstagram />
              </a>
              <a className="hover:text-emerald-600 transition">
                <FiFacebook />
              </a>
              <a className="hover:text-emerald-600 transition">
                <FiTwitter />
              </a>
              <a
                href="mailto:mdfuadamir@email.com"
                className="hover:text-emerald-600 transition"
              >
                <FiMail />
              </a>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-10 border-t border-slate-200"></div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Md Fuad Amir. All rights reserved.
          </p>

          <p className="text-sm text-slate-500">
            Crafted with <span className="text-emerald-600">passion</span> &
            precision
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
