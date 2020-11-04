import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ label, size, onClick, backgroundColor }) => {
  return (
    <span className="inline-flex rounded-md shadow-sm">
      <button
        type="button"
        onClick={onClick}
        style={{ backgroundColor: backgroundColor ? backgroundColor : null }}
        className={`inline-flex items-center py-2 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150 ${
          backgroundColor
            ? ''
            : 'bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700'
        } ${size === 'medium' ? 'px-4 leading-5' : 'px-3 leading-4'}`}
      >
        {label}
      </button>
    </span>
  );
};

export default Button;

Button.propTypes = {
  /**
   * Button Text
   */
  label: PropTypes.string,
  /**
   * Size of the button
   */
  size: PropTypes.oneOf(['small', 'medium']),
  /**
   * Action of the button
   */
  onClick: PropTypes.func,
  /**
   * Override the default background color
   */
  backgroundColor: PropTypes.string,
};

Button.defaultProps = {
  label: 'Click Me',
  size: 'medium',
  onClick: () => alert('Hello'),
};
