import { Github, Globe } from "lucide-react";
import SectionTitle from "@/components/ui/section-title.jsx";
import { projects as projectData } from "../data/portfolio-data.js";

export default function ProjectsSection() {
  const projects = projectData.map((project) => ({
    title: project.title,
    description: project.description,
    technologies: project.technologies,
    github: project.githubLink,
    demo: project.liveLink,
  }));

  return (
    <section id="projects" className="py-16 sm:py-20 bg-white dark:bg-gray-900">
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
                      <Github className="mr-1 inline-block h-3.5 w-3.5" />
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
                      <Globe className="mr-1 inline-block h-3.5 w-3.5" />
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
            <Github className="mr-2 inline-block" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
