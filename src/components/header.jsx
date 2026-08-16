'use client';

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/character", label: "Character" },
  { href: "/anime", label: "Anime" },
  { href: "/manga", label: "Manga" },
  { href: "/category", label: "Category" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 bg-primary/95 text-accent backdrop-blur-md border-b border-accent/15 transition-all">
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
        {/* Brand Logo */}
        <Link 
          href="/" 
          className="text-2xl font-black tracking-tight text-accent transition-transform hover:scale-105"
        >
          Next <span className="opacity-75">Animix</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1.5">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-semibold rounded-xl text-accent/85 hover:text-accent hover:bg-secondary/40 border border-transparent hover:border-accent/15 transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={toggleMenu}
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
          className="md:hidden p-2.5 rounded-xl bg-secondary/30 border border-accent/15 text-accent hover:bg-secondary/60 transition-colors"
        >
          {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
        </button>
      </div>

      {/* Mobile Drawer Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      />

      {/* Mobile Drawer Panel */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-4/5 max-w-xs bg-primary text-accent border-l border-accent/15 shadow-2xl transform transition-transform duration-300 ease-out md:hidden flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="p-6 flex items-center justify-between border-b border-accent/10">
          <Link href="/" onClick={closeMenu} className="text-xl font-black text-accent">
            Next Animix
          </Link>
          <button
            onClick={closeMenu}
            aria-label="Close menu"
            className="p-2 rounded-lg bg-secondary/30 text-accent hover:bg-secondary/50 transition-colors"
          >
            <FaTimes className="text-lg" />
          </button>
        </div>

        {/* Drawer Links */}
        <nav className="flex-1 overflow-y-auto px-4 py-6">
          <ul className="space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className="flex items-center px-4 py-3 text-sm font-semibold rounded-xl text-accent bg-secondary/20 hover:bg-secondary/50 border border-accent/10 hover:border-accent/30 transition-all duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Drawer Footer Meta */}
        <div className="p-6 border-t border-accent/10 text-xs opacity-60 text-center">
          &copy; {new Date().getFullYear()} Next Animix
        </div>
      </aside>
    </header>
  );
};

export default Header;