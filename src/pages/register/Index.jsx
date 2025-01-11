import React, { useState } from 'react';
import styles from './Register.module.css';
import register from '../../services/index.js';
import {TailSpin} from 'react-loader-spinner'
import toast from 'react-hot-toast';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    agreeToTerms: false
  });
  
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);


  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.phone) {
      newErrors.phone = 'phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
    }
    
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and privacy policy';
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
      const response = await register(formData);
      console.log(response);

      if(response.id)
      toast.success(response.message);
      else
      toast('Email already exists', {
        icon: '⚠️',
      });
      
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong")
    }
    finally{
      setIsLoading(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        password: '',
        agreeToTerms: false
      })
    }
  };



  return (
<div className={styles.app_container}>
    <div className={styles.content_wrapper}>
        <div className={styles.form_section}>
            <div className={styles.signup_container}>
                <h2>Create an account</h2>
                <p>Your personal job finder is here</p>
        
                <form onSubmit={handleSubmit}>
                    <div className={styles.form_group}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        {errors.name && <span className={styles.error}>{errors.name}</span>}
                    </div>

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
                            type="tel"
                            name="phone"
                            placeholder="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        {errors.phone && <span className={styles.error}>{errors.phone}</span>}
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

                    <div className={`${styles.form_group} ${styles.checkbox}`} >
                        <label>
                            <input
                            type="checkbox"
                            name="agreeToTerms"
                            checked={formData.agreeToTerms}
                            onChange={handleChange}
                            />
                            By creating an account, I agree to our terms of use and privacy policy
                        </label>
                        {errors.agreeToTerms && <span className={styles.error}>{errors.agreeToTerms}</span>}
                    </div>

                    <button type="submit" disabled={isLoading} className={styles.submit_btn} >
                        Create Account
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
                    Already have an account? <a href="/">Sign In</a>
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

export default Register;