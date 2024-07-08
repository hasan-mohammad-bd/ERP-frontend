import React from "react";
import { Loading } from "@/components/common/loading";
import { Heading } from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { DataTable } from "@/components/ui/data-table/data-table";

import { PaginationInfo } from "@/types";
import { PaginationState } from "@tanstack/react-table";

import { subAccountColumns } from "./components/columns";
import { useNavigate } from "react-router-dom";

import { useGetGeneralLedgersQuery } from "@/store/services/accounts/api/general-ledger";

const GeneralLedger = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [startDate , setStartDate] = React.useState<string | null>(new Date().toString())
  const [endDate , setEndDate] = React.useState<string | null>(new Date().toString())
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const { data, isLoading } = useGetGeneralLedgersQuery(`start_date=${startDate}&end_date=${endDate}`);


  const generalLedger = data?.data || [];

console.log(startDate, endDate)

  const paginationInfo: PaginationInfo | undefined = data?.meta;
  if (isLoading) return <Loading />;

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <Heading
              title="Journal Voucher"
              description="Manage your sub accounts for you business"
            />
            <Button
              onClick={() => navigate("/accounts/opening-balance/add")}
              size={"sm"}
            >
              <Plus className="mr-2 h-4 w-4" /> Add Opening Balance
            </Button>
          </div>
          <Separator />
          {generalLedger && (
            <div>
              <DataTable
                columns={subAccountColumns}
                data={generalLedger}
                paginationInfo={paginationInfo}
                pagination={paginationInfo && pagination}
                setPagination={paginationInfo && setPagination}
                setStartDate={setStartDate}
                setEndDate={setEndDate}
                datePicker={true}
              />
            </div>
          )}
        </div>
      </div>

    </>
  );
};

export default GeneralLedger;
