import { motion } from "framer-motion";

function Products() {
  const items = [
    {
      name: "RAW DENIM",
      img: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=800"
    },
    {
      name: "SLIM FIT",
      img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=800"
    },
    {
      name: "STREET WEAR",
      img: "https://images.unsplash.com/photo-1516822003754-cca485356ecb?q=80&w=800"
    }
  ];

  return (
    <div id="products" className="bg-white text-black dark:bg-black dark:text-white py-24 px-6">

      {/* Heading */}
      <h2 className="text-4xl text-center tracking-[10px] mb-16">
        COLLECTION
      </h2>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-10">

        {items.map((item, index) => (
          <motion.div
            key={index}
            className="group relative overflow-hidden rounded-lg shadow-sm"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <img
              src={item.img}
              alt={item.name}
              loading="lazy"
              className="w-full h-[380px] object-cover transition duration-500 group-hover:scale-105"
            />

            {/* ✅ FIXED OVERLAY */}
            <div className="absolute inset-0 bg-white/70 dark:bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
              <p className="text-lg tracking-widest font-medium text-black dark:text-white">
                {item.name}
              </p>
            </div>

          </motion.div>
        ))}

      </div>

    </div>
  );
}

export default Products;