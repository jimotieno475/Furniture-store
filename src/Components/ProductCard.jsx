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
    <div className="relative rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-300">
      <button
        onClick={handleFavorite}
        className={`absolute top-2 right-2 z-10 p-2 rounded-full shadow-md transition-colors ${
          isFavorite 
            ? 'bg-red-100 text-red-500 hover:bg-red-200' 
            : 'bg-white text-gray-700 hover:bg-gray-100'
        }`}
        aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      >
        {isFavorite ? <FiTrash2 size={18} /> : <FiHeart size={18} />}
      </button>
      
      <Link to={`/product/${product.id}`}>
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
      </Link>

      <div className="p-4 pt-0">
        <button
          onClick={handleAddToCart}
          className="w-full bg-[#B88E2F] text-white py-2 rounded hover:bg-[#A07D28] transition text-sm"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;