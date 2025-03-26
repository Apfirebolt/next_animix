'use client';

import Link from "next/link";

const Header = () => {

  return (
    <header className="bg-primary text-accent">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl w-1/2 bg-amber-800 p-5 font-bold">
          <Link href="/">Next Animix</Link>
        </h1>
        <nav className="w-1/2 p-5">
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-400">
                About
              </Link>
            </li>
            <li>
              <Link href="/character" className="hover:text-gray-400">
                Character
              </Link>
            </li>
            <li>
              <Link href="/anime" className="hover:text-gray-400">
                Anime
              </Link>
            </li>
            <li>
              <Link href="/manga" className="hover:text-gray-400">
                Manga
              </Link>
            </li>
            <li>
              <Link href="/category" className="hover:text-gray-400">
                Category
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
