import React from 'react';
import { Link } from 'react-scroll';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero container">
      <div className="hero-content">
        <h1 className="hero-title">Somrita Das</h1>
        <h2 className="hero-subtitle">Aspiring Software Engineer</h2>
        <Link to="projects" spy={true} smooth={true} offset={-70} duration={500} className="btn-primary">
          View My Work
        </Link>
      </div>
      <div className="hero-image">
        <img src="/images/myimg.jpg.png" alt="Somrita Das" className="floating" />
      </div>
    </section>
  );
};

export default Hero;