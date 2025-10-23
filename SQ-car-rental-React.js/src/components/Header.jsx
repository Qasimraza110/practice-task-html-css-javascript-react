 import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return ( 
    <nav className="fixed top-0 w-full z-50 bg-white text-gray-900 shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 text-xl font-bold">
          <img src="/assets/logo-dark.png" alt="logo" className="w-8" />
          SQ Motors
        </a>

        {/* Mobile Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-6 font-medium">
          <li><a href="#about" className="hover:text-blue-600">About Us</a></li>
          <li><a href="#car" className="hover:text-blue-600">Cars</a></li>
          <li><a href="#feature" className="hover:text-blue-600">Features</a></li>
          <li><a href="#help" className="hover:text-blue-600">Help</a></li>
          <li>
            <button className="bg-black text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-gray-800 transition">
              <i className="ri-apple-fill"></i> Download App
            </button>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden flex flex-col gap-4 px-6 py-4 bg-white text-gray-900 shadow"
        >
          <li><a href="#about" className="hover:text-blue-600">About Us</a></li>
          <li><a href="#car" className="hover:text-blue-600">Cars</a></li>
          <li><a href="#feature" className="hover:text-blue-600">Features</a></li>
          <li><a href="#help" className="hover:text-blue-600">Help</a></li>
          <li>
            <button className="bg-black text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-gray-800 transition">
              <i className="ri-apple-fill"></i> Download App
            </button>
          </li>
        </motion.ul>
      )}
    </nav>
  );
}
