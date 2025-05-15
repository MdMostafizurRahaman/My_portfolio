import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { scrollToElement } from "../lib/utils";
import AnimatedBackground from "./ui/animated-background.jsx";
import TypedText from "./ui/typed-text.jsx";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-accent/5 via-primary/5 to-secondary/5 dark:from-accent/20 dark:via-primary/20 dark:to-secondary/20"></div>
      
      <AnimatedBackground />

      <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-5 gap-8 items-center z-10">
        <div className="md:col-span-3 space-y-8 order-2 md:order-1">
          <motion.div 
            className="space-y-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg md:text-xl text-primary font-semibold">Hello, I'm</p>
            <h1 className="text-4xl md:text-6xl font-bold font-poppins">
              Md Mostafizur Rahaman
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium mt-2">
              <TypedText 
                texts={['Software Engineer', 'Competitive Programmer', 'Web Developer', 'Problem Solver']} 
                typingSpeed={100}
                deletingSpeed={50}
                pauseTime={1000}
              />
            </p>
          </motion.div>

          <motion.p 
            className="text-gray-600 dark:text-gray-300 text-lg md:pr-16 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Passionate software developer with expertise in C++, JavaScript, and web technologies. 
            Problem solver, competitive programmer, and creator of efficient, innovative solutions.
          </motion.p>

          <motion.div 
            className="flex space-x-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a 
              href="#contact" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-medium transition-all hover:shadow-lg hover:shadow-primary/30 transform hover:-translate-y-1"
              onClick={(e) => {
                e.preventDefault();
                scrollToElement("contact");
              }}
            >
              Contact Me
            </a>
            <a 
              href="#projects" 
              className="bg-white dark:bg-gray-800 border-2 border-primary text-primary hover:bg-primary/5 dark:hover:bg-primary/20 px-8 py-3 rounded-full font-medium transition-all"
              onClick={(e) => {
                e.preventDefault();
                scrollToElement("projects");
              }}
            >
              View Projects
            </a>
          </motion.div>

          <motion.div 
            className="flex space-x-6 pt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a href="https://github.com/MdMostafizurRahaman" target="_blank" rel="noopener noreferrer" className="text-dark dark:text-white hover:text-primary transition-colors text-xl" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/md-mostafizur-rahaman" target="_blank" rel="noopener noreferrer" className="text-dark dark:text-white hover:text-primary transition-colors text-xl" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:bsse1320@iit.du.ac.bd" className="text-dark dark:text-white hover:text-primary transition-colors text-xl" aria-label="Email">
              <i className="fas fa-envelope"></i>
            </a>
          </motion.div>
        </div>

        <motion.div 
          className="md:col-span-2 flex justify-center order-1 md:order-2 animate-float"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-60 h-60 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-md opacity-30"></div>
            <div className="absolute inset-2 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center overflow-hidden">
              <img 
                src="/profile.jpg" 
                alt="Md Mostafizur Rahaman" 
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <a 
          href="#about" 
          className="text-primary"
          onClick={(e) => {
            e.preventDefault();
            scrollToElement("about");
          }}
        >
          <i className="fas fa-chevron-down text-2xl"></i>
        </a>
      </motion.div>
    </section>
  );
}