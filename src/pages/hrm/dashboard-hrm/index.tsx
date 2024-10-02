import { CardHeader, CardContent, Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
import { Tabs, TabsContent } from "@/components/ui/tabs";

import {
  ArrowRightLeft,
  ChevronDown,
  ChevronUp,
  CircleDollarSign,
  Coins,
  FolderOpenDot,
  PersonStanding,
  ReceiptText,
  UserMinus,
  UserRound,
  UserRoundMinus,
  UserRoundSearch,
  UsersRound,
} from "lucide-react";
import { DatePickerWithRange } from "@/components/common/tool-bar/tool-bar-items/date-range-picker";
import React from "react";
import { format } from "date-fns";
import { Chart } from "./chart";
import Voucher from "./voucher-list";
import { useGetDashboardSummariesQuery } from "@/store/services/accounts/api/general-ledger copy";
import { BarChartComponent } from "./bar-chart";
import { TotalEmployeeChart } from "./total-employee-chart";

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

  const chartData = data?.data || [];

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
                <TotalEmployeeChart/>

                <Card className="mt-3">
                  <CardHeader>
                    <h2 className="text-md ">Sales per month</h2>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <BarChartComponent chartData={chartData} />
                    {/* <Overview /> */}
                  </CardContent>
                </Card>
              </div>
              <div className="">
                <div className="">
                  <Chart chartData={chartData} />
                </div>
                <div className="mt-3">
                  <Voucher />
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default HRMDashboard;
