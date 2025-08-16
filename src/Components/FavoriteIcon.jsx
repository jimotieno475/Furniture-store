// FavoriteIcon.js
import React from 'react';
import { FiHeart } from 'react-icons/fi';
import { useFavorites } from './FavoritesContext';

const FavoriteIcon = ({ product }) => {
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();
  const isFavorite = favorites.some(item => item.id === product.id);

  const handleClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (isFavorite) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  return (
    <button 
      onClick={handleClick}
      className={`p-2 rounded-full ${isFavorite ? 'text-red-500 fill-red-500' : 'text-gray-400 hover:text-red-500'}`}
      aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
    >
      <FiHeart size={18} />
    </button>
  );
};

export default FavoriteIcon;