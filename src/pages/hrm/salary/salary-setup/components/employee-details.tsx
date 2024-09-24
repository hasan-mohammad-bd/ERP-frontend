const EmployeeDetails = ({ employeeData }: any) => {
  return (
    <div className="mb-3 flex justify-between">
      <ul className="space-y-2.5">
        <li>
          <span className="font-bold">Name:</span> {employeeData.name}
        </li>
        <li>
          <span className="font-bold">Designation:</span>{" "}
          {employeeData.designation}
        </li>
        <li>
          <span className="font-bold">Department:</span>{" "}
          {employeeData.department}
        </li>
        <li>
          <span className="font-bold">joining Date:</span>{" "}
          {employeeData.joiningDate}
        </li>
      </ul>
      <ul className="space-y-2.5 text-right">
        <li>
          <span className="font-bold">Employee ID:</span>{" "}
          {employeeData.employeeId}
        </li>
        <li>
          <span className="font-bold">Basic:</span>{" "}
          {Number(employeeData.basePay).toFixed(2)}
        </li>
        <li>
          <span className="font-bold">Bank A/C:</span>{" "}
          {employeeData.bankAccount}
        </li>
        <li>
          <span className="font-bold">Date:</span> {employeeData.date}
        </li>
      </ul>
    </div>
  );
};

export default EmployeeDetails;
