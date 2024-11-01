import React from 'react';
import useCountdown from './useCountdown';
import './Countdown.css';

export default function Countdown() {
  const { days, hours, minutes, seconds } = useCountdown(new Date('2025-01-20T09:30:00'));

  const timeUnits = [
    { label: 'Days', value: days },
    { label: 'Hours', value: hours },
    { label: 'Minutes', value: minutes },
    { label: 'Seconds', value: seconds },
  ];

  return (
    <section className="countdown">
      <div className="container">
        <h2 className="title">The Countdown to Forever Begins</h2>
        <div className="timer">
          {timeUnits.map((unit, index) => (
            <div key={index} className="time-unit">
              <span className="time-value">{unit.value}</span>
              <p className="time-label">{unit.label}</p>
            </div>
          ))}
        </div>
        <p className="description">
          Every second brings us closer to the moment we say "I do". 
          We're excited to start this new chapter of our lives with you by our side.
        </p>
      </div>
      
      <div className="floating-particles">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              backgroundColor: `hsl(${Math.random() * 360}, 100%, 75%)`,
            }}
          />
        ))}
      </div>
    </section>
  );
}