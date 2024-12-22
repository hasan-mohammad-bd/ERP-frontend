import { Card } from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import {
  BarChartIcon,
  Calculator,
  CircleFadingPlusIcon,
  Fan,
  // FolderOpenDot,
  // Landmark,
  LandmarkIcon,
  ScrollText,
  // UserRoundMinus,
  // UserRoundSearch,
  // UsersRound,
} from "lucide-react";

// import { TotalEmployeeChart } from "./total-employee-chart";
// import { EmployeeBranch } from "./employee-branch";


// import { ChartContainer } from "@/components/ui/chart";
import { TheLineGraph } from "./line-graph";
import { TheLineGraph2 } from "./line-graph2";
import { ThePieChartDonut } from "./pie-chart-donut";
import { TheBarChart } from "./bar-chart";
import { TheAreaChart } from "./area-chart";
import { useFetchReportsListQuery } from "@/store/services/billing/api/bashboard-billing";
import { DashboardReports } from "@/lib/validators/billing/dashboard-report";

// const employeeData = [
//   {
//     id: 1,
//     employee_name: "John Doe",
//     image:
//       "https://plus.unsplash.com/premium_photo-1674854858248-8987c02e74cf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     department: "IT",
//     designation: "Software Engineer",
//     age: "70",
//     gender: "Male",
//     leave: true,
//     organization: "One Tech",
//   },
//   {
//     id: 2,
//     employee_name: "Rahana Rahaman",
//     designation: "Manager",
//     image:
//       "https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     department: "Accounts",
//     age: "25",
//     gender: "Female",
//     leave: true,
//     organization: "Opportunity",
//   },
//   {
//     id: 3,
//     employee_name: "Bathon Khan",
//     designation: "Manager",
//     image:
//       "https://images.unsplash.com/photo-1464863979621-258859e62245?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     department: "IT",
//     age: "21",
//     gender: "Female",
//     leave: true,
//     organization: "One Lead",
//   },
//   {
//     id: 4,
//     employee_name: "Mike Smith",
//     designation: "Manager",
//     image:
//       "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     department: "Development",
//     age: "30",
//     gender: "Male",
//     leave: true,
//     organization: "One Mood",
//   },
//   {
//     id: 5,
//     employee_name: "Jasika Khan",
//     designation: "Front-end Developer",
//     image:
//       "https://plus.unsplash.com/premium_photo-1670884442192-7b58d513cd55?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     department: "IT",
//     age: "30",
//     gender: "Female",
//     leave: false,
//     organization: "One Restaurant",
//   },
//   {
//     id: 6,
//     employee_name: "Orange Qube",
//     designation: "Manager",
//     image:
//       "https://plus.unsplash.com/premium_photo-1669879825881-6d4e4bde67d5?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     department: "IT",
//     age: "32",
//     gender: "Male",
//     leave: true,
//     organization: "One Restaurant",
//   },
//   {
//     id: 7,
//     employee_name: "Halana Omar",
//     designation: "Dev ops Engineer",
//     image:
//       "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     department: "Design",
//     age: "22",
//     gender: "Female",
//     leave: true,
//     organization: "One Tech",
//   },
// ];

// const announcementData = [
//   {
//     id: 1,
//     title: "HRM Announcement",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, assumenda.",
//       date: "2022-01-01",
//   },
//   {
//     id: 2,
//     title: "Holiday Announcement",
//     date: "2022-01-01",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, assumenda.",

//   },
//   {
//     id: 3,
//     title: "Salary Announcement",
//     date: "2022-01-01",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, assumenda.",
//   },
// ]

