import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import { FiUser, FiMail, FiCalendar, FiBriefcase, FiSave, FiArrowLeft } from 'react-icons/fi';
import { userService } from '../services/userService';
import './UserForm.css';

const AddUser = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    profession: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.age) {
      newErrors.age = 'Age is required';
    } else if (formData.age < 1 || formData.age > 150) {
      newErrors.age = 'Age must be between 1 and 150';
    }

    if (!formData.profession.trim()) {
      newErrors.profession = 'Profession is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Please fix the errors in the form');
      return;
    }

    setLoading(true);
    try {
      await userService.createUser({
        ...formData,
        age: parseInt(formData.age)
      });
      toast.success('User created successfully!');
      navigate('/users');
    } catch (error) {
      if (error.response?.data?.errors) {
        const serverErrors = {};
        error.response.data.errors.forEach(err => {
          if (err.includes('Email')) serverErrors.email = err;
          else if (err.includes('Name')) serverErrors.name = err;
          else if (err.includes('Age')) serverErrors.age = err;
          else if (err.includes('Profession')) serverErrors.profession = err;
        });
        setErrors(serverErrors);
      } else if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Failed to create user');
      }
      console.error('Error creating user:', error);
    } finally {
      setLoading(false);
    }
  };

  const formFields = [
    {
      name: 'name',
      label: 'Full Name',
      type: 'text',
      icon: FiUser,
      placeholder: 'Enter full name'
    },
    {
      name: 'email',
      label: 'Email Address',
      type: 'email',
      icon: FiMail,
      placeholder: 'Enter email address'
    },
    {
      name: 'age',
      label: 'Age',
      type: 'number',
      icon: FiCalendar,
      placeholder: 'Enter age'
    },
    {
      name: 'profession',
      label: 'Profession',
      type: 'text',
      icon: FiBriefcase,
      placeholder: 'Enter profession'
    }
  ];

  return (
    <div className="user-form-page">
      <div className="container">
        <motion.div
          className="form-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="form-header">
            <motion.button
              className="back-btn"
              onClick={() => navigate('/users')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiArrowLeft />
              Back to Users
            </motion.button>
            
            <div className="form-title-section">
              <h1 className="form-title">Add New User</h1>
              <p className="form-subtitle">Create a new user profile in the system</p>
            </div>
          </div>

          <motion.form
            className="user-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="form-grid">
              {formFields.map((field, index) => {
                const Icon = field.icon;
                return (
                  <motion.div
                    key={field.name}
                    className="form-group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <label className="form-label">
                      <Icon className="label-icon" />
                      {field.label}
                    </label>
                    <div className="input-wrapper">
                      <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        className={`form-input ${errors[field.name] ? 'error' : ''}`}
                        min={field.type === 'number' ? '1' : undefined}
                        max={field.type === 'number' ? '150' : undefined}
                      />
                      {errors[field.name] && (
                        <span className="error-message">{errors[field.name]}</span>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              className="form-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => navigate('/users')}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <div className="btn-spinner"></div>
                    Creating...
                  </>
                ) : (
                  <>
                    <FiSave />
                    Create User
                  </>
                )}
              </button>
            </motion.div>
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
};

export default AddUser;
