import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-emerald-500  text-white py-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Islamic College</h2>
          <p className="text-white">
            Dedicated to quality education and innovation in every step.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/home" className="hover:text-white transition">Home</a></li>
            <li><a href="/course" className="hover:text-white transition">Course</a></li>
            <li><a href="/about" className="hover:text-white transition">About Us</a></li>
            <li><a href="/events" className="hover:text-white transition">Events</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-300">Email: info@islamiccollege.edu</p>
          <p className="text-gray-300">Phone: +94 75 819 6101</p>
          <div className="flex gap-4 mt-4">
            <a href="#"><Facebook size={24} color="white" /></a>
            <a href="#"><Twitter size={24} color="white" /></a>
            <a href="#"><Linkedin size={24} color="white" /></a>
            <a href="#"><Instagram size={24} color="white" /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-white text-sm">
        © {new Date().getFullYear()} Islamic College. All rights reserved.
      </div>
    </footer>
  );
}
