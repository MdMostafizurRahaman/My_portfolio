import { useEffect, useState } from "react";
import { projects as projectData } from '../data/portfolio-data.js';

const fallbackProjects = projectData
  .filter((project) => project.githubLink)
  .map((project) => ({
    id: `static-${project.id}`,
    name: project.title,
    description: project.description,
    url: project.githubLink,
    homepage: project.liveLink,
    stars: 0,
    language: project.technologies[0],
  }));

export function useGitHubProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [usedFallback, setUsedFallback] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/MdMostafizurRahaman/repos?sort=stars&per_page=100&direction=desc"
        );

        if (!response.ok) throw new Error("Failed to fetch projects");

        const data = await response.json();

        // Filter out forked repos and private repos, keep only important ones
        const filtered = data
          .filter(repo => !repo.fork && !repo.private)
          .map(repo => ({
            id: repo.id,
            name: repo.name,
            description: repo.description || "No description",
            url: repo.html_url,
            homepage: repo.homepage,
            stars: repo.stargazers_count,
            language: repo.language,
            topics: repo.topics || [],
          }));

        setProjects(filtered);
      } catch (err) {
        console.warn("GitHub API unavailable, using curated fallback:", err.message);
        // Fall back to curated projects so the section never looks empty/broken
        setProjects(fallbackProjects);
        setUsedFallback(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return { projects, loading, error: error && !usedFallback ? error : null, usedFallback };
}
