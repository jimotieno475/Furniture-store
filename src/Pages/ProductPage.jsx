import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiShare2, FiHeart, FiArrowLeft } from 'react-icons/fi';
import products from '../Data/Products';
import { useFavorites } from './FavoritesContext';
import { shareProduct } from '../Utils/shareProduct';

const ProductPage = ({ addToCart }) => {
  const { id } = useParams();
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();
  
  // Find the product by ID
  const product = products.find(p => p.id === parseInt(id));
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Product not found</h1>
          <Link to="/shop" className="mt-4 inline-flex items-center text-[#B88E2F]">
            <FiArrowLeft className="mr-2" /> Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const isFavorite = favorites.some(fav => fav.id === product.id);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  const handleShare = () => {
    shareProduct(product.id, product.name, product.image);
  };

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Link 
          to="/shop" 
          className="flex items-center text-[#B88E2F] mb-6 hover:underline"
        >
          <FiArrowLeft className="mr-2" /> Back to Shop
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
                <div className="flex space-x-3">
                  <button
                    onClick={handleShare}
                    className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200"
                    aria-label="Share product"
                  >
                    <FiShare2 size={20} />
                  </button>
                  <button
                    onClick={handleToggleFavorite}
                    className={`p-2 rounded-full ${
                      isFavorite 
                        ? 'bg-red-100 text-red-500 hover:bg-red-200' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                  >
                    <FiHeart size={20} />
                  </button>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <span className="text-2xl font-bold text-[#B88E2F]">{product.price}</span>
                {product.stock > 0 ? (
                  <span className="text-sm text-green-600">In Stock ({product.stock} available)</span>
                ) : (
                  <span className="text-sm text-red-600">Out of Stock</span>
                )}
              </div>

              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-gray-600 ml-2">({product.rating.toFixed(1)})</span>
              </div>

              <div className="border-t border-b border-gray-200 py-6">
                <h2 className="text-lg font-medium mb-4">Description</h2>
                <p className="text-gray-600">{product.description}</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-lg font-medium">Details</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Category</h3>
                    <p className="text-gray-900 capitalize">{product.category}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Dimensions</h3>
                    <p className="text-gray-900">{product.dimensions}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Materials</h3>
                    <p className="text-gray-900">{product.materials}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Weight</h3>
                    <p className="text-gray-900">{product.weight}</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={handleAddToCart}
                  disabled={product.stock <= 0}
                  className={`flex-1 bg-[#B88E2F] text-white py-3 px-6 rounded hover:bg-[#A07D28] transition ${
                    product.stock <= 0 ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;