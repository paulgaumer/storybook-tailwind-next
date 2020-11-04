import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ label, size, onClick, color, type }) => {
  if (type === 'secondary') {
    const customColor = color ? color : null;

    return (
      <span className="inline-flex rounded-md shadow-sm">
        <button
          type="button"
          onClick={onClick}
          style={{ color: customColor, borderColor: customColor }}
          className={`inline-flex items-center py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150 ${
            size === 'medium' ? 'px-4 leading-5' : 'px-3 leading-4'
          }`}
        >
          {label}
        </button>
      </span>
    );
  } else {
    return (
      <span className="inline-flex rounded-md shadow-sm">
        <button
          type="button"
          onClick={onClick}
          style={{ backgroundColor: color ? color : null }}
          className={`inline-flex items-center py-2 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150 ${
            color
              ? ''
              : 'bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700'
          } ${size === 'medium' ? 'px-4 leading-5' : 'px-3 leading-4'}`}
        >
          {label}
        </button>
      </span>
    );
  }
};

export default Button;

Button.propTypes = {
  /**
   * Aspect of the button
   */
  type: PropTypes.oneOf(['primary', 'secondary']),
  /**
   * Button Text
   */
  label: PropTypes.string.isRequired,
  /**
   * Size of the button
   */
  size: PropTypes.oneOf(['small', 'medium']),
  /**
   * Action of the button
   */
  onClick: PropTypes.func,
  /**
   * Override the default tailwind:
   *  - background color for Primary buttons
   *  - border & text for Secondary buttons
   */
  color: PropTypes.string,
};

Button.defaultProps = {
  type: 'primary',
  label: 'Click Me',
  size: 'medium',
  onClick: () => alert("I'm a click event"),
};
