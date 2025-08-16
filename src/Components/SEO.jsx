import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ product }) => {
  if (!product) return null;

  const productUrl = `${window.location.origin}/products/${product.id}`;

  return (
    <Helmet>
      <title>{product.name} | Our Store</title>
      <meta name="description" content={product.description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="product" />
      <meta property="og:url" content={productUrl} />
      <meta property="og:title" content={product.name} />
      <meta property="og:description" content={product.description} />
      <meta property="og:image" content={product.image} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={product.name} />
      <meta name="twitter:description" content={product.description} />
      <meta name="twitter:image" content={product.image} />
    </Helmet>
  );
};

export default SEO;