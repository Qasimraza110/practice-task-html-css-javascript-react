import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import "./destination.css"; 

// Same data with more details + packages
const destinations = [
  {
    id: 1,
    name: "Paris, France",
    description:
      "Paris, the city of love, art, and fashion. Explore the Eiffel Tower, Louvre Museum, and charming streets filled with cafes and boutiques.",
    images: [
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
      "https://images.unsplash.com/photo-1508057198894-247b23fe5ade",
      "https://images.unsplash.com/photo-1522098543979-ffc7f79d5e86",
    ],
    packages: [
      { type: "Budget", price: "$800", duration: "3 Days / 2 Nights" },
      { type: "Standard", price: "$1500", duration: "5 Days / 4 Nights" },
      { type: "Luxury", price: "$3000", duration: "7 Days / 6 Nights" },
    ],
  },
  {
    id: 2,
    name: "Tokyo, Japan",
    description:
      "Tokyo is a fascinating blend of traditional temples and futuristic skyscrapers. Visit Sensō-ji Temple, Shibuya Crossing, Tokyo Skytree, and enjoy sushi and anime culture.",
    images: [
      "https://images.unsplash.com/photo-1549692520-acc6669e2f0c",
      "https://images.unsplash.com/photo-1505067137792-7d9dc4d8d11e",
      "https://images.unsplash.com/photo-1508931130015-96f0e3f48c1d",
    ],
    packages: [
      { type: "Budget", price: "$1000", duration: "4 Days / 3 Nights" },
      { type: "Standard", price: "$1800", duration: "6 Days / 5 Nights" },
      { type: "Luxury", price: "$3500", duration: "8 Days / 7 Nights" },
    ],
  },
  {
    id: 3,
    name: "New York, USA",
    description:
      "The city that never sleeps! Explore Times Square, Central Park, Statue of Liberty, Broadway, and the Empire State Building.",
    images: [
      "https://images.unsplash.com/photo-1533106418989-88406c7cc8ca",
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
      "https://images.unsplash.com/photo-1505196298139-8cfce5a46f9a",
    ],
    packages: [
      { type: "Budget", price: "$900", duration: "3 Days / 2 Nights" },
      { type: "Standard", price: "$1700", duration: "5 Days / 4 Nights" },
      { type: "Luxury", price: "$3200", duration: "7 Days / 6 Nights" },
    ],
  },
  {
    id: 4,
    name: "Sydney, Australia",
    description:
      "Sydney is famous for its Opera House, Bondi Beach, and beautiful harbour views. Enjoy ferries, Taronga Zoo, and Australian lifestyle.",
    images: [
      "https://images.unsplash.com/photo-1506976785307-8732e854ad03",
      "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef",
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
    ],
    packages: [
      { type: "Budget", price: "$950", duration: "4 Days / 3 Nights" },
      { type: "Standard", price: "$1600", duration: "6 Days / 5 Nights" },
      { type: "Luxury", price: "$3100", duration: "8 Days / 7 Nights" },
    ],
  },
];

const DestinationDetails = () => {
  const { id } = useParams();
  const destination = destinations.find((d) => d.id === Number(id));
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [form, setForm] = useState({ name: "", email: "" });

  if (!destination) {
    return <h2 style={{ textAlign: "center" }}>Destination not found</h2>;
  }

  const handleBooking = (e) => {
    e.preventDefault();
    alert(
      `✅ Booking Confirmed!\nName: ${form.name}\nEmail: ${form.email}\nPackage: ${selectedPackage.type} (${selectedPackage.duration}, ${selectedPackage.price})`
    );
    setForm({ name: "", email: "" });
    setSelectedPackage(null);
  };

  return (
    <div className="destination-details">
      <h1>{destination.name}</h1>
      <p className="details-description">{destination.description}</p>

      {/* Gallery */}
      <div className="details-gallery">
        {destination.images.map((img, i) => (
          <img key={i} src={img} alt={`${destination.name} ${i}`} />
        ))}
      </div>

      {/* Travel Packages */}
      <h2 className="package-heading">Available Packages</h2>
      <div className="package-container">
        {destination.packages.map((pkg, i) => (
          <div key={i} className="package-card">
            <h3>{pkg.type} Package</h3>
            <p>{pkg.duration}</p>
            <p className="price">{pkg.price}</p>
            <button onClick={() => setSelectedPackage(pkg)}>
              Book This Package
            </button>
          </div>
        ))}
      </div>

      {/* Booking Form */}
      {selectedPackage && (
        <form className="booking-form" onSubmit={handleBooking}>
          <h3>Book {selectedPackage.type} Package</h3>
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <button type="submit">Confirm Booking</button>
        </form>
      )}

      <Link to="/destinations" className="back-btn">
        ← Back to Destinations
      </Link>
    </div>
  );
};

export default DestinationDetails;

