import React from 'react';
import { Navbar, Home, Meals, Cart } from './components';
import { Route, Routes } from 'react-router-dom';

const App = ({ item }) => {
  return (
    <div className="app__container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meals" element={<Meals item={item} />} />
        <Route path="/cart" element={<Cart item={item} />} />
      </Routes>
    </div>
  );
};

export default App;
