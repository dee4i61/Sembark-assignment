import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Star, ShoppingCart } from "lucide-react";
import { getProductById } from "../services/productService";
import type { Product } from "../types/product";
import { useCart } from "../context/CartContext";
import Loader from "../components/Loader";

const ProductDetailPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  const { addToCart } = useCart();

  useEffect(() => {
    if (id) loadProduct(id);
  }, [id]);

  const loadProduct = async (productId: string) => {
    setLoading(true);
    const data = await getProductById(productId);
    setProduct(data);
    setLoading(false);
  };

  if (loading) return <Loader />;

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-sky-900 mb-2">Product Not Found</h2>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors"
          >
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">

      <div className="bg-sky-50/50 border-b border-sky-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-sky-600">
            <button onClick={() => navigate("/")} className="hover:text-blue-600">
              Home
            </button>
            <span>/</span>
            <span className="text-sky-900 font-medium line-clamp-1">
              {product.title}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          <div className="space-y-4">
            <div className="bg-sky-50/50 rounded-2xl p-12 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.title}
                className="w-full max-w-md h-96 object-contain"
              />
            </div>
          </div>

          <div className="space-y-6">

            <div>
              <span className="inline-block px-4 py-1.5 text-sm font-medium text-blue-600 bg-blue-50 rounded-full">
                {product.category}
              </span>
            </div>

            <h1 className="text-4xl font-bold text-sky-900 leading-tight">
              {product.title}
            </h1>

            {product.rating && (
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating?.rate ?? 0)
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sky-900 font-semibold">
                  {product.rating.rate}
                </span>
                <span className="text-sky-600">
                  ({product.rating.count} reviews)
                </span>
              </div>
            )}

            <div className="py-4 border-y border-sky-100">
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold text-sky-900">
                  ₹{product.price}
                </span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-sky-900 mb-3">
                Product Description:
              </h3>
              <p className="text-sky-700 leading-relaxed">
                {product.description}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() =>
                  addToCart({
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    image: product.image,
                    quantity: 1,
                  })
                }
                className="flex-1 flex items-center justify-center gap-2 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
