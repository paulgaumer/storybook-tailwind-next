import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Card from '../Card/Card';

const CardsGrid = ({ loading, items }) => {
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center text-gray-700">
        <Loader type="ThreeDots" color="#4A5568" height={80} width={80} />
        <p className="text-xl">Loading</p>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center space-y-3 text-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-20 h-20"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p className="text-xl">No profiles are currently available</p>
      </div>
    );
  }

  return (
    <ul class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => {
        return (
          <li className="col-span-1">
            <Card key={item.id} {...item} />
          </li>
        );
      })}
    </ul>
  );
};

export default CardsGrid;

CardsGrid.propTypes = {
  loading: PropTypes.bool,
  items: PropTypes.arrayOf(Card.propTypes),
};

CardsGrid.defaultProps = {
  loading: false,
  items: [],
};
