import React from 'react';

import skills from '../data/skills';

export default function (props) {
  return (
    <div className="container">
      <div className="row">
        {
          skills.map((set) => {
            return (
              <div key={set.id} className="col-xl-3 col-lg-3 col-md-6 col-sm-12 card skillCard">
                <h3>{set.title}</h3>
                <ul>
                  {
                    set.skills.map((skill, idx) => {
                      return (
                        <li key={idx}>{skill}</li>
                      );
                    })
                  }
                </ul>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}
