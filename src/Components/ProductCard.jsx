import React from 'react';
import { Link } from 'react-router-dom';
import { FiShare2, FiHeart, FiTrash2 } from 'react-icons/fi';
import { shareProduct } from '../Utils/shareProduct';

const ProductCard = ({ product, onAddToCart, isFavorite, onToggleFavorite }) => {
  const handleShare = (e) => {
    e.stopPropagation();
    e.preventDefault();
    shareProduct(product.id, product.name, product.image);
  };

  const handleFavorite = (e) => {
    e.stopPropagation();
    e.preventDefault();
    onToggleFavorite();
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    e.preventDefault();
    onAddToCart();
  };

  return (
    <div className="relative rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-300 bg-white">
      {/* Action Buttons - positioned absolutely */}
      <div className="absolute top-2 right-2 z-10 flex gap-2">
        <button
          onClick={handleShare}
          className="p-2 rounded-full bg-white text-gray-700 hover:bg-gray-100 shadow-md transition-colors"
          aria-label="Share product"
        >
          <FiShare2 size={18} />
        </button>
        <button
          onClick={handleFavorite}
          className={`p-2 rounded-full shadow-md transition-colors ${
            isFavorite 
              ? 'bg-red-100 text-red-500 hover:bg-red-200' 
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          {isFavorite ? <FiTrash2 size={18} /> : <FiHeart size={18} />}
        </button>
      </div>
      
      {/* Main Product Link - covers most of the card */}
      <Link 
        to={`/product/${product.id}`}
        className="block"
        onClick={(e) => {
          // Only prevent default if clicking on an action button
          if (e.target.closest('button')) {
            e.preventDefault();
          }
        }}
      >
        <div className="overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 sm:h-56 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h2 className="text-lg font-semibold line-clamp-1">{product.name}</h2>
          <p className="text-gray-600 text-sm capitalize">{product.category}</p>
          <p className="text-[#B88E2F] font-bold mt-1">{product.price}</p>
        </div>
      </Link>

      {/* Add to Cart Button - separate from the main link */}
      <div className="p-4 pt-0">
        <button
          onClick={handleAddToCart}
          className="w-full bg-[#B88E2F] text-white py-2 rounded hover:bg-[#A07D28] transition-colors duration-300 text-sm font-medium flex items-center justify-center gap-2"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;