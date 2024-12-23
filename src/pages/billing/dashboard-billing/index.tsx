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

const BillingDashboard = () => {
  const { data } = useFetchReportsListQuery();

  const billingDashboardData = data?.data as DashboardReports;

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
                      <span>
                        {billingDashboardData?.today_credit_amount} BDT
                      </span>
                    </div>
                  </div>
                  <h2 className="mt-2 text-sm">Today's Sales</h2>
                </Card>
                <Card className="p-4">
                  <div className="flex items-center">
                    <div className="p-2 rounded-md bg-green-200">
                      <ScrollText size={16} />
                    </div>
                    <div className="ml-3 text-lg font-bold">
                      {billingDashboardData?.todays_expense} BDT
                    </div>
                  </div>
                  <h2 className="mt-2 text-sm">Today's Expense</h2>
                </Card>
                <Card className="p-4">
                  <div className="flex items-center">
                    <div className="p-2 rounded-md bg-red-200">
                      <Calculator size={16} />
                    </div>
                    <div className="ml-3 text-lg font-bold">
                      {billingDashboardData?.total_receivable} BDT
                    </div>
                  </div>
                  <h2 className="mt-2 text-sm">Total Receivable </h2>
                </Card>
                <Card className="p-4">
                  <div className="flex items-center">
                    <div className="p-2 rounded-md bg-yellow-100">
                      <BarChartIcon size={16} />
                    </div>
                    <div className="ml-3 text-lg font-bold">
                      {billingDashboardData?.total_payable} BDT
                    </div>
                  </div>
                  <h2 className="mt-2 text-sm">Today's Payable </h2>
                </Card>
                <Card className="p-4">
                  <div className="flex items-center">
                    <div className="p-2 rounded-md bg-blue-200">
                      <Fan size={16} />
                    </div>
                    <div className="ml-3 text-lg font-bold">
                      {billingDashboardData?.total_cash?.balance} BDT
                    </div>
                  </div>
                  <h2 className="mt-2 text-sm">Cash Balance </h2>
                </Card>
                <Card className="p-4">
                  <div className="flex items-center">
                    <div className="p-2 rounded-md bg-pink-200">
                      <LandmarkIcon size={16} />
                    </div>
                    <div className="ml-3 text-lg font-bold">
                      {billingDashboardData?.total_bank_balance} BDT
                    </div>
                  </div>
                  <h2 className="mt-2 text-sm">Bank Balance </h2>
                </Card>
              </div>
            </Card>
            <div className="grid grid-cols-3 gap-3">
              <div className="pb-3">
                {/* <TotalEmployeeChart title="Total of Customers in last 30 days" employee_month={employee_month} /> */}
                {billingDashboardData?.top_five_customers && (
                  <TheLineGraph
                    data={billingDashboardData.top_five_customers}
                    title="Sales of Customer in Last 30 days"
                  />
                )}

                <div className="mt-3">
                  <TheBarChart
                    title="Sales Analysis"
                    data={billingDashboardData?.monthly_sales}
                  />
                </div>
              </div>
              <div className="col-span-2">
                <div className="grid grid-cols-2 gap-x-3">
                  <div>
                    {billingDashboardData?.top_five_sales && (
                      <TheLineGraph2
                        title="Sales Item in last 30 days"
                        data={billingDashboardData?.top_five_sales}
                      />
                    )}
                  </div>
                  <div>
                    {billingDashboardData?.accounts_assets && (
                      <ThePieChartDonut
                        title="Asset Analysis"
                        data={billingDashboardData?.accounts_assets}
                      />
                    )}
                  </div>
                  <div className="col-span-2 mt-3">
                    {billingDashboardData?.monthly_profit_loss && (
                      <TheAreaChart
                        data={billingDashboardData?.monthly_profit_loss}
                        title="Profit Loss"
                      />
                    )}
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
