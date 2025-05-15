import { motion } from "framer-motion";

export default function SectionTitle({ title, highlight }) {
  return (
    <div className="text-center mb-16">
      <motion.h2 
        className="text-3xl md:text-4xl font-bold font-poppins mb-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {title} {highlight && <span className="text-primary">{highlight}</span>}
      </motion.h2>
      <motion.div 
        className="w-20 h-1 bg-primary mx-auto rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: "5rem" }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      />
    </div>
  );
}