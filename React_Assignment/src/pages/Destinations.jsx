import React from "react";
import { Link } from "react-router-dom";  
import "./destination.css";

const Destination = () => {
  const destinations = [
    {
      id: 1,
      name: "Paris, France",
      description: "The city of love, art, and fashion. Visit the Eiffel Tower, Louvre Museum, and more.",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    },
    {
      id: 2,
      name: "Tokyo, Japan",
      description: "A vibrant blend of tradition and modernity. Explore temples, skyscrapers, and sushi culture.",
      image: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c",
    },
    {
      id: 3,
      name: "New York, USA",
      description: "The city that never sleeps. See Times Square, Central Park, and the Statue of Liberty.",
      image: "https://images.unsplash.com/photo-1533106418989-88406c7cc8ca",
    },
    {
      id: 4,
      name: "Sydney, Australia",
      description: "Famous for the Opera House, Bondi Beach, and its stunning harbor views.",
      image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03",
    },
  ];

  return (
    <div className="destination-container">
      <h1 className="destination-heading">Popular Destinations</h1>
      <div className="destination-grid">
        {destinations.map((dest) => (
          <div key={dest.id} className="destination-card">
            <img src={dest.image} alt={dest.name} />
            <h2>{dest.name}</h2>
            <p>{dest.description}</p>

            {/* ✅ View Details Button */}
            <Link to={`/destinations/${dest.id}`}>
              <button className="view-btn">View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destination;

