import React, { useState } from 'react';
import styles from './Register.module.css'

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
    agreeToTerms: false
  });
  
  const [errors, setErrors] = useState({});


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
    
    if (!formData.mobile) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = 'Please enter a valid 10-digit mobile number';
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


  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
      // Add your form submission logic here
    } else {
      setErrors(newErrors);
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
                        {errors.name && <span className="error">{errors.name}</span>}
                    </div>

                    <div className={styles.form_group}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>

                    <div className={styles.form_group}>
                        <input
                            type="tel"
                            name="mobile"
                            placeholder="Mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                        />
                        {errors.mobile && <span className="error">{errors.mobile}</span>}
                    </div>

                    <div className={styles.form_group}>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        {errors.password && <span className="error">{errors.password}</span>}
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
                        {errors.agreeToTerms && <span className="error">{errors.agreeToTerms}</span>}
                    </div>

                    <button type="submit" className={styles.submit_btn}>
                        Create Account
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