import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/section-title.jsx";
import TimelineItem from "@/components/ui/timeline-item.jsx";

export default function ExperienceSection() {
  const timelineItems = [
    {
      date: "Present",
      title: "Intern",
      organization: "Ithra, Aramco",
      description: "Working on a Policy tracker project, applying software engineering skills in a professional environment.",
      position: "left",
      category: "Experience"
    },
    {
      date: "2021 - Present",
      title: "BSc in Software Engineering",
      organization: "University of Dhaka",
      description: "Final year",
      position: "right",
      category: "Education"
    },
    {
      date: "Education",
      title: "HSC",
      organization: "Chuadanga Govt' College, Chuadanga",
      description: "GPA: 5.00",
      position: "right"
    },
    {
      date: "May 2024 - December 2024",
      title: "ICT and Database Management Associate",
      organization: "Student Promotion & Support Unit, University of Dhaka",
      description: "Collaborated with a team to offer part-time placement services, talent acquisition, and skill development programs for students. Optimized ICT and database management systems to enhance service delivery.",
      position: "left"
    },
    {
      date: "Awards & Achievements",
      title: "District Champion",
      organization: "Creative Talent Hunt Competition (Math & Computer)",
      position: "right"
    },
    {
      date: "Awards & Achievements",
      title: "National Champion",
      organization: "Bangladesh Red Crescent Society (Essay Writing)",
      position: "left"
    }
  ];

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
              key={index}
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