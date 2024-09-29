import { EmployeeSchema } from "@/lib/validators/hrm/salary-setup-types";

const EmployeeDetails = ({
  employeeData,
}: {
  employeeData: EmployeeSchema;
}) => {
  return (
    <div className="mb-3 flex justify-between">
      <ul className="space-y-2.5">
        <li>
          <span className="font-bold">Name:</span> {employeeData.first_name}{" "}
          {employeeData.first_name}
        </li>
        <li>
          <span className="font-bold">Designation:</span>{" "}
          {employeeData.designation.name}
        </li>
        <li>
          <span className="font-bold">Department:</span>{" "}
          {employeeData.department.name}
        </li>
        <li>
          <span className="font-bold">joining Date:</span>{" "}
          {employeeData.joining_date}
        </li>
      </ul>
      <ul className="space-y-2.5 text-right">
        <li>
          <span className="font-bold">Employee ID:</span>{" "}
          {employeeData.employee_unique_id}
        </li>
        <li>
          <span className="font-bold">Basic:</span>{" "}
          {/* {Number(employeeData.basePay).toFixed(2)} */}
          2000.00
        </li>
        <li>
          <span className="font-bold">Bank A/C:</span>{" "}
          {employeeData.account_number}
        </li>
        <li>
          <span className="font-bold">Date:</span> {employeeData.joining_date}
        </li>
      </ul>
    </div>
  );
};

export default EmployeeDetails;
