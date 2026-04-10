import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import logoDark from "../assets/logo-dark.png";

function Hero() {
  const [isDark, setIsDark] = useState(false);

  // 🔥 detect dark mode properly
  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    checkTheme();

    // observe class change (important for toggle)
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center bg-white dark:bg-black text-black dark:text-white px-4 pt-24"
    >
      {/* Logo */}
      <motion.img
        src={isDark ? logoDark : logo}
        alt="logo"
        className="h-20 md:h-24 mb-6 opacity-90 transition duration-300"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      />

      {/* Brand Name */}
      <motion.h1
        className="text-4xl md:text-7xl font-bold tracking-[10px] leading-tight"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        UNIT{" "}
        <span className="bg-black text-white dark:bg-white dark:text-black px-5 py-1 tracking-[4px]">
          27
        </span>
      </motion.h1>

      {/* 🔥 JEANS INDUSTRY WITH PREMIUM LINES */}
      <motion.div
        className="mt-6 flex items-center justify-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="w-14 h-[1.5px] bg-gray-700 dark:bg-gray-400 opacity-70"></div>

        <p className="text-xs md:text-sm tracking-[6px] text-gray-600 dark:text-gray-300">
          JEANS INDUSTRY
        </p>

        <div className="w-14 h-[1.5px] bg-gray-700 dark:bg-gray-400 opacity-70"></div>
      </motion.div>

      {/* Tagline */}
      <motion.p
        className="mt-6 text-sm md:text-lg tracking-[4px] text-gray-700 dark:text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        THE INDUSTRIAL STANDARD
      </motion.p>

      {/* CTA */}
      <motion.button
        className="mt-10 px-10 py-3 border border-black dark:border-white text-sm tracking-[4px] text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition duration-300 hover:scale-[1.03]"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        EXPLORE COLLECTION
      </motion.button>
    </div>
  );
}

export default Hero;
