import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { FiSun, FiMoon, FiMenu, FiX, FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";
import { personalInfo } from "../data/portfolio-data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState("light");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Navigation items with icons and descriptions
  const navigationItems = [
    { 
      id: "home", 
      label: "Home", 
      icon: "🏠", 
      description: "Welcome to my world",
      gradient: "from-purple-500 to-pink-500"
    },
    { 
      id: "about", 
      label: "About", 
      icon: "👨‍💻", 
      description: "Know me better",
      gradient: "from-blue-500 to-cyan-500"
    },
    { 
      id: "skills", 
      label: "Skills", 
      icon: "⚡", 
      description: "My expertise",
      gradient: "from-green-500 to-teal-500"
    },
    { 
      id: "projects", 
      label: "Projects", 
      icon: "🚀", 
      description: "Things I've built",
      gradient: "from-orange-500 to-red-500"
    },
    { 
      id: "experience", 
      label: "Experience", 
      icon: "💼", 
      description: "My journey",
      gradient: "from-indigo-500 to-purple-500"
    },
    { 
      id: "contact", 
      label: "Contact", 
      icon: "📧", 
      description: "Let's connect",
      gradient: "from-pink-500 to-rose-500"
    },
  ];

  // Handle theme switching
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      
      // Determine active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mouse tracking for full-page nav
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isOpen) {
        setMousePosition({
          x: (e.clientX / window.innerWidth) * 100,
          y: (e.clientY / window.innerHeight) * 100,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isOpen]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth"
      });
      setIsOpen(false);
    }
  };

  // Floating particle component for full-page nav
  const FloatingParticle = ({ delay = 0, x = 50, y = 50 }) => (
    <motion.div
      className="absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-60"
      style={{ left: `${x}%`, top: `${y}%` }}
      animate={{
        y: [0, -30, 0],
        x: [0, 15, -15, 0],
        scale: [1, 1.5, 1],
        opacity: [0.6, 1, 0.6],
      }}
      transition={{
        duration: 4 + Math.random() * 2,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    />
  );

  return (
    <>
      {/* Main Navbar */}
      <motion.header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrollPosition > 20 
            ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-xl border-b border-gray-200/20 dark:border-gray-700/20" 
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/">
                <a className="text-2xl font-bold font-poppins relative group">
                  <motion.span
                    className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    style={{ backgroundSize: "200% 200%" }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    {personalInfo.name.split(' ')[1]}
                  </motion.span>
                  <motion.span 
                    className="text-orange-500 ml-1"
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    .
                  </motion.span>
                </a>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <motion.ul 
                className="flex space-x-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, staggerChildren: 0.1 }}
              >
                {navigationItems.map((item, index) => (
                  <motion.li 
                    key={item.id}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <motion.button
                      onClick={() => scrollToSection(item.id)}
                      className={`relative capitalize text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 ${
                        activeSection === item.id 
                          ? "text-white" 
                          : "text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                      }`}
                      whileHover={{ 
                        scale: 1.05,
                        y: -2,
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {activeSection === item.id && (
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-full`}
                          layoutId="activeTab"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                      <span className="relative z-10">{item.label}</span>
                      
                      {/* Hover background */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full opacity-0"
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    </motion.button>
                  </motion.li>
                ))}
              </motion.ul>
              
              {/* Theme Toggle */}
              <motion.button 
                onClick={toggleTheme}
                className="relative p-3 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 hover:from-purple-500/20 hover:to-blue-500/20 transition-all duration-300 group"
                whileHover={{ 
                  scale: 1.1,
                  rotate: theme === "light" ? 180 : -180,
                }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait">
                  {theme === "light" ? (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FiMoon size={18} className="text-purple-600" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="sun"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FiSun size={18} className="text-yellow-500" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>

            {/* Mobile Navigation Toggle */}
            <div className="flex items-center space-x-4 lg:hidden">
              <motion.button 
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait">
                  {theme === "light" ? (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FiMoon size={18} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="sun"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FiSun size={18} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
              
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="relative p-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg"
                whileHover={{ scale: 1.1, boxShadow: "0 10px 25px rgba(147, 51, 234, 0.4)" }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FiX size={20} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FiMenu size={20} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Full-Page Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Dynamic Background */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: theme === "dark" 
                  ? `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
                      rgba(147, 51, 234, 0.3) 0%, 
                      rgba(59, 130, 246, 0.2) 25%, 
                      rgba(16, 185, 129, 0.1) 50%, 
                      rgba(17, 24, 39, 0.95) 70%)`
                  : `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
                      rgba(147, 51, 234, 0.15) 0%, 
                      rgba(59, 130, 246, 0.1) 25%, 
                      rgba(16, 185, 129, 0.05) 50%, 
                      rgba(255, 255, 255, 0.95) 70%)`,
              }}
              animate={{
                background: theme === "dark" 
                  ? `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
                      rgba(147, 51, 234, 0.4) 0%, 
                      rgba(59, 130, 246, 0.3) 25%, 
                      rgba(16, 185, 129, 0.2) 50%, 
                      rgba(17, 24, 39, 0.98) 70%)`
                  : `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
                      rgba(147, 51, 234, 0.2) 0%, 
                      rgba(59, 130, 246, 0.15) 25%, 
                      rgba(16, 185, 129, 0.1) 50%, 
                      rgba(255, 255, 255, 0.98) 70%)`,
              }}
              transition={{ type: "spring", stiffness: 100, damping: 30 }}
            />

            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <FloatingParticle
                  key={i}
                  delay={i * 0.1}
                  x={Math.random() * 100}
                  y={Math.random() * 100}
                />
              ))}
            </div>

            {/* Morphing Shapes */}
            <motion.div
              className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
                borderRadius: ["50%", "30% 70% 70% 30%", "50%"],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, -180, -360],
                borderRadius: ["50%", "70% 30% 30% 70%", "50%"],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Navigation Content */}
            <div className="relative z-10 h-full flex flex-col">
              {/* Profile Section */}
              <motion.div
                className="flex flex-col items-center justify-center pt-32 pb-16"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.div
                  className="relative w-32 h-32 mb-6"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-md opacity-50"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-full p-1">
                    <img
                      src="/profile.jpg"
                      alt={personalInfo.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </motion.div>
                
                <motion.h2
                  className="text-2xl font-bold text-center mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    {personalInfo.name}
                  </span>
                </motion.h2>
                
                <motion.p
                  className="text-gray-600 dark:text-gray-300 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  {personalInfo.title}
                </motion.p>
              </motion.div>

              {/* Navigation Items */}
              <motion.div
                className="flex-1 flex flex-col justify-center px-8 space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {navigationItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="group relative p-6 rounded-2xl backdrop-blur-sm bg-white/10 dark:bg-gray-800/20 border border-white/20 dark:border-gray-700/30 hover:bg-white/20 dark:hover:bg-gray-800/30 transition-all duration-300"
                    initial={{ opacity: 0, x: -50, rotateY: -15 }}
                    animate={{ opacity: 1, x: 0, rotateY: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.4 + index * 0.1,
                      type: "spring",
                      stiffness: 100 
                    }}
                    whileHover={{ 
                      scale: 1.02,
                      x: 10,
                      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Background Gradient */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    />
                    
                    <div className="relative z-10 flex items-center space-x-4">
                      <motion.div
                        className="text-3xl"
                        whileHover={{ 
                          scale: 1.2,
                          rotate: 360,
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        {item.icon}
                      </motion.div>
                      
                      <div className="flex-1 text-left">
                        <motion.h3
                          className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text"
                          style={{
                            background: activeSection === item.id 
                              ? `linear-gradient(to right, ${item.gradient.split(' ')[1]}, ${item.gradient.split(' ')[3]})`
                              : undefined,
                            WebkitBackgroundClip: activeSection === item.id ? "text" : undefined,
                            WebkitTextFillColor: activeSection === item.id ? "transparent" : undefined,
                          }}
                        >
                          {item.label}
                        </motion.h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                          {item.description}
                        </p>
                      </div>
                      
                      <motion.div
                        className="text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        →
                      </motion.div>
                    </div>
                  </motion.button>
                ))}
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="flex justify-center space-x-6 pb-16"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                {[
                  { icon: FiGithub, href: `https://github.com/${personalInfo.github}`, color: "hover:text-gray-900 dark:hover:text-white" },
                  { icon: FiLinkedin, href: `https://linkedin.com/in/${personalInfo.linkedin}`, color: "hover:text-blue-600" },
                  { icon: FiMail, href: `mailto:${personalInfo.email}`, color: "hover:text-purple-600" },
                  { icon: FiPhone, href: `tel:${personalInfo.phone}`, color: "hover:text-green-600" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target={social.href.startsWith('http') ? "_blank" : undefined}
                    rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    className={`p-4 rounded-full bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm border border-white/20 dark:border-gray-700/30 text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300`}
                    whileHover={{ 
                      scale: 1.2, 
                      y: -5,
                      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
                    }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}