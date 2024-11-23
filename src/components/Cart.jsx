import React from 'react';

const Cart = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Your Shopping Cart
        </h1>
        <p className="text-lg text-gray-600">
          Your cart is empty.
        </p>
      </div>
    </div>
  );
};

export default Cart;
