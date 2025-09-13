import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Navbar from "../components/Navbar.jsx";
import HeroSection from "../components/HeroSection.jsx";
import AboutSection from "../components/AboutSection.jsx";
import SkillsSection from "../components/SkillsSection.jsx";
import ProjectsSection from "../components/ProjectsSection.jsx";
import ExperienceSection from "../components/ExperienceSection.jsx";
import GitHubSection from "../components/GitHubSection.jsx";
import ContactSection from "../components/ContactSection.jsx";
import Footer from "../components/Footer.jsx";
import DynamicBackground from "../components/ui/dynamic-background.jsx";
import { useScrollSpy } from "../hooks/use-scroll-spy.jsx";
import { useScrollAnimations } from "../hooks/use-scroll-animations.jsx";
import { usePortfolioData } from "../hooks/use-portfolio-data.js";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert.jsx";
import { AlertCircle, Loader2 } from "lucide-react";

export default function Home() {
  const activeSection = useScrollSpy(["home", "about", "skills", "projects", "experience", "contact"], 100);
  const { projects, experiences, skills, isLoading, isError, errorMessage } = usePortfolioData();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [theme, setTheme] = useState("light");
  const [cursorVariant, setCursorVariant] = useState("default");

  // Framer Motion scroll hooks
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  
  // Initialize scroll animations
  useScrollAnimations();

  // Advanced cursor tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Detect hover targets
      const target = e.target;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.classList.contains('interactive')) {
        setCursorVariant("hover");
      } else if (target.classList.contains('text-element')) {
        setCursorVariant("text");
      } else {
        setCursorVariant("default");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Theme detection
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    
    const observer = new MutationObserver(() => {
      setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
    });
    
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  // Page visibility animation
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Enhanced loading state with spectacular animations
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <DynamicBackground theme={theme} intensity="low" />
        
        {/* Animated loading rings */}
        <div className="relative z-10">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 rounded-full border-4 border-transparent"
              style={{
                borderTopColor: `rgba(147, 51, 234, ${0.8 - i * 0.2})`,
                width: `${80 + i * 40}px`,
                height: `${80 + i * 40}px`,
                margin: `${-40 - i * 20}px 0 0 ${-40 - i * 20}px`,
                top: '50%',
                left: '50%',
              }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 2 - i * 0.3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
          
          <motion.div
            className="relative z-20 flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <motion.div
              className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 flex items-center justify-center mb-8"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Loader2 className="h-8 w-8 text-white animate-spin" />
            </motion.div>
            
            <motion.h2
              className="text-2xl font-bold text-shimmer mb-4"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Loading Portfolio
            </motion.h2>
            
            <motion.div 
              className="flex space-x-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                  animate={{
                    y: [0, -20, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.div>
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
        <DynamicBackground theme={theme} intensity="low" />
        
        <motion.div
          className="relative z-10"
          initial={{ scale: 0.8, opacity: 0, rotateX: -15 }}
          animate={{ scale: 1, opacity: 1, rotateX: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
        >
          <Alert variant="destructive" className="max-w-lg glass-effect backdrop-blur-xl">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <AlertCircle className="h-6 w-6" />
            </motion.div>
            <AlertTitle className="text-lg">Error loading portfolio data</AlertTitle>
            <AlertDescription className="text-base">
              {errorMessage || "There was an error loading the portfolio data. Please try again later."}
            </AlertDescription>
          </Alert>
        </motion.div>
      </motion.div>
    );
  }

  const cursorVariants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
      backgroundColor: "rgba(147, 51, 234, 0.5)",
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      scale: 1.5,
      backgroundColor: "rgba(59, 130, 246, 0.7)",
    },
    text: {
      x: mousePosition.x - 12,
      y: mousePosition.y - 12,
      scale: 0.8,
      backgroundColor: "rgba(16, 185, 129, 0.6)",
    },
  };

  return (
    <motion.div 
      className="min-h-screen flex flex-col relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 1 }}
    >
      {/* Dynamic Background */}
      <DynamicBackground theme={theme} intensity="medium" />

      {/* Advanced cursor effect */}
      <motion.div
        className="fixed w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-difference"
        variants={cursorVariants}
        animate={cursorVariant}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />

      {/* Scroll progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Section transition effects */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-10"
        style={{ y: backgroundY }}
      >
        <div className="w-full h-full bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
      </motion.div>

      {/* Main content with staggered animations */}
      <AnimatePresence mode="wait">
        <motion.div
          key="main-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Navbar activeSection={activeSection} />
          
          {/* Enhanced section animations */}
          <motion.div
            className="scroll-reveal animate-on-scroll"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <HeroSection />
          </motion.div>
          
          {[
            { component: <AboutSection />, className: "scroll-reveal-left" },
            { component: <SkillsSection skills={skills} />, className: "scroll-reveal-right" },
            { component: <ProjectsSection projects={projects} />, className: "scroll-reveal" },
            { component: <ExperienceSection experiences={experiences} />, className: "scroll-reveal-left" },
            { component: <GitHubSection />, className: "scroll-reveal-right" },
            { component: <ContactSection />, className: "scroll-reveal" },
            { component: <Footer />, className: "scroll-reveal" }
          ].map((section, index) => (
            <motion.div
              key={index}
              className={`${section.className} animate-on-scroll hover-lift-rotate`}
              data-delay={index}
              initial={{ opacity: 0, y: 60, rotateX: -10 }}
              whileInView={{ 
                opacity: 1, 
                y: 0, 
                rotateX: 0,
                transition: {
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }
              }}
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              {section.component}
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Enhanced floating action button */}
      <motion.button
        className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 text-white rounded-full shadow-2xl z-40 flex items-center justify-center group overflow-hidden"
        initial={{ opacity: 0, scale: 0, rotate: -180 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        whileHover={{ 
          scale: 1.1, 
          boxShadow: "0 20px 40px rgba(147, 51, 234, 0.4)",
          rotate: 360,
        }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.6, type: "spring" }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 opacity-0 group-hover:opacity-100"
          transition={{ duration: 0.3 }}
        />
        
        <motion.i 
          className="fas fa-arrow-up relative z-10 text-lg"
          animate={{ y: [-2, 2, -2] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        <motion.div
          className="absolute inset-0 border-2 border-white/30 rounded-full"
          animate={{ scale: [1, 1.2, 1], opacity: [0.7, 0, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.button>

      {/* Floating particles for the entire page */}
      <div className="fixed inset-0 pointer-events-none z-5">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-window.innerHeight, window.innerHeight],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: i * 2,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Section dividers with animated gradients */}
      <motion.div
        className="fixed inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent z-5"
        animate={{
          opacity: [0.3, 0.8, 0.3],
          scaleX: [0.8, 1.2, 0.8],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}