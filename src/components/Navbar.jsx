import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { FiSun, FiMoon } from "react-icons/fi";
import logo from "../assets/logo.png";
import logoDark from "../assets/logo-dark.png";

function Navbar() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  // ✅ INITIAL LOAD
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDark(false);
    }
  }, []);

  // ✅ TOGGLE
  const toggleDark = () => {
    setDark((prev) => {
      const newTheme = !prev;

      if (newTheme) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }

      return newTheme;
    });
  };

  return (
    <div className="fixed top-0 w-full bg-white dark:bg-black text-black dark:text-white border-b border-gray-200 dark:border-gray-700 z-50">

      <div className="flex items-center justify-between px-6 md:px-10 py-4">

        {/* ✅ LOGO FIXED */}
        <Link to="/" className="flex items-center">
          <img
            src={dark ? logoDark : logo}
            alt="logo"
            className="h-8 md:h-10"
          />
        </Link>

        {/* CENTER - NAV */}
        <div className="hidden md:flex gap-10 text-sm tracking-wide">

          <Link
            to="/"
            className={`${
              location.pathname === "/"
                ? "font-semibold"
                : "text-gray-600 dark:text-gray-300"
            } hover:text-black dark:hover:text-white transition`}
          >
            Home
          </Link>

          <Link
            to="/products"
            className={`${
              location.pathname === "/products"
                ? "font-semibold"
                : "text-gray-600 dark:text-gray-300"
            } hover:text-black dark:hover:text-white transition`}
          >
            Products
          </Link>

          <Link
            to="/about"
            className={`${
              location.pathname === "/about"
                ? "font-semibold"
                : "text-gray-600 dark:text-gray-300"
            } hover:text-black dark:hover:text-white transition`}
          >
            About
          </Link>

          <Link
            to="/contact"
            className={`${
              location.pathname === "/contact"
                ? "font-semibold"
                : "text-gray-600 dark:text-gray-300"
            } hover:text-black dark:hover:text-white transition`}
          >
            Contact
          </Link>

        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">

          {/* 🌙 DARK MODE TOGGLE */}
          <button
            onClick={toggleDark}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 hover:scale-110 hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-300"
          >
            {dark ? <FiSun size={16} /> : <FiMoon size={16} />}
          </button>

          {/* 🔍 SEARCH */}
          <div
            onClick={() => setSearchOpen(true)}
            className={`flex items-center border border-gray-300 dark:border-gray-600 rounded-full px-3 py-1 cursor-text transition-all duration-300 ${
              searchOpen ? "w-[220px] md:w-[280px]" : "w-[42px]"
            } overflow-hidden`}
          >
            <FaSearch className="text-gray-600 dark:text-gray-300 shrink-0" />

            {searchOpen && (
              <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && query.trim() !== "") {
                    navigate(`/search?q=${query}`);
                    setQuery("");
                    setSearchOpen(false);
                  }
                }}
                onBlur={() => setSearchOpen(false)}
                className="ml-2 w-full outline-none text-sm bg-transparent"
                autoFocus
              />
            )}
          </div>

          {/* 🍔 MOBILE MENU */}
          <div
            className="md:hidden cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </div>

        </div>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-6 py-6 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-700 text-sm tracking-wide">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}

    </div>
  );
}

export default Navbar;