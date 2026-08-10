import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, FileCode2, Monitor } from "lucide-react";
import SectionTitle from "@/components/ui/section-title.jsx";
import { skills as skillGroups } from "../data/portfolio-data.js";

const platformLinks = {
  Codeforces: "https://codeforces.com/profile/Error003",
  LeetCode: "https://leetcode.com/u/Error003/",
  "Coding Ninjas": "https://www.naukri.com/code360/profile/38423620-041c-4fe7-8d20-9f0ef0b6d104",
  GeeksforGeeks: "https://www.geeksforgeeks.org/user/bsse11mil/"
};

export default function SkillsSection() {
  const skillsRef = useRef(null);
  const isInView = useInView(skillsRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800" ref={skillsRef}>
      <div className="container mx-auto px-4">
        <SectionTitle title="My" highlight="Skills" />
        <p className="text-gray-600 dark:text-gray-300 mt-4 text-center max-w-2xl mx-auto">
          I build with modern web technologies, AI tooling, and strong software engineering fundamentals.
        </p>

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.category}
              variants={itemVariants}
              className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-600"
            >
              <h3 className="text-xl font-poppins font-semibold mb-4 text-gray-900 dark:text-white">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-20">
          <h3 className="text-2xl font-poppins font-semibold text-center mb-8">Competitive Programming</h3>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-600 hover:shadow-lg transition-shadow" variants={itemVariants}>
<div className="flex items-center justify-center mb-4">
                <Code className="text-3xl text-primary" />
              </div>
              <h4 className="font-bold text-center mb-2">50+</h4>
              <p className="text-center text-gray-600 dark:text-gray-300">Programming Contests</p>
            </motion.div>

            <motion.div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-600 hover:shadow-lg transition-shadow" variants={itemVariants}>
<div className="flex items-center justify-center mb-4">
                <FileCode2 className="text-3xl text-primary" />
              </div>
              <h4 className="font-bold text-center mb-2">600+</h4>
              <p className="text-center text-gray-600 dark:text-gray-300">Problems Solved</p>
            </motion.div>

            {Object.entries(platformLinks).map(([name, link]) => (
              <motion.div key={name} className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-600 hover:shadow-lg transition-shadow" variants={itemVariants}>
<div className="flex items-center justify-center mb-4">
                  <Monitor className="text-3xl text-primary" />
                </div>
                <a href={link} target="_blank" rel="noopener noreferrer" className="text-center font-medium text-primary hover:underline block">
                  {name}
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
