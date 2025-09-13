import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function AnimatedBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Enhanced bubble configurations with unique properties
  const bubbles = [
    { 
      position: { top: "10%", left: "10%" }, 
      size: "w-96 h-96", 
      gradient: "from-purple-500/20 via-pink-500/10 to-red-500/5",
      delay: 0,
      duration: 8,
      path: "circular"
    },
    { 
      position: { top: "60%", right: "15%" }, 
      size: "w-80 h-80", 
      gradient: "from-blue-500/20 via-cyan-500/10 to-teal-500/5",
      delay: 1,
      duration: 10,
      path: "figure8"
    },
    { 
      position: { bottom: "20%", left: "20%" }, 
      size: "w-64 h-64", 
      gradient: "from-green-500/20 via-emerald-500/10 to-lime-500/5",
      delay: 2,
      duration: 6,
      path: "wave"
    },
    { 
      position: { top: "30%", left: "60%" }, 
      size: "w-72 h-72", 
      gradient: "from-indigo-500/20 via-purple-500/10 to-pink-500/5",
      delay: 1.5,
      duration: 9,
      path: "spiral"
    },
    { 
      position: { bottom: "40%", right: "30%" }, 
      size: "w-56 h-56", 
      gradient: "from-yellow-500/20 via-orange-500/10 to-red-500/5",
      delay: 0.5,
      duration: 7,
      path: "pendulum"
    },
  ];

  // Geometric patterns
  const geometricShapes = [
    { type: "triangle", position: { top: "20%", right: "20%" }, rotation: 0, color: "text-purple-300/20" },
    { type: "square", position: { bottom: "30%", left: "70%" }, rotation: 45, color: "text-blue-300/20" },
    { type: "hexagon", position: { top: "70%", left: "10%" }, rotation: 0, color: "text-green-300/20" },
    { type: "circle", position: { top: "40%", right: "10%" }, rotation: 0, color: "text-pink-300/20" },
  ];

  // Floating particles for enhanced atmosphere
  const FloatingParticle = ({ index, count = 30 }) => {
    const x = (index / count) * 100;
    const y = Math.random() * 100;
    
    return (
      <motion.div
        className="absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-60"
        style={{ left: `${x}%`, top: `${y}%` }}
        animate={{
          y: [0, -50, 0],
          x: [0, Math.sin(index) * 20, 0],
          scale: [0.5, 1, 0.5],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 4 + Math.random() * 4,
          repeat: Infinity,
          delay: index * 0.1,
          ease: "easeInOut",
        }}
      />
    );
  };

  // Wave pattern component
  const WavePattern = () => (
    <motion.div
      className="absolute inset-0 opacity-10"
      style={{
        background: `
          linear-gradient(45deg, transparent 30%, rgba(147, 51, 234, 0.1) 50%, transparent 70%),
          linear-gradient(-45deg, transparent 30%, rgba(59, 130, 246, 0.1) 50%, transparent 70%)
        `,
        backgroundSize: "100px 100px, 150px 150px",
      }}
      animate={{
        backgroundPosition: [
          "0% 0%, 0% 0%",
          "100% 100%, -100% 100%",
          "0% 0%, 0% 0%",
        ],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );

  // Grid pattern component
  const GridPattern = () => (
    <motion.div
      className="absolute inset-0 opacity-5"
      style={{
        backgroundImage: `
          linear-gradient(rgba(147, 51, 234, 0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(147, 51, 234, 0.3) 1px, transparent 1px)
        `,
        backgroundSize: "50px 50px",
      }}
      animate={{
        backgroundPosition: ["0 0", "50px 50px", "0 0"],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );

  // Get animation path based on type
  const getAnimationProps = (bubble) => {
    const { path, duration, delay } = bubble;
    
    const animations = {
      circular: {
        x: [0, 30, 0, -30, 0],
        y: [0, -30, -60, -30, 0],
        scale: [1, 1.1, 1.2, 1.1, 1],
        rotate: [0, 90, 180, 270, 360],
      },
      figure8: {
        x: [0, 25, 0, -25, 0],
        y: [0, -20, -40, -20, 0],
        scale: [1, 1.15, 1.05, 1.15, 1],
        rotate: [0, 180, 360],
      },
      wave: {
        x: [0, 40, -40, 0],
        y: [0, -20, -40, -60, -40, -20, 0],
        scale: [1, 1.2, 0.9, 1.1, 1],
        rotate: [0, 45, -45, 0],
      },
      spiral: {
        x: [0, 20, 40, 20, 0, -20, -40, -20, 0],
        y: [0, -10, -20, -30, -40, -30, -20, -10, 0],
        scale: [1, 1.1, 1.2, 1.3, 1.2, 1.1, 1],
        rotate: [0, 45, 90, 135, 180, 225, 270, 315, 360],
      },
      pendulum: {
        x: [0, 30, 0, -30, 0],
        y: [0, -15, -30, -15, 0],
        scale: [1, 1.05, 1.1, 1.05, 1],
        rotate: [0, 15, -15, 0],
      },
    };

    return {
      animate: animations[path] || animations.circular,
      transition: {
        duration,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      },
    };
  };

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Grid and Wave Patterns */}
      <GridPattern />
      <WavePattern />

      {/* Mouse-following gradient overlay */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(147, 51, 234, 0.1) 0%, 
            rgba(59, 130, 246, 0.05) 30%, 
            transparent 60%)`,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 30 }}
      />

      {/* Enhanced animated bubbles with complex paths */}
      {bubbles.map((bubble, index) => {
        const animationProps = getAnimationProps(bubble);
        
        return (
          <motion.div
            key={index}
            className={`absolute ${bubble.size} bg-gradient-to-br ${bubble.gradient} rounded-full blur-3xl`}
            style={bubble.position}
            {...animationProps}
          >
            {/* Inner glowing core */}
            <motion.div
              className="absolute inset-4 bg-gradient-to-br from-white/10 to-transparent rounded-full"
              animate={{
                opacity: [0.3, 0.7, 0.3],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: bubble.delay + 1,
              }}
            />
          </motion.div>
        );
      })}

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <FloatingParticle key={i} index={i} count={30} />
        ))}
      </div>

      {/* Geometric shapes */}
      {geometricShapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute w-16 h-16 ${shape.color}`}
          style={shape.position}
          animate={{
            rotate: [shape.rotation, shape.rotation + 360],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8 + index * 2,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {shape.type === "triangle" && (
            <svg viewBox="0 0 100 100" fill="currentColor">
              <polygon points="50,10 90,90 10,90" />
            </svg>
          )}
          {shape.type === "square" && (
            <div className="w-full h-full bg-current" />
          )}
          {shape.type === "hexagon" && (
            <svg viewBox="0 0 100 100" fill="currentColor">
              <polygon points="50,5 85,25 85,75 50,95 15,75 15,25" />
            </svg>
          )}
          {shape.type === "circle" && (
            <div className="w-full h-full bg-current rounded-full" />
          )}
        </motion.div>
      ))}

      {/* Color wave effect */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: `
            linear-gradient(45deg, 
              rgba(147, 51, 234, 0.1) 0%, 
              rgba(59, 130, 246, 0.1) 25%, 
              rgba(16, 185, 129, 0.1) 50%, 
              rgba(245, 158, 11, 0.1) 75%, 
              rgba(239, 68, 68, 0.1) 100%
            )
          `,
          backgroundSize: "400% 400%",
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Orbital rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-purple-300/10 rounded-full"
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
            }}
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear",
              direction: i % 2 === 0 ? "normal" : "reverse",
            }}
          />
        ))}
      </div>

      {/* Dynamic light beams */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        style={{
          background: `
            conic-gradient(from 0deg at 50% 50%, 
              transparent 0deg, 
              rgba(147, 51, 234, 0.1) 60deg, 
              transparent 120deg,
              rgba(59, 130, 246, 0.1) 180deg,
              transparent 240deg,
              rgba(16, 185, 129, 0.1) 300deg,
              transparent 360deg
            )
          `,
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}