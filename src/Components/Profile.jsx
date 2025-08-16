import React, { useState } from 'react';
import { FiUser, FiMail, FiLock, FiShoppingBag, FiHeart, FiSettings, FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('orders');
  const [editMode, setEditMode] = useState(false);
  const [userData, setUserData] = useState({
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main St, Apt 4B, New York, NY 10001',
    joinedDate: 'January 2022'
  });

  // Sample data
  const orders = [
    { id: '#3258', date: '12 May 2023', status: 'Delivered', total: '$249.00' },
    { id: '#2984', date: '28 Apr 2023', status: 'Shipped', total: '$189.00' },
    { id: '#2635', date: '15 Mar 2023', status: 'Delivered', total: '$429.00' }
  ];

  const favorites = [
    { id: 1, name: 'Modern Sofa', price: '$499', image: 'https://example.com/sofa.jpg' },
    { id: 2, name: 'Wooden Chair', price: '$199', image: 'https://example.com/chair.jpg' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setEditMode(false);
    // Here you would typically send the updated data to your backend
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">My Account</h1>
          <p className="mt-2 text-gray-600">Manage your profile, orders, and favorites</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="w-full lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 border-b">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-[#B88E2F] flex items-center justify-center text-white text-2xl">
                    <FiUser />
                  </div>
                  <div>
                    <h3 className="font-semibold">{userData.name}</h3>
                    <p className="text-sm text-gray-500">Member since {userData.joinedDate}</p>
                  </div>
                </div>
              </div>

              <nav className="p-4">
                <button
                  onClick={() => setActiveTab('orders')}
                  className={`flex items-center gap-3 w-full p-3 rounded-lg mb-2 ${activeTab === 'orders' ? 'bg-[#FFF3E3] text-[#B88E2F]' : 'hover:bg-gray-100'}`}
                >
                  <FiShoppingBag />
                  <span>My Orders</span>
                </button>
                <button
                  onClick={() => setActiveTab('favorites')}
                  className={`flex items-center gap-3 w-full p-3 rounded-lg mb-2 ${activeTab === 'favorites' ? 'bg-[#FFF3E3] text-[#B88E2F]' : 'hover:bg-gray-100'}`}
                >
                  <FiHeart />
                  <span>Favorites</span>
                </button>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`flex items-center gap-3 w-full p-3 rounded-lg mb-2 ${activeTab === 'settings' ? 'bg-[#FFF3E3] text-[#B88E2F]' : 'hover:bg-gray-100'}`}
                >
                  <FiSettings />
                  <span>Account Settings</span>
                </button>
                <button className="flex items-center gap-3 w-full p-3 rounded-lg text-red-500 hover:bg-red-50 mt-4">
                  <FiLogOut />
                  <span>Log Out</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full lg:w-3/4">
            {activeTab === 'orders' && (
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6 border-b">
                  <h2 className="text-xl font-semibold">Order History</h2>
                </div>
                <div className="divide-y">
                  {orders.map((order) => (
                    <div key={order.id} className="p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                      <div className="mb-4 sm:mb-0">
                        <p className="font-medium">Order {order.id}</p>
                        <p className="text-sm text-gray-500">{order.date}</p>
                      </div>
                      <div className="mb-4 sm:mb-0">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                        }`}>
                          {order.status}
                        </span>
                      </div>
                      <div className="font-semibold">{order.total}</div>
                      <Link to={`/orders/${order.id}`} className="mt-4 sm:mt-0 text-[#B88E2F] hover:underline text-sm font-medium">
                        View Details
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'favorites' && (
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6 border-b">
                  <h2 className="text-xl font-semibold">My Favorites</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
                  {favorites.length > 0 ? (
                    favorites.map((item) => (
                      <div key={item.id} className="border rounded-lg overflow-hidden group hover:shadow-lg transition-shadow">
                        <div className="relative">
                          <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                          <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow hover:bg-red-100 text-red-500">
                            <FiHeart className="fill-current" />
                          </button>
                        </div>
                        <div className="p-4">
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-[#B88E2F] font-semibold mt-1">{item.price}</p>
                          <button className="mt-3 w-full bg-[#B88E2F] text-white py-2 rounded hover:bg-[#A07D28] transition">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="col-span-full text-center py-12">
                      <FiHeart className="mx-auto text-gray-300 text-4xl mb-4" />
                      <p className="text-gray-600">You haven't saved any favorites yet</p>
                      <Link to="/shop" className="mt-4 inline-block bg-[#B88E2F] text-white px-6 py-2 rounded-lg hover:bg-[#A07D28] transition">
                        Browse Products
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6 border-b flex justify-between items-center">
                  <h2 className="text-xl font-semibold">Account Settings</h2>
                  {editMode ? (
                    <div className="flex gap-2">
                      <button onClick={() => setEditMode(false)} className="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-100">
                        Cancel
                      </button>
                      <button onClick={handleSave} className="px-4 py-2 bg-[#B88E2F] text-white rounded-lg hover:bg-[#A07D28]">
                        Save Changes
                      </button>
                    </div>
                  ) : (
                    <button onClick={() => setEditMode(true)} className="px-4 py-2 bg-[#B88E2F] text-white rounded-lg hover:bg-[#A07D28]">
                      Edit Profile
                    </button>
                  )}
                </div>
                <div className="p-6">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      {editMode ? (
                        <input
                          type="text"
                          name="name"
                          value={userData.name}
                          onChange={handleInputChange}
                          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#B88E2F] focus:border-[#B88E2F]"
                        />
                      ) : (
                        <p className="p-3 bg-gray-50 rounded-lg">{userData.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      {editMode ? (
                        <input
                          type="email"
                          name="email"
                          value={userData.email}
                          onChange={handleInputChange}
                          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#B88E2F] focus:border-[#B88E2F]"
                        />
                      ) : (
                        <p className="p-3 bg-gray-50 rounded-lg">{userData.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      {editMode ? (
                        <input
                          type="tel"
                          name="phone"
                          value={userData.phone}
                          onChange={handleInputChange}
                          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#B88E2F] focus:border-[#B88E2F]"
                        />
                      ) : (
                        <p className="p-3 bg-gray-50 rounded-lg">{userData.phone}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Shipping Address</label>
                      {editMode ? (
                        <textarea
                          name="address"
                          value={userData.address}
                          onChange={handleInputChange}
                          rows={3}
                          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#B88E2F] focus:border-[#B88E2F]"
                        />
                      ) : (
                        <p className="p-3 bg-gray-50 rounded-lg">{userData.address}</p>
                      )}
                    </div>

                    {editMode && (
                      <div className="pt-4 border-t">
                        <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                          <FiLock className="text-gray-500" />
                          Change Password
                        </h3>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                            <input
                              type="password"
                              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#B88E2F] focus:border-[#B88E2F]"
                              placeholder="Enter current password"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                            <input
                              type="password"
                              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#B88E2F] focus:border-[#B88E2F]"
                              placeholder="Enter new password"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                            <input
                              type="password"
                              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#B88E2F] focus:border-[#B88E2F]"
                              placeholder="Confirm new password"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;