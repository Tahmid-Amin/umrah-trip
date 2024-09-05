'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* Left Section */}
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-semibold text-white">Umrah Planner</h3>
          <p>Your trusted resource for planning the perfect Umrah journey.</p>
        </div>

        {/* Middle Section: Links */}
        <div className="flex space-x-6">
          <Link href="/downloads/itinerary.pdf" download>
            <a className="hover:text-white">Itinerary</a>
          </Link>
          <Link href="/downloads/dua-book.pdf" download>
            <a className="hover:text-white">Dua Book</a>
          </Link>
          <Link href="/downloads/umrah-guide.pdf" download>
            <a className="hover:text-white">Umrah Guide</a>
          </Link>
          <Link href="/contact">
            <a className="hover:text-white">Contact Us</a>
          </Link>
        </div>

        {/* Right Section: Copyright */}
        <div className="text-sm text-gray-400 mt-4 md:mt-0">
          <p>&copy; {new Date().getFullYear()} Umrah Planner. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}