import React, { useState, useEffect } from 'react'
import styles from './Home.module.css'
import Header from '../../components/Header'
import SearchBar from '../../components/SearchBar'
import { getJobs } from '../../services'
import JobCard from '../../components/JobCard'

const Home = () => {
  const [selectedSkills, setSelectedSkills] = useState(['Frontend', 'CSS', 'JavaScript']);
  const [jobList, setJobList] = useState([]);

  const fetchJobs = async () => {
    try {
      const response = await getJobs();
      setJobList(response);
      
    } catch (error) {
      console.log(error);      
    }
  }

  useEffect(() => {
    fetchJobs();
    
  }, [])
  

  return (
    <div className={styles.app}>
      <Header/>
      <main>
        <SearchBar 
            selectedSkills={selectedSkills} 
            setSelectedSkills={setSelectedSkills} 
        />

        <div className={styles.job_list}>

          {jobList.map(job => (
            <JobCard key={job._id} job={job} />
          ))}

        </div>
      </main>

    </div>
    
  )
}

export default Home;
