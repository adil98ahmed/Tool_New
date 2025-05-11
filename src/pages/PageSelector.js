import { useEffect, useState } from 'react';
import style from '../styles/pageSelectorStyle.css';

export default function PageSelector() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState('');

  useEffect(() => {
    fetch('http://localhost:3005/api/projects')
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error('Error fetching projects:', error));
  }, []);

  const handleChange = (e) => {
    setSelectedProject(e.target.value);
    console.log('Selected:', e.target.value);
  };

  return (
    <div className="cont">
      <div className="dropdown-container">
        <label htmlFor="project-select" className="dropdown-label">
          Choose the project:
        </label>
        <select
          id="project-select"
          className="dropdown-select"
          value={selectedProject}
          onChange={handleChange}
        >
          <option value="" disabled>Select</option>
          {projects.map((project) => (
            <option key={project.id} value={project.name}>
              {project.name}
            </option>
          ))}
        </select>
        <button disabled={!selectedProject} className="next-button">
          Next
        </button>
      </div>
    </div>
  );
}
