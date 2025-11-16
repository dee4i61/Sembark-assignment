import React from "react";
import { useNavigate } from "react-router-dom";
import { Star, ChevronRight, ShoppingCart } from "lucide-react";
import type { Product } from "../types/product";
import { useCart } from "../context/CartContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
  };

  return (
    <div className="group bg-white border border-sky-100 rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300">
      <div
        onClick={() => navigate(`/product/${product.id}/details`)}
        className="relative bg-linear-to-br from-sky-50 to-white p-6 cursor-pointer overflow-hidden"
      >
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-56 object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
        />
        
        <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/5 transition-colors duration-300" />
      </div>

      <div className="p-5 space-y-3">
        <span className="inline-block px-3 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-full">
          {product.category}
        </span>

        <h3
          onClick={() => navigate(`/product/${product.id}/details`)}
          className="text-base font-semibold text-sky-900 line-clamp-2 min-h-12 cursor-pointer hover:text-blue-600 transition-colors duration-200"
        >
          {product.title}
        </h3>

        {product.rating && (
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating?.rate ?? 0)
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-sky-600">
              ({product.rating.count})
            </span>
          </div>
        )}

        <div className="pt-2">
          <p className="text-2xl font-bold text-sky-900">
            ₹{product.price}
          </p>
        </div>

        <div className="flex gap-2 pt-2">
          <button
            onClick={handleAddToCart}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Add to Cart</span>
          </button>
          
          <button
            onClick={() => navigate(`/product/${product.id}/details`)}
            className="flex items-center justify-center px-4 py-2.5 bg-sky-50 hover:bg-sky-100 text-sky-700 hover:text-blue-600 text-sm font-medium rounded-lg transition-colors duration-200 border border-sky-200"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
