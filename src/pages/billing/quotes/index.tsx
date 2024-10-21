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
import { quotesColumns } from "./components/columns";


const data = [
  {
    date: "2024-10-01",
    quoteNumber: "Q-12345",
    referenceNumber: "REF-001",
    customerName: "Customer A",
    status: "Confirmed",
    amount: 5000.00
  },
  {
    date: "2024-10-03",
    quoteNumber: "Q-12346",
    referenceNumber: "REF-002",
    customerName: "Customer B",
    status: "Pending",
    amount: 7500.00
  },
  {
    date: "2024-10-06",
    quoteNumber: "Q-12347",
    referenceNumber: "REF-003",
    customerName: "Customer C",
    status: "Confirmed",
    amount: 3200.00
  },
  {
    date: "2024-10-09",
    quoteNumber: "Q-12348",
    referenceNumber: "REF-004",
    customerName: "Customer D",
    status: "Pending",
    amount: 6000.00
  }
];


const Quotes = () => {
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
              title="Quotes"
              description="Manage your sub accounts for you business"
            />
            <Button
              onClick={() => navigate("/billing/quotes/add")}
              size={"sm"}
            >
              <Plus className="mr-2 h-4 w-4" /> Add Quotes
            </Button>
          </div>
          <Separator />
          {data && (
            <div>
              <DataTable
                columns={quotesColumns}
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

export default Quotes;
