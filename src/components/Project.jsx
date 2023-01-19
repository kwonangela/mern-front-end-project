import React from 'react';
import { Link } from "react-router-dom";

export default function Project({project}) {
  return (
    <div className="project">
        <Link to={`/projects/${project.projectId}`}>
            <h2>{project.title}</h2>
        </Link>
    </div>
  )
}
