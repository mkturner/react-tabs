import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
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
  }, [input]);

  if (loading) {
    return <section className='section'> loading</section>;
  }

  return <h2>tabs project setup</h2>;
}

export default App;
