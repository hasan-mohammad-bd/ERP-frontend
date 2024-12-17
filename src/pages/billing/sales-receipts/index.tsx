// import React from "react";
// import { Loading } from "@/components/common/loading";
import { Heading } from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { DataTable } from "@/components/ui/data-table/data-table";

// import { PaginationState } from "@tanstack/react-table";

import { useNavigate } from "react-router-dom";
import { salesReceiptColumns } from "./components/columns";


const data = [
  {
    receiptDate: "2024-10-01",
    salesReceiptNumber: "SR-2024-001",
    reference: "REF-1001",
    customerName: "Customer A",
    paymentMode: "Credit Card",
    status: "Paid",
    amount: 1000.00,
    createdBy: "Admin"
  },
  {
    receiptDate: "2024-10-02",
    salesReceiptNumber: "SR-2024-002",
    reference: "REF-1002",
    customerName: "Customer B",
    paymentMode: "Bank Transfer",
    status: "Unpaid",
    amount: 2500.00,
    createdBy: "Admin"
  },
  {
    receiptDate: "2024-10-03",
    salesReceiptNumber: "SR-2024-003",
    reference: "REF-1003",
    customerName: "Customer C",
    paymentMode: "Cash",
    status: "Partially Paid",
    amount: 4000.00,
    createdBy: "Admin"
  },
  {
    receiptDate: "2024-10-04",
    salesReceiptNumber: "SR-2024-004",
    reference: "REF-1004",
    customerName: "Customer D",
    paymentMode: "Credit Card",
    status: "Paid",
    amount: 500.00,
    createdBy: "Admin"
  }
];



const SalesReceipt = () => {
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
              title="Sales Receipts"
              description="Manage your sub accounts for you business"
            />
            <Button
              onClick={() => navigate("/billing/sales-receipts/add")}
              size={"sm"}
            >
              <Plus className="mr-2 h-4 w-4" /> Add Sales Receipt
            </Button>
          </div>
          <Separator />
          {data && (
            <div>
              <DataTable
                columns={salesReceiptColumns}
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

export default SalesReceipt;
