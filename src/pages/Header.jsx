import React from "react";
import { Link } from "@tanstack/react-router";

const Header = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between items-center w-full h-full">
      <div className="font-bold text-2xl">🍲 Recipe Book</div>
      <div className="space-x-4">
        <Link to="/" className="hover:underline text-lg">
          Home
        </Link>
        <Link to="/add" className="hover:underline text-lg">
          Add Recipe
        </Link>
        <Link to="/favorites" className="hover:underline text-lg">
          Favorites
        </Link>
      </div>
    </nav>
  );
};

export default Header;
