import React, { useState, useEffect } from 'react'
import styles from '../pages/home/Home.module.css'
import { useNavigate } from "react-router";
import toast from 'react-hot-toast';


const Header = ({isLoggedIn, setIsLoggedIn}) => {
  const navigate = useNavigate();
  
  const handleLogout = ()=>{
    localStorage.clear();
    setIsLoggedIn(false);
    toast.success("Logout successfull")
  }

  return (
    <header>
        <nav>
            <div className={styles.nav_decoration}></div>
            <div className={styles.nav_decoration_2}></div>
            
            <div className={styles.logo}>Jobfinder</div>
             
            {
                isLoggedIn ?
                <div className={styles.auth_buttons}>
                  <button onClick={handleLogout} className={styles.logout_btn}>Logout</button>
                  <p>Hello! Recruiter</p>
                </div>
                :
                <div className={styles.auth_buttons}>
                  <button className={styles.login_btn} onClick={()=> navigate('/login')}>Login</button>
                  <button className={styles.register_btn} onClick={()=> navigate('/register')}>Register</button>
                </div>
                
            }

            
        </nav>
      </header>
  )
}

export default Header