import React from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingBag, ArrowLeft, Trash2 } from "lucide-react";
import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";

const CartPage: React.FC = () => {
  const { cart, totalItems, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-linear-to-b from-sky-50/30 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="max-w-md mx-auto text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-sky-100 rounded-full mb-6">
              <ShoppingBag className="w-12 h-12 text-sky-600" />
            </div>

            <h2 className="text-3xl font-bold text-sky-900 mb-3">
              Your Cart is Empty
            </h2>
            <p className="text-sky-600 mb-8">
              Looks like you haven't added anything to your cart yet. Start
              shopping to fill it up!
            </p>

            <button
              onClick={() => navigate("/")}
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-sky-50/30 to-white">

      <div className="bg-white border-b border-sky-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-sky-900 mb-2">
                Shopping Cart
              </h1>
              <p className="text-sky-600">
                {totalItems} {totalItems === 1 ? "item" : "items"} in your cart
              </p>
            </div>

            <button
              onClick={() => navigate("/")}
              className="hidden md:flex items-center gap-2 px-6 py-3 text-sky-700 hover:text-blue-600 hover:bg-sky-50 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Continue Shopping
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}

            <button
              onClick={clearCart}
              className="flex items-center gap-2 px-6 py-3 text-red-600 hover:text-red-700 hover:bg-red-50 border border-red-200 hover:border-red-300 rounded-xl transition-all duration-200 font-medium"
            >
              <Trash2 className="w-5 h-5" />
              Clear Cart
            </button>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white border border-sky-100 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-sky-900 mb-6">
                  Order Summary
                </h3>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-sky-700">
                    <span>Subtotal ({totalItems} items)</span>
                    <span className="font-semibold">
                      ₹{totalPrice.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex justify-between text-sky-700">
                    <span>Shipping</span>
                    <span className="font-semibold text-green-600">FREE</span>
                  </div>

                  <div className="flex justify-between text-sky-700">
                    <span>Tax</span>
                    <span className="font-semibold">
                      Calculated at checkout
                    </span>
                  </div>

                  <div className="border-t border-sky-100 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-sky-900">
                        Total
                      </span>
                      <span className="text-2xl font-bold text-sky-900">
                        ₹{totalPrice.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                <button className="w-full py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 mb-4">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
