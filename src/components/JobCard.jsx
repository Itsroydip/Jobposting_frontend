import React from 'react';
import styles from '../pages/home/Home.module.css';
import flag from '../assets/indflag.jpeg'


const JobCard = ({ job, isLoggedIn }) => {
  
  return (
    <div className={styles.job_card}>
      <div className={styles.company_logo}>
        <img src={job.company} alt="logo" className={styles.logo_placeholder}/>
        
      </div>
      <div className={styles.job_details}>
        <h3>{job.role}</h3>
        <div className={styles.job_meta}>
          <span>👥 11-50</span>
          <span>₹ {job.salary}</span>
          <span className={styles.location}>
            <img src={flag} alt="India" className={styles.flag} />
            {job.location}
          </span>
        </div>
        <div className={styles.job_type}>
          <span className={styles.office}>{job.workmode}</span>
          <span className={styles.full_time}>{job.type}</span>
        </div>
        
      </div>

      <div className={styles.rightside}>
          <div className={styles.skills}>

            {job.skills.map(skill => (
              <span key={skill} className={styles.skill}>{skill}</span>
            ))}

          </div>

          <div className={styles.buttons}>
            {
              isLoggedIn &&
              <button className={styles.edit_job}>Edit Job</button> 
            }
            <button className={styles.view_details}>View details</button> 

          </div>         

      </div>
    </div>
  );
};

export default JobCard;