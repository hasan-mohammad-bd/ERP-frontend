// import React from "react";
import { Heading } from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { DataTable } from "@/components/ui/data-table/data-table";
// import { useGetEmployeesQuery } from "@/store/services/hrm/api/employee-list";

// import { PaginationState } from "@tanstack/react-table";
// import { PaginationInfo } from "@/types";
import { Separator } from "@/components/ui/separator";
// import ListSkeleton from "@/components/common/ListSkeleton";
import { useNavigate } from "react-router-dom";
import { customerColumn } from "./components/column";
// import { SupplierColumns } from "./components/column";

const Customers = () => {
  const navigate = useNavigate();
  // const [pagination, setPagination] = React.useState<PaginationState>({
  //   pageIndex: 0,
  //   pageSize: 10,
  // });

  // const { data, isLoading } = useGetEmployeesQuery(
  //   `per_page=${pagination.pageSize}&page=${pagination.pageIndex + 1}`
  // );

  const data = [
    {
      name: "Customer A",
      companyName: "Company A",
      email: "customerA@example.com",
      workPhone: "123-456-7890",
      receivablesBCY: "5000.00"
    },
    {
      name: "Customer B",
      companyName: "Company B",
      email: "customerB@example.com",
      workPhone: "234-567-8901",
      receivablesBCY: "7500.00"
    },
    {
      name: "Customer C",
      companyName: "Company C",
      email: "customerC@example.com",
      workPhone: "345-678-9012",
      receivablesBCY: "3200.00"
    },
    {
      name: "Customer D",
      companyName: "Company D",
      email: "customerD@example.com",
      workPhone: "456-789-0123",
      receivablesBCY: "6000.00"
    }
  ];
  

  const employees = data

  // const paginationInfo: PaginationInfo | undefined = data?.meta;

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <Heading
              title="Customer List"
              description="Manage all items for you business"
            />
            <Button
              onClick={() => navigate("/billing/customers/add")}
              size={"sm"}
            >
              <Plus className="mr-2 h-4 w-4" /> Add customer
            </Button>
          </div>
          <Separator />
          {/* {isLoading && <ListSkeleton />} */}
          {data && (
            <div>
              <DataTable
                columns={customerColumn}
                data={employees}
                // paginationInfo={paginationInfo}
                // pagination={pagination}
                // setPagination={setPagination}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Customers;
