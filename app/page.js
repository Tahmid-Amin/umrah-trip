import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import MyCards from "@/components/MyCards";
import Image from "next/image";
Button
export default function Home() {
  return (
    <div>
      <main className="flex-grow p-8">
        <div className="flex flex-col items-center mb-8">
          <Image 
            src="/images/salam-banner.png" 
            alt="Umrah Planner Banner" 
            width={800} 
            height={400} 
            className="rounded-lg"
          />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to the Umrah Planner</h1>
        </div>
        {/* <h1 className="text-4xl font-bold mb-4 text-gray-900">Welcome to the Umrah Planner</h1> */}
        {/* Cards Section */}
        <MyCards />
      </main>

      <Footer />
    </div>
  );
}
