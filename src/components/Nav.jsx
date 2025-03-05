import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import images from "../assets/icon.png";

function Nav() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${search}`);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/10 backdrop-blur-md shadow-md">
      <nav className="container mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo Section */}
        <NavLink to="/" className="flex items-center gap-3">
          <img src={images} alt="brand logo" className="w-10 h-10" />
          <h1 className="text-2xl font-bold text-black tracking-widest drop-shadow-lg">
            BookFinder 
          </h1>
        </NavLink>

        {/* Search Bar */}
        <form
          method="get"
          className="relative flex items-center w-full max-w-md"
          onSubmit={handleSubmit}
        >
          <input
            className="w-full py-2 px-4 rounded-full border-2 border-teal-300 bg-black/20 text-white placeholder-white focus:bg-white/30 focus:ring-2 focus:ring-teal-500 focus:outline-none transition-all"
            type="search"
            placeholder="Search for books..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            type="submit"
            className="absolute right-2 px-4 py-1 bg-teal-500 text-white font-semibold rounded-full hover:bg-teal-600 transition-all"
          >
            🔍
          </button>
        </form>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-6">
          <NavLink to="/" className="text-black text-lg hover:text-teal-50 transition-all">
            Home
          </NavLink>
          <NavLink to="/explore" className="text-black text-lg hover:text-teal-50 transition-all">
            Explore
          </NavLink>
          
        </div>
      </nav>
    </header>
  );
}

export default Nav;
