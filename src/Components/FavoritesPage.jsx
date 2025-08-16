// FavoritesPage.js
import React from 'react';
import { useFavorites } from './FavoritesContext';
import { Link } from 'react-router-dom';
import { FiHeart, FiTrash2 } from 'react-icons/fi';
import { motion } from 'framer-motion';

const FavoritesPage = () => {
  const { favorites, removeFromFavorites } = useFavorites();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">
        <FiHeart className="text-red-500" />
        My Favorites ({favorites.length})
      </h1>

      {favorites.length === 0 ? (
        <div className="text-center py-12">
          <FiHeart size={48} className="mx-auto text-gray-300 mb-4" />
          <p className="text-lg text-gray-600">Your favorites list is empty</p>
          <Link
            to="/shop"
            className="mt-4 inline-block bg-[#B88E2F] text-white px-6 py-2 rounded-lg hover:bg-[#A07D28] transition"
          >
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favorites.map((product) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="relative rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-300"
            >
              <button
                onClick={() => removeFromFavorites(product.id)}
                className="absolute top-2 right-2 z-10 p-2 bg-white rounded-full shadow-md hover:bg-red-100 hover:text-red-500 transition-colors"
                aria-label="Remove from favorites"
              >
                <FiTrash2 size={18} />
              </button>
              
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 sm:h-56 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-gray-600 text-sm">{product.category}</p>
                <p className="text-[#B88E2F] font-bold mt-1">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;