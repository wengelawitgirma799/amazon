import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Pages/Landing/Landing';
import Auth from './Pages/Auth/Auth';
import Payment from './Pages/Payment/Payment';
import Orders from './Pages/Orders/Orders';
import Cart from './Pages/Cart/Cart';
import Results from './Pages/Results/Results';
import ProductDetail from './Pages/ProductDetail/ProductDetail';  
import { Elements } from "@stripe/react-stripe-js"; 
import { loadStripe } from '@stripe/stripe-js';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

// Initialize Stripe with the public key
const stripePromise = loadStripe(
  "pk_test_51QCRldKx6kgwm345JThl0pybFY61m80nk2wezwWNSrwbKnGepNIYR9LsTySzLKkl6Zu091DDzylg9gGSKqOr4LVr00xCZ6c5ID"
);

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />

        <Route 
          path="/payment" 
          element={
            <ProtectedRoute msg="You must log in to pay" redirect="/payment">
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtectedRoute>
          } 
        />

        <Route 
          path="/Orders" 
          element={
            <ProtectedRoute msg="You must log in to access your orders" redirect="/orders">
              <Orders />
            </ProtectedRoute>
          } 
        />

        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routing;
