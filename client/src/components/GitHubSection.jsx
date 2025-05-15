import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import SectionTitle from "@/components/ui/section-title.jsx";

export default function GitHubSection() {
  const [stats, setStats] = useState({
    repositories: 50,
    commits: 400,
    stars: 3,
    forks: 15,
    loading: true
  });

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        // This would be where an actual GitHub API call would go
        // For now we'll just simulate loading
        setTimeout(() => {
          setStats({
            ...stats,
            loading: false
          });
        }, 1500);
      } catch (error) {
        console.error("Error fetching GitHub stats:", error);
        setStats({
          ...stats,
          loading: false
        });
      }
    };

    fetchGitHubStats();
  }, []);

  const statItems = [
    { label: "Repositories", value: stats.repositories + "+", icon: "fas fa-folder" },
    { label: "Commits", value: stats.commits + "+", icon: "fas fa-code-commit" },
    { label: "Stars", value: stats.stars + "+", icon: "fas fa-star" },
    { label: "Forks", value: stats.forks + "+", icon: "fas fa-code-branch" }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionTitle title="GitHub" highlight="Contributions" />
        <p className="text-gray-600 dark:text-gray-300 mt-4 text-center max-w-2xl mx-auto">
          Check out my open-source contributions and activity on GitHub.
        </p>

        <motion.div 
          className="flex flex-col items-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center mb-6">
            <i className="fab fa-github text-3xl mr-3 text-primary"></i>
            <h3 className="text-xl font-bold">MdMostafizurRahaman</h3>
          </div>

          <div className="w-full max-w-3xl bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 p-4 mb-6">
            <div className="p-4 border-b border-gray-100 dark:border-gray-700">
              <h4 className="font-bold">GitHub Stats</h4>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                {statItems.map((item) => (
                  <div key={item.label}>
                    <p className="text-2xl font-bold text-primary">{item.value}</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-gray-50 dark:bg-gray-700 rounded-lg p-4 h-40 flex items-center justify-center">
                {stats.loading ? (
                  <div className="flex flex-col items-center">
                    <svg className="animate-spin h-8 w-8 text-primary mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <p className="text-gray-400 dark:text-gray-300">Loading GitHub data...</p>
                  </div>
                ) : (
                  <p className="text-gray-400 dark:text-gray-300 text-center">
                    <i className="fas fa-code-branch text-3xl mb-2 block"></i>
                    GitHub Contribution Graph
                    <br />
                    <span className="text-xs">Connect to GitHub API for real-time data</span>
                  </p>
                )}
              </div>
            </div>
          </div>

          <a 
            href="https://github.com/MdMostafizurRahaman" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-dark hover:bg-dark/90 text-white px-6 py-3 rounded-lg font-medium transition-all flex items-center"
          >
            <i className="fab fa-github mr-2"></i> View GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
}