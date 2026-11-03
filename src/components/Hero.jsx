import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero.png";

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div
      id="home"
      className="relative h-screen min-h-[600px] w-full bg-white dark:bg-black flex items-center overflow-hidden pt-20"
    >
      {/* BACKGROUND IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0 flex justify-end"
      >
        <img
          src={heroImage}
          alt="UNIT 27 White Denim"
          className="w-full h-full object-cover object-center md:object-right"
        />
      </motion.div>

      {/* TEXT CONTENT - Left Side */}
      <div className="relative z-10 w-full pl-4 md:pl-8 lg:pl-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center items-start max-w-[550px]"
        >
          {/* LOGO STYLE HEADING */}
          <motion.div
            variants={itemVariants}
            className="mb-8 flex flex-col mt-4"
          >
            {/* UNIT 27 (Size chhota kiya aur height stretch hataya) */}
            <div className="flex items-center gap-[6px] md:gap-[8px] mb-4">
              <h1 className="text-5xl md:text-7xl font-semibold text-black tracking-[-0.04em] leading-none">
                UNIT
              </h1>

              {/* 27 ka black box */}
              <div className="bg-black text-white px-2 md:px-3 py-1 md:py-1.5 flex items-center justify-center">
                <span className="text-4xl md:text-6xl font-semibold tracking-[-0.02em] leading-none">
                  27
                </span>
              </div>
            </div>

            {/* JEANS INDUSTRY with lines */}
            <div className="flex items-center gap-3 md:gap-4 w-full max-w-[350px] ml-1">
              <div className="h-[1px] bg-gray-500 w-12 md:w-16"></div>
              <h2 className="text-[10px] md:text-[11px] text-gray-600 font-bold tracking-[0.4em] uppercase">
                JEANS INDUSTRY
              </h2>
              <div className="h-[1px] bg-gray-500 flex-grow"></div>
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-gray-900 text-sm md:text-base leading-relaxed mb-8 font-medium max-w-[450px]"
          >
            Timeless style. Refined comfort. Crafted for those who set the
            standard.
          </motion.p>

          {/* Button */}
          <motion.div variants={itemVariants} className="mb-12">
            <Link to="/products">
              <button className="group flex items-center gap-4 bg-black text-white px-8 py-4 text-xs tracking-[2px] font-bold hover:bg-gray-800 transition-all duration-300">
                EXPLORE COLLECTION
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </button>
            </Link>
          </motion.div>

          {/* Bottom Features */}
          <motion.div
            variants={itemVariants}
            className="flex gap-8 pt-6 border-t border-gray-300 w-full max-w-[450px]"
          >
            <div className="flex flex-col items-start gap-1">
              <span className="text-lg">🧵</span>
              <span className="text-[10px] text-gray-800 font-bold tracking-widest uppercase">
                Premium
                <br />
                Fabric
              </span>
            </div>
            <div className="flex flex-col items-start gap-1">
              <span className="text-lg">✨</span>
              <span className="text-[10px] text-gray-800 font-bold tracking-widest uppercase">
                Durable
                <br />
                Stitching
              </span>
            </div>
            <div className="flex flex-col items-start gap-1">
              <span className="text-lg">🛡️</span>
              <span className="text-[10px] text-gray-800 font-bold tracking-widest uppercase">
                Long
                <br />
                Lasting
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
