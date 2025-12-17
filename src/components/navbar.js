"use client";

import Image from "next/image";
import { useState } from "react";
import Theme from "../components/toggle";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#blog" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative w-full">
      {/* Background */}
      <div className="w-full h-24 md:h-36 bg-cover bg-center rounded-b-[2rem] md:rounded-b-[3rem] overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Nav container */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* Logo */}
          <Image
            src="/home_page/logo/logo.png"
            alt="Logo"
            width={180}
            height={180}
            className="w-32 md:w-44"
          />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center bg-[#3d4f2f]/95 dark:bg-[#0A120D] rounded-full px-8 py-3 ">
            <ul className="flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="border-b-2 border-transparent hover:border-white transition-all duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <Theme />

            {/* Contact Button */}
            <button className="hidden md:block bg-[#30511D]/95 dark:bg-[#9AD97B] rounded-full py-2 px-4 text-white dark:text-black transform transition-all duration-300
  hover:scale-105 hover:shadow-xl
  hover:bg-gradient-to-r hover:from-green-500 hover:to-green-700">
              Contact Us
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-white text-2xl"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 bg-[#3d4f2f]/95 dark:bg-[#0A120D] rounded-2xl p-6">
            <ul className="flex flex-col gap-4 text-center">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="nav-link block"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
