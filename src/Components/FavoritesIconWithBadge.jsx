// FavoritesIconWithBadge.js
import React from 'react';
import { useFavorites } from './FavoritesContext';
import { useNavigate } from 'react-router-dom';
import { FiHeart } from 'react-icons/fi';
import { motion } from 'framer-motion';

const FavoritesIconWithBadge = () => {
  const { favorites } = useFavorites();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate('/favourites');
  };

  return (
    <div className="relative cursor-pointer" onClick={handleClick}>
      <div className="p-2 group">
        <FiHeart className="text-2xl text-gray-700 group-hover:text-red-500 transition-colors duration-200" />
      </div>
      {favorites.length > 0 && (
        <motion.span
          key={favorites.length}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 500, damping: 15 }}
          className="absolute top-0 right-0 bg-[#B88E2F] text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center transform translate-x-1/4 -translate-y-1/4"
        >
          {favorites.length > 9 ? '9+' : favorites.length}
        </motion.span>
      )}
    </div>
  );
};

export default FavoritesIconWithBadge;