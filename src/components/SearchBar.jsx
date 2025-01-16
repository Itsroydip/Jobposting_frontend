import React from 'react';
import styles from '../pages/home/Home.module.css'
import {useNavigate} from 'react-router-dom'

const SearchBar = ({ selectedSkills, setSelectedSkills, isLoggedIn, setIsloggedIn }) => {
    const navigate = useNavigate();

  const removeSkill = (skillToRemove) => {
    setSelectedSkills(selectedSkills.filter(skill => skill !== skillToRemove));
  };

  return (
    <div className={styles.search_container}>
        <div className={styles.search_bar}>
            <input type="text" placeholder="Type any job title" />
        </div>
        <div className={styles.filters}>
            <div className={styles.skills_dropdown}>
                <button className={styles.skills_btn}>Skills</button>
            </div>
            <div className={styles.selected_skills}>
                {selectedSkills.map(skill => (
                    <span key={skill} className={styles.skill_tag}>
                        {skill}
                        <button onClick={() => removeSkill(skill)} className={styles.remove_skill}> × </button>
                    </span>
                ))}
            </div>
            <div className={styles.filter_buttons}>
                {
                    isLoggedIn ?
                    <button className={styles.apply_filter} onClick={()=>navigate('/job/create')}> + Add Job</button>
                    :
                    <button className={styles.apply_filter}>Apply Filter</button>

                }
                
                <button className={styles.clear_filter}>Clear</button>
            </div>
        </div>
    </div>
  );
};

export default SearchBar;