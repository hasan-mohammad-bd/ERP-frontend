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
import { purchaseOrderColumns } from "./components/columns";
import { useGetPurchaseOrdersQuery } from "@/store/services/billing/api/purchase-order";
import React from "react";
import { PaginationState } from "@tanstack/react-table";
import { PaginationInfo } from "@/types";


/* const data = [
  {
    sl: 1,
    date: "2024-10-01",
    deliveryDate: "2024-10-05",
    poInvoiceNo: "INV-12345",
    businessBranch: "Main Branch",
    suppliers: "Supplier A",
    amount: 5000.00,
    action: "Delivered"
  },
  {
    sl: 2,
    date: "2024-10-03",
    deliveryDate: "2024-10-08",
    poInvoiceNo: "INV-12346",
    businessBranch: "Branch B",
    suppliers: "Supplier B",
    amount: 7500.00,
    action: "Pending"
  },
  {
    sl: 3,
    date: "2024-10-06",
    deliveryDate: "2024-10-10",
    poInvoiceNo: "INV-12347",
    businessBranch: "Main Branch",
    suppliers: "Supplier C",
    amount: 3200.00,
    action: "Delivered"
  },
  {
    sl: 4,
    date: "2024-10-09",
    deliveryDate: "2024-10-13",
    poInvoiceNo: "INV-12348",
    businessBranch: "Branch C",
    suppliers: "Supplier D",
    amount: 6000.00,
    action: "Pending"
  }
]; */


const PurchaseOrder = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const { data } = useGetPurchaseOrdersQuery(
    `per_page=${pagination.pageSize}&page=${pagination.pageIndex + 1}`
  );

  const fetchedData = data?.data || [];

  const paginationInfo: PaginationInfo | undefined = data?.meta;
  console.log("fetchedData", fetchedData);

  // const paginationInfo: PaginationInfo | undefined = data?.meta;
  // if (isLoading) return <Loading />;

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <Heading
              title="Purchase Orders"
              description="Manage your sub accounts for you business"
            />
            <Button
              onClick={() => navigate("/billing/purchase-orders/add")}
              size={"sm"}
            >
              <Plus className="mr-2 h-4 w-4" /> Add Purchase Order
            </Button>
          </div>
          <Separator />
          {data && (
            <div>
              <DataTable
                columns={purchaseOrderColumns}
                data={fetchedData}
                paginationInfo={paginationInfo}
                pagination={paginationInfo && pagination}
                setPagination={paginationInfo && setPagination}
              />
            </div>
          )}
        </div>
      </div>

    </>
  );
};

export default PurchaseOrder;
