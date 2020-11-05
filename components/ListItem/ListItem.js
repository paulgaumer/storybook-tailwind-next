import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

const ListItem = ({ name, title, role }) => {
  const [editableRole, setEditableRole] = useState(role);
  const [canEdit, setCanEdit] = useState(false);

  return (
    <tr className="bg-white">
      <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
        {name}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
        {title}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
        <input
          type="text"
          value={editableRole}
          readOnly={!canEdit}
          onChange={(e) => setEditableRole(e.target.value)}
        />
      </td>
      <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
        {canEdit ? (
          <Button
            type="secondary"
            size="small"
            label="Save Role"
            color="#06CC57"
            onClick={() => setCanEdit(false)}
          />
        ) : (
          <Button
            type="secondary"
            size="small"
            label="Edit Role"
            onClick={() => setCanEdit(true)}
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
