const AddNewWorker = ({
  handleAddFormChange,
  addFormData,
  handleAddFormSubmit,
}) => {
  return (
    <>
      <h2 className="addWorkerTitle">Add new worker</h2>
      <div className="addNewWorker">
        <form onSubmit={handleAddFormSubmit}>
          <input
            type="text"
            value={addFormData.firstName}
            name="firstName"
            placeholder="First Name..."
            required
            onChange={handleAddFormChange}
          />
          <input
            type="text"
            value={addFormData.lastName}
            name="lastName"
            placeholder="Last Name..."
            required
            onChange={handleAddFormChange}
          />
          <input
            type="text"
            value={addFormData.department}
            name="department"
            placeholder="Department..."
            required
            onChange={handleAddFormChange}
          />
          <div className="my-input-container">
            <input
              type="number"
              id="usdcurrency"
              value={addFormData.salary}
              name="salary"
              placeholder="Salary..."
              required
              onChange={handleAddFormChange}
            />
            <span className="my-suffix"> USD</span>
          </div>

          <button type="submit">Add new</button>
        </form>
      </div>
    </>
  );
};

export default AddNewWorker;
