import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/section-title.jsx";
import FlipCard from "@/components/ui/flip-card.jsx";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Global Policy Tracker",
      description: "Visual platform to compare up to 10 policies per country",
      icon: "fas fa-globe",
      technologies: ["Next.js", "FastAPI", "MongoDB", "React-Globe"],
      detailedDescription: [
        "Designed and developed a visual platform to compare and analyze up to 10 policies per country, featuring an interactive dashboard and color-coded world maps for clear global insights.",
        "Enhanced with AI-powered analysis, the platform supports real-time updates and plans for automated policy change detection, ensuring timely and actionable information for decision-makers."
      ],
      github: "https://github.com/MdMostafizurRahaman/policy-tracker.git",
      demo: "https://policy-tracker-f.onrender.com/",
      gradient: "from-blue-500 via-purple-500 to-pink-500",
      glowColor: "rgba(139, 69, 19, 0.4)"
    },
    {
      title: "MediLens",
      description: "AI-powered healthcare platform for simplified medical data analysis",
      icon: "fas fa-notes-medical",
      technologies: ["Spring Boot", "Next.js", "React", "PostCSS", "Render"],
      detailedDescription: [
        "Developed an AI-driven healthcare platform to simplify clinical workflows, including OCR-based prescription analysis, structured medical reports, and efficient doctor & patient management.",
        "Features real-time chat for seamless communication and smart insights to enhance medical decision-making, making prescriptions and health data clear and actionable."
      ],
      github: "https://github.com/MdMostafizurRahaman/MediLens.git",
      demo: "https://medilens-frontend.onrender.com/",
      gradient: "from-emerald-400 via-cyan-400 to-blue-500",
      glowColor: "rgba(16, 185, 129, 0.4)"
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
      demo: "#",
      gradient: "from-green-400 via-emerald-500 to-teal-500",
      glowColor: "rgba(34, 197, 94, 0.4)"
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
      demo: "#",
      gradient: "from-purple-500 via-pink-500 to-red-500",
      glowColor: "rgba(168, 85, 247, 0.4)"
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
      demo: "#",
      gradient: "from-orange-400 via-red-500 to-pink-500",
      glowColor: "rgba(249, 115, 22, 0.4)"
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
      demo: "#",
      gradient: "from-indigo-500 via-blue-500 to-cyan-500",
      glowColor: "rgba(99, 102, 241, 0.4)"
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
      demo: "#",
      gradient: "from-yellow-400 via-orange-500 to-red-500",
      glowColor: "rgba(245, 158, 11, 0.4)"
    },
  ];

  // Floating particle component
  const FloatingParticle = ({ delay = 0, duration = 4 }) => (
    <motion.div
      className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-30"
      animate={{
        y: [-20, -100, -20],
        x: [-10, 10, -10],
        opacity: [0.3, 0.7, 0.3],
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    />
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9,
      rotateX: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.175, 0.885, 0.32, 1.275],
      },
    },
  };

  const backgroundVariants = {
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-teal-900/20 dark:from-purple-900/40 dark:via-blue-900/40 dark:to-teal-900/40"
        variants={backgroundVariants}
        animate="animate"
        style={{
          backgroundSize: "400% 400%",
        }}
      />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <FloatingParticle 
              delay={i * 0.5} 
              duration={4 + Math.random() * 3}
            />
          </div>
        ))}
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 75% 25%, rgba(119, 255, 198, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 25% 75%, rgba(198, 255, 119, 0.3) 0%, transparent 50%)
            `,
            backgroundSize: "400px 400px",
            animation: "float 8s ease-in-out infinite",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <SectionTitle title="My" highlight="Projects" />
          <motion.p 
            className="text-gray-600 dark:text-gray-300 mt-4 text-center max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Check out some of my recent projects showcasing my skills and experience.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={project.title} 
              variants={itemVariants} 
              className="h-96 relative group"
              whileHover={{ 
                scale: 1.02,
                rotateY: 2,
                z: 50,
              }}
              transition={{ 
                duration: 0.3,
                ease: "easeOut",
              }}
            >
              {/* Glowing background effect */}
              <motion.div
                className="absolute -inset-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(45deg, ${project.glowColor}, transparent, ${project.glowColor})`,
                  filter: "blur(10px)",
                }}
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              
              <FlipCard
                {...project}
                index={index}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.a 
            href="https://github.com/MdMostafizurRahaman" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 text-white rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 group animate-gradient"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(120, 119, 198, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="mr-3">View More on GitHub</span>
            <motion.i 
              className="fab fa-github text-xl"
              animate={{ 
                rotate: [0, 360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}