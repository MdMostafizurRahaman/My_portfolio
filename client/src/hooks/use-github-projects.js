import { useEffect, useState } from "react";

export function useGitHubProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        console.error("Error fetching projects:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return { projects, loading, error };
}
