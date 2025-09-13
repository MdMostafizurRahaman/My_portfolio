import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar.jsx";
import HeroSection from "../components/HeroSection.jsx";
import AboutSection from "../components/AboutSection.jsx";
import SkillsSection from "../components/SkillsSection.jsx";
import ProjectsSection from "../components/ProjectsSection.jsx";
import ExperienceSection from "../components/ExperienceSection.jsx";
import GitHubSection from "../components/GitHubSection.jsx";
import ContactSection from "../components/ContactSection.jsx";
import Footer from "../components/Footer.jsx";
import { useScrollSpy } from "../hooks/use-scroll-spy.jsx";
import { usePortfolioData } from "../hooks/use-portfolio-data.js";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert.jsx";
import { AlertCircle, Loader2 } from "lucide-react";

export default function Home() {
  const activeSection = useScrollSpy(["home", "about", "skills", "projects", "experience", "contact"], 100);
  const { projects, experiences, skills, isLoading, isError, errorMessage } = usePortfolioData();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  // Cursor tracking for dynamic effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Page visibility animation
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Enhanced loading state with spectacular animations
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-teal-900/20">
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, -100, -20],
                x: [-10, 10, -10],
                opacity: [0.3, 0.8, 0.3],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="text-center z-10">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Rotating gradient ring */}
            <motion.div
              className="w-20 h-20 rounded-full border-4 border-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 p-1 mx-auto mb-6"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-purple-500" />
              </div>
            </motion.div>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg font-medium bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
          >
            Loading portfolio data...
          </motion.p>
          
          {/* Loading progress animation */}
          <motion.div 
            className="w-64 h-1 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mt-4 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>
    );
  }
  
  // Enhanced error state
  if (isError) {
    return (
      <motion.div 
        className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Error background animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-orange-900/10 to-yellow-900/10">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-red-400 rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          <Alert variant="destructive" className="max-w-lg backdrop-blur-sm bg-white/80 dark:bg-gray-800/80">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
            >
              <AlertCircle className="h-5 w-5" />
            </motion.div>
            <AlertTitle>Error loading portfolio data</AlertTitle>
            <AlertDescription>
              {errorMessage || "There was an error loading the portfolio data. Please try again later."}
            </AlertDescription>
          </Alert>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="min-h-screen flex flex-col relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Dynamic cursor glow effect */}
      <motion.div
        className="fixed w-6 h-6 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          background: "radial-gradient(circle, rgba(147, 51, 234, 0.8) 0%, transparent 70%)",
          filter: "blur(2px)",
        }}
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />

      {/* Background gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/5 via-blue-900/5 to-teal-900/5 dark:from-purple-900/20 dark:via-blue-900/20 dark:to-teal-900/20 pointer-events-none" />

      {/* Section transition animations */}
      <AnimatePresence mode="wait">
        <motion.div
          key="main-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Navbar activeSection={activeSection} />
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <HeroSection />
          </motion.div>
          
          {/* Staggered section animations */}
          {[
            { component: <AboutSection />, delay: 0.1 },
            { component: <SkillsSection skills={skills} />, delay: 0.2 },
            { component: <ProjectsSection projects={projects} />, delay: 0.3 },
            { component: <ExperienceSection experiences={experiences} />, delay: 0.4 },
            { component: <GitHubSection />, delay: 0.5 },
            { component: <ContactSection />, delay: 0.6 },
            { component: <Footer />, delay: 0.7 }
          ].map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ 
                duration: 0.8, 
                delay: section.delay,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              {section.component}
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Floating action button for scroll to top */}
      <motion.button
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full shadow-lg z-40 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1, boxShadow: "0 10px 25px rgba(147, 51, 234, 0.4)" }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <motion.i 
          className="fas fa-arrow-up"
          animate={{ y: [-2, 2, -2] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.button>

      {/* Dynamic background particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-100, window.innerHeight + 100],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}