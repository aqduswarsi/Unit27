import { useState } from "react";
import { motion } from "framer-motion";

function ProductsPage() {
  const [selected, setSelected] = useState(null);

  const items = [
    {
      name: "RAW DENIM",
      img: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=800",
      desc: "Premium raw denim crafted for durability and strength."
    },
    {
      name: "SLIM FIT",
      img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=800",
      desc: "Slim fit jeans with stretch for all-day comfort."
    },
    {
      name: "STREET WEAR",
      img: "https://images.unsplash.com/photo-1516822003754-cca485356ecb?q=80&w=800",
      desc: "Street-ready denim with bold urban aesthetics."
    },
    {
      name: "DARK WASH",
      img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800",
      desc: "Deep-toned denim with a refined finish."
    },
    {
      name: "CLASSIC BLUE",
      img: "https://images.unsplash.com/photo-1475189778702-5ec9941484ae?q=80&w=800",
      desc: "Timeless blue jeans with modern fit."
    },
    {
      name: "MODERN FIT",
      img: "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=800",
      desc: "Engineered for comfort and movement."
    }
  ];

  return (
    <div className="bg-white text-black dark:bg-black dark:text-white min-h-screen pt-32 px-6 pb-28">

      {/* Heading */}
      <motion.h1
        className="text-4xl md:text-5xl tracking-widest mb-14 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        OUR COLLECTION
      </motion.h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

        {items.map((item, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] transition duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={item.img}
              alt={item.name}
              loading="lazy"
              className="w-full h-[240px] object-cover mb-4 rounded"
            />

            <h2 className="text-lg tracking-wide font-medium">
              {item.name}
            </h2>

            <button
              onClick={() => setSelected(item)}
              className="mt-4 px-4 py-2 border border-black dark:border-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition duration-300 text-sm"
            >
              KNOW MORE
            </button>
          </motion.div>
        ))}

      </div>

      {/* Popup */}
      {selected && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">

          <motion.div
            className="bg-white text-black dark:bg-gray-900 dark:text-white p-6 max-w-md w-full rounded-xl relative shadow-2xl"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-2 right-3 text-xl"
            >
              ✕
            </button>

            <img
              src={selected.img}
              alt={selected.name}
              className="w-full h-[240px] object-cover mb-4 rounded"
            />

            <h2 className="text-xl mb-2 font-semibold">
              {selected.name}
            </h2>

            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {selected.desc}
            </p>
          </motion.div>

        </div>
      )}

    </div>
  );
}

export default ProductsPage;