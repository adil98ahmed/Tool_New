import { useState } from 'react';
import style from '../styles/pageSelectorStyle.css'
export default function PageSelector() {
    const [selectedProject, setSelectedProject] = useState('');

    const handleChange = (e) => {
      setSelectedProject(e.target.value);
      console.log('Selected:', e.target.value);
    };

  return (
    <div className='cont'>
        <div className="dropdown-container">
      <label htmlFor="project-select" className="dropdown-label">Choose the project:</label>
      <select
        id="project-select"
        className="dropdown-select"
        value={selectedProject}
        onChange={handleChange}
      >
        <option value="" disabled>Select</option>
        <option value="project1">Project 1</option>
        <option value="project2">Project 2</option>
        <option value="project3">Project 3</option>
      </select>
      <button disabled={!selectedProject} className='next-button'>Next</button>
    </div>
    </div>
  );
}