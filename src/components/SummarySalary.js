const SummarySalary = ({
  setDepartmentSalary,
  singleDepartments,
  SalarySummary,
}) => {
  return (
    <div className="salarySummary">
      <h2 className="summarySalaryTitle">Summary of salary per department</h2>
      <div className="summaryInput">
        <input
          list="departmentSalary"
          onChange={(e) => setDepartmentSalary(e.target.value)}
          placeholder="Choose department..."
        />
        <datalist id="departmentSalary">
          {singleDepartments.map((dep, index) => (
            <option key={index} value={dep}></option>
          ))}
        </datalist>
      </div>
      <div className="summaryOutcome">
        <p>{SalarySummary()} USD</p>
      </div>
    </div>
  );
};

export default SummarySalary;
