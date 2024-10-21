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
import { salesReceiptColumns } from "./components/columns";


const data = [
  {
    date: "2024-10-01",
    paymentNo: "INV-12345",
    referenceNumber: "REF-1",
    customerName: "Supplier A",
    invoiceNo: "INV-12345",
    mode: "Delivered",
    amount: "5000.00",
    unusedAmount: "500.00"
  },
  {
    date: "2024-10-03",
    paymentNo: "INV-12346",
    referenceNumber: "REF-2",
    customerName: "Supplier B",
    invoiceNo: "INV-12346",
    mode: "Pending",
    amount: "7500.00",
    unusedAmount: "750.00"
  },
  {
    date: "2024-10-06",
    paymentNo: "INV-12347",
    referenceNumber: "REF-3",
    customerName: "Supplier C",
    invoiceNo: "INV-12347",
    mode: "Delivered",
    amount: "3200.00",
    unusedAmount: "320.00"
  },
  {
    date: "2024-10-09",
    paymentNo: "INV-12348",
    referenceNumber: "REF-4",
    customerName: "Supplier D",
    invoiceNo: "INV-12348",
    mode: "Pending",
    amount: "6000.00",
    unusedAmount: "600.00"
  }
]



const PaymentsReceived = () => {
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
              title="Payments Received"
              description="Manage your sub accounts for you business"
            />
            <Button
              onClick={() => navigate("/billing/payments-received/add")}
              size={"sm"}
            >
              <Plus className="mr-2 h-4 w-4" /> Add Payment Received
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

export default PaymentsReceived;
