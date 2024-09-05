'use client';

import Link from "next/link";


export default function Navbar() {
    return(
        <nav className="bg-gray-800 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-white font-bold text-xl">
              The Wahabi Umrah Guide
            </div>
            <div>
              <Link href="/" className="text-gray-300 hover:text-white">
                Home
              </Link>
            </div>
          </div>
        </nav>
      );
    
}