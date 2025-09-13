import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function DynamicBackground({ theme = "light", intensity = "medium" }) {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const intensityConfig = {
    low: { particles: 10, opacity: 0.3, blur: 'blur-xl' },
    medium: { particles: 20, opacity: 0.5, blur: 'blur-lg' },
    high: { particles: 30, opacity: 0.7, blur: 'blur-md' },
  };

  const config = intensityConfig[intensity];

  // Dynamic gradient particles
  const GradientParticle = ({ index, total }) => {
    const angle = (index / total) * 360;
    const radius = 200 + Math.sin(scrollY * 0.01 + index) * 50;
    
    return (
      <motion.div
        className={`absolute w-32 h-32 rounded-full ${config.blur} opacity-${Math.floor(config.opacity * 100)}`}
        style={{
          background: `conic-gradient(from ${angle}deg, 
            rgba(147, 51, 234, ${config.opacity}), 
            rgba(59, 130, 246, ${config.opacity * 0.8}), 
            rgba(16, 185, 129, ${config.opacity * 0.6}), 
            rgba(245, 158, 11, ${config.opacity * 0.4}))`,
        }}
        animate={{
          x: Math.cos((angle * Math.PI) / 180) * radius + scrollY * 0.1,
          y: Math.sin((angle * Math.PI) / 180) * radius + scrollY * 0.05,
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20 + index * 2,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    );
  };

  // Floating geometric shapes
  const GeometricShape = ({ type, index }) => {
    const shapes = {
      triangle: (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon 
            points="50,10 90,90 10,90" 
            fill="currentColor"
            className="text-purple-400/20"
          />
        </svg>
      ),
      circle: (
        <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400/20 to-cyan-400/20" />
      ),
      square: (
        <div className="w-full h-full bg-gradient-to-br from-green-400/20 to-teal-400/20 rotate-45" />
      ),
      hexagon: (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon 
            points="50,5 85,25 85,75 50,95 15,75 15,25" 
            fill="currentColor"
            className="text-orange-400/20"
          />
        </svg>
      ),
    };

    return (
      <motion.div
        className="absolute w-16 h-16"
        style={{
          left: `${10 + (index * 20) % 80}%`,
          top: `${10 + (index * 15) % 80}%`,
        }}
        animate={{
          y: [0, -50, 0],
          x: [0, 30, -30, 0],
          rotate: [0, 180, 360],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 15 + index * 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.5,
        }}
      >
        {shapes[type]}
      </motion.div>
    );
  };

  // Flowing waves
  const FlowingWave = ({ delay, amplitude, frequency }) => (
    <motion.div
      className="absolute inset-0 opacity-10"
      style={{
        background: `linear-gradient(${90 + scrollY * 0.1}deg, 
          transparent 30%, 
          rgba(147, 51, 234, 0.1) 50%, 
          transparent 70%)`,
        backgroundSize: `${100 + scrollY * 0.05}px ${50 + amplitude}px`,
      }}
      animate={{
        backgroundPosition: [
          "0% 0%",
          `${frequency}% ${amplitude}%`,
          "0% 0%",
        ],
      }}
      transition={{
        duration: 10 + delay,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Mouse-following gradient overlay */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: theme === "dark" 
            ? `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
                rgba(147, 51, 234, 0.15) 0%, 
                rgba(59, 130, 246, 0.1) 30%, 
                rgba(16, 185, 129, 0.05) 60%, 
                transparent 80%)`
            : `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
                rgba(147, 51, 234, 0.08) 0%, 
                rgba(59, 130, 246, 0.06) 30%, 
                rgba(16, 185, 129, 0.04) 60%, 
                transparent 80%)`,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 30 }}
      />

      {/* Flowing waves */}
      <FlowingWave delay={0} amplitude={30} frequency={200} />
      <FlowingWave delay={3} amplitude={50} frequency={150} />
      <FlowingWave delay={6} amplitude={40} frequency={250} />

      {/* Gradient particles */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <GradientParticle key={i} index={i} total={8} />
        ))}
      </div>

      {/* Geometric shapes */}
      <div className="absolute inset-0">
        {["triangle", "circle", "square", "hexagon"].map((shape, i) => (
          <GeometricShape key={i} type={shape} index={i} />
        ))}
      </div>

      {/* Animated grid pattern */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: theme === "dark"
            ? `linear-gradient(rgba(147, 51, 234, 0.3) 1px, transparent 1px),
               linear-gradient(90deg, rgba(147, 51, 234, 0.3) 1px, transparent 1px)`
            : `linear-gradient(rgba(147, 51, 234, 0.2) 1px, transparent 1px),
               linear-gradient(90deg, rgba(147, 51, 234, 0.2) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
        animate={{
          backgroundPosition: [
            "0 0",
            "50px 50px",
            "0 0",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Color shift overlay */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: `linear-gradient(45deg, 
            rgba(147, 51, 234, 0.1) 0%, 
            rgba(59, 130, 246, 0.1) 25%, 
            rgba(16, 185, 129, 0.1) 50%, 
            rgba(245, 158, 11, 0.1) 75%, 
            rgba(239, 68, 68, 0.1) 100%)`,
          backgroundSize: "400% 400%",
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Parallax orbs */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 opacity-40"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
          }}
          animate={{
            y: [0, -scrollY * (0.1 + i * 0.02)],
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}