import React from 'react';
import './_navbar.scss';
import { CartIcon } from '../icons/Icon';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const { cartItems } = useSelector((state) => ({ ...state.cart }));
  return (
    <div className="navbar__container">
      <Link to="/" className="logo">
        Nando's
      </Link>

      <Link to="/cart">
        <CartIcon />
      </Link>
      <div className="cart__length__box">
        <span className="cart__length">{cartItems.length}</span>
      </div>
    </div>
  );
};

export default Navbar;
