"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { heading: "Features", link: "/" },
  { heading: "Works", link: "/" },
  { heading: "Pricing", link: "/" },
  { heading: "Resources", link: "/" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${isScrolled ? "bg-linear-to-b from-black/90 to-transparent backdrop-blur-xs" : "bg-transparent"}
        ${isOpen ? "bg-black" : ""}
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Image src="/logo2.png" width={120} height={40} alt="Suronex AI" />

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link, idx) => (
            <Link
              key={idx}
              href={link.link}
              className="text-white hover:text-transparent hover:bg-clip-text hover:bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 transition"
            >
              {link.heading}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <button className="hidden md:inline-flex bg-linear-to-br from-violet-800 via-purple-800 to-pink-800 px-6 py-2 rounded-lg text-white font-semibold">
          Contact us
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="h-screen md:hidden bg-black/95 backdrop-blur-md border-t border-white/10">
          <nav className="flex flex-col items-center py-6 gap-6">
            {links.map((link, idx) => (
              <Link
                key={idx}
                href={link.link}
                onClick={() => setIsOpen(false)}
                className="text-white text-lg hover:text-pink-400 transition"
              >
                {link.heading}
              </Link>
            ))}

            <button className="mt-4 bg-linear-to-br from-violet-800 via-purple-800 to-pink-800 px-8 py-3 rounded-lg text-white font-semibold">
              Contact us
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
