import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import SectionTitle from "@/components/ui/section-title.jsx";
import SkillBar from "@/components/ui/skill-bar.jsx";

export default function SkillsSection() {
  const skillsRef = useRef(null);
  const isInView = useInView(skillsRef, { once: true, amount: 0.2 });

  const programmingLanguages = [
    { name: "C++", percentage: 95 },
    { name: "C", percentage: 90 },
    { name: "JavaScript", percentage: 85 },
    { name: "Java", percentage: 70 },
  ];

  const technologies = [
    { name: "React", icon: "fab fa-react" },
    { name: "Node.js", icon: "fab fa-node-js" },
    { name: "Git", icon: "fab fa-git-alt" },
    { name: "GitHub", icon: "fab fa-github" },
    { name: "HTML5", icon: "fab fa-html5" },
    { name: "CSS3", icon: "fab fa-css3-alt" },
    { name: "MongoDB", icon: "fas fa-database" },
    { name: "Express.js", icon: "fab fa-js" },
    { name: "SQLite3", icon: "fas fa-database" },
    { name: "Kali Linux", icon: "fab fa-linux" },
    { name: "WireShark", icon: "fas fa-network-wired" },
  ];

  const competitiveProgramming = [
    { icon: "fas fa-code", value: "50+", label: "Programming Contests" },
    { icon: "fas fa-file-code", value: "600+", label: "Problems Solved" },
    { 
      name: "Codeforces", 
      icon: "fab fa-code", 
      link: "https://codeforces.com/profile/Error003" 
    },
    { 
      name: "LeetCode", 
      icon: "fas fa-code-branch", 
      link: "https://leetcode.com/u/Error003/" 
    },
    { 
      name: "Coding Ninjas", 
      icon: "fas fa-user-graduate", 
      link: "https://www.naukri.com/code360/profile/38423620-041c-4fe7-8d20-9f0ef0b6d104" 
    },
    { 
      name: "GeeksforGeeks", 
      icon: "fas fa-laptop-code", 
      link: "https://www.geeksforgeeks.org/user/bsse11mil/" 
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800" ref={skillsRef}>
      <div className="container mx-auto px-4">
        <SectionTitle title="My" highlight="Skills" />
        <p className="text-gray-600 dark:text-gray-300 mt-4 text-center max-w-2xl mx-auto">
          My technical expertise and proficiency in various programming languages and technologies.
        </p>

        <div className="grid md:grid-cols-2 gap-16 mt-16">
          <div className="space-y-8">
            <h3 className="text-2xl font-poppins font-semibold border-b-2 border-primary pb-2 inline-block">
              Programming Languages
            </h3>

            <motion.div 
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {programmingLanguages.map((language, index) => (
                <motion.div key={language.name} variants={itemVariants}>
                  <SkillBar 
                    name={language.name} 
                    percentage={language.percentage} 
                    delay={index * 0.1} 
                    inView={isInView}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-poppins font-semibold border-b-2 border-primary pb-2 inline-block">
              Technologies & Tools
            </h3>

            <motion.div 
              className="grid grid-cols-3 md:grid-cols-4 gap-4"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {technologies.map((tech) => (
                <motion.div 
                  key={tech.name} 
                  className="tech-item p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm border border-gray-100 dark:border-gray-600 hover:shadow-md transition-shadow flex flex-col items-center justify-center text-center"
                  variants={itemVariants}
                >
                  <i className={`${tech.icon} text-2xl text-primary mb-2`}></i>
                  <span className="text-sm font-medium">{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-poppins font-semibold text-center mb-8">Competitive Programming</h3>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {competitiveProgramming.map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-600 hover:shadow-lg transition-shadow"
                variants={itemVariants}
              >
                <div className="flex items-center justify-center mb-4">
                  <i className={`${item.icon} text-3xl text-primary`}></i>
                </div>
                {item.value && (
                  <>
                    <h4 className="font-bold text-center mb-2">{item.value}</h4>
                    <p className="text-center text-gray-600 dark:text-gray-300">{item.label}</p>
                  </>
                )}
                {item.name && item.link ? (
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-center font-medium text-primary hover:underline block"
                  >
                    {item.name}
                  </a>
                ) : item.name ? (
                  <p className="text-center font-medium">{item.name}</p>
                ) : null}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}