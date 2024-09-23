import { useState } from "react";
// import { Loading } from "@/components/common/loading";
import { Heading } from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { DataTable } from "@/components/ui/data-table/data-table";
import { Modal } from "@/components/common/modal";
// import { useGetJobAppliesQuery } from "@/store/services/hrm/api/job-apply";
import { attendanceColumns } from "./components/columns";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// import { JobApplyColumn } from "@/lib/validators";

// import { PaginationState } from "@tanstack/react-table";
// import { PaginationInfo } from "@/types";
// import { AttendancePolicyForm } from "./components/add-leave-group-form";
import { AddAttendanceForm } from "./components/add-attendance-form";
import {  CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { useGetAttendancePoliciesQuery } from "@/store/services/hrm/api/attendance-policy";
// import { AttendancePolicyRow } from "@/lib/validators/hrm/attendance.vatidator";

// const BULK_ACTIONS = [
//   {
//     label: "Update Status",
//     value: "update-status",
//   },
//   {
//     label: "Delete Selected",
//     value: "delete-selected",
//   },
// ];

const demoData = [
  {
    employee_id: 1,
    employee_name: "John Doe",
    department: "IT",
    branch: "Main Branch",
    date: "2022-01-01",
    day: "Monday",
    out_time: "10:00 AM",
    status: "Present",
  },
  {
    employee_id: 2,
    employee_name: " Harry Potter",
    department: "IT",
    branch: "Main Branch",
    date: "2022-01-01",
    day: "Monday",
    out_time: "10:00 AM",
    status: "Present",
  },
];
export type Tab = "check-in" | "check-out";
const AttendancesList = () => {
  const [tab, setTab] = useState<Tab>("check-in");
  const [isOpen, setIsOpen] = useState(false);
  // const [pagination, setPagination] = React.useState<PaginationState>({
  //   pageIndex: 0,
  //   pageSize: 10,
  // });



  // Set appropriate bulk action type here
  // const [selectedBulkAction, setSelectedBulkAction] = useState<
  //   BulkAction<JobApplyColumn>
  // >({ action: "", payload: [] });

  // const jobApply = data?.data || [];
  // const paginationInfo: PaginationInfo | undefined = data?.meta;

  // console.log(departments);
  // if (isLoading) return <Loading />;

  // console.log(selectedBulkAction); // you can see selected bulk action here

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <Heading
              title="Attendance List"
              description="Manage job apply for you business"
            />
            <Button onClick={() => setIsOpen(true)} size={"sm"}>
              <Plus className="mr-2 h-4 w-4" /> Add Attendance
            </Button>
          </div>
          <Separator />
          {demoData && (
            <div>
              <DataTable
                columns={attendanceColumns}
                data={demoData as any}
                // paginationInfo={paginationInfo}
                // pagination={pagination}
                // setPagination={setPagination}
              />
            </div>
          )}
        </div>
      </div>

      {isOpen && (
        <Modal
          title="Add Attendance List"
          isOpen={isOpen}
          toggleModal={() => setIsOpen(false)}
          className="w-fit"
        >
          <Tabs
            defaultValue={tab}
            onValueChange={(value) => setTab(value as Tab)}
            className="w-[400px] mx-auto"
          >
            <TabsList className="grid w-full grid-cols-2 my-2">
              <TabsTrigger value="check-in">Check In</TabsTrigger>
              <TabsTrigger value="check-out">Check Out</TabsTrigger>
            </TabsList>
            <TabsContent value="check-in">

                <CardHeader>
                  <CardTitle>Check In</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <AddAttendanceForm
                      modalClose={() => setIsOpen(false)}
                      tab={tab}
                    />
                  </div>
                </CardContent>
              
            </TabsContent>
            <TabsContent value="check-out">
            
                <CardHeader>
                  <CardTitle>Check Out</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <AddAttendanceForm
                      modalClose={() => setIsOpen(false)}
                      tab={tab}
                    />
                  </div>
                </CardContent>
             
            </TabsContent>
          </Tabs>
        </Modal>
      )}
    </>
  );
};

export default AttendancesList;
