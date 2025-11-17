import React, { useState } from "react";
import { X, Trash2, Minus, Plus } from "lucide-react";
import type { CartItem as Item } from "../types/cart";
import { useCart } from "../context/CartContext";

interface CartItemProps {
  item: Item;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { removeFromCart } = useCart();
  const [quantity, setQuantity] = useState(item.quantity);

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="group bg-white border border-sky-100 rounded-xl p-6 hover:shadow-md transition-all duration-200">
      <div className="flex gap-6">
        <div className="shrink-0">
          <div className="w-28 h-28 bg-sky-50/50 rounded-lg p-3 flex items-center justify-center">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start gap-4 mb-3">
            <h3 className="text-lg font-semibold text-sky-900 line-clamp-2">
              {item.title}
            </h3>

            <button
              onClick={() => removeFromCart(item.id)}
              className="hidden sm:flex items-center justify-center w-8 h-8 text-sky-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
              aria-label="Remove item"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-sm text-sky-600 font-medium">Price: ₹{item.price}</span>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-sm text-sky-600 font-medium">Quantity:</span>
              <div className="flex items-center border border-sky-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => handleQuantityChange(quantity - 1)}
                  className="px-3 py-1.5 hover:bg-sky-50 text-sky-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={quantity <= 1}
                >
                  <Minus className="w-4 h-4" />
                </button>

                <span className="px-4 py-1.5 text-sky-900 font-semibold min-w-[50px] text-center border-x border-sky-200">
                  {quantity}
                </span>

                <button
                  onClick={() => handleQuantityChange(quantity + 1)}
                  className="px-3 py-1.5 hover:bg-sky-50 text-sky-700 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-xs text-sky-600">
                  ₹{item.price} × {quantity}
                </p>
                <p className="text-xl font-bold text-sky-900">
                  ₹{(item.price * quantity).toFixed(2)}
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={() => removeFromCart(item.id)}
            className="sm:hidden flex items-center gap-2 mt-4 px-4 py-2 text-sm font-medium text-red-600 hover:text-red-700 hover:bg-red-50 border border-red-200 rounded-lg transition-colors"
          >
            <Trash2 className="w-4 h-4" />
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
