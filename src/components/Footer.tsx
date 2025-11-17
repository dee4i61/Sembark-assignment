import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const { totalItems, totalPrice } = useCart();

  return (
    <footer className="w-full bg-linear-to-b from-sky-50 to-white border-t border-sky-100 mt-auto">

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

          <div>
            <h3 className="text-lg font-semibold text-sky-900 mb-4">SEMBARK STORE</h3>
            <p className="text-sm text-sky-600 leading-relaxed">
              Your trusted destination for quality products at great prices.
              Shop with confidence.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-sky-900 mb-4 uppercase tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm text-sky-600 hover:text-blue-600 transition-colors duration-200"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className="text-sm text-sky-600 hover:text-blue-600 transition-colors duration-200"
                >
                  Shopping Cart
                </Link>
              </li>
            </ul>
          </div>

          

          <div>
            <h4 className="text-sm font-semibold text-sky-900 mb-4 uppercase tracking-wide">
              Your Cart
            </h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-sky-600">Items:</span>
                <span className="font-semibold text-sky-900">{totalItems}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-sky-600">Total:</span>
                <span className="font-semibold text-sky-900">
                  ₹{totalPrice?.toFixed(2)}
                </span>
              </div>
              <Link
                to="/cart"
                className="block w-full bg-blue-900 hover:bg-blue-700 text-white text-sm font-medium py-2.5 px-4 rounded-lg text-center transition-colors duration-200 shadow-sm"
              >
                View Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
