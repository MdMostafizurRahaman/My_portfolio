import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/section-title.jsx";
import FlipCard from "@/components/ui/flip-card.jsx";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Policy Tracker",
      description: "Visual platform to compare up to 10 AI policies per country",
      icon: "fas fa-globe",
      technologies: ["Next.js", "FastAPI", "MongoDB", "React-Globe"],
      detailedDescription: [
        "Built a visual platform to compare up to 10 AI policies per country. Features color-coded world maps and an intuitive dashboard.",
        "Future-ready upgrades include real-time updates and automated policy change detection."
      ],
      github: "https://github.com/MdMostafizurRahaman/policy-tracker.git",
      demo: "#"
    },
    {
      title: "AQI",
      description: "Real-time air quality monitoring app with predictive analytics",
      icon: "fas fa-wind",
      technologies: ["React", "Firebase", "Google GenAI API", "SARIMAX", "Chart.js"],
      detailedDescription: [
        "Developed a real-time air quality monitoring app with weather insights, health recommendations, and predictive analytics using SARIMAX.",
        "Integrated GenAI for personalized feedback and guidance."
      ],
      github: "https://github.com/MdMostafizurRahaman/AI_Olympiad.git",
      demo: "#"
    },
    {
      title: "Gomoku Game AI",
      description: "A 10x10 Gomoku game with AI versus player functionality using React.js",
      icon: "fas fa-gamepad",
      technologies: ["React.js", "AI", "Game Development"],
      detailedDescription: [
        "Developed a 10x10 Gomoku game with AI versus player functionality. The AI makes optimal moves, considering winning conditions and preventing overline situations.",
        "Turn-based gameplay allows the player to compete against the AI. Added player vs AI functionality to enhance the game experience."
      ],
      github: "https://github.com/MdMostafizurRahaman/Gomoku-AI",
      demo: "#"
    },
    {
      title: "Stack Overflow Clone",
      description: "A MERN stack application with user registration, login, and post management",
      icon: "fab fa-stack-overflow",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
      detailedDescription: [
        "Built a MERN-based app with user registration, login, post management, and JWT authentication.",
        "Added notification cleanup and MinIO for code snippet storage, transitioning to a distributed setup."
      ],
      github: "https://github.com/MdMostafizurRahaman/stack-overflow",
      demo: "#"
    },
    {
      title: "IPOS",
      description: "Internship placement system for BSSE 4th-year students",
      icon: "fas fa-briefcase",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
      detailedDescription: [
        "Developed a web application to streamline the internship placement process for BSSE 4th-year students, with company listings and student applications.",
        "Designed a RESTful backend for managing CVs, skillsets, CGPA, and interview allocations, along with email notifications and formal letter generation for HR."
      ],
      github: "https://github.com/MdMostafizurRahaman/IPOS-SPL-ll",
      demo: "#"
    },
    {
      title: "Chat Server",
      description: "A mini messenger app with secure encryption",
      icon: "fas fa-comments",
      technologies: ["C++", "Encryption", "Socket Programming"],
      detailedDescription: [
        "Developed a mini messenger app with user registration, secure password encryption, and login system with retry limits.",
        "Enabled user connectivity for individual and group chats, and ensured data security by encrypting all transmitted data with AES."
      ],
      github: "https://github.com/MdMostafizurRahaman/Chat-server-SPL1",
      demo: "#"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionTitle title="My" highlight="Projects" />
        <p className="text-gray-600 dark:text-gray-300 mt-4 text-center max-w-2xl mx-auto">
          Check out some of my recent projects showcasing my skills and experience.
        </p>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={itemVariants} className="h-96">
              <FlipCard
                title={project.title}
                description={project.description}
                icon={project.icon}
                technologies={project.technologies}
                detailedDescription={project.detailedDescription}
                github={project.github}
                demo={project.demo}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a href="https://github.com/MdMostafizurRahaman" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary hover:underline">
            <span>View More on GitHub</span>
            <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </motion.div>
      </div>
    </section>
  );
}