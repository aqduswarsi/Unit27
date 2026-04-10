import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function SearchPage() {
  const query = new URLSearchParams(useLocation().search).get("q");

  const data = [
    {
      name: "RAW DENIM",
      img: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=800",
    },
    {
      name: "SLIM FIT",
      img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=800",
    },
    {
      name: "STREET WEAR",
      img: "https://images.unsplash.com/photo-1516822003754-cca485356ecb?q=80&w=800",
    },
    {
      name: "DARK WASH",
      img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800",
    },
    {
      name: "CLASSIC BLUE",
      img: "https://images.unsplash.com/photo-1475189778702-5ec9941484ae?q=80&w=800",
    },
    {
      name: "MODERN FIT",
      img: "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=800",
    }
  ];

  const results = data.filter((item) =>
    item.name.toLowerCase().includes(query?.toLowerCase())
  );

  return (
    <div className="bg-white text-black min-h-screen pt-32 px-6 pb-20 dark:bg-black dark:text-white">

      {/* Heading */}
      <h1 className="text-3xl mb-10 text-center tracking-wide">
        Results for "{query}"
      </h1>

      {/* Grid */}
      {results.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {results.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-[240px] object-cover"
              />

              {/* Content */}
              <div className="p-4 text-center">
                <h2 className="text-lg font-medium tracking-wide">
                  {item.name}
                </h2>
              </div>
            </motion.div>
          ))}

        </div>
      ) : (
        <p className="text-center text-gray-500 dark:text-gray-400 mt-10">
          No results found
        </p>
      )}

    </div>
  );
}

export default SearchPage;