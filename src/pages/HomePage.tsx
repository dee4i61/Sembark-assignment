import ProductGrid from "../components/ProductGrid";
import FilterBar from "../components/FilterBar";
import { useEffect, useState } from "react";
import { Package } from "lucide-react";
import { getAllProducts, getCategories, getProductsByCategory } from "../services/productService";
import type { Product } from "../types/product";
import Loader from "../components/Loader";

const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [originalProducts, setOriginalProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSort, setSelectedSort] = useState("");
  const [loading, setLoading] = useState(true);
  const [, setFilterLoading] = useState(true);

  useEffect(() => {
    loadProducts();
    loadCategories();
  }, []);

  const loadProducts = async () => {
    setLoading(true);
    const data = await getAllProducts();
    setProducts(data);
    setOriginalProducts(data);
    setLoading(false);
  };

  const loadCategories = async () => {
    setFilterLoading(true);
    const cats = await getCategories();
    setCategories(cats);
    setFilterLoading(false);
  };

  const handleCategoryChange = async (category: string) => {
    setSelectedCategory(category);

    if (category === "") {
      loadProducts();
      return;
    }

    const filtered = await getProductsByCategory(category);
    setProducts(filtered);
    setOriginalProducts(filtered);
  };

  const handleSortChange = (sort: string) => {
    setSelectedSort(sort);

    let sorted = [...originalProducts];

    if (sort === "price_low_high") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sort === "price_high_low") {
      sorted.sort((a, b) => b.price - a.price);
    } else if (sort === "name_asc") {
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sort === "name_desc") {
      sorted.sort((a, b) => b.title.localeCompare(a.title));
    }

    setProducts(sorted);
  };

  return (
    <div className="bg-white">

      <section className="relative bg-linear-to-r from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&q=80')",
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">
              Shop Smart, Live Better
            </h1>
            <p className="text-xl text-blue-50 mb-8">
              Discover quality products at amazing prices
            </p>
            <button
              onClick={() => window.scrollTo({ top: 400, behavior: 'smooth' })}
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:shadow-lg transition-all duration-200"
            >
              Explore Products
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

        <FilterBar
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
          selectedSort={selectedSort}
          onSortChange={handleSortChange}
        />

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
            {Array.from({ length: 8 }).map((_, i) => (
              <Loader key={i} />
            ))}
          </div>
        ) : products.length > 0 ? (
          <ProductGrid products={products} />
        ) : (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-sky-100 rounded-full mb-4">
              <Package className="w-8 h-8 text-sky-600" />
            </div>
            <h3 className="text-xl font-semibold text-sky-900 mb-2">
              No Products Found
            </h3>
            <p className="text-sky-600 mb-6">
              Try different filters or browse all products
            </p>
            <button
              onClick={() => {
                setSelectedCategory("");
                setSelectedSort("");
                loadProducts();
              }}
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors"
            >
              View All Products
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
