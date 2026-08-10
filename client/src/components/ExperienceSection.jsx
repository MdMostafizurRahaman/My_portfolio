import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/section-title.jsx";
import TimelineItem from "@/components/ui/timeline-item.jsx";
import { experience } from "../data/portfolio-data.js";

export default function ExperienceSection() {
  const timelineItems = experience.map((item, index) => ({
    date: item.duration,
    title: item.role,
    organization: item.company,
    description: item.description,
    position: index % 2 === 0 ? "left" : "right"
  }));

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <SectionTitle title="Experience &" highlight="Journey" />
        <p className="text-gray-600 dark:text-gray-300 mt-4 text-center max-w-2xl mx-auto">
          My professional experience and academic journey.
        </p>

        <motion.div 
          className="relative timeline-container py-8 mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {timelineItems.map((item, index) => (
            <TimelineItem
              key={`${item.title}-${index}`}
              date={item.date}
              title={item.title}
              organization={item.organization}
              description={item.description}
              position={item.position}
              delay={index * 0.2}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}