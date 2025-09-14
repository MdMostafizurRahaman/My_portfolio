import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { scrollToElement } from "../lib/utils";
import AnimatedBackground from "./ui/animated-background.jsx";
import TypedText from "./ui/typed-text.jsx";

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = document.getElementById('home')?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Floating particles component
  const FloatingParticle = ({ delay = 0, x = 50, y = 50, size = 4 }) => (
    <motion.div
      className="absolute rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-70"
      style={{
        width: size,
        height: size,
        left: `${x}%`,
        top: `${y}%`,
      }}
      animate={{
        y: [0, -30, 0],
        x: [0, 15, -15, 0],
        scale: [1, 1.2, 0.8, 1],
        opacity: [0.7, 1, 0.3, 0.7],
      }}
      transition={{
        duration: 4 + Math.random() * 2,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    />
  );

  // Morphing shape component
  const MorphingShape = ({ className }) => (
    <motion.div
      className={`absolute ${className} rounded-full mix-blend-multiply dark:mix-blend-lighten`}
      animate={{
        borderRadius: ["50%", "30% 70% 70% 30%", "70% 30% 30% 70%", "50%"],
        scale: [1, 1.1, 0.9, 1],
        rotate: [0, 90, 180, 360],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Dynamic gradient background that follows mouse */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(147, 51, 234, 0.15) 0%, 
            rgba(59, 130, 246, 0.1) 25%, 
            rgba(16, 185, 129, 0.05) 50%, 
            transparent 70%)`,
        }}
        animate={{
          opacity: isHovered ? 1 : 0.7,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Enhanced animated background */}
      <AnimatedBackground />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <FloatingParticle
            key={i}
            delay={i * 0.2}
            x={Math.random() * 100}
            y={Math.random() * 100}
            size={2 + Math.random() * 4}
          />
        ))}
      </div>

      {/* Morphing shapes */}
      <MorphingShape className="top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-pink-400/20" />
      <MorphingShape className="bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-blue-400/20 to-cyan-400/20" />
      <MorphingShape className="top-1/2 left-5 w-24 h-24 bg-gradient-to-r from-green-400/20 to-teal-400/20" />

      <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-5 gap-8 items-center z-10">
        <div className="md:col-span-3 space-y-8 order-2 md:order-1">
          <motion.div 
            className="space-y-3"
            initial={{ opacity: 0, y: 50, rotateX: -15 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.p 
              className="text-lg md:text-xl text-primary font-semibold"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              style={{
                background: "linear-gradient(45deg, #9333ea, #3b82f6, #10b981, #9333ea)",
                backgroundSize: "300% 300%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              Hello, I'm
            </motion.p>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold font-poppins"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.span
                className="inline-block text-black dark:text-white"
              >
                Md Mostafizur Rahaman
              </motion.span>
            </motion.h1>
            
            <motion.div
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium mt-2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <TypedText 
                texts={[
                  'Software Engineer 💻', 
                  'Competitive Programmer 🏆', 
                  'Web Developer 🌐', 
                  'Problem Solver 🧩',
                  'Full-Stack Developer 🚀',
                  'Tech Enthusiast 💡'
                ]} 
                typingSpeed={80}
                deletingSpeed={40}
                pauseTime={1500}
              />
            </motion.div>
          </motion.div>

          <motion.p 
            className="text-gray-600 dark:text-gray-300 text-lg md:pr-16 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.02, color: "#6b7280" }}
          >
            Passionate software developer with expertise in{" "}
            <motion.span 
              className="font-semibold text-purple-600 dark:text-purple-400"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              C++
            </motion.span>
            ,{" "}
            <motion.span 
              className="font-semibold text-blue-600 dark:text-blue-400"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              JavaScript
            </motion.span>
            , and web technologies. 
            Problem solver, competitive programmer, and creator of efficient, innovative solutions.
          </motion.p>

          <motion.div 
            className="flex space-x-4 pt-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.a 
              href="#contact" 
              className="relative bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-medium overflow-hidden group"
              onClick={(e) => {
                e.preventDefault();
                scrollToElement("contact");
              }}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(147, 51, 234, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">Contact Me</span>
              <motion.div
                className="absolute inset-0 bg-white opacity-20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </motion.a>
            
            <motion.a 
              href="#projects" 
              className="relative bg-white dark:bg-gray-800 border-2 border-purple-600 text-purple-600 hover:text-white px-8 py-3 rounded-full font-medium overflow-hidden group"
              onClick={(e) => {
                e.preventDefault();
                scrollToElement("projects");
              }}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgb(147, 51, 234)",
                borderColor: "rgb(147, 51, 234)",
                color: "white"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <span className="relative z-10">View Projects</span>
            </motion.a>
          </motion.div>

          <motion.div 
            className="flex space-x-6 pt-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {[
              { href: "https://github.com/MdMostafizurRahaman", icon: "fab fa-github", color: "hover:text-gray-800" },
              { href: "https://linkedin.com/in/md-mostafizur-rahaman", icon: "fab fa-linkedin", color: "hover:text-blue-600" },
              { href: "mailto:bsse1320@iit.du.ac.bd", icon: "fas fa-envelope", color: "hover:text-purple-600" }
            ].map((social, index) => (
              <motion.a 
                key={index}
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`text-dark dark:text-white ${social.color} transition-colors text-xl`}
                whileHover={{ 
                  scale: 1.3, 
                  rotate: 360,
                  textShadow: "0 0 20px rgba(147, 51, 234, 0.8)"
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <i className={social.icon}></i>
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div 
          className="md:col-span-2 flex justify-center order-1 md:order-2"
          initial={{ opacity: 0, scale: 0.5, rotateY: -45 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, delay: 0.5, type: "spring" }}
        >
          <motion.div 
            className="relative w-60 h-60 md:w-80 md:h-80"
            animate={{ 
              y: [0, -20, 0],
              rotateY: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            whileHover={{ scale: 1.05, rotateY: 10 }}
          >
            {/* Multiple glowing rings */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute inset-0 rounded-full border-2"
                style={{
                  borderColor: `rgba(147, 51, 234, ${0.3 - i * 0.1})`,
                  margin: `${i * 8}px`,
                }}
                animate={{ rotate: [0, 360] }}
                transition={{
                  duration: 10 + i * 2,
                  repeat: Infinity,
                  ease: "linear",
                  direction: i % 2 === 0 ? "normal" : "reverse",
                }}
              />
            ))}

            {/* Main profile container */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-purple-500 via-blue-500 to-teal-500 rounded-full blur-md opacity-30"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            <motion.div 
              className="absolute inset-2 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl"
              whileHover={{ borderColor: "rgb(147, 51, 234)" }}
              transition={{ duration: 0.3 }}
            >
              <motion.img 
                src="/profile.jpg" 
                alt="Md Mostafizur Rahaman" 
                className="h-full w-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Overlay gradient on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        whileHover={{ scale: 1.2 }}
      >
        <motion.a 
          href="#about" 
          className="flex flex-col items-center text-purple-600"
          onClick={(e) => {
            e.preventDefault();
            scrollToElement("about");
          }}
          whileHover={{ color: "#3b82f6" }}
        >
          <motion.i 
            className="fas fa-chevron-down text-2xl mb-2"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
          <span className="text-xs font-medium">Scroll Down</span>
        </motion.a>
      </motion.div>

      {/* Interactive mouse follower */}
      <motion.div
        className="absolute w-32 h-32 rounded-full pointer-events-none mix-blend-multiply dark:mix-blend-lighten"
        style={{
          background: "radial-gradient(circle, rgba(147, 51, 234, 0.1) 0%, transparent 70%)",
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: "translate(-50%, -50%)",
        }}
        animate={{
          scale: isHovered ? 1.5 : 1,
          opacity: isHovered ? 0.8 : 0.4,
        }}
        transition={{ duration: 0.3 }}
      />
    </section>
  );
}
//need this