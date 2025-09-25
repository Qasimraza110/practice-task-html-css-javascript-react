import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-text">
          <h1>Welcome to Travel Planner Lite</h1>
          <p>
            Plan your trips easily with our simple and beautiful interface.
            Discover destinations, manage itineraries, and make your travel
            stress-free!
          </p>

          
          <Link to="/destinations">
            <button className="hero-btn">Get Started</button>
          </Link>
        </div>
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            alt="Travel"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;

