const Searchbars = ({
  setQueryPerson,
  setQueryDepartment,
  singleDepartments,
  highestSal,
  handleInput,
  salary,
}) => {
  return (
    <>
      <h2 className="searchWorkerTitle">Search for an employee</h2>
      <div>
        <div className="searchbars">
          <div>
            <input
              type="text"
              placeholder="Search person..."
              onChange={(e) => setQueryPerson(e.target.value)}
            />
          </div>
          <div>
            <input
              list="departments"
              onChange={(e) => setQueryDepartment(e.target.value)}
              placeholder="Search department..."
            />
            <datalist id="departments">
              {singleDepartments.map((dep, index) => (
                <option key={index} value={dep}></option>
              ))}
            </datalist>
          </div>

          <div>
            <input
              type="range"
              min="0"
              max={highestSal}
              onChange={handleInput}
              value={salary}
            />
          </div>
        </div>

        <div className="rangeInputTitle">
          <h4>Max salary: {salary}</h4>
        </div>
      </div>
    </>
  );
};

export default Searchbars;
