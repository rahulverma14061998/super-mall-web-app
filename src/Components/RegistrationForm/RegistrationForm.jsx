// src/RegistrationForm.js

import React, { useState } from "react";
import styles from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    identity: "user", // default identity
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // You can perform further actions like API calls here
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Registration Form</h2>
      <div className={styles.formGroup}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
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
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label>Gender</label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className={styles.formGroup}>
        <label>Identity</label>
        <div>
          <label>
            <input
              type="radio"
              name="identity"
              value="user"
              checked={formData.identity === "user"}
              onChange={handleChange}
            />
            User
          </label>
          <label>
            <input
              type="radio"
              name="identity"
              value="admin"
              checked={formData.identity === "admin"}
              onChange={handleChange}
            />
            Admin
          </label>
        </div>
      </div>
      <button type="submit" className={styles.submitButton}>
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
