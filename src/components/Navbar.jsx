import { useLocation, useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import StoreLogo from "../images/LILIANDO_store_logo.png";
import { useState } from "react";

function Navbar({ cartCount }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleScroll = (e, id) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleSearch = (e) => {
    if (e.key === "Enter" && searchTerm.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm("");
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white text-primary p-4 flex flex-wrap justify-between items-center shadow-md gap-4" aria-label="Main navigation">
      {/* Logo */}
      <div onClick={(e) => handleScroll(e, "home")} className="cursor-pointer">
        <img src={StoreLogo} alt="LILIANDO Store Logo" className="h-16 ml-[100px]" />
      </div>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleSearch}
        className="border border-primary px-4 py-2 w-[200px] max-w-xs"
      />

      {/* Nav Links */}
      <ul className="flex gap-6 font-bold text-sm uppercase">
        <li>
          <a href="#home" onClick={(e) => handleScroll(e, "home")} className="hover:bg-contrastHover px-2 py-1 rounded transition">
            Home
          </a>
        </li>
        <li>
          <a href="#accessories" onClick={(e) => handleScroll(e, "accessories")} className="hover:bg-contrastHover px-2 py-1 rounded transition">
            Accessories
          </a>
        </li>
        <li>
          <a href="#clothing" onClick={(e) => handleScroll(e, "clothing")} className="hover:bg-contrastHover px-2 py-1 rounded transition">
            Clothing
          </a>
        </li>
        <li>
          <a href="#shoes" onClick={(e) => handleScroll(e, "shoes")} className="hover:bg-contrastHover px-2 py-1 rounded transition">
            Shoes
          </a>
        </li>
        <li>
          <a href="/products" className="hover:bg-contrastHover px-2 py-1 rounded transition">
            All Products
          </a>
        </li>
        <li>
          <a href="#about" onClick={(e) => handleScroll(e, "about")} className="hover:bg-contrastHover px-2 py-1 rounded transition">
            About
          </a>
        </li>
      </ul>

      {/* Cart Icon */}
      <div className="relative cursor-pointer mr-[180px]" onClick={() => navigate("/cart")}>
        <ShoppingCart size={30} />
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-primary text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {cartCount}
          </span>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
