import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiHome, FiUsers, FiUserPlus, FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', icon: FiHome, label: 'Home' },
    { path: '/users', icon: FiUsers, label: 'Users' },
    { path: '/add-user', icon: FiUserPlus, label: 'Add User' }
  ];

  const toggleNav = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="navbar-brand">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              CRUD App
            </motion.h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="navbar-menu desktop-menu">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className={`navbar-link ${isActive ? 'active' : ''}`}
                  >
                    <Icon className="navbar-icon" />
                    <span>{item.label}</span>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn" onClick={toggleNav}>
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className={`mobile-menu ${isOpen ? 'open' : ''}`}
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`mobile-link ${isActive ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                <Icon className="navbar-icon" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
