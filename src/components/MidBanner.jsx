import { motion } from "framer-motion";

function MidBanner() {
  return (
    <div className="relative w-full h-[420px] mt-24 overflow-hidden">
      
      {/* Background Image */}
      <motion.img
        src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600"
        className="absolute inset-0 w-full h-full object-cover parallax"
        initial={{ scale: 1.2 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 2 }}
      />

      {/* ✅ FIXED OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white/40 dark:from-black/70 dark:via-black/40 dark:to-black/70"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-black dark:text-white px-4">

        {/* Top line */}
        <motion.div
          className="flex items-center gap-4 mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <div className="w-10 h-[1px] bg-black/50 dark:bg-white/50"></div>

          <p className="text-xs tracking-[6px] text-gray-700 dark:text-gray-300">
            WEAR IT ALL DAY
          </p>

          <div className="w-10 h-[1px] bg-black/50 dark:bg-white/50"></div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-5xl tracking-widest font-semibold"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          JEANS FOR ALL SEASONS
        </motion.h2>

        {/* Sub text */}
        <motion.p
          className="mt-4 text-sm text-gray-700 dark:text-gray-300 max-w-md"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Designed for comfort, built for durability, styled for everyday life.
        </motion.p>

      </div>
    </div>
  );
}

export default MidBanner;