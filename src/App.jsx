import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const Home = lazy(() => import('./components/Home'));
const ProductDetails = lazy(() => import('./components/ProductDetails'));
const Cart = lazy(() => import('./components/Cart'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
