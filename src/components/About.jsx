import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      id="about"
      className="bg-white text-black dark:bg-black dark:text-white py-24 px-6 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl tracking-widest mb-6">UNIT 27</h2>

      <p className="max-w-3xl mx-auto text-gray-400 dark:text-gray-300 leading-relaxed">
        UNIT 27 represents a new era of denim craftsmanship where precision meets durability.
        Built for strength, designed for identity.
      </p>
    </motion.div>
  );
}

export default About;