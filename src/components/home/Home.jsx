import React, { useState } from 'react';
import './_home.scss';
import { options } from '../../data/data';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [tableNumber, setTableNumber] = useState(0);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tableNumber === 0) {
      navigate('/');
    } else {
      navigate('/meals');
    }
  };

  const handleChange = (e) => {
    const selectedTableNumber = e.target.value;
    setTableNumber(selectedTableNumber);
  };

  return (
    <div className="home__container">
      <p className="welcome__text">Welcome to Nando's ordering meal</p>
      <form className="table__number__form" onSubmit={handleSubmit}>
        <label htmlFor="tables">Choose a table</label>

        <select onChange={handleChange}>
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {tableNumber === 0 && (
          <p className="wrong__table">Choose another table number</p>
        )}
        <button className="app__button">Save table</button>
      </form>
    </div>
  );
};

export default Home;
