import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/section-title.jsx";

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
                  <i className="fas fa-user-graduate text-primary text-xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-xl font-poppins">Education</h3>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="pl-4 border-l-2 border-primary space-y-1">
                  <p className="font-semibold">BSc in Software Engineering</p>
                  <p>University of Dhaka</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Final Year</p>
                </div>
                
                <div className="pl-4 border-l-2 border-accent space-y-1">
                  <p className="font-semibold">HSC</p>
                  <p>Chuadanga Govt' College, Chuadanga</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">GPA: 5.00</p>
                </div>
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
            <h3 className="text-2xl font-poppins font-bold">Software Engineer & Competitive Programmer</h3>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a Software Engineering student at the University of Dhaka with a passion for building efficient, 
              user-friendly applications. My expertise spans across various programming languages and technologies, 
              with a focus on web development and competitive programming.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="text-primary mr-4"><i className="fas fa-code"></i></div>
                <div>
                  <p className="font-medium">Solved 600+ programming problems across various platforms</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-primary mr-4"><i className="fas fa-trophy"></i></div>
                <div>
                  <p className="font-medium">District Champion at Creative Talent Hunt Competition (Math & Computer)</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-primary mr-4"><i className="fas fa-award"></i></div>
                <div>
                  <p className="font-medium">National Champion at Bangladesh Red Crescent Society (Essay Writing)</p>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <a 
                href="Mostafizur_Resume.pdf" 
                className="inline-flex items-center bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-all"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <i className="fas fa-download mr-2"></i> Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}