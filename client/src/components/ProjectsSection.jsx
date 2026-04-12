import SectionTitle from "@/components/ui/section-title.jsx";

export default function ProjectsSection() {
  const projects = [
    {
      title: "GitIntel",
      description: "Autonomous tool to compute 65 static metrics and generate benchmark-aligned datasets. Multi-LLM Jury for hallucination-free generation.",
      technologies: ["Python", "PyDriller", "GitPython", "Gemini API", "AWS Bedrock"],
      github: "https://github.com/MdMostafizurRahaman/GitIntel",
      demo: null,
    },
    {
      title: "Global Policy Tracker",
      description: "Full AI-powered policy intelligence platform with interactive dashboard, color-coded world maps, real-time updates, and policy comparison.",
      technologies: ["Next.js", "FastAPI", "AWS DynamoDB", "ReactGlobe", "Render"],
      github: "https://github.com/MdMostafizurRahaman/policy-tracker",
      demo: "https://policy-tracker-f.onrender.com/",
    },
    {
      title: "PrescribeCorrect",
      description: "AI-powered healthcare platform for simplifying medical data analysis. Features OCR-based prescription analysis, doctor & patient management, real-time chat.",
      technologies: ["Spring Boot", "Next.js", "PostCSS", "Render"],
      github: "https://github.com/MdMostafizurRahaman/PrescribeCorrect",
      demo: "https://prescribe-correct.vercel.app",
    },
    {
      title: "Stack Overflow Clone",
      description: "MERN-based app with user registration, login, post management, JWT authentication. Includes notification cleanup and MinIO for code snippet storage.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "JWT"],
      github: "https://github.com/MdMostafizurRahaman/stack-overflow",
      demo: null,
    },
    {
      title: "IPOS",
      description: "Portal for managing internship applications with company listings, skill-based filtering, CV uploads, automated emails, and HR letter generation.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
      github: "https://github.com/MdMostafizurRahaman/IPOS-SPL-ll",
      demo: null,
    },
    {
      title: "Chat Server",
      description: "Secure chat system with AES encryption, login controls, and real-time group/individual messaging. Includes retry-limited authentication and encrypted data transfer.",
      technologies: ["C++", "AES Encryption", "Socket Programming"],
      github: "https://github.com/MdMostafizurRahaman/Chat-server-SPL1",
      demo: null,
    },
    {
      title: "MediLens",
      description: "AI-based medical prescription analysis platform for Bangladeshi healthcare ecosystem. Supports Bengali & English, OCR-based reading, real-time AI analysis.",
      technologies: ["Spring Boot", "Next.js", "OCR", "AI/ML"],
      github: "https://github.com/MdMostafizurRahaman/MediLens",
      demo: "https://medilens-frontend.onrender.com/",
    },
    {
      title: "Big Bang SMS Sender",
      description: "Bulk messaging platform sending 1,500+ daily SMS to students and guardians. Full development and maintenance with efficient, reliable, and scalable communication.",
      technologies: ["Excel Integration", "SMS API", "Backend Development"],
      github: null,
      demo: null,
    },
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionTitle title="My" highlight="Projects" />

        <p className="text-center text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto text-base sm:text-lg">
          Projects from my resume showcasing diverse skills and real-world experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group h-full flex flex-col"
            >
              {/* Header with gradient */}
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-4 sm:p-5">
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  {project.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col">
                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs sm:text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 mt-auto pt-4 border-t border-gray-200 dark:border-gray-600">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-3 py-2 bg-gray-900 dark:bg-gray-600 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-500 transition-colors text-center text-xs sm:text-sm font-medium"
                    >
                      <i className="fab fa-github mr-1"></i>
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-3 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-center text-xs sm:text-sm font-medium"
                    >
                      <i className="fas fa-globe mr-1"></i>
                      Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View GitHub CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/MdMostafizurRahaman"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
          >
            <i className="fab fa-github mr-2"></i>
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
