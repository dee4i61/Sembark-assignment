import React from "react";
import { PackageSearch } from "lucide-react";
import type { Product } from "../types/product";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {

  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-6">
        <div className="w-20 h-20 bg-sky-100 rounded-full flex items-center justify-center mb-6">
          <PackageSearch className="w-10 h-10 text-sky-600" />
        </div>
        <h3 className="text-2xl font-bold text-sky-900 mb-2">
          No Products Found
        </h3>
        
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
