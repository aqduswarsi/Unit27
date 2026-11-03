import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaCheckCircle,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

function ContactPage() {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const name = form.current[0].value.trim();
    const phone = form.current[1].value.trim();
    const email = form.current[2].value.trim();
    const inquiry = form.current[3].value.trim();

    if (!name || !phone || !email || !inquiry) {
      setError("Please fill all fields");
      setLoading(false);
      return;
    }

    if (!email.includes("@")) {
      setError("Enter a valid email");
      setLoading(false);
      return;
    }

    emailjs
      .sendForm(
        "service_i2xwiex",
        "template_zfb4e03",
        form.current,
        "6kjqPS9KtlomLI_gZ",
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          setLoading(false);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setError("Something went wrong. Please try again.");
          setLoading(false);
        },
      );
  };

  return (
    <div className="bg-white dark:bg-[#0a0a0a] text-black dark:text-white min-h-screen pt-32 px-6 pb-20 overflow-hidden transition-colors duration-300">
      {/* 🔥 SUCCESS POPUP (Modal) */}
      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4"
            onClick={() => setSuccess(false)} // Click outside to close
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()} // Prevent close on clicking inside
              className="bg-white dark:bg-[#151515] text-black dark:text-white p-10 max-w-md w-full rounded-2xl shadow-2xl relative text-center"
            >
              {/* Green Check Icon */}
              <div className="mx-auto w-20 h-20 bg-green-50 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6">
                <FaCheckCircle className="text-green-500 text-5xl" />
              </div>

              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
                Inquiry Sent!
              </h2>

              <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base mb-8 leading-relaxed">
                Thank you for reaching out. Our team has received your message
                and will get back to you shortly.
              </p>

              <button
                onClick={() => setSuccess(false)}
                className="w-full py-4 bg-black dark:bg-white text-white dark:text-black text-xs tracking-[3px] font-bold uppercase hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors rounded-md shadow-lg"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-6xl mx-auto">
        {/* 🔥 HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-xs tracking-[6px] text-gray-500 dark:text-gray-400 font-bold uppercase mb-4">
            Get in touch
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-widest text-gray-900 dark:text-white mb-6">
            CONTACT
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base max-w-xl mx-auto">
            Let's build something strong together. Reach out for business
            inquiries, bulk orders, or collaborations.
          </p>
        </motion.div>

        {/* 🔥 CONTENT GRID */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* LEFT SIDE: INFO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-6 tracking-tight">
              CONTACT INFORMATION
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-10 leading-relaxed text-sm md:text-base">
              UNIT 27 is a premium denim manufacturer and wholesaler. Our team
              is ready to assist you with your requirements.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 rounded-full flex items-center justify-center shadow-sm">
                  <FaEnvelope className="text-gray-700 dark:text-gray-300" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider mb-1">
                    Email Us
                  </p>
                  <a
                    href="mailto:unit27@gmail.com"
                    className="text-lg font-medium hover:text-gray-600 dark:hover:text-gray-300 transition"
                  >
                    unit27@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 rounded-full flex items-center justify-center shadow-sm">
                  <FaPhoneAlt className="text-gray-700 dark:text-gray-300" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider mb-1">
                    Call Us
                  </p>
                  <a
                    href="tel:+919711480708"
                    className="text-lg font-medium hover:text-gray-600 dark:hover:text-gray-300 transition"
                  >
                    +91 9711480708
                  </a>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/919711480708"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 text-xs tracking-[2px] font-bold uppercase rounded-sm shadow-lg"
            >
              <FaWhatsapp size={18} />
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* RIGHT SIDE: FORM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white dark:bg-[#151515] p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800"
          >
            <h2 className="text-xl font-bold mb-8 tracking-tight uppercase">
              Send Us An Inquiry
            </h2>

            {error && (
              <div className="mb-6 text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/30 border border-red-100 dark:border-red-900/50 px-4 py-3 rounded text-sm font-medium">
                {error}
              </div>
            )}

            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="John Doe"
                  className="w-full p-4 bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 rounded-md focus:outline-none focus:border-black dark:focus:border-white focus:bg-white dark:focus:bg-[#1a1a1a] transition-colors text-sm text-black dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="user_phone"
                  placeholder="+91 9876543210"
                  className="w-full p-4 bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 rounded-md focus:outline-none focus:border-black dark:focus:border-white focus:bg-white dark:focus:bg-[#1a1a1a] transition-colors text-sm text-black dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="john@example.com"
                  className="w-full p-4 bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 rounded-md focus:outline-none focus:border-black dark:focus:border-white focus:bg-white dark:focus:bg-[#1a1a1a] transition-colors text-sm text-black dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                  What is your inquiry about?
                </label>
                <textarea
                  name="message"
                  placeholder="Bulk order, collaboration, etc."
                  rows="4"
                  className="w-full p-4 bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 rounded-md focus:outline-none focus:border-black dark:focus:border-white focus:bg-white dark:focus:bg-[#1a1a1a] transition-colors text-sm resize-none text-black dark:text-white"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-black dark:bg-white text-white dark:text-black text-xs tracking-[3px] font-bold uppercase hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors rounded-md shadow-lg mt-4 disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Inquiry"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
