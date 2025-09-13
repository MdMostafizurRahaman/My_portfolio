import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Heart, 
  ArrowUp,
  Code,
  Coffee,
  Sparkles,
  MapPin,
  Calendar,
  Star,
  Rocket
} from "lucide-react";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const year = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const navigationLinks = [
    { name: "Home", id: "home", icon: Rocket },
    { name: "About", id: "about", icon: Star },
    { name: "Skills", id: "skills", icon: Code },
    { name: "Projects", id: "projects", icon: Coffee },
    { name: "Contact", id: "contact", icon: Mail },
  ];

  const socialLinks = [
    { 
      icon: Github, 
      url: "https://github.com/MdMostafizurRahaman", 
      label: "GitHub",
      color: "from-gray-700 to-gray-900",
      username: "@MdMostafizurRahaman"
    },
    { 
      icon: Linkedin, 
      url: "https://linkedin.com/in/md-mostafizur-rahaman", 
      label: "LinkedIn",
      color: "from-blue-600 to-blue-800",
      username: "md-mostafizur-rahaman"
    },
    { 
      icon: Mail, 
      url: "mailto:bsse1320@iit.du.ac.bd", 
      label: "Email",
      color: "from-purple-600 to-purple-800",
      username: "bsse1320@iit.du.ac.bd"
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer 
      className="relative bg-gray-900 dark:bg-black text-white py-20 overflow-hidden"
      ref={ref}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-teal-500/10 to-green-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.5, 0.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -40, -20],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="mb-12">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Md Mostafizur Rahaman
            </motion.h2>
            
            <motion.div
              className="flex items-center justify-center space-x-4 text-gray-300"
              variants={itemVariants}
            >
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <MapPin size={16} />
                <span>Dhaka, Bangladesh</span>
              </motion.div>
              
              <motion.div className="w-1 h-1 bg-gray-500 rounded-full" />
              
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <Calendar size={16} />
                <span>Available for opportunities</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div variants={itemVariants} className="mb-12">
            <motion.h3 
              className="text-xl font-semibold mb-6 text-gray-300"
              variants={itemVariants}
            >
              Quick Navigation
            </motion.h3>
            
            <div className="flex flex-wrap justify-center gap-6">
              {navigationLinks.map((link, index) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToElement(link.id);
                  }}
                  className="group relative"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div
                    className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 border border-gray-700/50 hover:border-blue-500/50"
                    whileHover={{
                      boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
                    }}
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                      <link.icon size={16} className="text-blue-400" />
                    </motion.div>
                    <span className="text-gray-300 group-hover:text-blue-400 transition-colors font-medium">
                      {link.name}
                    </span>
                  </motion.div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="mb-12">
            <motion.h3 
              className="text-xl font-semibold mb-6 text-gray-300"
              variants={itemVariants}
            >
              Connect With Me
            </motion.h3>
            
            <div className="flex justify-center space-x-8">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2, type: "spring", stiffness: 200 }}
                >
                  <motion.div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-r ${link.color} flex items-center justify-center text-white shadow-2xl relative overflow-hidden`}
                    whileHover={{
                      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)",
                      rotate: 360,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      animate={{ scale: [0, 1.2, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    />
                    
                    <link.icon size={24} className="relative z-10" />
                  </motion.div>
                  
                  {/* Tooltip */}
                  <motion.div
                    className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none"
                    initial={{ y: 10 }}
                    whileHover={{ y: 0 }}
                  >
                    {link.username}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800" />
                  </motion.div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quote Section */}
          <motion.div variants={itemVariants} className="mb-12">
            <motion.div
              className="max-w-2xl mx-auto p-6 rounded-2xl bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-teal-900/20 backdrop-blur-sm border border-gray-700/50"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="flex items-center justify-center mb-4"
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Code className="text-blue-400" size={24} />
              </motion.div>
              
              <motion.p
                className="text-lg text-gray-300 italic mb-4"
                variants={itemVariants}
              >
                "Code is like humor. When you have to explain it, it's bad."
              </motion.p>
              
              <motion.div
                className="flex items-center justify-center space-x-2 text-gray-400"
                variants={itemVariants}
              >
                <Coffee size={16} />
                <span>Powered by coffee and curiosity</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Heart className="text-red-500" size={16} />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Bottom Section */}
          <motion.div variants={itemVariants} className="border-t border-gray-700/50 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <motion.p
                className="text-gray-400 flex items-center space-x-2"
                variants={itemVariants}
              >
                <span>&copy; {year} Md Mostafizur Rahaman.</span>
                <span>Made with</span>
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Heart className="text-red-500" size={16} />
                </motion.div>
                <span>and lots of</span>
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Coffee className="text-amber-500" size={16} />
                </motion.div>
              </motion.p>

              <motion.div
                className="flex items-center space-x-4"
                variants={itemVariants}
              >
                <motion.div
                  className="flex items-center space-x-2 text-gray-400"
                  whileHover={{ scale: 1.05 }}
                >
                  <Sparkles className="text-yellow-400" size={16} />
                  <span className="text-sm">Built with React & Framer Motion</span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll to top button */}
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg z-50 flex items-center justify-center group"
          initial={{ opacity: 0, scale: 0, x: -50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          whileHover={{ 
            scale: 1.1, 
            boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)",
            rotate: -360,
          }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.6, type: "spring" }}
        >
          <motion.div
            animate={{ y: [-2, 2, -2] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowUp size={20} />
          </motion.div>
          
          <motion.div
            className="absolute inset-0 border-2 border-white/30 rounded-full"
            animate={{ scale: [1, 1.2, 1], opacity: [0.7, 0, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.button>
      </div>
    </footer>
  );
}