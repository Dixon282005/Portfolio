// components/Projects.jsx
import { useEffect, useState } from 'react';


const Projects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    // Reemplaza 'tu-usuario' por tu nombre de GitHub
    fetch('https://api.github.com/users/Dixon282005/repos?sort=updated')
      .then(res => res.json())
      .then(data => setRepos(data))
      .catch(err => console.error("Error fetching repos:", err));
  }, []);

  return (
    <section className="projects-section">
      <h2>Mis Proyectos</h2>
      <div className="projects-grid">
        {repos.map(repo => (
          <div key={repo.id} className="project-card">
            <h3>{repo.name}</h3>
            <p>{repo.description || "Sin descripción"}</p>
            <a 
              href={repo.html_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="repo-link"
            >
              Ver en GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;