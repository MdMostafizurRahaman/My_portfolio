import { scrollToElement } from "../lib/utils";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-10">
      {/* Simple background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 -z-10" />

      <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-lg text-purple-600 dark:text-purple-400 font-semibold">
              Hello, I'm
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
              Md Mostafizur Rahaman
            </h1>

            <div className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 font-medium">
              <span>Software Engineer | Competitive Programmer</span>
            </div>
          </div>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg">
            Passionate software developer with expertise in C++, JavaScript, and web technologies.
            Problem solver, competitive programmer, and creator of efficient, innovative solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <button
              onClick={() => scrollToElement("contact")}
              className="px-6 sm:px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-colors text-center text-sm sm:text-base"
            >
              Contact Me
            </button>

            <button
              onClick={() => scrollToElement("projects")}
              className="px-6 sm:px-8 py-3 border-2 border-purple-600 text-purple-600 hover:bg-purple-50 dark:hover:bg-gray-800 rounded-lg font-semibold transition-colors text-center text-sm sm:text-base"
            >
              View Projects
            </button>
          </div>

          <div className="flex gap-4 pt-4">
            <a
              href="https://github.com/MdMostafizurRahaman"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-2xl transition-colors"
              title="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://linkedin.com/in/md-mostafizur-rahaman"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-2xl transition-colors"
              title="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="mailto:bsse1320@iit.du.ac.bd"
              className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 text-2xl transition-colors"
              title="Email"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full" />
            <div className="absolute inset-2 bg-white dark:bg-gray-800 rounded-full overflow-hidden border-4 border-white dark:border-gray-700">
              <img
                src="/profile.jpg"
                alt="Md Mostafizur Rahaman"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={() => scrollToElement("about")}
          className="text-center cursor-pointer text-purple-600 dark:text-purple-400 hover:text-purple-700"
        >
          <div className="text-2xl mb-2">↓</div>
          <span className="text-sm font-medium">Scroll Down</span>
        </button>
      </div>
    </section>
  );
}