const BillingDashboard = () => {
  const { data } = useFetchReportsListQuery();

  const billingDashboardData =  data?.data as DashboardReports ;

  console.log(billingDashboardData, 'billingDashboardData');


  // const chartData = data?.data || [];
/*   const employeeServiceLifeData = [
    {
      id: 1,
      total_employee: Number(
        hrmDashboardData.employee_service_life?.years_10_plus || 0
      ),
      years: "10+ years",
      age: "60 + ages",
    },
    {
      id: 2,
      total_employee: Number(
        hrmDashboardData.employee_service_life?.years_5_to_10 || 0
      ),
      years: "5-10 years",
      age: "40 - 60 ages",
    },

    {
      id: 3,
      total_employee: Number(
        hrmDashboardData.employee_service_life?.years_2_to_5 || 0
      ),
      years: "2-5 years",
      age: "20 - 40 ages",
    },
    {
      id: 4,
      total_employee: Number(
        hrmDashboardData.employee_service_life?.years_0_to_2 || 0
      ),
      years: "0-2 years",
      age: "10 - 20 ages",
    },
    {
      id: 5,
      total_employee: Number(
        hrmDashboardData.employee_service_life?.less_than_1_year || 0
      ),
      years: "Less than 1 year",
      age: "Less than 10 ages",
    },
  ]; */

/*   const employeeByAgeData = [
    {
      id: 1,
      total_employee: Number(
        hrmDashboardData.employee_age_group?.age_60_plus || 0
      ),
      age: "60+ ages",
    },
    {
      id: 2,
      total_employee: Number(
        hrmDashboardData.employee_age_group?.age_40_to_60 || 0
      ),
      age: "40 - 60 ages",
    },
    {
      id: 3,
      total_employee: Number(
        hrmDashboardData.employee_age_group?.age_20_to_40 || 0
      ),
      age: "20 - 40 ages",
    },
    {
      id: 4,
      total_employee: Number(
        hrmDashboardData.employee_age_group?.age_10_to_20 || 0
      ),
      age: "10 - 20 ages",
    },
    {
      id: 5,
      total_employee: Number(
        hrmDashboardData.employee_age_group?.age_less_than_10 || 0
      ),
      age: "Less than 10 ages",
    },
  ]; */

  // Transform genders data to match the structure expected by RangeBarChart
/*   const employeeGenderData =
    hrmDashboardData.genders?.map((gender) => ({
      id: gender.id,
      total_employee: gender.employees_count,
      gender: gender.name,
    })) || []; */

/*   const employeeByDeptOrganization =
    hrmDashboardData.organizations?.map((org) => ({
      id: org.id,
      total_employee: Number(org.employees_count || 0),
      organization: org.name,
      // image: "https://via.placeholder.com/100",
    })) || []; */

  // Transform departments data to match the structure expected by ByOrgDept
/*   const employeeByDepartment =
    hrmDashboardData.departments?.map((dept) => ({
      id: dept.id,
      total_employee: Number(dept.employees_count || 0),
      department: dept.name,
      // image: "https://via.placeholder.com/100",
    })) || []; */

  // const employeeTodayLeaveData = hrmDashboardData?.leaves_today?.map((leave) => ({
  //   id: leave.id,
  //   employee_name: `${leave.employee.first_name} ${leave.employee.last_name}`,
  //   department: leave.employee.department.name,
  //   designation: leave.employee.designation.name,
  // })) || [];

/*   const employeeTodayLeaveData = Array.isArray(hrmDashboardData?.leaves_today)
    ? hrmDashboardData.leaves_today.map((leave) => ({
        id: leave.id,
        employee_name: `${leave.employee.first_name} ${leave.employee.last_name}`,
        department: leave.employee.department.name,
        designation: leave.employee.designation.name,
      }))
    : []; */

  // const organizationsPicChartData = hrmDashboardData?.organizations || [];

  // const employee_month = hrmDashboardData?.employee_month || [];

  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 space-y-4">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-xl tracking-tight">Billing Dashboard</h2>
          <div className="flex items-center space-x-2"></div>
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsContent value="overview" className="space-y-4">
            <Card className="p-3">
              <div className="flex justify-between mb-2">
                <h3 className="text-md "></h3>
              </div>
              <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-6">
                <Card className="p-4">
                  <div className="flex items-center">
                    <div className="p-2 rounded-md bg-blue-200">
                      <CircleFadingPlusIcon size={16} />
                    </div>
                    <div className="ml-3 text-lg font-bold">
                      <span>3234 BDT</span>
                    </div>
                  </div>
                  <h2 className="mt-2 text-sm">Today's Sales</h2>
                </Card>
                <Card className="p-4">
                  <div className="flex items-center">
                    <div className="p-2 rounded-md bg-green-200">
                      <ScrollText size={16} />
                    </div>
                    <div className="ml-3 text-lg font-bold">2323 BDT</div>
                  </div>
                  <h2 className="mt-2 text-sm">Today's Expense</h2>
                </Card>
                <Card className="p-4">
                  <div className="flex items-center">
                    <div className="p-2 rounded-md bg-red-200">
                      <Calculator size={16} />
                    </div>
                    <div className="ml-3 text-lg font-bold">233 BDT</div>
                  </div>
                  <h2 className="mt-2 text-sm">Today's Receivable </h2>
                </Card>
                <Card className="p-4">
                  <div className="flex items-center">
                    <div className="p-2 rounded-md bg-yellow-100">
                      <BarChartIcon size={16} />
                    </div>
                    <div className="ml-3 text-lg font-bold">2333 BDT</div>
                  </div>
                  <h2 className="mt-2 text-sm">Today's Payable </h2>
                </Card>
                <Card className="p-4">
                  <div className="flex items-center">
                    <div className="p-2 rounded-md bg-blue-200">
                      <Fan size={16} />
                    </div>
                    <div className="ml-3 text-lg font-bold">2333 BDT</div>
                  </div>
                  <h2 className="mt-2 text-sm">Cash Balance </h2>
                </Card>
                <Card className="p-4">
                  <div className="flex items-center">
                    <div className="p-2 rounded-md bg-pink-200">
                      <LandmarkIcon size={16} />
                    </div>
                    <div className="ml-3 text-lg font-bold">2333 BDT</div>
                  </div>
                  <h2 className="mt-2 text-sm">Bank Balance </h2>
                </Card>
              </div>
            </Card>
            <div className="grid grid-cols-3 gap-3">
              <div className="pb-3">
                {/* <TotalEmployeeChart title="Total of Customers in last 30 days" employee_month={employee_month} /> */}
               {
                  billingDashboardData?.top_five_customers &&  <TheLineGraph data={billingDashboardData.top_five_customers} title="Sales of Customer in Last 30 days" />
               }

                <div className="mt-3">
                  
            <TheBarChart title="Sales Analysis" data={billingDashboardData?.monthly_sales} />
          
                  
                </div>
              </div>
              <div className="col-span-2">
                <div className="grid grid-cols-2 gap-x-3">
                <div>
                {
                  billingDashboardData?.top_five_sales && <TheLineGraph2 title="Sales Item in last 30 days" data= {billingDashboardData?.top_five_sales} />
                }
                </div>
                <div>
                {
                  billingDashboardData?.accounts_assets && <ThePieChartDonut title="Asset Analysis" data={billingDashboardData?.accounts_assets} />
                }
                </div>
                <div className="col-span-2 mt-3">
                  {
                    billingDashboardData?.monthly_profit_loss && <TheAreaChart data={billingDashboardData?.monthly_profit_loss} title="Profit Loss"/>
                  }
                </div>
                </div>

                
              </div>
              <div>
                

                <div className="mt-3"></div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default BillingDashboard;
