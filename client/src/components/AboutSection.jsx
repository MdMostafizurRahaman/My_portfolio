import { motion } from "framer-motion";
import { GraduationCap, Code, Trophy, Award, Download, Rocket } from "lucide-react";
import SectionTitle from "@/components/ui/section-title.jsx";
import { education, personalInfo } from "../data/portfolio-data.js";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionTitle title="About" highlight="Me" />
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="bg-gradient-to-br from-primary/80 to-accent/80 p-1 rounded-xl shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg space-y-6">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <GraduationCap className="text-primary text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-xl font-poppins">Education</h3>
                </div>
              </div>
              
              <div className="space-y-4">
                {education.map((item) => (
                  <div key={item.id} className="pl-4 border-l-2 border-primary space-y-1">
                    <p className="font-semibold">{item.degree}</p>
                    <p>{item.institution}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{item.duration}</p>
                    {item.location && <p className="text-sm text-gray-500 dark:text-gray-400">{item.location}</p>}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-poppins font-bold">Software Engineer & AI/ML Builder</h3>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {personalInfo.about}
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="text-primary mr-4"><Rocket /></div>
                <div>
                  <p className="font-medium">Built AI-powered platforms and full-stack products for healthcare, policy intelligence, and research workflows.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-primary mr-4"><Trophy /></div>
                <div>
                  <p className="font-medium">Achieved 2nd Runner-Up at the Industrial Responsible AI Summit, MIST for PrescribeCorrect.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-primary mr-4"><Award /></div>
                <div>
                  <p className="font-medium">Participated in 50+ contests and solved 600+ problems across leading competitive programming platforms.</p>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <a 
                href={personalInfo.resumeUrl} 
                className="inline-flex items-center bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-all"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <Download className="mr-2 h-4 w-4" /> Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}