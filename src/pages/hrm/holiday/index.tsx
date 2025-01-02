import { useState } from "react";
import { Loading } from "@/components/common/loading";
import { Heading } from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { DataTable } from "@/components/ui/data-table/data-table";
import { useGetHolidaysQuery } from "@/store/services/hrm/api/holiday";
import { PaginationState } from "@tanstack/react-table";
import { PaginationInfo } from "@/types";
import { useNavigate } from "react-router-dom";

import { holidayColumns } from "./components/columns";
import { HolidayFormRows } from "@/lib/validators/hrm/holidays";

const initialPaginationState = {
  pageIndex: 0,
  pageSize: 10,
};

const Holiday = () => {
  const navigate = useNavigate();

  const [pagination, setPagination] = useState<PaginationState>(
    initialPaginationState
  );
  const [searchTerm, setSearchTerm] = useState<string>("");

  const { data, isLoading } = useGetHolidaysQuery(
    `per_page=${pagination.pageSize}&page=${
      pagination.pageIndex + 1
    }&text=${searchTerm}`
  );

  // Ensure the correct type assignment
  const holidayData: HolidayFormRows[] =
    data?.data.map((holiday) => ({
      ...holiday,
      id: holiday.id || 0, // Ensure `id` is available, even if it's missing, default to 0
    })) || [];

  const paginationInfo: PaginationInfo | undefined = data?.meta;

  if (isLoading) return <Loading />;

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between mb-4">
            <Heading
              title={holidayData.length ? "Holiday List" : "Add Holiday"}
              description="Manage your holidays"
            />
            <Button size={"sm"} onClick={() => navigate("/hrm/holidays/add")}>
              <Plus className="mr-2 h-4 w-4" /> Add Holiday
            </Button>
          </div>
          <Separator />
          {holidayData.length > 0 && (
            <DataTable
              columns={holidayColumns}
              data={holidayData}
              paginationInfo={paginationInfo}
              pagination={pagination}
              setPagination={setPagination}
              onChangeSearch={(value) => {
                setPagination(initialPaginationState);
                setSearchTerm(value);
              }}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Holiday;
