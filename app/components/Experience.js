import React from 'react';
import experience from '../data/experience';

export default function (props) {
  return (
    <div className="container">
      <div className="exSpacing">
        {
          experience.map((job) => {
            return (
              <div key={job.id} className="col-lg-12 col-md-12 col-sm-12 card exCard">
                <h2>{job.company}</h2>
                <h3>{job.location}</h3>
                  <br />
                  <br />
                <h3><em>{job.position}</em></h3>
                  <br />
                <h3>{job.date}</h3>
                <div className="exListCont">
                  <ul className="exList">
                    {
                      job.description.map((point, idx) => <li key={idx}>{point}</li>)
                    }
                  </ul>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

