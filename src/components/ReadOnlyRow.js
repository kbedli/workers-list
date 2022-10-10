import React from "react";

const ReadOnlyRow = ({ worker, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{worker.firstName}</td>
      <td>{worker.lastName}</td>
      <td>{worker.department}</td>
      <td>{`${worker.salary} USD`}</td>
      <td>
        <button
          className="btns"
          type="button"
          onClick={(event) => handleEditClick(event, worker)}
        >
          Edit
        </button>
        <button
          className="btns"
          type="button"
          onClick={() => handleDeleteClick(worker.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
