import { motion } from "framer-motion";

export default function TimelineItem({
  date,
  title,
  organization,
  description,
  position,
  delay = 0,
}) {
  return (
    <motion.div
      className={`timeline-item timeline-${position} mb-10`}
      initial={{ opacity: 0, x: position === "left" ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 ${position === "left" ? "ml-0 mr-4 md:mr-0" : "mr-0 ml-4 md:ml-0"}`}>
        <span className="text-xs text-primary font-semibold">{date}</span>
        <h3 className="text-lg font-bold mt-1">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{organization}</p>
        {description && (
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 whitespace-pre-line">{description}</p>
        )}
      </div>
    </motion.div>
  );
}