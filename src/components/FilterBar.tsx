import React from "react";
import { ChevronDown, ArrowUpDown, X } from "lucide-react";

interface FilterBarProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  selectedSort?: string;
  onSortChange?: (value: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
  selectedSort = "",
  onSortChange = () => {},
}) => {
  return (
    <div className="bg-white border border-sky-100 rounded-xl p-6 mb-6 shadow-sm">
      <div className="flex flex-wrap items-center gap-6">
        
        <div className="flex-1 min-w-[200px]">
          <label className="block text-sm font-medium text-sky-900 mb-2">
            Category
          </label>
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="w-full appearance-none bg-sky-50/50 border border-sky-200 text-sky-900 text-sm rounded-lg px-4 py-2.5 pr-10 cursor-pointer transition-all duration-200 hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            >
              <option value="">All Categories</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </option>
              ))}
            </select>

            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-sky-600 pointer-events-none" />
          </div>
        </div>

        <div className="flex-1 min-w-[200px]">
          <label className="block text-sm font-medium text-sky-900 mb-2">
            Sort By
          </label>
          <div className="relative">
            <select
              value={selectedSort}
              onChange={(e) => onSortChange(e.target.value)}
              className="w-full appearance-none bg-sky-50/50 border border-sky-200 text-sky-900 text-sm rounded-lg px-4 py-2.5 pr-10 cursor-pointer transition-all duration-200 hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            >
              <option value="">Default Order</option>
              <option value="price_low_high">Price: Low → High</option>
              <option value="price_high_low">Price: High → Low</option>
              <option value="name_asc">Name: A → Z</option>
              <option value="name_desc">Name: Z → A</option>
            </select>

            <ArrowUpDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-sky-600 pointer-events-none" />
          </div>
        </div>

        {(selectedCategory || selectedSort) && (
          <button
            onClick={() => {
              onCategoryChange("");
              onSortChange("");
            }}
            className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-sky-700 bg-sky-50 hover:bg-sky-100 border border-sky-200 rounded-lg transition-colors duration-200"
          >
            <X className="w-4 h-4" />
            Clear Filters
          </button>
        )}
      </div>
    </div>
  );
};

export default FilterBar;
