import React from 'react';
import { motion } from 'framer-motion';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <motion.div
        className="content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
      
        <div className="hearts-container">
          <motion.div
            className="heart left-heart"
            initial={{ rotate: -15, x: 50 }}
            animate={{ rotate: 0, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="heart-content">
              <span className="name">Naveen</span>
            </div>
          </motion.div>
          <motion.div
            className="heart right-heart"
            initial={{ rotate: 15, x: -50 }}
            animate={{ rotate: 0, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="heart-content">
              <span className="name">Sandhiya</span>
            </div>
          </motion.div>
        </div>
        <motion.p
          className="subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          "Two hearts, one love, a lifetime of happiness."
        </motion.p>
        <motion.p
          className="description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          Join us as we celebrate the union of two hearts, two families, and countless memories.
        </motion.p>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 2.5 }}
        >
          <span className="date">January 20, 2025</span>
        </motion.div>
      </motion.div>
    </header>
  );
}