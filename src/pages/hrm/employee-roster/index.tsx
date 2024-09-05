import { Heading } from "@/components/common/heading";
import { Separator } from "@radix-ui/react-dropdown-menu";
import RosterCalendar from "./components/RosterCalendar";
import { useGetEmployeesQuery } from "@/store/services/hrm/api/employee-list";

const EmployeeRoster = () => {
  const { data, isLoading } = useGetEmployeesQuery(`per_page=1000`);

  console.log(isLoading);
  const employees = data?.data || [];

  // console.log(employee, "employee");
  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <Heading
              title="Employee Roster"
              description="Manage roster for you organization"
            />
          </div>
          <Separator />
          <RosterCalendar rosterEligibleEmployees={employees} />
        </div>
      </div>
    </>
  );
};

export default EmployeeRoster;
