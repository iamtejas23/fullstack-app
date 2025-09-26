import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiUsers, FiUserPlus, FiDatabase, FiArrowRight } from 'react-icons/fi';
import './Home.css';

const Home = () => {
  const features = [
    {
      icon: FiUsers,
      title: 'Manage Users',
      description: 'View, search, and manage all users in your database',
      link: '/users',
      color: '#667eea'
    },
    {
      icon: FiUserPlus,
      title: 'Add New User',
      description: 'Create new user profiles with detailed information',
      link: '/add-user',
      color: '#22c55e'
    },
    {
      icon: FiDatabase,
      title: 'CRUD Operations',
      description: 'Full Create, Read, Update, Delete functionality',
      link: '/users',
      color: '#f59e0b'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="home-page">
      <div className="container">
        <motion.div
          className="hero-section"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 className="hero-title" variants={itemVariants}>
            Welcome to <span className="gradient-text">CRUD App</span>
          </motion.h1>
          
          <motion.p className="hero-subtitle" variants={itemVariants}>
            A modern, responsive user management system built with React and MongoDB
          </motion.p>

          <motion.div className="hero-stats" variants={itemVariants}>
            <div className="stat">
              <h3>Fast</h3>
              <p>Lightning quick operations</p>
            </div>
            <div className="stat">
              <h3>Secure</h3>
              <p>Data validation & security</p>
            </div>
            <div className="stat">
              <h3>Modern</h3>
              <p>Beautiful responsive design</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="features-grid"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="feature-card"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="feature-icon" style={{ color: feature.color }}>
                  <Icon />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <Link to={feature.link} className="feature-link">
                  Get Started <FiArrowRight />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="cta-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2>Ready to get started?</h2>
          <p>Begin managing your users with our intuitive interface</p>
          <div className="cta-buttons">
            <Link to="/users" className="btn btn-primary">
              View Users
            </Link>
            <Link to="/add-user" className="btn btn-secondary">
              Add User
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
