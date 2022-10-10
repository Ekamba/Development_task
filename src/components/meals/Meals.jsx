import React from 'react';
import './_meals.scss';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cart/cartSlice';
import { useGetMenusQuery } from '../../features/menu/menuServices';
import { useNavigate } from 'react-router-dom';

const Meals = () => {
  const { data, isLoading } = useGetMenusQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addMenuToCart = (item) => {
    dispatch(addToCart(item));
    navigate('/cart');
  };

  return (
    <div className="meals__container">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1 className="menu__title">Menu</h1>
          <div className="cart__menu">
            {data &&
              data?.map((item) => (
                <div className="menu" key={item.id}>
                  <img className="menu__image" src={item.image} alt="images" />
                  <p className="menu__title">{item.title}</p>
                  <p className="menu__price">DKK {item.price}</p>
                  <p className="menu__description">{item.description}</p>
                  <div className="add__menu">
                    <button
                      onClick={() => addMenuToCart(item)}
                      className="app__button"
                    >
                      add to cart
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Meals;
