import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Destination from "./pages/Destinations";
import DestinationDetails from "./pages/DestinationDetails"; // NEW details page
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import PackingList from "./pages/Packinglist";  // ✅ Add this line



function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Navbar at top */}
        <Navbar />

        {/* Page Content */}
        <main style={{ minHeight: "80vh" }}>
          <Routes>
            <Route path="/" element={<Home />} />

            {/* FIX: make plural to match your Home.jsx link */}
            <Route path="/destinations" element={<Destination />} /> 

            {/* Destination details */}
            <Route path="/destinations/:id" element={<DestinationDetails />} />

            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/packing" element={<PackingList />} />

            {/* 404 Page */}
            <Route
              path="*"
              element={
                <h2 style={{ textAlign: "center", marginTop: "50px" }}>
                  404 - Page Not Found
                </h2>
              }
            />
          </Routes>
        </main>

        {/* Footer at bottom */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
