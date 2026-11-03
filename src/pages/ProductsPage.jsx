import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

// 👇 Image imports
import baggyFitImg from "../assets/baggy-fit.jpg";
import comfortFitImg from "../assets/comfort-fit.jpg";
import straightFitImg from "../assets/straight-fit.jpg";
import bootcutImg from "../assets/bootcut.jpg";
import superWhiteImg from "../assets/super-white.jpg";
import classicFitImg from "../assets/classic.jpg";

function ProductsPage() {
  const [selected, setSelected] = useState(null);

  const items = [
    {
      name: "Comfort Fit",
      img: comfortFitImg,
      desc: "Easy movement and perfect fit for everyday wear. Premium fabric ensures all-day comfort and durability.",
    },
    {
      name: "Baggy Fit",
      img: baggyFitImg,
      desc: "Oversized, relaxed, and unapologetically bold. The ultimate streetwear essential crafted for distinction.",
    },
    {
      name: "Straight Fit",
      img: straightFitImg,
      desc: "Timeless style. Refined comfort. A classic straight leg that never goes out of style.",
    },
    {
      name: "Bootcut",
      img: bootcutImg,
      desc: "A subtle flare at the hem for a vintage-inspired look. Crafted for those who set the standard.",
    },
    {
      name: "Superwhite Denim",
      img: superWhiteImg,
      desc: "Crisp, clean, and premium. Elevate your everyday style with our signature white denim.",
    },
    {
      name: "Classic Fit",
      img: classicFitImg,
      desc: "The industrial standard. Uncompromising quality and a fit that sets the benchmark.",
    },
  ];

  return (
    <div className="bg-white text-black dark:bg-black dark:text-white min-h-screen pt-32 pb-0 max-w-[1400px] mx-auto">
      {/* 🔥 HEADING SECTION */}
      <div className="px-6 text-center mb-20">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs tracking-[5px] text-gray-500 dark:text-gray-400 font-bold uppercase mb-3"
        >
          The Industrial Standard
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-black tracking-tighter mb-6"
        >
          OUR COLLECTION
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 dark:text-gray-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
        >
          Discover the perfect blend of timeless design and modern comfort.
          Every piece is crafted to deliver durability and effortless style for
          those who set the standard.
        </motion.p>
      </div>

      {/* 🔥 PRODUCTS GRID */}
      <div className="px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelected(item)}
              // Mobile par height auto, desktop par 500px
              className="group relative overflow-hidden rounded-xl bg-gray-50 dark:bg-[#111] border border-gray-200 dark:border-gray-800 cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-auto md:h-[500px]"
            >
              {/* Image Container */}
              <div className="relative w-full flex-grow md:overflow-hidden bg-white dark:bg-black">
                <img
                  src={item.img}
                  alt={item.name}
                  loading="lazy"
                  // object-contain lagaya taaki mobile par poori image dikhe aur cut na ho
                  className="w-full h-auto md:h-full md:absolute md:inset-0 object-contain md:object-cover object-top transition-transform duration-[1.5s] ease-out md:group-hover:scale-110"
                />
              </div>

              {/* 🔥 MOBILE TEXT (Always visible below image) */}
              <div className="p-5 flex justify-between items-center bg-white dark:bg-[#111] border-t border-gray-100 dark:border-gray-800 md:hidden">
                <h2 className="text-lg font-bold text-black dark:text-white">
                  {item.name}
                </h2>
                <span className="text-xs tracking-[1px] font-bold text-gray-500 uppercase">
                  View &rarr;
                </span>
              </div>

              {/* 🔥 DESKTOP TEXT (Hover par slide up hoga) */}
              <div className="hidden md:flex absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex-col justify-end p-8">
                <div className="translate-y-8 group-hover:translate-y-0 transition-all duration-500 ease-out flex flex-col items-start">
                  <h2 className="text-white text-2xl font-bold tracking-wide mb-4">
                    {item.name}
                  </h2>
                  <button className="px-6 py-3 bg-white text-black text-xs tracking-[2px] font-bold uppercase hover:bg-gray-200 transition-colors rounded-md shadow-lg">
                    Know More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🔥 WHOLESALE SECTION */}
      <div className="mt-32 bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-xs tracking-[6px] text-gray-500 dark:text-gray-400 font-bold uppercase mb-4"
          >
            Bulk Orders & Business Inquiries
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black tracking-tighter mb-6"
          >
            PREMIUM DENIM WHOLESALER
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 dark:text-gray-300 text-sm md:text-base max-w-2xl mx-auto mb-10 leading-relaxed font-medium"
          >
            UNIT 27 is a premium denim manufacturer and wholesaler. Exclusively
            crafted for those who set the standard. Contact us for bulk
            requirements and partnership opportunities.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link to="/contact">
              <button className="bg-black text-white dark:bg-white dark:text-black px-10 py-4 text-xs tracking-[3px] font-bold uppercase hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors rounded-md shadow-lg">
                Contact Us
              </button>
            </Link>
            <div className="flex flex-col text-sm text-gray-700 dark:text-gray-300 font-medium">
              <span>📞 +91 9711480708</span>
              <span>📧 unit27jeans@gmail.com</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 🔥 POPUP (Modal) */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white text-black dark:bg-gray-900 dark:text-white p-6 md:p-8 max-w-lg w-full rounded-xl relative shadow-2xl overflow-hidden"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-full text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
              >
                ✕
              </button>

              {/* Image Fix in Popup */}
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg mb-6 overflow-hidden flex items-center justify-center">
                <img
                  src={selected.img}
                  alt={selected.name}
                  className="w-full max-h-[350px] object-contain"
                />
              </div>

              <h2 className="text-2xl font-bold tracking-tight mb-3">
                {selected.name}
              </h2>

              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                {selected.desc}
              </p>

              <p className="text-xs text-gray-500 dark:text-gray-400 mb-6 font-medium uppercase tracking-wider">
                Available for Bulk Orders & Wholesale
              </p>

              <Link
                to="/contact"
                onClick={() => setSelected(null)}
                className="block w-full"
              >
                <button className="w-full py-4 bg-black text-white dark:bg-white dark:text-black text-xs tracking-[3px] font-bold uppercase hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors rounded-md shadow-lg">
                  Contact for Order
                </button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ProductsPage;
