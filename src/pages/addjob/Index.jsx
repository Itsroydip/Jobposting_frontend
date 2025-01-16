import React, {useState} from 'react'
import styles from './addjob.module.css'
import { createJob } from '../../services';

const Addjob = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        company: '',
        role: '',
        salary: '',
        type: '',
        workmode: '',
        location: '',
        jobDescription: '',
        aboutCompany: '',
        skills: [],
        additionalInfo: ''
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await createJob(formData);
          console.log(response);
        } catch (err) {
          console.log(err);
        }
      };
    
      const handleSkillAdd = (skill) => {
        if (skill && !formData.skills.includes(skill)) {
          setFormData(prevState => ({
            ...prevState,
            skills: [...prevState.skills, skill]
          }));
        }
      };
    
      const handleSkillRemove = (skillToRemove) => {
        setFormData(prevState => ({
          ...prevState,
          skills: prevState.skills.filter(skill => skill !== skillToRemove)
        }));
      };
    
      return (
        <div className={styles.container}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <h1 className={styles.title}>Add Job Description</h1>
            
            <div className={styles.formGroup}>
              <label >Company Name</label>
              <input
                type="text"
                name="companyName"
                placeholder="Enter your company name here"
                value={formData.companyName}
                onChange={handleInputChange}
                className={styles.input}
              />
            </div>
    
            <div className={styles.formGroup}>
              <label >Add logo URL</label>
              <input
                type="url"
                name="company"
                placeholder="Enter the link"
                value={formData.company}
                onChange={handleInputChange}
                className={styles.input}
              />
            </div>
    
            <div className={styles.formGroup}>
              <label >Job position</label>
              <input
                type="text"
                name="role"
                placeholder="Enter job position"
                value={formData.role}
                onChange={handleInputChange}
                className={styles.input}
              />
            </div>
    
            <div className={styles.formGroup}>
              <label >Monthly salary</label>
              <input
                type="text"
                name="salary"
                placeholder="Enter Amount in rupees"
                value={formData.salary}
                onChange={handleInputChange}
                className={styles.input}
              />
            </div>
    
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label >Job Type</label>
                <select 
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  className={styles.input}
                >
                  <option value="">Select</option>
                  <option value="Fulltime">Fulltime</option>
                  <option value="Parttime">Parttime</option>
                  <option value="Contract">Contract</option>
                </select>
              </div>
    
              <div className={styles.formGroup}>
                <label >Remote/office</label>
                <select
                  name="workmode"
                  value={formData.workmode}
                  onChange={handleInputChange}
                  className={styles.input}
                >
                  <option value="">Select</option>
                  <option value="Remote">Remote</option>
                  <option value="Office">Office</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </div>
            </div>
    
            <div className={styles.formGroup}>
              <label >Location</label>
              <input
                type="text"
                name="location"
                placeholder="Enter Location"
                value={formData.location}
                onChange={handleInputChange}
                className={styles.input}
              />
            </div>
    
            <div className={styles.formGroup}>
              <label>Job Description</label>
              <textarea
                name="jobDescription"
                placeholder="Type the job description"
                value={formData.jobDescription}
                onChange={handleInputChange}
                className={styles.textarea}
              />
            </div>
    
            <div className={styles.formGroup}>
              <label>About Company</label>
              <textarea
                name="aboutCompany"
                placeholder="Type about your company"
                value={formData.aboutCompany}
                onChange={handleInputChange}
                className={styles.textarea}
              />
            </div>
    
            <div className={styles.formGroup}>
              <label >Skills Required</label>
              <div>
                <input
                  type="text"
                  placeholder="Enter the must have skills"
                  className={styles.input}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleSkillAdd(e.target.value);
                      e.target.value = '';
                    }
                  }}
                />
                <div className={styles.skillsList}>
                  {formData.skills.map((skill, index) => (
                    <span key={index} className={styles.skillTag}>
                      {skill}
                      <button
                        type="button"
                        onClick={() => handleSkillRemove(skill)}
                        className={styles.skillRemove}
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            </div>
    
            <div className={styles.formGroup}>
              <label >Information</label>
              <input
                type="text"
                name="additionalInfo"
                placeholder="Enter the additional information"
                value={formData.additionalInfo}
                onChange={handleInputChange}
                className={styles.input}
              />
            </div>
    
            <div className={styles.actions}>
              <button type="button" className={styles.buttonCancel}>Cancel</button>
              <button type="submit" className={styles.buttonSubmit}>+ Add Job</button>
            </div>
          </form>

          <div className={styles.right}>
            <h1>Recruiter add job details here</h1>
          </div>
        </div>
      );
}

export default Addjob