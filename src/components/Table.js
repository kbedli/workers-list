import EditableRow from "./EditableRow";
import ReadOnlyRow from "./ReadOnlyRow";

const Table = ({
  handleEditFormSubmit,
  workers,
  queryPerson,
  queryDepartment,
  salary,
  editWorkerId,
  handleEditFormChange,
  handleCancelClick,
  handleEditClick,
  handleDeleteClick,
  editFormData,
}) => {
  return (
    <>
      <h2 className="listTitle">Workers list</h2>
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead className="thead">
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Department</th>
              <th>Salary</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {workers
              .filter(
                (user) =>
                  user.firstName
                    .toLowerCase()
                    .includes(queryPerson.toLowerCase()) ||
                  user.lastName
                    .toLowerCase()
                    .includes(queryPerson.toLowerCase())
              )
              .filter((user) => user.department.includes(queryDepartment))
              .filter((user) => user.salary <= salary)
              .map((worker) => (
                <>
                  {editWorkerId === worker.id ? (
                    <EditableRow
                      editFormData={editFormData}
                      handleEditFormChange={handleEditFormChange}
                      handleCancelClick={handleCancelClick}
                    />
                  ) : (
                    <ReadOnlyRow
                      worker={worker}
                      handleEditClick={handleEditClick}
                      handleDeleteClick={handleDeleteClick}
                    />
                  )}
                </>
              ))}
          </tbody>
        </table>
      </form>
    </>
  );
};

export default Table;
