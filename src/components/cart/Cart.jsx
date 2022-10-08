import React, { useEffect } from 'react';
import './cart.scss';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  addToCart,
  clearCart,
  decreaseCartItem,
  getTotals,
  removeFromCart,
} from '../../features/cart/cartSlice';
import { ChevronDown, ChevronUp } from '../../data/data';

const Cart = () => {
  const cart = useSelector((state) => ({
    ...state.cart,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const increaseQty = (item) => dispatch(addToCart(item));

  const removeItemFromCart = (item) => dispatch(removeFromCart(item));

  const decreaseQty = (item) => dispatch(decreaseCartItem(item));

  const clearItemsfromCart = () => dispatch(clearCart());
  return (
    <div className="cart__container">
      <div className="upper__text">
        <h1>Cart Items</h1>
        <Link className="backToMenu" to="/meals">
          Back to order some meals
        </Link>
      </div>

      {cart.cartItems.length === 0 ? (
        <div className="empty__cart">
          <span>Your cart has no item.</span>
          <img src="/images/empty__plat.png" alt="empty__plat" />
        </div>
      ) : (
        <div className="inner__menu">
          <div className="cart__menu__container">
            {cart.cartItems &&
              cart.cartItems.map((cartItem) => (
                <div className="cart__menu__items" key={cartItem.id}>
                  <div className="left__items">
                    <h3>{cartItem.title}</h3>
                    <img src={cartItem.image} alt={cartItem.title} />
                    <button
                      className="app__button red__button"
                      onClick={() => removeItemFromCart(cartItem)}
                    >
                      Remove
                    </button>
                  </div>
                  <div className="menu__price">DKK {cartItem.price}</div>
                  <div className="side__menu">
                    <button
                      className="action__btn"
                      onClick={() => increaseQty(cartItem)}
                    >
                      <ChevronUp />
                    </button>
                    <div className="count">{cartItem.cartQuantity}</div>
                    <button
                      className="action__btn"
                      onClick={() => decreaseQty(cartItem)}
                    >
                      <ChevronDown />
                    </button>
                  </div>
                  <div className="menu__price">
                    DKK {cartItem.price * cartItem.cartQuantity}
                  </div>
                </div>
              ))}
          </div>
          <div className="cart__bottom__items">
            <button
              className="app__button red__button"
              onClick={() => clearItemsfromCart()}
            >
              Clear Cart
            </button>
            <div className="subtotal">
              <span>Subtotal</span>
              <span className="menu__price">DKK {cart.cartTotalAmount}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
