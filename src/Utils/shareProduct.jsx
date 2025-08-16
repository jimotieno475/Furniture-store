export const shareProduct = async (productId, productName, productImage = '') => {
  // Construct the full product URL
  const productUrl = `${window.location.origin}/products/${productId}`;
  
  try {
    // Check if Web Share API is available (mobile devices)
    if (navigator.share) {
      await navigator.share({
        title: `Check out ${productName} on Our Store`,
        text: `I found this amazing product: ${productName}`,
        url: productUrl,
        ...(productImage && { files: [productImage] }) // Optional: share product image
      });
    } 
    // Check if clipboard API is available
    else if (navigator.clipboard) {
      await navigator.clipboard.writeText(`${productName} - ${productUrl}`);
      alert('Product link copied to clipboard!');
    }
    // Fallback for older browsers
    else {
      const shareInput = document.createElement('input');
      shareInput.value = `${productName} - ${productUrl}`;
      document.body.appendChild(shareInput);
      shareInput.select();
      document.execCommand('copy');
      document.body.removeChild(shareInput);
      alert('Product link copied to clipboard!');
    }
  } catch (error) {
    console.error('Error sharing:', error);
    // Final fallback if everything fails
    prompt('Copy this product link to share:', `${productName} - ${productUrl}`);
  }
};

// Optional: Social media specific sharing
export const shareOnSocialMedia = (platform, productId, productName) => {
  const productUrl = `${window.location.origin}/products/${productId}`;
  const encodedUrl = encodeURIComponent(productUrl);
  const encodedText = encodeURIComponent(`Check out ${productName} on Our Store`);

  const urls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
    whatsapp: `https://wa.me/?text=${encodedText}%20${encodedUrl}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedText}`
  };

  if (urls[platform]) {
    window.open(urls[platform], '_blank', 'noopener,noreferrer');
  }
};