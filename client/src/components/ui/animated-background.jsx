import { motion } from "framer-motion";

export default function AnimatedBackground() {
  const bubbles = [
    { top: "1/4", left: "1/6", size: "w-64 h-64", color: "bg-primary/10", delay: 0 },
    { bottom: "1/3", right: "1/5", size: "w-72 h-72", color: "bg-secondary/10", delay: 1 },
    { top: "2/3", left: "1/3", size: "w-48 h-48", color: "bg-accent/10", delay: 2 },
  ];

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {bubbles.map((bubble, index) => (
        <motion.div
          key={index}
          className={`absolute ${bubble.size} ${bubble.color} rounded-full blur-3xl`}
          style={{
            top: bubble.top,
            left: bubble.left,
            bottom: bubble.bottom,
            right: bubble.right,
          }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{
            repeat: Infinity,
            duration: 4,
            delay: bubble.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}