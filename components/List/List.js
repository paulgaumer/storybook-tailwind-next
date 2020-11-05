import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import ListItem from '../ListItem/ListItem';

const List = ({ loading, items }) => {
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center text-gray-700">
        <Loader type="ThreeDots" color="#4A5568" height={80} width={80} />
        <p className="text-xl">Loading</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-white">
                    Name
                  </th>
                  <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-white">
                    Title
                  </th>
                  <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-white">
                    Role
                  </th>
                  <th className="px-6 py-3 bg-white" />
                </tr>
              </thead>
              <tbody>
                {items.length === 0 && (
                  <tr className="bg-white">
                    <td
                      colspan="4"
                      className="px-6 py-4 text-sm font-medium leading-5 text-gray-500 whitespace-no-wrap"
                    >
                      <div className="flex flex-col items-center space-y-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-12 h-12"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <p className="text-md">
                          No profiles are currently available
                        </p>
                      </div>
                    </td>
                  </tr>
                )}
                {items.map((item) => {
                  return <ListItem key={item.id} {...item} />;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;

List.propTypes = {
  /**
   * Data loading state
   */
  loading: PropTypes.bool,
  /**
   * List of items to be displayed
   */
  items: PropTypes.arrayOf(PropTypes.object),
};

List.defaultProps = {
  loading: false,
  items: [],
};
