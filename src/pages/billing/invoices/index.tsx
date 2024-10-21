// import React from "react";
// import { Loading } from "@/components/common/loading";
import { Heading } from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { DataTable } from "@/components/ui/data-table/data-table";
// import { PaginationInfo } from "@/types";
// import { PaginationState } from "@tanstack/react-table";

import { useNavigate } from "react-router-dom";
import {  invoiceColumns } from "./components/columns";


const data = [
  {
    date: "2024-10-01",
    invoiceNumber: "INV-2024-001",
    orderNumber: "ORD-1001",
    customerName: "Customer A",
    status: "Paid",
    dueDate: "2024-10-05",
    amount: 1000.00,
    balanceDue: 0.00
  },
  {
    date: "2024-10-02",
    invoiceNumber: "INV-2024-002",
    orderNumber: "ORD-1002",
    customerName: "Customer B",
    status: "Unpaid",
    dueDate: "2024-10-10",
    amount: 2500.00,
    balanceDue: 2500.00
  },
  {
    date: "2024-10-03",
    invoiceNumber: "INV-2024-003",
    orderNumber: "ORD-1003",
    customerName: "Customer C",
    status: "Partially Paid",
    dueDate: "2024-10-07",
    amount: 4000.00,
    balanceDue: 1000.00
  },
  {
    date: "2024-10-04",
    invoiceNumber: "INV-2024-004",
    orderNumber: "ORD-1004",
    customerName: "Customer D",
    status: "Paid",
    dueDate: "2024-10-08",
    amount: 500.00,
    balanceDue: 0.00
  }
];


const Invoice = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  // const [pagination, setPagination] = React.useState<PaginationState>({
  //   pageIndex: 0,
  //   pageSize: 10,
  // });
  // const { data, isLoading } = useGetEntriesQuery(
  //   `per_page=${pagination.pageSize}&page=${
  //     pagination.pageIndex + 1
  //   }&type=opening balance`
  // );


  // const openingBalance = data?.data || [];

  // const paginationInfo: PaginationInfo | undefined = data?.meta;
  // if (isLoading) return <Loading />;

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <Heading
              title="Invoices"
              description="Manage your sub accounts for you business"
            />
            <Button
              onClick={() => navigate("/billing/invoices/add")}
              size={"sm"}
            >
              <Plus className="mr-2 h-4 w-4" /> Add Invoice
            </Button>
          </div>
          <Separator />
          {data && (
            <div>
              <DataTable
                columns={invoiceColumns}
                data={data}
                // paginationInfo={paginationInfo}
                // pagination={paginationInfo && pagination}
                // setPagination={paginationInfo && setPagination}
              />
            </div>
          )}
        </div>
      </div>

    </>
  );
};

export default Invoice;
