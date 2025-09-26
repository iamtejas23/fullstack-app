import React from 'react';
import { motion } from 'framer-motion';
import { FiTrash2, FiEdit3 } from 'react-icons/fi';
import './UserCard.css';

const UserCard = ({ user, onEdit, onDelete }) => {
  return (
    <motion.div
      className="user-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="user-avatar">
        {user.name.charAt(0).toUpperCase()}
      </div>
      
      <div className="user-info">
        <h3 className="user-name">{user.name}</h3>
        <p className="user-email">{user.email}</p>
        <div className="user-details">
          <span className="user-age">Age: {user.age}</span>
          <span className="user-profession">{user.profession}</span>
        </div>
      </div>
      
      <div className="user-actions">
        <motion.button
          className="action-btn edit-btn"
          onClick={() => onEdit(user._id)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FiEdit3 />
        </motion.button>
        <motion.button
          className="action-btn delete-btn"
          onClick={() => onDelete(user._id)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FiTrash2 />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default UserCard;
