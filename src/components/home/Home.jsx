import React, { useState } from 'react';
import './_home.scss';
import { options } from '../../data/data';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';

const Home = () => {
  const [tableNumber, setTableNumber] = useState();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    console.log('submitted');
    navigate('/meals');
  };

  return (
    <div className="home__container">
      <p className="welcome__text">Welcome to Nando's ordering meal</p>
      <form className="table__number__form" onSubmit={handleSubmit}>
        <label htmlFor="tables">Choose a table</label>
        {/* {options.map((table, index) => ( */}
        <Select
          // key={index}
          options={options}
        />
        {/* ))} */}
        <button type="submit" className="app__button">
          save table
        </button>
      </form>
    </div>
  );
};

export default Home;
