import React, { useState } from 'react';
import { FiFilter, FiSearch, FiX, FiHeart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import ProductCard from '../Components/ProductCard';
import products from '../Data/Products';
import { useFavorites } from './FavoritesContext';

const Shop = ({ addToCart }) => {
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchTerm, setSearchTerm] = useState('');
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [filters, setFilters] = useState({
    category: 'all',
    priceRange: 'all',
    sortBy: 'featured'
  });

  // Get all unique categories
  const categories = ['all', ...new Set(products.map(product => product.category))];

  // Price range options
  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-200', label: 'Under $200' },
    { value: '200-500', label: '$200 - $500' },
    { value: '500-1000', label: '$500 - $1000' },
    { value: '1000-', label: 'Over $1000' }
  ];

  // Apply filters
  const applyFilters = () => {
    let results = [...products];

    // Apply search filter
    if (searchTerm) {
      results = results.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply category filter
    if (filters.category !== 'all') {
      results = results.filter(product => product.category === filters.category);
    }

    // Apply price filter
    if (filters.priceRange !== 'all') {
      const [min, max] = filters.priceRange.split('-');
      results = results.filter(product => {
        const price = Number(product.price.replace(/[^0-9.-]+/g, ""));
        return price >= Number(min) && (max === '' || price <= Number(max));
      });
    }

    // Apply sorting
    switch (filters.sortBy) {
      case 'price-low':
        results.sort((a, b) => 
          Number(a.price.replace(/[^0-9.-]+/g, "")) - Number(b.price.replace(/[^0-9.-]+/g, ""))
        );
        break;
      case 'price-high':
        results.sort((a, b) => 
          Number(b.price.replace(/[^0-9.-]+/g, "")) - Number(a.price.replace(/[^0-9.-]+/g, ""))
        );
        break;
      case 'name':
        results.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'rating':
        results.sort((a, b) => b.rating - a.rating);
        break;
      default: // 'featured'
        // Default sorting (could be by ID or any other logic)
        break;
    }

    setFilteredProducts(results);
  };

  // Apply filters when search or filters change
  React.useEffect(() => {
    applyFilters();
  }, [searchTerm, filters]);

  const handleFilterChange = (filterName, value) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: value
    }));
  };

  const resetFilters = () => {
    setSearchTerm('');
    setFilters({
      category: 'all',
      priceRange: 'all',
      sortBy: 'featured'
    });
  };

  const handleToggleFavorite = (product) => {
    if (favorites.some(fav => fav.id === product.id)) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900">Our Furniture Collection</h1>
        <p className="mt-2 text-lg text-gray-600">
          Discover premium furniture for every room in your home
        </p>
      </div>

      {/* Search and Filter Bar */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search Input */}
          <div className="relative w-full md:w-96">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search products..."
              className="pl-10 pr-4 py-2 w-full border rounded-lg focus:ring-2 focus:ring-[#B88E2F] focus:border-[#B88E2F]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Mobile Filter Button */}
          <button
            onClick={() => setShowMobileFilters(true)}
            className="md:hidden flex items-center gap-2 px-4 py-2 bg-[#B88E2F] text-white rounded-lg"
          >
            <FiFilter /> Filters
          </button>

          {/* Sort Dropdown (Desktop) */}
          <div className="hidden md:flex items-center gap-2">
            <span className="text-gray-600">Sort by:</span>
            <select
              className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#B88E2F] focus:border-[#B88E2F]"
              value={filters.sortBy}
              onChange={(e) => handleFilterChange('sortBy', e.target.value)}
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A-Z</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters - Desktop */}
        <div className="hidden md:block w-full md:w-64 flex-shrink-0">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">Filters</h3>
              <button 
                onClick={resetFilters}
                className="text-sm text-[#B88E2F] hover:underline"
              >
                Reset all
              </button>
            </div>

            {/* Category Filter */}
            <div className="mb-6">
              <h4 className="font-medium mb-3">Categories</h4>
              <div className="space-y-2">
                {categories.map((category) => (
                  <label key={category} className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="category"
                      checked={filters.category === category}
                      onChange={() => handleFilterChange('category', category)}
                      className="h-4 w-4 text-[#B88E2F] focus:ring-[#B88E2F] border-gray-300"
                    />
                    <span className="text-gray-700 capitalize">
                      {category === 'all' ? 'All Categories' : category}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="mb-6">
              <h4 className="font-medium mb-3">Price Range</h4>
              <div className="space-y-2">
                {priceRanges.map((range) => (
                  <label key={range.value} className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="priceRange"
                      checked={filters.priceRange === range.value}
                      onChange={() => handleFilterChange('priceRange', range.value)}
                      className="h-4 w-4 text-[#B88E2F] focus:ring-[#B88E2F] border-gray-300"
                    />
                    <span className="text-gray-700">{range.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Filters Overlay */}
        {showMobileFilters && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                <div className="absolute inset-0 bg-gray-500 opacity-75" onClick={() => setShowMobileFilters(false)}></div>
              </div>

              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-medium text-gray-900">Filters</h3>
                    <button onClick={() => setShowMobileFilters(false)} className="text-gray-400 hover:text-gray-500">
                      <FiX size={24} />
                    </button>
                  </div>

                  {/* Mobile Filter Content */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium mb-3">Categories</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {categories.map((category) => (
                          <label key={category} className="flex items-center space-x-2">
                            <input
                              type="radio"
                              name="category"
                              checked={filters.category === category}
                              onChange={() => handleFilterChange('category', category)}
                              className="h-4 w-4 text-[#B88E2F] focus:ring-[#B88E2F] border-gray-300"
                            />
                            <span className="text-gray-700 capitalize">
                              {category === 'all' ? 'All' : category}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-3">Price Range</h4>
                      <div className="space-y-2">
                        {priceRanges.map((range) => (
                          <label key={range.value} className="flex items-center space-x-2">
                            <input
                              type="radio"
                              name="priceRange"
                              checked={filters.priceRange === range.value}
                              onChange={() => handleFilterChange('priceRange', range.value)}
                              className="h-4 w-4 text-[#B88E2F] focus:ring-[#B88E2F] border-gray-300"
                            />
                            <span className="text-gray-700">{range.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-3">Sort By</h4>
                      <select
                        className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#B88E2F] focus:border-[#B88E2F]"
                        value={filters.sortBy}
                        onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                      >
                        <option value="featured">Featured</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="name">Name: A-Z</option>
                        <option value="rating">Rating</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    onClick={() => setShowMobileFilters(false)}
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#B88E2F] text-base font-medium text-white hover:bg-[#A07D28] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#B88E2F] sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Apply Filters
                  </button>
                  <button
                    type="button"
                    onClick={resetFilters}
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#B88E2F] sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Product Grid */}
        <div className="flex-1">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="relative group">
                  <ProductCard 
                    product={product}
                    onAddToCart={() => addToCart(product)}
                    isFavorite={favorites.some(fav => fav.id === product.id)}
                    onToggleFavorite={() => handleToggleFavorite(product)}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-12 text-center">
              <FiSearch className="mx-auto text-gray-400 text-5xl mb-4" />
              <h3 className="text-lg font-medium text-gray-900">No products found</h3>
              <p className="mt-2 text-gray-600">
                Try adjusting your search or filter criteria
              </p>
              <button
                onClick={resetFilters}
                className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#B88E2F] hover:bg-[#A07D28] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#B88E2F]"
              >
                Reset all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;