<<<<<<< HEAD
import { Card } from "@/components/ui/card";
=======
import {  Card } from "@/components/ui/card";
>>>>>>> main
// import { Button } from "@/components/ui/button";
import { Tabs, TabsContent } from "@/components/ui/tabs";

import {
  // ArrowRightLeft,
  // ChevronDown,
  // ChevronUp,
  // CircleDollarSign,
  // Coins,
  FolderOpenDot,
  // PersonStanding,
  // ReceiptText,
  // UserMinus,
  // UserRound,
  UserRoundMinus,
  UserRoundSearch,
  UsersRound,
} from "lucide-react";
import { DatePickerWithRange } from "@/components/common/tool-bar/tool-bar-items/date-range-picker";
import React from "react";
import { format } from "date-fns";
// import { Chart } from "./chart";
// import Voucher from "./voucher-list";
import { useGetDashboardSummariesQuery } from "@/store/services/accounts/api/general-ledger copy";
// import { BarChartComponent } from "./bar-chart";
import { TotalEmployeeChart } from "./total-employee-chart";
import { EmployeeBranch } from "./employee-branch";
// import EmployeeServiceLife from "./employee-service-life";
import EmployeeBy from "./employee-by";
import { RangeBarChart } from "./range-bar-chart";
<<<<<<< HEAD
import ByOrgDept from "./by-org-dept";
import Announcement from "./announcement";
=======

>>>>>>> main

const employeeData = [
  {
    id: 1,
    employee_name: "John Doe",
    image:
      "https://plus.unsplash.com/premium_photo-1674854858248-8987c02e74cf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    department: "IT",
    designation: "Software Engineer",
    age: "70",
    gender: "Male",
    leave: true,
    organization: "One Tech",
  },
  {
    id: 2,
    employee_name: "Rahana Rahaman",
    designation: "Manager",
    image:
      "https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    department: "Accounts",
    age: "25",
    gender: "Female",
    leave: true,
    organization: "Opportunity",
  },
  {
    id: 3,
    employee_name: "Bathon Khan",
    designation: "Manager",
    image:
      "https://images.unsplash.com/photo-1464863979621-258859e62245?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    department: "IT",
    age: "21",
    gender: "Female",
    leave: true,
    organization: "One Lead",
  },
  {
    id: 4,
    employee_name: "Mike Smith",
    designation: "Manager",
    image:
      "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    department: "Development",
    age: "30",
    gender: "Male",
    leave: true,
    organization: "One Mood",
  },
  {
    id: 5,
    employee_name: "Jasika Khan",
    designation: "Front-end Developer",
    image:
      "https://plus.unsplash.com/premium_photo-1670884442192-7b58d513cd55?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    department: "IT",
    age: "30",
    gender: "Female",
    leave: false,
    organization: "One Restaurant",
  },
  {
    id: 6,
    employee_name: "Orange Qube",
    designation: "Manager",
    image:
      "https://plus.unsplash.com/premium_photo-1669879825881-6d4e4bde67d5?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    department: "IT",
    age: "32",
    gender: "Male",
    leave: true,
    organization: "One Restaurant",
  },
  {
    id: 7,
    employee_name: "Halana Omar",
    designation: "Dev ops Engineer",
    image:
      "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    department: "Design",
    age: "22",
    gender: "Female",
    leave: true,
    organization: "One Tech",
  },
];

const employeeGenderData = [
  {
    id: 1,
    gender: "Male",
    total_employee: 22,
  },
  {
    id: 2,
    gender: "Female",
    total_employee: 10,
  },
];

const employeeServiceLifeData = [
  {
    id: 1,
    total_employee: 4,
    years: "10+ years",
    age: "60 + ages",
  },
  {
    id: 2,
    total_employee: 8,
    years: "5-10 years",
    age: "40 - 60 ages",
  },
  {
    id: 3,
    total_employee: 16,
    years: "2-5 years",
    age: "20 - 40 ages",
  },
  {
    id: 4,
    total_employee: 20,
    years: "0-2 years",
    age: "10 - 20 ages",
  },
  {
    id: 5,
    total_employee: 9,
    years: "Less than 1 year",
    age: "Less than 10 ages",
  },
];
<<<<<<< HEAD

