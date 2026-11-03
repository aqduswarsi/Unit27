import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import bannerImage from "../assets/banner.jpg";

function MidBanner() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scaleImage = useTransform(scrollYProgress, [0, 1], [1.02, 1]);

  return (
    <div
      ref={ref}
      className="relative w-full h-[500px] md:h-[650px] overflow-hidden flex items-center bg-black"
    >
      {/* 🔥 BACKGROUND IMAGE */}
      <motion.div
        style={{ scale: scaleImage }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src={bannerImage}
          alt="Unit 27 Classic Fit"
          className="w-full h-full object-cover object-right md:object-center"
        />

        {/* 🔥 BLACK GRADIENT OVERLAY (Left side dark) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent w-full md:w-[65%]"></div>
      </motion.div>

      {/* 🔥 TEXT CONTENT (Left Side) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 flex flex-col justify-center h-full">
        <div className="max-w-[400px] md:max-w-[450px]">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-300 text-xs md:text-sm tracking-[6px] font-bold uppercase mb-4"
          >
            THE CLASSIC COLLECTION
          </motion.p>

          {/* Heading Mask Reveal */}
          <div className="overflow-hidden mb-6">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-white text-5xl md:text-7xl font-black tracking-tighter leading-[1.1]"
            >
              Timeless <br />
              Appeal.
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-gray-300 text-sm md:text-base leading-relaxed"
          >
            Discover the perfect blend of comfort and heritage with our premium
            denim. Crafted for those who set the standard.
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default MidBanner;
