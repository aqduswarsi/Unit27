import { motion } from "framer-motion";

function BrandIntro() {
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-20 bg-white dark:bg-black text-black dark:text-white">
      
      <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">

        {/* 🔥 Divider */}
        <div className="w-10 h-[2px] bg-black dark:bg-white mx-auto mb-6 opacity-60"></div>

        {/* 🔥 Heading */}
        <p className="text-xs tracking-[4px] text-gray-500 dark:text-gray-400 mb-4">
          OUR PHILOSOPHY
        </p>

        {/* 🔥 Text */}
        <motion.p
          className="text-base md:text-lg text-gray-700 dark:text-gray-200 leading-relaxed tracking-wide font-medium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Unit 27 is a modern denim brand built on precision, quality, and timeless design.
          <br />
          Every piece is crafted to deliver comfort, durability, and effortless style.
        </motion.p>

      </div>

    </section>
  );
}

export default BrandIntro;