const employeeByDeptOrganization = [
  {
    id: 1,
    total_employee: 22,
    department: "HR",
    organization: "One Lead",
    image:
      "https://www.logomaker.com/wpstatic/uploads/2015/06/Logo-Samples2-33-min.jpg",
  },
  {
    id: 2,
    total_employee: 10,
    department: "IT",
    organization: "One Mood",
    image:
      "https://www.logomaker.com/wpstatic/uploads/2015/06/Logo-Samples2-36-min.jpg",
  },
  {
    id: 3,
    total_employee: 16,
    department: "Development",
    organization: "One Restaurant",
    image:
      "https://www.logomaker.com/wpstatic/uploads/2015/06/Logo-Samples2-04-min.jpg",
  },
  {
    id: 4,
    total_employee: 20,
    department: "Design",
    organization: "One Tech",
    image:
      "https://www.logomaker.com/wpstatic/uploads/2015/06/Logo-Samples2-38-min.jpg",
  },
];

const announcementData = [
  {
    id: 1,
    title: "HRM Announcement",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, assumenda.",
      date: "2022-01-01",
  },
  {
    id: 2,
    title: "Holiday Announcement",
    date: "2022-01-01",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, assumenda.",
      
  },
  {
    id: 3,
    title: "Salary Announcement",
    date: "2022-01-01",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, assumenda.",
  },
]
=======
>>>>>>> main

