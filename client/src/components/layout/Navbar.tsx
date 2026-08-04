"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "How It Works", href: "#works" },
    { name: "Contact", href: "#footer" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scroll
          ? "bg-white/90 backdrop-blur-md shadow"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link
            href="/"
            className="text-4xl font-bold tracking-wide text-[#5A1E2A]"
          >
            CHARIS
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-[#5A1E2A] transition"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Login */}
          <div className="hidden md:block">
            <Link
              href="/login"
              className="bg-[#5A1E2A] text-white px-6 py-3 rounded-full hover:scale-105 transition inline-block"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-3xl text-[#5A1E2A]"
          >
            {open ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg">

          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block px-6 py-4 border-b"
              onClick={() => setOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          <div className="p-5">
            <Link
              href="/login"
              className="block w-full text-center bg-[#5A1E2A] text-white py-3 rounded-full"
              onClick={() => setOpen(false)}
            >
              Login
            </Link>
          </div>

        </div>
      )}
    </nav>
  );
}