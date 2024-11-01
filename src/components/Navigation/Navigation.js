import React from 'react';
import { Link } from 'react-scroll';
import './Navigation.css';

export default function Navigation() {
  return (
    <nav className="navigation">
      <div className="container">
        <div className="logo">Naveen and Sandhiya</div>
        <div className="nav-links">
          {['home', 'event', 'countdown', 'gallery', 'end'].map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={500}
              className="nav-item"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
