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
              <Link
                href="/"
                className="px-2 py-3 hover:bg-secondary hover:text-accent transition-all duration-300 shadow rounded"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="px-2 py-3 hover:bg-secondary hover:text-accent transition-all duration-300 shadow rounded"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/character"
                className="px-2 py-3 hover:bg-secondary hover:text-accent transition-all duration-300 shadow rounded"
              >
                Character
              </Link>
            </li>
            <li>
              <Link
                href="/anime"
                className="px-2 py-3 hover:bg-secondary hover:text-accent transition-all duration-300 shadow rounded"
              >
                Anime
              </Link>
            </li>
            <li>
              <Link
                href="/manga"
                className="px-2 py-3 hover:bg-secondary hover:text-accent transition-all duration-300 shadow rounded"
              >
                Manga
              </Link>
            </li>
            <li>
              <Link
                href="/category"
                className="px-2 py-3 hover:bg-secondary hover:text-accent transition-all duration-300 shadow rounded"
              >
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
