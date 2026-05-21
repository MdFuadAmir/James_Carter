// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import { FaSpinner } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SITE_NAME = "James Carter";
const SUB_TITLE = "Professional Photography Booking & Client Inquiry";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (loading) return;

    try {
      setLoading(true);
      toast.dismiss();

      await axios.post("https://compact-server.vercel.app/send-email", {
        ...data,
        siteName: SITE_NAME,
        subtitle: SUB_TITLE,
      });

      toast.success("Message sent successfully 🎉", {
        autoClose: 3000,
      });

      reset();
    } catch {
      toast.dismiss();

      toast.error("Failed to send message ❌", {
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    { icon: <FiMail />, title: "Email Address", value: "mdfuadamir@gmail.com" },
    { icon: <FiPhone />, title: "Phone Number", value: "+880 1705470131" },
    { icon: <FiMapPin />, title: "Location", value: "Kushtia, Bangladesh" },
  ];

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="
        py-24
        bg-[#eef7f1]
        dark:bg-[#071a12]
        relative
        overflow-hidden
        transition-colors duration-300
      "
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-emerald-400/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal-400/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* ========================= */}
        {/* SECTION HEADER (SEO FIX) */}
        {/* ========================= */}
        <header className="text-center mb-14">
          <p className="text-emerald-500 font-medium tracking-[3px] uppercase text-sm mb-3">
            Contact Photographer
          </p>

          <h2
            id="contact-title"
            className="text-3xl md:text-5xl font-bold text-emerald-950 dark:text-white"
          >
            Let’s Create Something{" "}
            <span className="text-emerald-500">Beautiful</span>
          </h2>

          <p className="mt-4 text-sm md:text-base leading-relaxed text-emerald-900/70 dark:text-white/60 max-w-2xl mx-auto">
            Whether it’s a wedding, portrait, or creative photography session —
            let’s discuss your vision and turn your moments into timeless
            memories.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* LEFT SIDE */}
          <div className="space-y-4">
            {contactInfo.map((item, i) => (
              <article
                key={i}
                className="
                  p-5 rounded-3xl
                  bg-white/70 dark:bg-white/5
                  backdrop-blur-xl
                  border border-emerald-200/50 dark:border-white/10 hover:scale-105 duration-300
                "
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 text-xl">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-emerald-950 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-emerald-900/70 dark:text-white/60">
                      {item.value}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* FORM */}
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="
              p-7 md:p-8
              rounded-4xl
              bg-white/70 dark:bg-white/5
              backdrop-blur-xl
              border border-emerald-200/50 dark:border-white/10
            "
            aria-label="Contact form"
          >
            {/* NAME */}
            <div>
              <input
                type="text"
                placeholder="Your Name"
                {...register("name", { required: "Name is required" })}
                className="w-full px-5 py-4 rounded-2xl bg-white dark:bg-[#0d2219] border border-emerald-200 dark:border-white/10 text-emerald-950 dark:text-white"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* EMAIL */}
            <div className="mt-4">
              <input
                type="email"
                placeholder="Your Email"
                {...register("email", {
                  required: "Email is required",
                })}
                className="w-full px-5 py-4 rounded-2xl bg-white dark:bg-[#0d2219] border border-emerald-200 dark:border-white/10 text-emerald-950 dark:text-white"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* MESSAGE */}
            <div className="mt-4">
              <textarea
                rows="8"
                placeholder="Write your message..."
                {...register("message", { required: "Message is required" })}
                className="w-full px-5 py-4 rounded-2xl resize-none bg-white dark:bg-[#0d2219] border border-emerald-200 dark:border-white/10 text-emerald-950 dark:text-white"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 mt-6 rounded-2xl bg-linear-to-r from-emerald-500 to-teal-500 text-white flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <FaSpinner className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message <FiSend />
                </>
              )}
            </button>
          </motion.form>
        </div>

        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </section>
  );
};

export default Contact;
