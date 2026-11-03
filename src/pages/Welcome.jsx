import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Welcome() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    // Background is now pure white. No glow, no gradient.
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-white dark:bg-[#050505] text-black dark:text-white px-6 pt-32 pb-12 transition-colors duration-500">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="z-10 flex flex-col items-center max-w-2xl mx-auto text-center"
      >
        {/* 🔥 BRAND LOGO */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-3 mb-6"
        >
          <h1 className="text-5xl md:text-7xl font-light tracking-wide text-black dark:text-white">
            UNIT
          </h1>
          <div className="bg-black dark:bg-white text-white dark:text-black px-4 py-1.5 md:py-2 flex items-center justify-center">
            <span className="text-4xl md:text-6xl font-medium tracking-tight leading-none">
              27
            </span>
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-gray-500 dark:text-gray-400 text-[10px] md:text-xs tracking-[8px] uppercase font-bold mb-10"
        >
          The Industrial Standard
        </motion.p>

        {/* Welcome Message */}
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight text-black dark:text-white"
        >
          Welcome to <br className="md:hidden" /> our Denim World.
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed mb-12 max-w-lg font-medium"
        >
          Explore our premium denim collection, crafted for those who set the
          standard. Connect with us for bulk orders and inquiries.
        </motion.p>

        {/* 🔥 BUTTONS */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center gap-5 mb-16 w-full justify-center"
        >
          <Link to="/" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-10 py-4 bg-black dark:bg-white text-white dark:text-black text-xs tracking-[3px] font-bold uppercase hover:shadow-[0_0_20px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 rounded-sm"
            >
              Enter Website
            </motion.button>
          </Link>
          <Link to="/contact" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-10 py-4 border-2 border-black dark:border-white text-black dark:text-white text-xs tracking-[3px] font-bold uppercase hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300 rounded-sm"
            >
              Bulk Orders
            </motion.button>
          </Link>
        </motion.div>

        {/* 🔥 SOCIAL & QR SECTION */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row items-center gap-12 md:gap-20 border-t border-gray-200 dark:border-gray-800 pt-12 w-full justify-center"
        >
          {/* Social Icons */}
          <div className="flex flex-col items-center">
            <p className="text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-[3px] mb-6 font-bold">
              Connect With Us
            </p>
            <div className="flex gap-4">
              {[
                {
                  icon: <FaInstagram size={20} />,
                  link: "https://instagram.com",
                },
                {
                  icon: <FaFacebookF size={18} />,
                  link: "https://facebook.com",
                },
                {
                  icon: <FaWhatsapp size={22} />,
                  link: "https://wa.me/919711480708",
                },
                { icon: <FaYoutube size={22} />, link: "https://youtube.com" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -5 }}
                  className="w-12 h-12 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black hover:border-transparent transition-all duration-300 shadow-sm"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* QR Code */}
          <div className="flex flex-col items-center">
            <p className="text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-[3px] mb-6 font-bold">
              Scan Me
            </p>
            <motion.div
              animate={{
                boxShadow: [
                  "0px 0px 0px rgba(0,0,0,0)",
                  "0px 0px 20px rgba(0,0,0,0.1)",
                  "0px 0px 0px rgba(0,0,0,0)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="bg-white p-3 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800"
            >
              <img
                src="/qr.png"
                alt="QR Code"
                className="w-28 h-28 object-contain"
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Welcome;
