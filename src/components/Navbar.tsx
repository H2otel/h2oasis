"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown, Globe } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showWhySubmenu, setShowWhySubmenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${
      isScrolled ? "bg-white shadow-md" : "bg-white"
    }`}>
      <div className="container mx-auto px-4 py-2 flex flex-col items-center font-poppins">
        {/* Logo */}
        <div className="flex items-center justify-center w-full mb-4">
          <Link href="/">
            <Image
              src="https://ext.same-assets.com/749974248/3784799825.png"
              alt="H2Oasis Logo"
              width={130}
              height={70}
              className="h-auto w-auto"
            />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden w-full flex justify-end">
          <button
            className="text-2xl transition-colors duration-500 text-gray-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu />
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-col items-center w-full">
          <ul className="flex space-x-8 mb-6">
            <li>
              <Link href="/" className="transition-colors duration-500 text-gray-800 hover:text-blue-600 text-md font-medium">
                Home
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="transition-colors duration-500 text-gray-800 hover:text-blue-600 text-md font-medium">
                Blog
              </Link>
            </li>
            <li className="relative">
              <button
                className="transition-colors duration-500 text-gray-800 hover:text-blue-600 text-md font-medium flex items-center"
                onClick={() => setShowWhySubmenu(!showWhySubmenu)}
              >
                Why H2Oasis <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {showWhySubmenu && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-20">
                  <Link href="/our-solutions" className="block px-4 py-2 text-gray-800 hover:bg-blue-50">
                    Our Solutions
                  </Link>
                  <Link href="/our-offers" className="block px-4 py-2 text-gray-800 hover:bg-blue-50">
                    Our Offers
                  </Link>
                  <Link href="/contact" className="block px-4 py-2 text-gray-800 hover:bg-blue-50">
                    Contact
                  </Link>
                  <Link href="/why-h2oasis" className="block px-4 py-2 text-gray-800 hover:bg-blue-50">
                    Why H2Oasis
                  </Link>
                  <Link href="/simulation" className="block px-4 py-2 text-gray-800 hover:bg-blue-50">
                    Simulation
                  </Link>
                </div>
              )}
            </li>
          </ul>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <Button className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-2 rounded-md">
              Request a Quote
            </Button>
            <Button variant="outline" className="border border-blue-500 text-blue-500 px-6 py-2 rounded-md">
              Contact Us
            </Button>

            {/* Language Selector */}
            <button className="flex items-center text-gray-800 hover:text-blue-600 ml-4">
              <Globe className="mr-1 h-5 w-5" />
              <span>English</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 w-full">
            <ul className="flex flex-col p-4">
              <li className="py-2 border-b border-gray-100">
                <Link
                  href="/"
                  className="block transition-colors duration-500 text-gray-800 hover:text-blue-600 text-md font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li className="py-2 border-b border-gray-100">
                <Link
                  href="/blogs"
                  className="block transition-colors duration-500 text-gray-800 hover:text-blue-600 text-md font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Blog
                </Link>
              </li>
              <li className="py-2 border-b border-gray-100">
                <button
                  className="w-full text-left transition-colors duration-500 text-gray-800 hover:text-blue-600 text-md font-medium flex items-center justify-between"
                  onClick={() => setShowWhySubmenu(!showWhySubmenu)}
                >
                  Why H2Oasis <ChevronDown className="h-4 w-4" />
                </button>
                {showWhySubmenu && (
                  <div className="pl-4 mt-2 space-y-2">
                    <Link
                      href="/our-solutions"
                      className="block py-1 text-gray-600 hover:text-blue-600"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Our Solutions
                    </Link>
                    <Link
                      href="/our-offers"
                      className="block py-1 text-gray-600 hover:text-blue-600"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Our Offers
                    </Link>
                    <Link
                      href="/contact"
                      className="block py-1 text-gray-600 hover:text-blue-600"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Contact
                    </Link>
                    <Link
                      href="/why-h2oasis"
                      className="block py-1 text-gray-600 hover:text-blue-600"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Why H2Oasis
                    </Link>
                    <Link
                      href="/simulation"
                      className="block py-1 text-gray-600 hover:text-blue-600"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Simulation
                    </Link>
                  </div>
                )}
              </li>
              <li className="py-4">
                <Button className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white mb-2">
                  Request a Quote
                </Button>
                <Button variant="outline" className="w-full border border-blue-500 text-blue-500">
                  Contact Us
                </Button>
              </li>
              <li className="py-2 flex justify-center">
                <button className="flex items-center text-gray-800 hover:text-blue-600">
                  <Globe className="mr-1 h-5 w-5" />
                  <span>English</span>
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
