import { motion } from "framer-motion";
// 👇 Apni images import karo
import rawDenimImg from "../assets/raw-denim.jpg";
import classicFitImg from "../assets/classic-fit.jpg"; // 👈 Naam fix kiya
import streetWearImg from "../assets/street-wear.jpg";

function Products() {
  const items = [
    {
      name: "RAW DENIM",
      img: rawDenimImg,
    },
    {
      name: "CLASSIC FIT",
      img: classicFitImg, // 👈 Yeh wali image use hogi
    },
    {
      name: "STREET WEAR",
      img: streetWearImg,
    },
  ];

  return (
    <div
      id="products"
      className="bg-white text-black dark:bg-black dark:text-white py-32 px-6 md:px-12 max-w-[1400px] mx-auto"
    >
      {/* Heading */}
      <div className="flex flex-col items-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-xs tracking-[5px] text-gray-500 dark:text-gray-400 font-bold uppercase mb-2"
        >
          Shop the look
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold tracking-tight text-center"
        >
          THE COLLECTION
        </motion.h2>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
            className="group relative h-[500px] overflow-hidden rounded-md cursor-pointer"
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-full object-cover object-center transition-transform duration-[1.5s] ease-out group-hover:scale-110"
            />

            {/* DARK GRADIENT OVERLAY (Hover par niche se aayega) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* TEXT (Hover par niche se slide hoga) */}
            <div className="absolute bottom-0 left-0 w-full p-8 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
              <h3 className="text-white text-xl md:text-2xl font-bold tracking-[2px] mb-2">
                {item.name}
              </h3>
              <p className="text-gray-300 text-xs md:text-sm tracking-[1px] uppercase">
                Explore Collection &rarr;
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Products;
