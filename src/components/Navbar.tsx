import { useState } from 'react';
import { Menu, X, Cloud } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Courses', href: '/courses' },
    { name: 'Demo Class', href: '/demo' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-blue-600">
            <Cloud className="w-6 h-6" />
            <span>AR CLOUD</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {navLinks.map(link => (
              <Link
                key={link.name}
                to={link.href}
                className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex gap-3">
            <a
              href="https://wa.me/918002604589"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm font-medium"
            >
              WhatsApp Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t">
            {navLinks.map(link => (
              <Link
                key={link.name}
                to={link.href}
                className="block px-4 py-2 text-gray-700 hover:bg-blue-50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://wa.me/918002604589"
              target="_blank"
              rel="noopener noreferrer"
              className="block m-4 px-4 py-2 bg-green-500 text-white rounded-lg text-center hover:bg-green-600 transition-colors font-medium"
            >
              WhatsApp Us
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
