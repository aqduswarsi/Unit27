import { motion, useMotionValue, useTransform } from "framer-motion";
import { FaFeatherAlt, FaShieldAlt, FaMagic } from "react-icons/fa";
import featuresBg from "../assets/features-bg.jpg";

// 🔥 Alag component banaya taaki 3D Tilt (mouse tracking) smooth chale
const FeatureCard = ({ item }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Mouse move par rotation calculate karega
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative group p-10 rounded-2xl flex flex-col items-start text-left cursor-pointer 
                 bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl
                 hover:border-white/30 transition-colors duration-500"
    >
      {/* 🔥 Hover par andar ek subtle white glow aayega */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>

      {/* Icon Box (3D effect ke liye translateZ lagaya) */}
      <div
        style={{ transform: "translateZ(50px)" }}
        className="mb-8 relative z-10 p-4 rounded-full bg-white/10 border border-white/20 text-white group-hover:bg-white group-hover:text-black transition-all duration-500"
      >
        <motion.div whileHover={{ scale: 1.2, rotate: 10 }}>
          {item.icon}
        </motion.div>
      </div>

      {/* Title */}
      <h3
        style={{ transform: "translateZ(30px)" }}
        className="text-2xl font-bold mb-3 tracking-tight text-white relative z-10"
      >
        {item.title}
      </h3>

      {/* Description */}
      <p
        style={{ transform: "translateZ(20px)" }}
        className="text-gray-400 text-sm leading-relaxed relative z-10 font-medium group-hover:text-gray-200 transition-colors"
      >
        {item.desc}
      </p>
    </motion.div>
  );
};

function Features() {
  const data = [
    {
      icon: <FaFeatherAlt size={30} />,
      title: "Flexible",
      desc: "Easy movement and perfect fit for everyday wear. Crafted to move with you.",
    },
    {
      icon: <FaShieldAlt size={30} />,
      title: "Easy to Care",
      desc: "Machine washable premium fabric designed for ultimate convenience and longevity.",
    },
    {
      icon: <FaMagic size={30} />,
      title: "Comfortable",
      desc: "Authentic denim that ensures all-day comfort, breathability, and durability.",
    },
  ];

  return (
    <div className="relative py-32 px-6 overflow-hidden bg-black perspective-1000">
      {/* 🔥 BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <img
          src={featuresBg}
          alt="Denim Background"
          className="w-full h-full object-cover"
        />
        {/* Halka sa gradient taaki text pop kare */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* 🔥 CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <p className="text-gray-300 text-xs tracking-[8px] font-bold uppercase mb-4">
            The Industrial Standard
          </p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
            WHY CHOOSE US
          </h2>
        </motion.div>

        {/* 🔥 CARDS GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <FeatureCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;
