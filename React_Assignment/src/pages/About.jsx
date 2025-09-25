import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h2>About Us</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Travel Planner Lite is your companion for easy, efficient, and fun
            trip planning. Our goal is to simplify your travel experience by
            offering the right tools and inspiration to explore the world.
          </p>
          <p>
            Whether you're planning a quick getaway or a long journey, we help
            you organize and enjoy every moment. Join us to make your adventures
            memorable!
          </p>
        </div>

        {/* Image grid section */}
        <div className="about-images">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
            alt="Beach"
          />
          <img
            src="https://images.unsplash.com/photo-1526779259212-939e64788e3c?auto=format&fit=crop&w=800&q=80"
            alt="Mountains"
          />
          <img
            src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=800&q=80"
            alt="City"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
