"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-blue-800 text-white shadow-md">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          {/* Logo or Brand Name */}
          <div className="text-2xl font-bold">MyApp</div>

          {/* Links and Menu for Larger Screens */}
          <div className="hidden md:flex space-x-4">
            <Button
              variant="link"
              className="text-white hover:text-primary-light"
            >
              Home
            </Button>
            <Button
              variant="link"
              className="text-white hover:text-primary-light"
            >
              About
            </Button>
            <Button
              variant="link"
              className="text-white hover:text-primary-light"
            >
              Services
            </Button>
            {/* Updated Dropdown Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="link"
                  className="text-white hover:text-primary-light"
                >
                  More
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Contact</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Toggle Button for Mobile Menu */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-primary-light px-4 py-2">
            <Button
              variant="link"
              className="block w-full text-left text-white hover:text-primary-dark"
            >
              Home
            </Button>
            <Button
              variant="link"
              className="block w-full text-left text-white hover:text-primary-dark"
            >
              About
            </Button>
            <Button
              variant="link"
              className="block w-full text-left text-white hover:text-primary-dark"
            >
              Services
            </Button>
            <Button
              variant="link"
              className="block w-full text-left text-white hover:text-primary-dark"
            >
              Contact
            </Button>
          </div>
        )}
      </nav>
    </>
  );
}
