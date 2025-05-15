import { motion } from "framer-motion";

export default function FlipCard({
  title,
  description,
  icon,
  technologies,
  detailedDescription,
  github,
  demo,
}) {
  return (
    <div className="flip-card h-full perspective-1000">
      <div className="flip-card-inner relative w-full h-full transition-transform duration-600 transform-style-preserve-3d hover:rotate-y-180">
        {/* Front Side */}
        <div className="flip-card-front absolute w-full h-full bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 overflow-hidden backface-hidden">
          <div className="h-1/2 bg-gradient-to-r from-primary to-accent flex items-center justify-center">
            <i className={`${icon} text-6xl text-white`}></i>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold font-poppins mb-2">{title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span key={index} className="px-3 py-1 bg-primary/10 dark:bg-primary/20 text-primary rounded-full text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div className="flip-card-back absolute w-full h-full bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 p-6 backface-hidden rotate-y-180">
          <h3 className="text-xl font-bold font-poppins mb-4">{title}</h3>
          {detailedDescription.map((para, index) => (
            <p key={index} className="text-gray-600 dark:text-gray-300 mb-4">
              {para}
            </p>
          ))}
          <div className="absolute bottom-6 left-6 right-6 flex justify-between">
            <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:underline">
              <i className="fab fa-github mr-2"></i> View Code
            </a>
            <a href={demo} target="_blank" rel="noopener noreferrer" className="px-4 py-1 bg-primary text-white rounded hover:bg-primary/90 transition-colors">
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}