const HRMDashboard = () => {
  const [startDate, setStartDate] = React.useState<Date | null>(new Date());
  const [endDate, setEndDate] = React.useState<Date | null>(new Date());
  const formateStartDate = format(
    startDate ? startDate : new Date(),
    "yyyy-MM-dd"
  );
  const formateEndDate = format(endDate ? endDate : new Date(), "yyyy-MM-dd");

  const { data } = useGetDashboardSummariesQuery(
    `start_date=${formateStartDate ? formateStartDate : ""}&end_date=${
      formateEndDate ? formateEndDate : ""
    }`
  );

  // const chartData = data?.data || [];

  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 space-y-4">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-xl tracking-tight">HRM Dashboard</h2>
          <div className="flex items-center space-x-2">
            <DatePickerWithRange
              setStartDate={setStartDate}
              setEndDate={setEndDate}
            />
            {/* <Button size="sm">Download</Button> */}
          </div>
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsContent value="overview" className="space-y-4">
            <Card className="p-3">
              <div className="flex justify-between mb-2">
                <h3 className="text-md "></h3>
              </div>
              <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
                <Card className="p-4">
                  <div className="flex items-center">
                    <div className="p-2 rounded-md bg-blue-200">
                      <UsersRound size={16} />
                    </div>
                    <div className="ml-3 text-lg font-bold">
                      {data?.growth?.income.toLocaleString("en-IN") || 0}
                    </div>
                  </div>
                  <h2 className="mt-2 text-sm">Total Employee</h2>
                </Card>
                <Card className="p-4">
                  <div className="flex items-center">
                    <div className="p-2 rounded-md bg-red-200">
                      <FolderOpenDot size={16} />
                    </div>
                    <div className="ml-3 text-lg font-bold">
                      {" "}
                      {data?.growth?.expence.toLocaleString("en-IN") || 0}
                    </div>
                  </div>
                  <h2 className="mt-2 text-sm">Total Project</h2>
                </Card>
                <Card className="p-4">
                  <div className="flex items-center">
                    <div className="p-2 rounded-md bg-green-200">
                      <UserRoundMinus size={16} />
                    </div>
                    <div className="ml-3 text-lg font-bold">
                      {" "}
                      {data?.growth?.net_profit.toLocaleString("en-IN") || 0}
                    </div>
                  </div>
                  <h2 className="mt-2 text-sm">Today's Leave</h2>
                </Card>
                <Card className="p-4">
                  <div className="flex items-center">
                    <div className="p-2 rounded-md bg-green-200">
                      <UserRoundSearch size={16} />
                    </div>
                    <div className="ml-3 text-lg font-bold">
                      {" "}
                      {data?.growth?.net_profit.toLocaleString("en-IN") || 0}
                    </div>
                  </div>
                  <h2 className="mt-2 text-sm">New Employee</h2>
                </Card>
              </div>
            </Card>
            <div className="grid grid-cols-3 gap-3">
              <div className="pb-3">
                <TotalEmployeeChart />

                {/* <Card className="mt-3">
                  <CardHeader>
                    <h2 className="text-md ">Sales per month</h2>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <BarChartComponent chartData={chartData} />
                   
                  </CardContent>
                </Card> */}
                <div className="mt-3">
                  <EmployeeBy
<<<<<<< HEAD
                    title="Employee on Leave"
                    subject="department"
                    data={employeeData}
                  />
                </div>
                <div className="mt-3">
                  <EmployeeBy
                    title="Upcoming Birthday"
=======
                    title="Employee By Department"
>>>>>>> main
                    subject="department"
                    data={employeeData}
                  />
                </div>

              </div>
              <div className="">
                <div className="">
                  <EmployeeBranch />
                </div>
                {/* <div className="mt-3">
                  <Voucher />
                </div> */}
<<<<<<< HEAD
                {/* <div className="mt-3">
=======
                <div className="mt-3">
>>>>>>> main
                  <EmployeeBy
                    title="Employee By Organization"
                    subject="organization"
                    data={employeeData}
                  />
<<<<<<< HEAD
                </div> */}
                <div className="mt-3">
                  <ByOrgDept
                    title="Employee By Department"
                    data={employeeByDeptOrganization}
                    subject="department"
                  />
                </div>
                <div className="mt-3">
                  <ByOrgDept
                    title="Employee By Organization"
                    data={employeeByDeptOrganization}
                    subject="organization"
                  />
                </div>
                <div className="mt-3">
                    <Announcement title="Announcement" data={announcementData}/>
                </div>
              </div>
              <div>
                {/* <EmployeeServiceLife
                  title="Employee Service Life"
                  subjectOn="years"
                  data={employeeServiceLifeData}
                /> */}
                <div className="mt-3">
                  <RangeBarChart
                    title="Employee Service Life"
                    dataKey_1="years"
                    chartData={employeeServiceLifeData}
                  />
                </div>
                <div className="mt-3">
                  <RangeBarChart
                    title="Employee Buy Age"
                    dataKey_1="age"
                    chartData={employeeServiceLifeData}
                  />
                </div>
                <div className="mt-3">
                  <RangeBarChart
                    title="Employee Buy Gender"
                    dataKey_1="gender"
                    chartData={employeeGenderData}
                  />
                </div>
                <div className="mt-3">
                  <EmployeeBy
                    title="Work Anniversary"
                    subject="department"
                    data={employeeData}
                  />
=======
                </div>
              </div>
              <div>
                {/* <EmployeeServiceLife
                  title="Employee Service Life"
                  subjectOn="years"
                  data={employeeServiceLifeData}
                /> */}
                <div className="mt-3">
                  <RangeBarChart title="Employee Service Life" dataKey_1="years" chartData={employeeServiceLifeData}/>
                </div>
                <div className="mt-3">
                  <RangeBarChart title="Employee Buy Age" dataKey_1="age" chartData={employeeServiceLifeData}/>
                </div>
                <div className="mt-3">
                  <RangeBarChart title="Employee Buy Gender" dataKey_1="gender" chartData={employeeGenderData}/>
>>>>>>> main
                </div>

                {/* <div className="mt-3">
                  <EmployeeServiceLife
                    title="Employee By Age"
                    subjectOn="age"
                    data={employeeServiceLifeData}
                  />
                </div>
                <div className="mt-3">
                  <EmployeeServiceLife
                    title="Employee By Gender"
                    subjectOn="gender"
                    data={employeeGenderData}
                  />
                </div> */}
<<<<<<< HEAD
=======


>>>>>>> main
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default HRMDashboard;
