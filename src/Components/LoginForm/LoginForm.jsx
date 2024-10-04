// src/LoginForm.js

import React, { useState } from "react";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Credentials:", credentials);
    // You can perform further actions like API calls here
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Login Form</h2>
      <div className={styles.formGroup}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={credentials.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label>
          <input
            type="checkbox"
            name="rememberMe"
            checked={credentials.rememberMe}
            onChange={handleChange}
          />
          Remember Me
        </label>
      </div>
      <button type="submit" className={styles.submitButton}>
        Login
      </button>
    </form>
  );
};

export default LoginForm;
