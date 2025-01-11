import React, { useState } from 'react';
import styles from './Login.module.css';
import {login} from '../../services/index.js';
import {TailSpin} from 'react-loader-spinner';
import toast from 'react-hot-toast';
import {useNavigate, Link} from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);


  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
    }
    
    return newErrors;
  };


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if(Object.keys(newErrors).length !== 0){
      setErrors(newErrors);
      return;
    }
    setErrors({});
    
    try {      
      setIsLoading(true);
      const response = await login(formData);
      console.log(response);

      if(response.token){
        localStorage.setItem("token", response.token);
        toast.success(response.message);
        navigate('/');
      }      
      else
      toast.error(response.message);
      
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong")
    }
    finally{
      setIsLoading(false);
      setFormData({
        email: '',
        password: ''
      })
    }
  };


  return (
<div className={styles.app_container}>
    <div className={styles.content_wrapper}>
        <div className={styles.form_section}>
            <div className={styles.signup_container}>
                <h2>Already have an account?</h2>
                <p>Your personal job finder is here</p>
        
                <form onSubmit={handleSubmit}>

                    <div className={styles.form_group}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <span className={styles.error}>{errors.email}</span>}
                    </div>

                    <div className={styles.form_group}>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        {errors.password && <span className={styles.error}>{errors.password}</span>}
                    </div>

                    <button type="submit" disabled={isLoading} className={styles.submit_btn} >
                        Sign in
                        <TailSpin
                          visible={isLoading}
                          height="20"
                          width="20"
                          color="#ffffff"
                          ariaLabel="tail-spin-loading"
                          radius="1"
                          wrapperStyle={{}}
                          wrapperClass=""
                          />
                    </button>
                </form>

                <p className={styles.login_link}>
                Don’t have an account? <Link to="/register">Sign Up</Link>
                </p>
            </div>
        </div>
        <div className={styles.image_section}>
          <h1>Your Personal Job Finder</h1>
        </div>
    </div>
</div>
  );
};

export default Login;