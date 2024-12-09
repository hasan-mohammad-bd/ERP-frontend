import { Heading } from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { DataTable } from "@/components/ui/data-table/data-table";

import { useNavigate } from "react-router-dom";
// import { quotesColumns } from "./components/columns";

import { PaginationState } from "@tanstack/react-table";
import { useState } from "react";
import { PaginationInfo } from "@/types";
import { Loading } from "@/components/common/loading";
import { purchaseOrderColumns } from "./components/columns";
import { useGetPurchaseReturnsQuery } from "@/store/services/billing/api/purchase-return";
import { Modal } from "@/components/common/modal";
import { useGetPurchasesQuery } from "@/store/services/billing/api/purchases";
// import FormSearchSelect from "@/components/ui/form-items/form-search-select";
import SearchSelect from "@/components/common/search-select";

const PurchaseReturn = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [purchaseId, setPurchaseId] = useState<any>(null);
  const navigate = useNavigate();
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  console.log(purchaseId)
  const { data, isLoading } = useGetPurchaseReturnsQuery(
    `per_page=${pagination.pageSize}&page=${pagination.pageIndex + 1}`
  );
  const { data: purchases, isLoading: purchasesLoading } = useGetPurchasesQuery(
    `per_page=${pagination.pageSize}&page=${pagination.pageIndex + 1}`
  );

  const purchaseReturnData = data?.data || [];

  const purchaseData = purchases?.data || [];

  console.log(purchaseReturnData);

  const paginationInfo: PaginationInfo | undefined = data?.meta;

  if (isLoading) return <Loading />;

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <Heading
              title="Purchase Return"
              description="Manage your sub accounts for you business"
            />
            {/*             <Button
              onClick={() => navigate("/billing/purchase-return/add")}
              size={"sm"}
            >
              <Plus className="mr-2 h-4 w-4" /> Add Purchase Return
            </Button> */}
            <Button onClick={() => setIsOpen(true)} size={"sm"}>
              <Plus className="mr-2 h-4 w-4" /> Add Purchaser Return
            </Button>
          </div>
          <Separator />
          {purchaseReturnData && (
            <div>
              <DataTable
                columns={purchaseOrderColumns}
                data={purchaseReturnData}
                paginationInfo={paginationInfo}
                pagination={paginationInfo && pagination}
                setPagination={paginationInfo && setPagination}
              />
            </div>
          )}
        </div>
      </div>
      {isOpen && (
        <Modal
          title="Select Invoice Number"
          isOpen={isOpen}
          toggleModal={() => setIsOpen(false)}
          className="w-[420px]"
        >
          <SearchSelect
            items={purchasesLoading ? [] : purchaseData}
            labelKey="invoice_number"
            valueKey="id"
            value={purchaseId}
            placeholder="Select a purchase"
            onSelect={setPurchaseId}
          />

          <Button
            disabled={!purchaseId}
            onClick={() =>
              navigate(`/billing/purchase-return/add/${purchaseId.id}`)
            }
            size={"sm"}
          >
            <Plus className="mr-2 h-4 w-4" /> Add Purchase Return
          </Button>
        </Modal>
      )}
    </>
  );
};

export default PurchaseReturn;
