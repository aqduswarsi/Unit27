import { motion } from "framer-motion";
import { FaHandsWash, FaThumbsUp } from "react-icons/fa";
import { GiFlexibleLamp } from "react-icons/gi";

function Features() {
  const data = [
    {
      icon: <GiFlexibleLamp size={40} />,
      title: "Flexible",
      desc: "Easy movement and perfect fit for everyday wear."
    },
    {
      icon: <FaHandsWash size={40} />,
      title: "Easy to Care",
      desc: "Machine washable fabric designed for convenience."
    },
    {
      icon: <FaThumbsUp size={40} />,
      title: "Comfortable",
      desc: "Premium fabric ensures all-day comfort and durability."
    }
  ];

  return (
    <div className="relative py-24 px-6 overflow-hidden">

      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=1600"
        className="absolute inset-0 w-full h-full object-cover blur-sm scale-110"
        alt="denim"
      />

      {/* ✅ FIXED OVERLAY */}
      <div className="absolute inset-0 bg-white/40 dark:bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10">

        {/* Heading */}
        <h2 className="text-3xl text-center tracking-widest mb-16 text-black dark:text-white">
          WHY CHOOSE US
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          {data.map((item, index) => (
            <motion.div
              key={index}
              className="group bg-white/90 dark:bg-gray-900/90 backdrop-blur-md p-8 text-center rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.03] transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              
              {/* Icon */}
              <div className="mb-4 flex justify-center text-black dark:text-white transition duration-300 group-hover:scale-110 group-hover:rotate-3">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                {item.desc}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </div>
  );
}

export default Features;