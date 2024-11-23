import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-extrabold text-center text-gray-600 mb-8">
        Welcome to Our E-Commerce Site!
      </h1>
      <div className="space-y-4">
        <div>
          <Link
            to="/product/1"
            className="text-lg text-gray-500 hover:text-gray-700 transition-all duration-300"
          >
            Go to Product 1
          </Link>
        </div>
        <div>
          <Link
            to="/product/2"
            className="text-lg text-gray-500 hover:text-gray-700 transition-all duration-300"
          >
            Go to Product 2
          </Link>
        </div>
        <div>
          <Link
            to="/cart"
            className="text-lg text-gray-500 hover:text-gray-700 transition-all duration-300"
          >
            Go to Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
