import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';
import './Gallery.css';


/* const images = [
  { src: '/placeholder.svg?height=300&width=300', alt: 'Naveen and Sandhiya at the beach', caption: 'Where it all began' },
  { src: '/placeholder.svg?height=300&width=300', alt: 'Couple at a cafe', caption: 'Coffee dates and sweet memories' },
  { src: '/placeholder.svg?height=300&width=300', alt: 'Hiking together', caption: 'Adventures await' },
  { src: '/placeholder.svg?height=300&width=300', alt: 'Family gathering', caption: 'Two families, one love' },
  { src: '/placeholder.svg?height=300&width=300', alt: 'Engagement photo', caption: 'The day we said yes' },
  { src: '/placeholder.svg?height=300&width=300', alt: 'Couple laughing', caption: 'Laughter is our love language' },
]; */

/* const images = [
  { src: '../assets/Raghulkumar_img.JPG', alt: 'Naveen and Sandhiya at the beach', caption: 'Where it all began' },
  { src: '../assets/Raghulkumar_img.JPG', alt: 'Couple at a cafe', caption: 'Coffee dates and sweet memories' },
  { src: '../assets/Raghulkumar_img.JPG', alt: 'Hiking together', caption: 'Adventures await' },
  { src: '../assets/Raghulkumar_img.JPG', alt: 'Family gathering', caption: 'Two families, one love' },
  { src: '../assets/Raghulkumar_img.JPG', alt: 'Engagement photo', caption: 'The day we said yes' },
  { src: '../assets/Raghulkumar_img.JPG', alt: 'Couple laughing', caption: 'Laughter is our love language' },
]; */

const images = [
  { src: '../assets/Raghulkumar_img.JPG', alt: 'imgae', caption: 'Where it all began' },
  { src: '../assets/Raghulkumar_img.JPG', alt: 'image', caption: 'Coffee dates and sweet memories' },
  { src: '../assets/Raghulkumar_img.JPG', alt: 'image', caption: 'Adventures await' },
  { src: '../assets/Raghulkumar_img.JPG', alt: 'image', caption: 'Two families, one love' },
  { src: '../assets/Raghulkumar_img.JPG', alt: 'image', caption: 'The day we said yes' },
  { src: '../assets/Raghulkumar_img.JPG', alt: 'image', caption: 'Laughter is our love language' },
];

export default function Gallery() {
  return (
    <section className="gallery">
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
        <h2 className="title">Our Love Story in Pictures</h2>
        <div className="image-grid">
          {images.map((image, index) => (
            <div key={index} className="image-container">
              <img src={image.src} alt={image.alt} className="image" />
              <div className="image-overlay">
                <p className="couple-names">Naveen & Sandhiya</p>
                <p className="image-caption">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="description">
          Each picture tells a story, a moment frozen in time. These are just a few snapshots of our journey together, 
          with many more beautiful memories to come.
        </p>
      </div>
    </section>
  );
}