import React from "react";
import { Loading } from "@/components/common/loading";
import { Heading } from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { DataTable } from "@/components/ui/data-table/data-table";



import { useGetHolidaysQuery } from "@/store/services/hrm/api/holiday";
import { holidayColumns } from "./components/columns";
import { PaginationState } from "@tanstack/react-table";
import { PaginationInfo } from "@/types";
import { useNavigate } from "react-router-dom";

const Holiday = () => {

  const navigate = useNavigate();


  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const { data, isLoading } = useGetHolidaysQuery(
    `per_page=${pagination.pageSize}&page=${pagination.pageIndex + 1}`
  );

  const roster = data?.data || [];

  const paginationInfo: PaginationInfo | undefined = data?.meta;

  // console.log(departments);
  if (isLoading) return <Loading />;

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4">

          {/* <div className="flex items-center justify-between">
            <Heading
              title="Holiday"
              description="Manage your holidays for you organization"
            />
            <Button size={"sm"}
              onClick={() => navigate("/hrm/holidays/add")}
            >
              <Plus className="mr-2 h-4 w-4" /> Add Holiday
            </Button>
          </div> */}


<div className="flex items-center justify-between mb-4">

          {/* here roaster will be our previous previous data from backend */}

            <Heading
              title={roster ? "Holiday List" : "Add Holiday"}
              description="Manage your sub accounts for you business"
            />
           <Button size={"sm"}
              onClick={() => navigate("/hrm/holidays/add")}
            >
              <Plus className="mr-2 h-4 w-4" /> Add Holiday
            </Button>
           </div>


          <Separator />
          {roster && (
            <div>
              <DataTable
                columns={holidayColumns}
                data={roster}
                paginationInfo={paginationInfo}
                pagination={pagination}
                setPagination={setPagination}
              />
            </div>
          )}
        </div>
      </div>
      {/* {isOpen && (
        <Modal
          title="Add Holiday"
          isOpen={isOpen}
          toggleModal={() => setIsOpen(false)}
          className="max-w-7xl"
        >
          <AddRosterForm modalClose={() => setIsOpen(false)} />
        </Modal>
      )} */}
    </>
  );
};

export default Holiday;
