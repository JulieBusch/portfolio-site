import React from 'react';
import projects from '../projectInfo';

export default function(props) {
  return (
    <div>
      {
        projects.map((project, idx) => {
          return (
            <div key={project.id} className="card">
              {project.name}
              <br />
              {project.date}
              <br />
              {project.position}
              <br />
              Made with {project.technologies}
              <br />
              {project.description}
            </div>
          );
        })
      }
    </div>
  );
}
