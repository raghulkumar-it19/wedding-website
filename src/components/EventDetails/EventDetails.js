import React from 'react';
import { FaHeart, FaCalendarAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import './EventDetails.css';

export default function EventDetails() {
  const events = [
    {
      title: 'Engagement',
      date: 'December 15, 2024',
      time: '6:00 PM',
      venue: 'Golden Palace, Chennai',
      side: 'right'
    },
    {
      title: 'Groom Welcoming Function',
      date: 'January 19, 2025',
      time: '10:00 AM',
      venue: 'Silver Hall, Coimbatore',
      side: 'left'
    },
    {
      title: 'Marriage',
      date: 'January 20, 2025',
      time: '8:00 AM',
      venue: 'Radisson Blu Resort, Mamallapuram',
      side: 'right'
    }
  ];

  return (
    <section className="event-details">
      <h2 className="title">Celebrate Our Special Days</h2>
      <div className="timeline">
        {events.map((event, index) => (
          <div key={index} className={`event ${event.side}`}>
            <div className="heart-icon">
              <FaHeart />
            </div>
            <div className="event-content">
              <h3>{event.title}</h3>
              <p>
                <FaCalendarAlt className="icon" /> {event.date}
              </p>
              <p>
                <FaClock className="icon" /> {event.time}
              </p>
              <p>
                <FaMapMarkerAlt className="icon" /> {event.venue}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}