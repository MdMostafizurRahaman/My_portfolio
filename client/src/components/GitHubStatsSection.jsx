import SectionTitle from "@/components/ui/section-title.jsx";

export default function GitHubSection() {
  const stats = [
    { label: "Repositories", value: "89", icon: "fas fa-code-branch" },
    { label: "Followers", value: "21", icon: "fas fa-users" },
    { label: "Following", value: "66", icon: "fas fa-user-check" },
    { label: "Contributions", value: "2.1K+", icon: "fas fa-chart-line" },
  ];

  const projects = [
    {
      name: "MediLens",
      description: "AI-Powered Medical Image Analysis Platform",
      url: "https://github.com/MdMostafizurRahaman/MediLens",
      stars: "⭐⭐",
    },
    {
      name: "Policy Tracker",
      description: "Global Policy Management System with AI Analysis",
      url: "https://github.com/MdMostafizurRahaman/policy-tracker",
      stars: "⭐⭐",
    },
    {
      name: "PrescribeCorrect",
      description: "AI-Powered Healthcare Platform",
      url: "https://github.com/MdMostafizurRahaman/PrescribeCorrect",
      stars: "⭐",
    },
    {
      name: "Stack Overflow Clone",
      description: "Full-Stack Q&A Community Platform",
      url: "https://github.com/MdMostafizurRahaman/stack-overflow",
      stars: "⭐",
    },
    {
      name: "IPOS",
      description: "IIT Student Internship Management System",
      url: "https://github.com/MdMostafizurRahaman/IPOS-SPL-ll",
      stars: "⭐",
    },
    {
      name: "Chat Server",
      description: "Secure Communication with AES Encryption",
      url: "https://github.com/MdMostafizurRahaman/Chat-server-SPL1",
      stars: "⭐",
    },
  ];

  const techStack = [
    { category: "Languages", items: ["C", "C++", "JavaScript", "Java", "Python"] },
    { category: "Frontend", items: ["HTML5", "CSS3", "React", "Next.js", "TailwindCSS"] },
    { category: "Backend", items: ["Node.js", "Express.js", "FastAPI", "Spring Boot"] },
    { category: "Databases", items: ["MongoDB", "MySQL", "SQLite", "DynamoDB"] },
    { category: "Cloud & DevOps", items: ["AWS", "Vercel", "Render", "GitHub"] },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionTitle title="GitHub" highlight="Profile" />

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 text-center hover:shadow-md transition-shadow"
            >
              <i className={`${stat.icon} text-3xl text-purple-600 dark:text-purple-400 mb-3`}></i>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Featured Projects */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Featured Projects
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow group"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {project.name}
                  </h4>
                  <span className="text-sm">{project.stars}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex items-center text-purple-600 dark:text-purple-400 text-sm font-medium">
                  <i className="fab fa-github mr-2"></i>
                  View on GitHub
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Tech Stack
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((tech) => (
              <div
                key={tech.category}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6"
              >
                <h4 className="font-bold text-gray-900 dark:text-white mb-4">
                  {tech.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {tech.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 text-sm rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/MdMostafizurRahaman"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-semibold hover:shadow-lg transition-shadow text-sm sm:text-base"
          >
            <i className="fab fa-github mr-2"></i>
            View Full Profile
          </a>
        </div>
      </div>
    </section>
  );
}
