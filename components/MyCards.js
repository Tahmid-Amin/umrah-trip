'use client';

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";
import Link from "next/link";

export default function Cards() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      
      {/* Itinerary Card */}
      <Card>
        <CardHeader>
          <CardTitle>Itinerary</CardTitle>
          <CardDescription>Download your travel itinerary for the Umrah trip.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Plan your journey with detailed information on the itinerary.</p>
        </CardContent>
        <CardFooter>
          <Link href="/downloads/itinerary.pdf" download>
            <a className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
              Download PDF
            </a>
          </Link>
        </CardFooter>
      </Card>

      {/* Dua Book Card */}
      <Card>
        <CardHeader>
          <CardTitle>Dua Book</CardTitle>
          <CardDescription>Download the Dua book to recite during your Umrah journey.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Find essential duas and supplications for every step of your Umrah.</p>
        </CardContent>
        <CardFooter>
          <Link href="/downloads/dua-book.pdf" download>
            <a className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
              Download PDF
            </a>
          </Link>
        </CardFooter>
      </Card>

      {/* Umrah Guide Card */}
      <Card>
        <CardHeader>
          <CardTitle>Umrah Guide</CardTitle>
          <CardDescription>A comprehensive guide for performing Umrah.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Step-by-step instructions and information to help you perform Umrah smoothly.</p>
        </CardContent>
        <CardFooter>
          <Link href="/downloads/umrah-guide.pdf" download>
            <a className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
              Download PDF
            </a>
          </Link>
        </CardFooter>
      </Card>

    </div>
  );
}
