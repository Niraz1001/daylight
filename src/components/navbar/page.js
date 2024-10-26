import React from "react";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <>
      <nav className="fixed w-full top-0 z-50 bg-transparent backdrop-blur-sm text-white p-4 md:p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">LOGO</div>

          <div className="space-x-14 hidden md:flex">
            <a href="#">Home</a>
            <a href="#">Products</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>

          <div className="md:hidden">
            <button
              className="text-white focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Toggle Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></path>
              </svg>
            </button>
          </div>

          {/* Get a Quote Button */}
          <div className="hidden md:block">
            <Button className="border-white text-white bg-black">
              Get a Quote
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
