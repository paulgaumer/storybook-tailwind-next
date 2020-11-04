import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ name, title, role }) => {
  const nameSplit = name.split(' ');

  return (
    <div className="flex flex-col bg-white rounded-lg shadow text-center">
      <div className="flex-1 flex flex-col p-8">
        <img
          className="w-32 h-32 flex-shrink-0 mx-auto rounded-full"
          src={`https://eu.ui-avatars.com/api/?background=random&size=512&name=${nameSplit[0]}+${nameSplit[1]}`}
          alt=""
        />
        <h3 className="mt-6 text-gray-900 text-sm leading-5 font-medium">
          {name}
        </h3>
        <dl className="mt-1 flex-grow flex flex-col justify-between">
          <dt className="sr-only">Title</dt>
          <dd className="text-gray-500 text-sm leading-5">{title}</dd>
          <dt className="sr-only">Role</dt>
          <dd className="mt-3">
            <span className="px-2 py-1 text-teal-800 text-xs leading-4 font-medium bg-teal-100 rounded-full">
              {role}
            </span>
          </dd>
        </dl>
      </div>
      <div className="border-t border-gray-200">
        <div className="-mt-px flex">
          <div className="w-0 flex-1 flex border-r border-gray-200">
            <a
              href="/"
              className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5 text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150"
            >
              {/* Heroicon name: mail */}
              <svg
                className="w-5 h-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span className="ml-3">Email</span>
            </a>
          </div>
          <div className="-ml-px w-0 flex-1 flex">
            <a
              href="/"
              className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5 text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150"
            >
              {/* Heroicon name: phone */}
              <svg
                className="w-5 h-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="ml-3">Call</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  /**
   * First and Last name
   */
  name: PropTypes.string.isRequired,
  /**
   * Job Title
   */
  title: PropTypes.string.isRequired,
  /**
   * Activity
   */
  role: PropTypes.string.isRequired,
};

Card.defaultProps = {
  name: 'John Doe',
  title: 'Unknow',
  role: 'unknown',
};
