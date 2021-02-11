import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

const url = 'https://course-api.com/react-tabs-project';
function App() {
  // setup state variables
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [index, setIndex] = useState(0);

  const fetchJobs = async () => {
    // fetch & process data
    const response = await fetch(url);
    const newJobs = await response.json();
    // update state to have processed data
    setJobs(newJobs);
    // done getting data, update state to reflect this.
    setLoading(false);
  };

  // make sure fetch runs on page load
  // empty dependency array means only run 1 time
  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section className='section loading'>
        <h1>Loading...</h1>
      </section>
    );
  }

  // destructure info from jobs after data loaded
  // MUST happen after useEffect, where we fetch data
  const { company, dates, duties, title } = jobs[index];

  return (
    <section className='section'>
      <div className='title'>
        <h2>Experience</h2>
        <div className='underliner'></div>
      </div>
      <div className='jobs-center'>
        {/* btn container */}
        <div className='btn-container'>
          {/* iterate over jobs */}
          {jobs.map((job, current) => {
            {
              /* changing index will force re-render */
            }
            return (
              <button
                key={job.id}
                onClick={() => setIndex(index)}
                // highlight button if it is same as the current job
                className={`job-btn ${current === index ? 'active-btn' : ''}`}
              >
                {job.company}
              </button>
            );
          })}
        </div>
        {/* job info */}
        <article className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{dates}</p>
          {/* iterate over duties with Array.map() */}
          {duties.map((duty, index) => {
            return (
              <div className='job-desc' key={index}>
                {/* add icon from font awesome */}
                <FaAngleDoubleRight className='job-icon' />
                {/* display text */}
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}

export default App;
