import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

const CartIcon = ({ itemCount }) => {
  return (
    <Link to="/cart" className="relative">
      <FiShoppingCart className="text-2xl text-gray-700 hover:text-[#B88E2F] transition" />
      {itemCount > 0 && (
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 500, damping: 15 }}
          className="absolute -top-2 -right-2  bg-[#B88E2F] text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center"
        >
          {itemCount > 9 ? '9+' : itemCount}
        </motion.span>
      )}
    </Link>
  );
};

export default CartIcon;