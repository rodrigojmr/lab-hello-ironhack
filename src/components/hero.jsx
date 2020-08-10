import React from 'react';
import '../index.css';

function Hero() {
  return (
    <div className="hero">
      <div className="hero-wrapper">
        <h1>Say hello to ReactJS</h1>
        <div className="subtitle-wrapper">
          <p>
            You will learn a Frontend framework from scratch, to become a Ninja
            Developer.
          </p>
        </div>
        <a href="#" className="btn btn--white">
          Awesome!
        </a>
      </div>
    </div>
  );
}

export default Hero;
