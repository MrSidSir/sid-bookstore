import React from 'react';
import { useGetOrderByEmailQuery } from '../../redux/features/orders/ordersApi';
import { useAuth } from '../../context/AuthContext'; // ✅ Make sure this path is correct

const OrderPage = () => {
  // 🔐 Get current logged-in user from Auth context
  const { currentUser } = useAuth();

  // 📡 Fetch orders using Redux Toolkit Query based on user email
  const { data: orders = [], isLoading, isError } = useGetOrderByEmailQuery(currentUser.email);

  // ⏳ Show loading message while fetching
  if (isLoading) return <div>Loading...</div>;

  // ❌ Show error message if fetching fails
  if (isError) return <div>Error getting orders data</div>;

  return (
    <div className='container mx-auto p-6'>
      {/* 🧾 Page Heading */}
      <h2 className='text-2xl font-semibold mb-4'>Your Orders</h2>

      {/* 🧩 Conditional rendering: No orders */}
      {orders.length === 0 ? (
        <div>No orders found!</div>
      ) : (
        // 🌀 Loop through each order and display its details
        orders.map((order, index) => (
          <div key={order._id} className="border-b mb-4 pb-4">
            {/* 🔢 Order number */}
            <p className='p-1 bg-secondary text-white w-10 rounded mb-1'># {index + 1}</p>

            {/* 📦 Order Info */}
            <h2 className="font-bold">Order ID: {order._id}</h2>
            <p className="text-gray-600">Name: {order.name}</p>
            <p className="text-gray-600">Email: {order.email}</p>
            <p className="text-gray-600">Phone: {order.phone}</p>
            <p className="text-gray-600">Total Price: ${order.totalPrice}</p>

            {/* 🏠 Address Section */}
            <h3 className="font-semibold mt-2">Address:</h3>
            <p>{order.address.city}, {order.address.state}, {order.address.country}, {order.address.zipcode}</p>

            {/* 🛍️ Products list */}
            <h3 className="font-semibold mt-2">Products Id:</h3>
            <ul className="list-disc list-inside">
              {order.productIds.map((productId) => (
                <li key={productId}>{productId}</li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default OrderPage;
