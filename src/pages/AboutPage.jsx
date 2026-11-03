import { motion } from "framer-motion";

// 👇 Apni images import karo
import baggyImg from "../assets/baggy-fit.jpg";
import straightImg from "../assets/straight-fit.jpg";

function AboutPage() {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white min-h-screen pt-32 px-6 md:px-12 pb-20 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* 🔥 HERO SECTION (Fixed Fonts & Size) */}
        <div className="text-center mb-28">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] md:text-xs tracking-[6px] text-gray-500 dark:text-gray-400 font-bold uppercase mb-6"
          >
            The Industrial Standard
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center justify-center mb-8"
          >
            {/* ABOUT text: Size kam kiya aur patla kiya */}
            <h1 className="text-3xl md:text-5xl font-semibold tracking-widest text-gray-800 dark:text-gray-100 mb-6">
              ABOUT
            </h1>

            {/* UNIT 27 Logo Style: Patla aur chhota kiya */}
            <div className="flex items-center gap-2">
              <h2 className="text-2xl md:text-3xl font-medium tracking-[0.1em] text-black dark:text-white">
                UNIT
              </h2>
              <div className="bg-black text-white dark:bg-white dark:text-black px-3 py-1 flex items-center justify-center">
                <span className="text-2xl md:text-3xl font-medium tracking-tighter leading-none">
                  27
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-3xl mx-auto mt-10"
          >
            <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed text-center font-medium">
              <span className="text-black dark:text-white font-bold">Established in 2025</span>,
              UNIT 27 is a premium denim wear brand based in India. From a
              strong beginning, the brand is steadily growing and building trust
              through manufacturing, delivering high-quality fabrics and
              designs. We focus on jeans, casual wear, and related accessories
              for men, evolving with market trends while ensuring comfort,
              durability, and style.
            </p>
          </motion.div>
        </div>

        {/* 🔥 SECTION 1: IMAGE LEFT, TEXT RIGHT */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] md:h-[500px] overflow-hidden rounded-xl shadow-xl"
          >
            <img
              src={baggyImg}
              alt="Built with Precision"
              className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-[1.5s]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              BUILT WITH <br /> PRECISION.
            </h2>
            <div className="w-16 h-1 bg-black dark:bg-white mb-6"></div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
              UNIT 27 is built on precision, where every stitch, cut, and finish
              is crafted with intent. Our denim reflects structure, durability,
              and a modern aesthetic designed for everyday wear. We don't just
              make jeans; we engineer them to set the standard.
            </p>
          </motion.div>
        </div>

        {/* 🔥 SECTION 2: TEXT LEFT, IMAGE RIGHT */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              ENGINEERED FOR <br /> COMFORT.
            </h2>
            <div className="w-16 h-1 bg-black dark:bg-white mb-6"></div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
              Designed to move with you, UNIT 27 combines strength with
              flexibility. Our fabrics are selected to deliver breathability,
              comfort, and long-lasting performance without compromise.
              Experience denim that feels as good as it looks.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] md:h-[500px] overflow-hidden rounded-xl shadow-xl order-1 md:order-2"
          >
            <img
              src={straightImg}
              alt="Engineered for Comfort"
              className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-[1.5s]"
            />
          </motion.div>
        </div>

        {/* 🔥 SECTION 3: PHILOSOPHY (Centered, Big Quote Style) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto bg-gray-50 dark:bg-gray-900 py-20 px-8 rounded-2xl border border-gray-100 dark:border-gray-800"
        >
          <h2 className="text-xs tracking-[5px] text-gray-500 dark:text-gray-400 font-bold uppercase mb-6">
            Our Philosophy
          </h2>
          <p className="text-2xl md:text-4xl font-medium leading-snug text-black dark:text-white">
            "At UNIT 27, denim is more than fabric — it is identity shaped by
            precision and purpose."
          </p>
          <p className="text-gray-500 dark:text-gray-400 mt-6 text-sm md:text-base max-w-xl mx-auto">
            We focus on creating pieces that balance durability, comfort, and
            timeless design, built to perform and made to last.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutPage;
