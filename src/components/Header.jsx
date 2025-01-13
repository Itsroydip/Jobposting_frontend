import React from 'react'
import styles from '../pages/home/Home.module.css'


const Header = () => {
  return (
    <header>
        <nav>
            <div className={styles.nav_decoration}></div>
            <div className={styles.nav_decoration_2}></div>
            
            <div className={styles.logo}>Jobfinder</div>
            <div className={styles.auth_buttons}>
                <button className={styles.login_btn}>Login</button>
                <button className={styles.register_btn}>Register</button>
            </div>
        </nav>
      </header>
  )
}

export default Header