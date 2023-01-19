import Project from '../components/Project.jsx';
import {useEffect, useState} from 'react';
import { getProjects } from '../services/projects.js';
 
export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects()
  }, [])

  async function fetchProjects() {
    const allProjects = await getProjects();
    setProjects(allProjects);
  }

console.log(projects)

  return (
    <div className="projects">
        <h1>Projects</h1>
        {projects.map ((projData) => (
                <Project project={projData} key={projData.projectId}/>
            ))}
    </div>
  )
}
