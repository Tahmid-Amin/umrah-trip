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
          <Link href="/downloads/itinerary.pdf" download className="hover:text-white">
            Itinerary
          </Link>
          <Link href="/downloads/dua-book.pdf" download className="hover:text-white">
            Dua Book
          </Link>
          <Link href="/downloads/umrah-guide.pdf" download className="hover:text-white">
            Umrah Guide
          </Link>

          {/* Static "Contact Us" Text Without Link */}
          <div className="text-white">Contact Us</div>
        </div>

        {/* Right Section: Copyright */}
        <div className="text-sm text-gray-400 mt-4 md:mt-0">
          <p>&copy; {new Date().getFullYear()} Umrah Planner. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}