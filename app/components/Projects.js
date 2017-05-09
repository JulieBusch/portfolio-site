import React from 'react';

import projects from '../projectInfo';

export default function(props) {
  return (
    <div className="container">
      <div className="row">
      {
        projects.map((project, idx) => {
          return (
            <div key={project.id} className="card col-lg-4 col-md-6 col-sm-12">
              <h2>{project.name}</h2>
                <br />
              {
                project.youtube || project.github || project.site
                  ? <div className="row" style={{justifyContent: 'center'}}>
                      {
                        project.youtube &&
                          <div style={{width: '20%', margin: '2%', display: 'flex', alignItems: 'center'}}>
                            <a style={{width: '100%'}} href={project.youtube}>
                              <img style={{width: '100%'}} src="/images/youtube.png"/>
                            </a>
                          </div>
                      }
                      {
                        project.site &&
                          <div style={{width: '20%', margin: '2%', display: 'flex', alignItems: 'center'}}>
                            <a style={{width: '100%'}} href={project.site}>
                              <img style={{width: '100%'}} src="/images/earth.png"/>
                            </a>
                          </div>
                      }
                      {
                        project.github &&
                          <div style={{width: '20%', margin: '2%', display: 'flex', alignItems: 'center'}}>
                            <a style={{width: '100%'}} href={project.github}>
                              <img style={{width: '100%'}} src="/images/github.png"/>
                            </a>
                          </div>
                      }
                    </div>
                  : null
              }
                <br />
              {project.date}
                <br />
              <em>{project.position}</em>
                <br />
              Built with {project.technologies}
                <br />
                <br />
              <p>{project.description}</p>
            </div>
          );
        })
      }
      </div>
    </div>
  );
}
