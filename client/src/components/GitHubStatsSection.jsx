import { Github, Star, Folder, GitBranch, TrendingUp, Loader2 } from "lucide-react";
import SectionTitle from "@/components/ui/section-title.jsx";
import { personalInfo } from "../data/portfolio-data.js";
import { useGitHubProjects } from "../hooks/use-github-projects.js";

export default function GitHubStatsSection() {
  const { projects, loading, usedFallback } = useGitHubProjects();

  const totalProjects = projects.length;
  const totalStars = projects.reduce((sum, repo) => sum + repo.stars, 0);
  const topProject = projects.reduce((best, repo) => (repo.stars > (best?.stars || -1) ? repo : best), null);
  const activeLanguages = new Set(projects.map((repo) => repo.language).filter(Boolean)).size;

  const stats = usedFallback
    ? [
        { label: "Projects", value: `${totalProjects}+`, icon: Folder },
        { label: "Top Project", value: topProject?.name || "-", icon: GitBranch },
        { label: "Languages Used", value: `${activeLanguages}+`, icon: TrendingUp },
        { label: "Contests", value: "50+", icon: Star },
      ]
    : [
        { label: "Public Repositories", value: `${totalProjects}`, icon: Folder },
        { label: "Total Stars", value: `${totalStars}`, icon: Star },
        { label: "Top Project", value: topProject?.name || "-", icon: GitBranch },
        { label: "Languages Used", value: `${activeLanguages}`, icon: TrendingUp },
      ];

  const featured = projects
    .filter((repo) => !repo.fork)
    .sort((a, b) => b.stars - a.stars)
    .slice(0, 6);

  return (
    <section id="github" className="py-16 sm:py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionTitle title="GitHub" highlight="Profile" />

        {usedFallback && (
          <p className="text-center text-sm text-gray-500 dark:text-gray-400 -mt-8 mb-8">
            Showing curated projects — live GitHub API temporarily unavailable.
          </p>
        )}

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 text-center hover:shadow-md transition-shadow"
              >
                <Icon className="h-8 w-8 text-purple-600 dark:text-purple-400 mx-auto mb-3" />
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white text-center break-words">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1 text-center">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Loading state */}
        {loading && (
          <div className="flex flex-col items-center justify-center mt-16 py-16 text-gray-500">
            <Loader2 className="h-8 w-8 animate-spin text-purple-600 mb-3" />
            <p>Fetching repositories from GitHub...</p>
          </div>
        )}

        {/* Top Projects */}
        {!loading && featured.length > 0 && (
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              {usedFallback ? "Featured Projects" : "Top Projects"}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featured.map((project) => (
                <a
                  key={project.id}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {project.name}
                    </h4>
                    {project.stars > 0 && (
                      <span className="flex items-center gap-1 text-sm text-amber-500">
                        <Star className="h-4 w-4 fill-current" />
                        {project.stars}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    {project.language && (
                      <span className="text-gray-500 dark:text-gray-400">
                        {project.language}
                      </span>
                    )}
                    <span className="flex items-center gap-1 text-purple-600 dark:text-purple-400 font-medium">
                      <Github className="h-4 w-4" />
                      View on GitHub
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href={`https://github.com/${personalInfo.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-semibold hover:shadow-lg transition-shadow text-sm sm:text-base"
          >
            <Github className="h-5 w-5" />
            View Full Profile
          </a>
        </div>
      </div>
    </section>
  );
}