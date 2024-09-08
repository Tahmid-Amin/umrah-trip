'use client';

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";
import Link from "next/link";

export default function MyCards() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      
      {/* Itinerary Card */}
      <Card className = "bg-white shadow-lg rounded-lg p-6">
        <CardHeader>
          <CardTitle className = "text-gray-800">Itinerary</CardTitle>
          <CardDescription className = "text-gray-600">Download your travel itinerary for the Umrah trip.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className = "text-gray-700">Plan your journey with detailed information on the itinerary.</p>
        </CardContent>
        <CardFooter>
          <a href="/downloads/Umrah-2024-itenarary.pdf" download="Umrah-2024-itenarary.pdf" className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
            Download PDF
          </a>
        </CardFooter>
      </Card>

      {/* Dua Book Card */}
      <Card className = "bg-white shadow-lg rounded-lg p-6">
        <CardHeader>
          <CardTitle className = "text-gray-800">Dua Book</CardTitle>
          <CardDescription className = "text-gray-600">Download the Dua book to recite during your Umrah journey.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className = "text-gray-700">Find essential duas and supplications for every step of your Umrah.</p>
        </CardContent>
        <CardFooter>
          <a href="/downloads/Dua-Booklet.pdf" download="Dua-Booklet.pdf" className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
            Download PDF
          </a>
        </CardFooter>
      </Card>

      {/* Umrah Guide Card */}
      <Card className = "bg-white shadow-lg rounded-lg p-6">
        <CardHeader>
          <CardTitle className = "text-gray-800">Umrah Guide</CardTitle>
          <CardDescription className = "text-gray-600">A comprehensive guide for performing Umrah.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className = "text-gray-700">Step-by-step instructions and information to help you perform Umrah smoothly.</p>
        </CardContent>
        <CardFooter>
          <a href="/downloads/The-Umrah-Guide.pdf" download="The-Umrah-Guide.pdf" className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
            Download PDF
          </a>
        </CardFooter>
      </Card>

    </div>
  );
}
