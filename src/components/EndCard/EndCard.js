import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';
import './EndCard.css';

export default function EndCard() {
  return (
    <section className="end-card">
      <div className="floating-hearts">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="heart"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <FaHeart className="heart-icon" size={Math.random() * 20 + 10} />
          </motion.div>
        ))}
      </div>
      <div className="container">
        <h2 className="title">With Heartfelt Thanks</h2>
        <p className="message">
          Your presence at our wedding is the greatest gift of all. We're truly blessed to have you in our lives 
          and can't wait to create beautiful memories with you on our special day.
        </p>
        <div className="animated-hearts">
          {[...Array(5)].map((_, i) => (
            <FaHeart key={i} className="animated-heart" style={{ animationDelay: `${i * 0.2}s` }} />
          ))}
        </div>
        <p className="signature">
          With love and gratitude,<br />
          Naveen & Sandhiya
        </p>
      </div>
    </section>
  );
}