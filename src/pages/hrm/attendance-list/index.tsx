import { useState } from "react";
import { Heading } from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { DataTable } from "@/components/ui/data-table/data-table";
import { Modal } from "@/components/common/modal";
import { attendanceColumns } from "./components/columns";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AddAttendanceForm } from "./components/add-attendance-form";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loading } from "@/components/common/loading";
import { useGetAttendanceListQuery } from "@/store/services/hrm/api/attendance-list";
import { PaginationState } from "@tanstack/react-table";
import { PaginationInfo } from "@/types";
import AttendanceFilter from "./components/attendance-filter";

export type Tab = "check-in" | "check-out";

const initialPaginationState = {
  pageIndex: 0,
  pageSize: 10,
};

const AttendancesList = () => {
  const [tab, setTab] = useState<Tab>("check-in");
  const [isOpen, setIsOpen] = useState(false);

  // Pagination state
  const [pagination, setPagination] = useState<PaginationState>(
    initialPaginationState
  );
  const [filterParams, setFilterParams] = useState("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Fetch attendance data based on selected date and department
  const { data: attendanceData, isLoading: isLoadingAttendance } =
    useGetAttendanceListQuery(
      `per_page=${pagination.pageSize}&page=${
        pagination.pageIndex + 1
      }&text=${searchTerm}&${filterParams}`
    );

  const AttendanceListData = attendanceData?.data || [];
  const paginationInfo: PaginationInfo | undefined = attendanceData?.meta;

  if (isLoadingAttendance) return <Loading />;

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <Heading
              title="Attendance List"
              description="Manage job apply for your business"
            />
            <Button onClick={() => setIsOpen(true)} size={"sm"}>
              <Plus className="mr-2 h-4 w-4" /> Add Attendance
            </Button>
          </div>
          <AttendanceFilter setFilterParams={setFilterParams} />
          <Separator />

          <DataTable
            columns={attendanceColumns}
            data={AttendanceListData}
            paginationInfo={paginationInfo}
            pagination={pagination}
            setPagination={setPagination}
            className={"py-2 px-4"}
            onChangeSearch={(value) => {
              setPagination(initialPaginationState);
              setSearchTerm(value);
            }}
          />
        </div>
      </div>

      {/* Modal for adding attendance */}
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
