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
    customerName: "Supplier A",
    profileName: "Profile 1",
    frequency: "Monthly",
    lastInvoiceDate: "2024-10-01",
    nextInvoiceDate: "2024-11-01",
    status: "Delivered",
    amount: "5000.00"
  },
  {
    customerName: "Supplier B",
    profileName: "Profile 2",
    frequency: "Quarterly",
    lastInvoiceDate: "2024-10-03",
    nextInvoiceDate: "2024-01-03",
    status: "Pending",
    amount: "7500.00"
  },
  {
    customerName: "Supplier C",
    profileName: "Profile 3",
    frequency: "Annually",
    lastInvoiceDate: "2024-10-06",
    nextInvoiceDate: "2025-10-06",
    status: "Delivered",
    amount: "3200.00"
  },
  {
    customerName: "Supplier D",
    profileName: "Profile 4",
    frequency: "Monthly",
    lastInvoiceDate: "2024-10-09",
    nextInvoiceDate: "2024-11-09",
    status: "Pending",
    amount: "6000.00"
  }
]



const RecurringInvoice = () => {
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
              title="Recurring Invoice"
              description="Manage your sub accounts for you business"
            />
            <Button
              onClick={() => navigate("/billing/recurring-invoice/add")}
              size={"sm"}
            >
              <Plus className="mr-2 h-4 w-4" /> Add Recurring Invoice
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

export default RecurringInvoice;
