import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

const ListItem = ({ name, title, role }) => {
  const [editableRole, setEditableRole] = useState(role);
  const [canEdit, setCanEdit] = useState(false);
  const inputEl = useRef(null);

  const editRoleInput = () => {
    setCanEdit(true);
    inputEl.current.focus();
  };

  return (
    <tr className="bg-white">
      <td className="px-6 py-4 text-sm font-medium leading-5 text-gray-900 whitespace-no-wrap">
        {name}
      </td>
      <td className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap">
        {title}
      </td>
      <td className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap">
        <input
          type="text"
          ref={inputEl}
          value={editableRole}
          readOnly={!canEdit}
          onChange={(e) => setEditableRole(e.target.value)}
        />
      </td>
      <td className="px-6 py-4 text-sm font-medium leading-5 text-right whitespace-no-wrap">
        {canEdit ? (
          <Button
            type="primary"
            size="small"
            label="Save Role"
            color="#6FD3A9"
            onClick={() => setCanEdit(false)}
          />
        ) : (
          <Button
            type="secondary"
            size="small"
            label="Edit Role"
            onClick={editRoleInput}
          />
        )}
      </td>
    </tr>
  );
};

export default ListItem;

ListItem.propTypes = {
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

ListItem.defaultProps = {
  name: 'John Doe',
  title: 'Unknow',
  role: 'unknown',
};
