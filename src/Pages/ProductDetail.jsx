import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FiShare2 } from 'react-icons/fi';
import { shareProduct } from '../utils/shareProduct';
import SEO from '../Components/SEO';

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch product data from your API
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/products/${productId}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleShare = () => {
    if (product) {
      shareProduct(product.id, product.name, product.image);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Image */}
        <div className="md:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-lg object-cover"
          />
        </div>
        
        {/* Product Info */}
        <div className="md:w-1/2">
          <div className="flex justify-between items-start">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <button
              onClick={handleShare}
              className="p-2 rounded-full hover:bg-gray-100"
              aria-label="Share this product"
            >
              <FiShare2 className="text-gray-600 hover:text-[#B88E2F]" />
            </button>
          </div>
          
          <p className="text-gray-600 mt-2">{product.category}</p>
          <p className="text-2xl font-bold text-[#B88E2F] mt-4">{product.price}</p>
          <p className="mt-6 text-gray-700">{product.description}</p>
          
          {/* Add to cart and other actions */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;