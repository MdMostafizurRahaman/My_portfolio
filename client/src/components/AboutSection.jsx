import SectionTitle from "@/components/ui/section-title.jsx";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { usePortfolioData } from "../hooks/use-portfolio-data.js";
import { Card, CardContent } from "./ui/card.jsx";
import { Button } from "./ui/button.jsx";
import { Download, Award, Target, Heart, Zap, Coffee } from "lucide-react";

export default function AboutSection() {
  const { personalInfo } = usePortfolioData();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    },
  };

  const highlights = [
    {
      icon: Award,
      title: "Experience",
      value: "3+ Years",
      description: "Building modern web applications",
      color: "from-purple-500 to-blue-600",
    },
    {
      icon: Target,
      title: "Projects",
      value: "50+ Completed",
      description: "Successful projects delivered",
      color: "from-blue-500 to-teal-600",
    },
    {
      icon: Heart,
      title: "Passion",
      value: "Code & Design",
      description: "Creating beautiful experiences",
      color: "from-teal-500 to-green-600",
    },
    {
      icon: Zap,
      title: "Innovation",
      value: "Cutting Edge",
      description: "Always learning new technologies",
      color: "from-orange-500 to-red-600",
    },
  ];

  return (
    <section 
      id="about" 
      className="py-20 relative overflow-hidden"
      ref={ref}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-block"
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent mb-4 relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              About Me
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </motion.h2>
          </motion.div>
          
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Passionate developer crafting digital experiences with code and creativity
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Section */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            <Card className="glass-effect backdrop-blur-xl border-white/20 shadow-2xl overflow-hidden group">
              <CardContent className="p-8">
                <div className="relative">
                  {/* Profile Image with enhanced effects */}
                  <motion.div
                    className="relative mx-auto w-48 h-48 mb-8"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 rounded-full p-1"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    >
                      <div className="w-full h-full bg-white dark:bg-gray-900 rounded-full p-2">
                        <motion.img
                          src={personalInfo?.profileImage || "/profile.jpg"}
                          alt={personalInfo?.name || "Profile"}
                          className="w-full h-full object-cover rounded-full"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </motion.div>
                    
                    {/* Floating icons */}
                    {[Coffee, Zap, Heart].map((Icon, index) => (
                      <motion.div
                        key={index}
                        className="absolute w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white shadow-lg"
                        style={{
                          top: `${20 + index * 25}%`,
                          right: index % 2 === 0 ? "-10px" : "-15px",
                        }}
                        animate={{
                          y: [-5, 5, -5],
                          rotate: [0, 360],
                        }}
                        transition={{
                          y: { duration: 2, repeat: Infinity, delay: index * 0.5 },
                          rotate: { duration: 8, repeat: Infinity, delay: index * 2 },
                        }}
                      >
                        <Icon size={16} />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Text Content */}
                  <motion.div
                    className="text-center space-y-4"
                    variants={containerVariants}
                  >
                    <motion.h3
                      variants={itemVariants}
                      className="text-2xl font-bold text-gray-900 dark:text-white"
                    >
                      {personalInfo?.name || "Your Name"}
                    </motion.h3>
                    
                    <motion.p
                      variants={itemVariants}
                      className="text-lg font-medium bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
                    >
                      {personalInfo?.title || "Full Stack Developer"}
                    </motion.p>
                    
                    <motion.p
                      variants={itemVariants}
                      className="text-gray-600 dark:text-gray-300 leading-relaxed"
                    >
                      {personalInfo?.description || 
                        "Passionate developer with expertise in modern web technologies. I love creating beautiful, functional applications that solve real-world problems."
                      }
                    </motion.p>

                    {/* Enhanced Download Resume Button */}
                    <motion.div
                      variants={itemVariants}
                      className="pt-4"
                    >
                      <Button
                        asChild
                        className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <motion.a
                          href={personalInfo?.resumeUrl || "/Mostafizur_Resume.pdf"}
                          download
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center space-x-2"
                        >
                          <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          >
                            <Download size={18} />
                          </motion.div>
                          <span className="font-medium">Download Resume</span>
                          
                          {/* Button glow effect */}
                          <motion.div
                            className="absolute inset-0 bg-white/20 rounded-full"
                            initial={{ scale: 0, opacity: 0 }}
                            whileHover={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        </motion.a>
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group cursor-pointer"
              >
                <Card className="glass-effect backdrop-blur-xl border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden h-full">
                  <CardContent className="p-6 text-center relative">
                    {/* Background gradient */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Icon */}
                    <motion.div
                      variants={iconVariants}
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${highlight.color} text-white mb-4 mx-auto`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <highlight.icon size={24} />
                    </motion.div>
                    
                    {/* Content */}
                    <motion.h4
                      className="font-bold text-lg text-gray-900 dark:text-white mb-2"
                      variants={itemVariants}
                    >
                      {highlight.value}
                    </motion.h4>
                    
                    <motion.p
                      className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      variants={itemVariants}
                    >
                      {highlight.title}
                    </motion.p>
                    
                    <motion.p
                      className="text-xs text-gray-500 dark:text-gray-400"
                      variants={itemVariants}
                    >
                      {highlight.description}
                    </motion.p>

                    {/* Hover particles */}
                    <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-white rounded-full"
                          style={{
                            left: `${20 + i * 15}%`,
                            top: `${30 + (i % 2) * 40}%`,
                          }}
                          animate={{
                            y: [-10, -20, -10],
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom decorative elements */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center space-x-4 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-teal-500/10 backdrop-blur-sm border border-white/20"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="text-purple-500" size={20} />
            </motion.div>
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              Always ready for new challenges
            </span>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Heart className="text-red-500" size={20} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}