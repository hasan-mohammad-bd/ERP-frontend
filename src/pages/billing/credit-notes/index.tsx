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
    creditNote: "CN-123",
    referenceNumber: "REF-1",
    customerName: "Supplier A",
    invoiceNo: "INV-12345",
    status: "Delivered",
    amount: "5000.00",
    balance: "500.00",
  },
  {
    date: "2024-10-03",
    creditNote: "CN-124",
    referenceNumber: "REF-2",
    customerName: "Supplier B",
    invoiceNo: "INV-12346",
    status: "Pending",
    amount: "7500.00",
    balance: "750.00",
  },
  {
    date: "2024-10-06",
    creditNote: "CN-125",
    referenceNumber: "REF-3",
    customerName: "Supplier C",
    invoiceNo: "INV-12347",
    status: "Delivered",
    amount: "3200.00",
    balance: "320.00",
  },
  {
    date: "2024-10-09",
    creditNote: "CN-126",
    referenceNumber: "REF-4",
    customerName: "Supplier D",
    invoiceNo: "INV-12348",
    status: "Pending",
    amount: "6000.00",
    balance: "600.00",
  }
];



const CreditNotes = () => {
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
              title="Credit Notes"
              description="Manage your credit notes for you business"
            />
            <Button
              onClick={() => navigate("/billing/credit-notes/add")}
              size={"sm"}
            >
              <Plus className="mr-2 h-4 w-4" /> Add Credit Note
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

export default CreditNotes;
