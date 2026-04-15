// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      toast.success("Message sent successfully 🎉");
      reset();
    } catch {
      toast.error("Failed to send message ❌");
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-linear-to-b from-slate-50 via-emerald-50/40 to-teal-50/60"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-900">
            Let’s <span className="text-teal-600">Connect</span>
          </h2>

          <p className="text-emerald-700/70 mt-3 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Have a project in mind? Feel free to reach out — I’ll respond as
            soon as possible and help you bring your vision to life.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* LEFT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="p-5 rounded-2xl bg-linear-to-br from-emerald-50/60 to-white/60 backdrop-blur-md border border-emerald-200 shadow-sm hover:shadow-md transition">
              <FiMail className="text-emerald-600 text-xl" />
              <h3 className="text-emerald-900 font-semibold mt-2">Email</h3>
              <p className="text-emerald-700/70 text-sm">
                mdfuadamir@email.com
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-linear-to-br from-emerald-50/60 to-white/60 backdrop-blur-md border border-emerald-200 shadow-sm hover:shadow-md transition">
              <FiPhone className="text-emerald-600 text-xl" />
              <h3 className="text-emerald-900 font-semibold mt-2">Phone</h3>
              <p className="text-emerald-700/70 text-sm">+880 1705470131</p>
            </div>

            <div className="p-5 rounded-2xl bg-linear-to-br from-emerald-50/60 to-white/60 backdrop-blur-md border border-emerald-200 shadow-sm hover:shadow-md transition">
              <FiMapPin className="text-emerald-600 text-xl" />
              <h3 className="text-emerald-900 font-semibold mt-2">Location</h3>
              <p className="text-emerald-700/70 text-sm">Kushtia, Bangladesh</p>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="p-8 rounded-2xl bg-linear-to-b from-white/70 to-emerald-50/40 backdrop-blur-md border border-emerald-200 shadow-lg space-y-5"
          >
            <input
              {...register("name", { required: true })}
              placeholder="Your Name"
              className="w-full p-3 rounded-lg border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />

            <input
              {...register("email", { required: true })}
              placeholder="Your Email"
              className="w-full p-3 rounded-lg border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />

            <textarea
              {...register("message", { required: true })}
              rows="6"
              placeholder="Your Message"
              className="w-full p-3 rounded-lg border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-full bg-linear-to-r from-emerald-500 to-teal-500 text-white hover:scale-105 transition"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>

        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </section>
  );
};

export default Contact;
