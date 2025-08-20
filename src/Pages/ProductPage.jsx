import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FiShare2, FiHeart, FiArrowLeft } from 'react-icons/fi';
import products from '../Data/Products';
import { useFavorites } from '../Components/FavoritesContext';
import { shareProduct } from '../Utils/shareProduct';

const ProductPage = ({ addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();

  // Find product and handle errors
  const product = products.find(p => p.id === Number(id));

  // Redirect if product not found
  React.useEffect(() => {
    if (!product && products.length > 0) {
      navigate('/not-found', { replace: true });
    }
  }, [product, navigate]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-8 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Link to="/shop" className="inline-flex items-center text-[#B88E2F] hover:underline">
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
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Link 
          to="/shop" 
          className="flex items-center text-[#B88E2F] mb-6 hover:underline"
        >
          <FiArrowLeft className="mr-2" /> Back to Shop
        </Link>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-8">
            {/* Product Image Section */}
            <div className="relative">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute top-4 right-4 flex gap-2">
                <button
                  onClick={handleShare}
                  className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
                  aria-label="Share product"
                >
                  <FiShare2 className="text-gray-700" size={20} />
                </button>
                <button
                  onClick={handleToggleFavorite}
                  className={`p-2 rounded-full shadow-md transition-colors ${
                    isFavorite 
                      ? 'bg-red-100 text-red-500 hover:bg-red-200' 
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                  aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                >
                  <FiHeart size={20} />
                </button>
              </div>
            </div>

            {/* Product Info Section */}
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{product.name}</h1>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#B88E2F]">{product.price}</span>
                  <span className={`text-sm px-2 py-1 rounded-full ${
                    product.stock > 0 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {product.stock > 0 ? `In Stock (${product.stock})` : 'Out of Stock'}
                  </span>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center">
                <div className="flex mr-2">
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
                </div>
                <span className="text-gray-600">({product.rating.toFixed(1)})</span>
              </div>

              {/* Description */}
              <div className="py-4 border-t border-gray-200">
                <h2 className="text-lg font-medium mb-3">Description</h2>
                <p className="text-gray-600">{product.description}</p>
              </div>

              {/* Product Details */}
              <div className="py-4 border-t border-gray-200">
                <h2 className="text-lg font-medium mb-3">Details</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  {product.colors && (
                    <div className="sm:col-span-2">
                      <h3 className="text-sm font-medium text-gray-500">Available Colors</h3>
                      <div className="flex gap-2 mt-2">
                        {product.colors.map((color) => (
                          <div 
                            key={color}
                            className="w-6 h-6 rounded-full border border-gray-200"
                            style={{ backgroundColor: color }}
                            title={color}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                disabled={product.stock <= 0}
                className={`w-full py-3 px-6 rounded-lg font-medium text-white transition-colors ${
                  product.stock <= 0
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-[#B88E2F] hover:bg-[#A07D28]'
                }`}
              >
                {product.stock <= 0 ? 'Out of Stock' : 'Add to Cart'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;