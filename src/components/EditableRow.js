import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
  handleEditClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter the first name..."
          name="firstName"
          value={editFormData.firstName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter the last name..."
          name="lastName"
          value={editFormData.lastName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter the department..."
          name="department"
          value={editFormData.department}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <div className="my-input-container">
          <input
            type="number"
            required="required"
            placeholder="Enter the salary..."
            name="salary"
            value={editFormData.salary}
            onChange={handleEditFormChange}
          ></input>
          <span className="my-suffix2"> USD</span>
        </div>
      </td>
      <td>
        <button className="btns" type="submit" onClick={handleEditClick}>
          Save
        </button>
        <button className="btns" type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
