"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export default function NavBar() {
  return (
    <nav className="w-full bg-black text-white">
      <div className="container mx-auto">
        <NavigationMenu className="w-full justify-end">
          <NavigationMenuList className="flex justify-end items-center space-x-8 p-4">
            {/* Home Link */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-black text-white hover:text-gray-300">
                Home
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink asChild>
                  <Link href="/" className="p-2 bg-black text-white hover:text-gray-300">
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* About Link (No actual link yet) */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-black text-white hover:text-gray-300">
                About
              </NavigationMenuTrigger>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}
