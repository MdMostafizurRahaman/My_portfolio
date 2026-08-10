import { motion } from "framer-motion";
import { Trophy, Medal, Sparkles } from "lucide-react";
import SectionTitle from "@/components/ui/section-title.jsx";
import { achievements } from "../data/portfolio-data.js";

const iconFor = (index) => {
  if (index === 0) return Trophy;
  if (index === 1) return Medal;
  return Sparkles;
};

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-16 sm:py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionTitle title="Achievements &" highlight="Awards" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {achievements.map((item, index) => {
            const Icon = iconFor(index);
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  {item.year && (
                    <span className="rounded-full bg-purple-600/10 dark:bg-purple-400/10 px-3 py-1 text-xs font-semibold text-purple-700 dark:text-purple-300">
                      {item.year}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1.5">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}