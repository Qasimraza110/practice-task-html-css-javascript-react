export default function Footer() {
  return ( 
    <footer className="bg-white text-gray-700 mt-16 shadow-inner">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        {/* Logo + Text */}
        <div>
          <a href="#" className="flex items-center gap-2 text-xl font-bold text-gray-900">
            <img src="/assets/logo-dark.png" alt="logo" className="w-8" />
            SQ Motors
          </a>
          <p className="mt-4 text-sm">
            Experience the best of New York with the elegance and reliability of Premium Car Rental.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold mb-3 text-gray-900">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#about" className="hover:text-blue-600">About Us</a></li>
            <li><a href="#car" className="hover:text-blue-600">Cars</a></li>
            <li><a href="#feature" className="hover:text-blue-600">Features</a></li>
            <li><a href="#help" className="hover:text-blue-600">Help</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-semibold mb-3 text-gray-900">Subscribe To News</h4>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-3 py-2 rounded-lg border text-gray-900"
            />
            <button className="bg-black px-4 py-2 rounded-lg text-white hover:bg-gray-800 transition">
              <i className="ri-arrow-right-line"></i>
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-gray-200 text-center py-4 text-sm text-gray-500">
        © 2025 Qasim Raza Full Stack. All rights reserved.
      </div>
    </footer>
  );
}
