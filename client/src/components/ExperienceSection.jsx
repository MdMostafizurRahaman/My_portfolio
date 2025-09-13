import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card, CardContent } from "./ui/card.jsx";
import { Badge } from "./ui/badge.jsx";
import { 
  Calendar, 
  MapPin, 
  Building, 
  GraduationCap, 
  Award,
  Briefcase,
  Star,
  Target,
  ChevronRight,
  Trophy,
  Users,
  Code
} from "lucide-react";

export default function ExperienceSection({ experiences = [] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeItem, setActiveItem] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
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

  const timelineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  };

  const defaultExperiences = [
    {
      date: "Present",
      period: "2024 - Present",
      title: "Software Engineering Intern",
      organization: "Ithra, Aramco",
      location: "Saudi Arabia",
      description: "Working on a Policy tracker project, applying software engineering skills in a professional environment. Developing full-stack solutions and implementing modern web technologies.",
      type: "experience",
      category: "Professional",
      skills: ["React", "Node.js", "MongoDB", "REST APIs"],
      achievements: ["Implemented policy tracking system", "Optimized database queries by 40%"],
      color: "from-blue-500 to-indigo-600",
      icon: Briefcase,
    },
    {
      date: "2021 - Present",
      period: "4 Years",
      title: "BSc in Software Engineering",
      organization: "University of Dhaka",
      location: "Dhaka, Bangladesh",
      description: "Final year student with focus on software architecture, algorithms, and modern development practices. Consistent academic performance with hands-on project experience.",
      type: "education",
      category: "Academic",
      skills: ["Data Structures", "Algorithms", "Software Design", "Database Systems"],
      achievements: ["CGPA: 3.8/4.0", "Dean's List multiple semesters"],
      color: "from-green-500 to-teal-600",
      icon: GraduationCap,
    },
    {
      date: "May 2024 - December 2024",
      period: "8 Months",
      title: "ICT and Database Management Associate",
      organization: "Student Promotion & Support Unit, University of Dhaka",
      location: "Dhaka, Bangladesh",
      description: "Collaborated with a team to offer part-time placement services, talent acquisition, and skill development programs for students. Optimized ICT and database management systems to enhance service delivery.",
      type: "experience",
      category: "Professional",
      skills: ["Database Management", "System Optimization", "Team Collaboration"],
      achievements: ["Improved system efficiency by 30%", "Managed 500+ student records"],
      color: "from-purple-500 to-pink-600",
      icon: Users,
    },
    {
      date: "2019",
      period: "Achievement",
      title: "District Champion",
      organization: "Creative Talent Hunt Competition",
      location: "Bangladesh",
      description: "Math & Computer category winner demonstrating exceptional problem-solving skills and technical competency at district level.",
      type: "achievement",
      category: "Awards",
      skills: ["Mathematics", "Computer Science", "Problem Solving"],
      achievements: ["District-wide competition winner", "Top performer in technical challenges"],
      color: "from-yellow-500 to-orange-600",
      icon: Trophy,
    },
    {
      date: "2020",
      period: "Achievement",
      title: "National Champion",
      organization: "Bangladesh Red Crescent Society",
      location: "Bangladesh",
      description: "Essay Writing competition winner showcasing excellent communication skills and social awareness at national level.",
      type: "achievement",
      category: "Awards",
      skills: ["Writing", "Communication", "Research"],
      achievements: ["National-level competition winner", "Published essay in official magazine"],
      color: "from-red-500 to-pink-600",
      icon: Award,
    },
  ];

  const timelineData = experiences.length > 0 ? experiences : defaultExperiences;

  const getTypeIcon = (type) => {
    switch (type) {
      case 'experience': return Briefcase;
      case 'education': return GraduationCap;
      case 'achievement': return Trophy;
      default: return Star;
    }
  };

  return (
    <section 
      id="experience" 
      className="py-20 relative overflow-hidden"
      ref={ref}
    >
      {/* Dynamic background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-r from-teal-500/10 to-green-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.5, 0.2],
            x: [0, -80, 0],
          }}
          transition={{
            duration: 25,
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
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent mb-4 relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Experience & Journey
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
            My professional experience, academic journey, and achievements
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-teal-500 rounded-full transform -translate-x-1/2 md:block hidden"
            variants={timelineVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            style={{ originY: 0 }}
          />

          {/* Timeline items */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-12"
          >
            {timelineData.map((item, index) => {
              const isLeft = index % 2 === 0;
              const ItemIcon = getTypeIcon(item.type);
              
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col`}
                  onMouseEnter={() => setActiveItem(index)}
                  onMouseLeave={() => setActiveItem(null)}
                >
                  {/* Timeline node */}
                  <motion.div
                    className="absolute left-1/2 transform -translate-x-1/2 z-20 md:block hidden"
                    whileHover={{ scale: 1.3 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-white shadow-2xl border-4 border-white dark:border-gray-900`}
                      animate={activeItem === index ? { 
                        rotate: 360,
                        scale: 1.2,
                        boxShadow: "0 20px 40px rgba(147, 51, 234, 0.4)"
                      } : { rotate: 0, scale: 1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <ItemIcon size={24} />
                    </motion.div>
                  </motion.div>

                  {/* Content card */}
                  <motion.div
                    className={`w-full md:w-5/12 ${isLeft ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="glass-effect backdrop-blur-xl border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden group">
                      <CardContent className="p-8 relative">
                        {/* Background gradient effect */}
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-all duration-500`}
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        />

                        {/* Mobile icon */}
                        <div className="md:hidden flex items-center justify-center mb-6">
                          <motion.div
                            className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-white shadow-lg`}
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            <ItemIcon size={20} />
                          </motion.div>
                        </div>

                        {/* Header */}
                        <div className="relative z-10 mb-6">
                          <div className="flex items-center space-x-2 mb-2">
                            <Calendar size={16} className="text-gray-500 dark:text-gray-400" />
                            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                              {item.date}
                            </span>
                            <Badge 
                              variant="secondary" 
                              className={`bg-gradient-to-r ${item.color} text-white border-0`}
                            >
                              {item.period}
                            </Badge>
                          </div>
                          
                          <motion.h3
                            className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300"
                            variants={itemVariants}
                          >
                            {item.title}
                          </motion.h3>
                          
                          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 mb-1">
                            <Building size={16} />
                            <span className="font-medium">{item.organization}</span>
                          </div>

                          {item.location && (
                            <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                              <MapPin size={14} />
                              <span className="text-sm">{item.location}</span>
                            </div>
                          )}
                        </div>

                        {/* Description */}
                        <motion.p
                          className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6"
                          variants={itemVariants}
                        >
                          {item.description}
                        </motion.p>

                        {/* Skills */}
                        {item.skills && (
                          <motion.div
                            className="mb-6"
                            variants={itemVariants}
                          >
                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                              <Code size={16} className="mr-2" />
                              Skills & Technologies
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {item.skills.map((skill, skillIndex) => (
                                <motion.div
                                  key={skill}
                                  initial={{ opacity: 0, scale: 0 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: skillIndex * 0.1 }}
                                  whileHover={{ scale: 1.1 }}
                                >
                                  <Badge 
                                    variant="outline" 
                                    className="text-xs bg-white/50 dark:bg-gray-800/50 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300"
                                  >
                                    {skill}
                                  </Badge>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}

                        {/* Achievements */}
                        {item.achievements && (
                          <motion.div
                            variants={itemVariants}
                          >
                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                              <Target size={16} className="mr-2" />
                              Key Achievements
                            </h4>
                            <ul className="space-y-2">
                              {item.achievements.map((achievement, achievementIndex) => (
                                <motion.li
                                  key={achievement}
                                  className="flex items-start space-x-2 text-sm text-gray-700 dark:text-gray-300"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: achievementIndex * 0.1 }}
                                >
                                  <ChevronRight size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                                  <span>{achievement}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </motion.div>
                        )}

                        {/* Floating particles */}
                        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          {[...Array(6)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                              style={{
                                left: `${15 + i * 15}%`,
                                top: `${20 + (i % 3) * 25}%`,
                              }}
                              animate={{
                                y: [-8, -16, -8],
                                opacity: [0.4, 1, 0.4],
                                scale: [0.5, 1, 0.5],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.3,
                              }}
                            />
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Summary stats */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center space-x-8 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-teal-500/10 backdrop-blur-sm border border-white/20"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {[
              { icon: Briefcase, label: "Professional", count: timelineData.filter(item => item.type === 'experience').length },
              { icon: GraduationCap, label: "Education", count: timelineData.filter(item => item.type === 'education').length },
              { icon: Trophy, label: "Achievements", count: timelineData.filter(item => item.type === 'achievement').length },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="flex items-center space-x-2 text-gray-700 dark:text-gray-300"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white"
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