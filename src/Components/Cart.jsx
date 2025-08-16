import React from "react";
import { FiTrash2, FiShoppingCart } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const Cart = ({ cartItems, removeFromCart, updateQuantity }) => {
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + parseFloat(item.price.replace("$", "")) * item.quantity,
      0
    ).toFixed(2);
  };
  const navigate = useNavigate();

  return (
    <div className="mx-auto px-4 sm:px-6 max-w-7xl py-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">Your Shopping Cart</h1>
      
      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <FiShoppingCart size={48} className="mx-auto text-gray-400 mb-4" />
          <p className="text-lg text-gray-600">Your cart is empty</p>
          <Link
            to="/shop"
            className="mt-4 inline-block bg-[#B88E2F] text-white px-6 py-2 rounded-lg hover:bg-[#A07D28] transition"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="hidden sm:grid grid-cols-12 bg-gray-100 p-4 font-medium">
                <div className="col-span-5">Product</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-3 text-center">Quantity</div>
                <div className="col-span-2 text-center">Total</div>
              </div>
              
              {cartItems.map((item) => (
                <div key={item.id} className="grid grid-cols-12 p-4 border-b items-center">
                  <div className="col-span-5 flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-600">{item.category}</p>
                    </div>
                  </div>
                  <div className="col-span-2 text-center">{item.price}</div>
                  <div className="col-span-3 flex justify-center">
                    <div className="flex items-center border rounded-lg overflow-hidden">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-3 py-1 bg-gray-200 hover:bg-gray-300 transition"
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span className="px-4">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-3 py-1 bg-gray-200 hover:bg-gray-300 transition"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="col-span-1 text-center">
                    ${(parseFloat(item.price.replace("$", "")) * item.quantity).toFixed(2)}
                  </div>
                  <div className="col-span-1 text-center">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 transition"
                    >
                      <FiTrash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 h-fit">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${calculateTotal()}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${calculateTotal()}</span>
              </div>
            </div>
            <button className="mt-6 w-full bg-[#B88E2F] text-white py-3 rounded-lg hover:bg-[#A07D28] transition font-medium" onClick={() => navigate('/checkout')}>
              Proceed to Checkout
            </button>
            <Link
              to="/shop"
              className="mt-4 inline-block w-full text-center text-[#B88E2F] hover:text-[#A07D28] transition"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;