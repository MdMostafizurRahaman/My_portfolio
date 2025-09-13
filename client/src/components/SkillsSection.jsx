import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card.jsx";
import Badge from "./ui/badge.jsx";
import { 
  Code, 
  Database, 
  Globe, 
  Smartphone, 
  Palette, 
  Settings,
  Zap,
  Star,
  TrendingUp,
  Award,
  Trophy,
  Target
} from "lucide-react";

export default function SkillsSection({ skills = [] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeCategory, setActiveCategory] = useState(null);

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
    hidden: { opacity: 0, y: 30, scale: 0.9 },
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

  const skillVariants = {
    hidden: { opacity: 0, x: -20, rotateY: -90 },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
  };

  const defaultSkills = [
    {
      category: "Programming Languages",
      icon: Code,
      color: "from-blue-500 to-purple-600",
      skills: [
        { name: "C++", level: 95, experience: "3 years" },
        { name: "C", level: 90, experience: "3 years" },
        { name: "JavaScript", level: 85, experience: "2 years" },
        { name: "Java", level: 70, experience: "1 year" },
      ],
    },
    {
      category: "Frontend Development",
      icon: Globe,
      color: "from-green-500 to-teal-600",
      skills: [
        { name: "React.js", level: 90, experience: "2 years" },
        { name: "HTML5", level: 95, experience: "3 years" },
        { name: "CSS3", level: 90, experience: "3 years" },
        { name: "Tailwind CSS", level: 85, experience: "1 year" },
      ],
    },
    {
      category: "Backend Development",
      icon: Database,
      color: "from-purple-500 to-pink-600",
      skills: [
        { name: "Node.js", level: 85, experience: "2 years" },
        { name: "Express.js", level: 80, experience: "2 years" },
        { name: "MongoDB", level: 85, experience: "2 years" },
        { name: "SQLite3", level: 78, experience: "1 year" },
      ],
    },
    {
      category: "Tools & Technologies",
      icon: Settings,
      color: "from-orange-500 to-red-600",
      skills: [
        { name: "Git/GitHub", level: 90, experience: "3 years" },
        { name: "Kali Linux", level: 75, experience: "1 year" },
        { name: "WireShark", level: 70, experience: "1 year" },
        { name: "VS Code", level: 95, experience: "3 years" },
      ],
    },
  ];

  const competitiveProgramming = [
    { icon: Trophy, value: "50+", label: "Programming Contests", color: "from-yellow-500 to-orange-600" },
    { icon: Target, value: "600+", label: "Problems Solved", color: "from-green-500 to-teal-600" },
  ];

  const platforms = [
    { 
      name: "Codeforces", 
      icon: Code, 
      link: "https://codeforces.com/profile/Error003",
      color: "from-blue-500 to-indigo-600"
    },
    { 
      name: "LeetCode", 
      icon: Zap, 
      link: "https://leetcode.com/u/Error003/",
      color: "from-orange-500 to-red-600"
    },
    { 
      name: "Coding Ninjas", 
      icon: Star, 
      link: "https://www.naukri.com/code360/profile/38423620-041c-4fe7-8d20-9f0ef0b6d104",
      color: "from-purple-500 to-pink-600"
    },
    { 
      name: "GeeksforGeeks", 
      icon: TrendingUp, 
      link: "https://www.geeksforgeeks.org/user/bsse11mil/",
      color: "from-green-500 to-teal-600"
    },
  ];

  // Handle both prop skills and defaultSkills structure
  const skillCategories = (skills && skills.length > 0 && skills[0].skills) ? skills : defaultSkills;

  const getSkillLevelColor = (level) => {
    if (level >= 90) return "from-green-500 to-emerald-600";
    if (level >= 80) return "from-blue-500 to-indigo-600";
    if (level >= 70) return "from-yellow-500 to-orange-600";
    return "from-gray-500 to-slate-600";
  };

  const getSkillIcon = (level) => {
    if (level >= 90) return Award;
    if (level >= 80) return Star;
    if (level >= 70) return TrendingUp;
    return Zap;
  };

  return (
    <section 
      id="skills" 
      className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden"
      ref={ref}
    >
      {/* Dynamic background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [-50, 50, -50],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-teal-500/10 to-green-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
            y: [-30, 30, -30],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
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
            className="inline-block relative"
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent mb-4 relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              My Skills
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
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
            My technical expertise and proficiency in various programming languages and technologies
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-8 mb-16"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              variants={itemVariants}
              className="group"
              onMouseEnter={() => setActiveCategory(categoryIndex)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              <Card className="glass-effect backdrop-blur-xl border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden h-full group-hover:scale-105">
                <CardHeader className="relative">
                  {/* Background gradient effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-all duration-500`}
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  <div className="relative z-10 flex items-center space-x-4">
                    <motion.div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center text-white shadow-lg`}
                      whileHover={{ 
                        rotate: 360,
                        scale: 1.1,
                      }}
                      transition={{ 
                        rotate: { duration: 0.6 },
                        scale: { duration: 0.3 }
                      }}
                    >
                      <category.icon size={24} />
                    </motion.div>
                    
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                        {category.category}
                      </CardTitle>
                      <motion.p
                        className="text-sm text-gray-500 dark:text-gray-400"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        {category.skills?.length || 0} technologies
                      </motion.p>
                    </div>
                  </div>

                  {/* Floating particles */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        style={{
                          left: `${10 + i * 10}%`,
                          top: `${20 + (i % 3) * 20}%`,
                        }}
                        animate={{
                          y: [-10, -20, -10],
                          opacity: [0.3, 1, 0.3],
                          scale: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <motion.div
                    variants={containerVariants}
                    className="space-y-3"
                  >
                    {(category.skills || []).map((skill, skillIndex) => {
                      const SkillIcon = getSkillIcon(skill.level);
                      return (
                        <motion.div
                          key={skill.name}
                          variants={skillVariants}
                          whileHover={{ x: 10, scale: 1.02 }}
                          className="group/skill relative"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-2">
                              <motion.div
                                className={`w-6 h-6 rounded-full bg-gradient-to-r ${getSkillLevelColor(skill.level)} flex items-center justify-center`}
                                whileHover={{ rotate: 180 }}
                                transition={{ duration: 0.3 }}
                              >
                                <SkillIcon size={12} className="text-white" />
                              </motion.div>
                              <span className="font-medium text-gray-900 dark:text-white text-sm group-hover/skill:text-blue-600 dark:group-hover/skill:text-blue-400 transition-colors">
                                {skill.name}
                              </span>
                            </div>
                            
                            <div className="flex items-center space-x-2">
                              <Badge 
                                variant="secondary" 
                                className="text-xs bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300"
                              >
                                {skill.experience}
                              </Badge>
                              <span className="text-xs font-bold text-gray-600 dark:text-gray-400">
                                {skill.level}%
                              </span>
                            </div>
                          </div>
                          
                          {/* Animated skill bar */}
                          <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <motion.div
                              className={`absolute left-0 top-0 h-full bg-gradient-to-r ${getSkillLevelColor(skill.level)} rounded-full`}
                              initial={{ width: 0 }}
                              animate={
                                isInView && activeCategory === categoryIndex
                                  ? { width: `${skill.level}%` }
                                  : { width: 0 }
                              }
                              transition={{ 
                                duration: 1.5, 
                                delay: skillIndex * 0.1,
                                ease: "easeOut"
                              }}
                            />
                            
                            {/* Shimmer effect */}
                            <motion.div
                              className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                              animate={{ x: [-100, 300] }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatDelay: 3,
                                ease: "easeInOut"
                              }}
                            />
                          </div>

                          {/* Skill tooltip */}
                          <motion.div
                            className="absolute left-1/2 transform -translate-x-1/2 -top-12 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-3 py-1 rounded-lg text-xs font-medium opacity-0 group-hover/skill:opacity-100 transition-opacity duration-200 pointer-events-none z-10"
                            initial={{ y: 10 }}
                            whileHover={{ y: 0 }}
                          >
                            {skill.level}% proficiency • {skill.experience}
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-gray-100" />
                          </motion.div>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Competitive Programming Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
          >
            Competitive Programming
          </motion.h3>

          {/* Stats */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
          >
            {competitiveProgramming.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group cursor-pointer"
              >
                <Card className="glass-effect backdrop-blur-xl border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden h-full">
                  <CardContent className="p-8 text-center relative">
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    <motion.div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${stat.color} text-white mb-4 mx-auto`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <stat.icon size={24} />
                    </motion.div>
                    
                    <motion.h4
                      className="font-bold text-3xl text-gray-900 dark:text-white mb-2"
                      variants={itemVariants}
                    >
                      {stat.value}
                    </motion.h4>
                    
                    <motion.p
                      className="text-lg font-medium text-gray-700 dark:text-gray-300"
                      variants={itemVariants}
                    >
                      {stat.label}
                    </motion.p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Platforms */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {platforms.map((platform, index) => (
              <motion.a
                key={platform.name}
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group block"
              >
                <Card className="glass-effect backdrop-blur-xl border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                  <CardContent className="p-6 text-center relative">
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    <motion.div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${platform.color} text-white mb-3 mx-auto`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <platform.icon size={20} />
                    </motion.div>
                    
                    <motion.p
                      className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                      variants={itemVariants}
                    >
                      {platform.name}
                    </motion.p>
                  </CardContent>
                </Card>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Skills summary */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center space-x-6 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-teal-500/10 backdrop-blur-sm border border-white/20"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {[
              { icon: Code, label: "Technologies", count: skillCategories.reduce((acc, cat) => acc + (cat.skills?.length || 0), 0) },
              { icon: Award, label: "Years Experience", count: "3+" },
              { icon: TrendingUp, label: "Always Learning", count: "∞" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="flex items-center space-x-2 text-gray-700 dark:text-gray-300"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: index * 0.5 }}
                >
                  <stat.icon size={16} />
                </motion.div>
                <div className="text-center">
                  <div className="font-bold text-lg">{stat.count}</div>
                  <div className="text-xs">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}