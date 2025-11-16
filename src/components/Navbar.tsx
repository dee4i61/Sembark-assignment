import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar: React.FC = () => {
  const { totalItems } = useCart();

  return (
    <nav className="sticky top-0 z-50 bg-sky-50/95 backdrop-blur-md border-b border-sky-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="text-xl font-semibold text-slate-900 tracking-tight hover:text-blue-600 transition-colors duration-200"
          >
            Sembark Store
          </Link>

          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="text-sm font-medium text-slate-700 hover:text-slate-600 transition-colors duration-200"
            >
              Products
            </Link>

            <Link
              to="/cart"
              className="relative flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-slate-600 transition-colors duration-200"
            >
              <span>Cart</span>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-5 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-blue-500 rounded-full shadow-lg shadow-blue-200">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
