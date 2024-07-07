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
import { useGetOpeningBalancesQuery } from "@/store/services/accounts/api/opening-balance";

const OpeningBalance = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const { data, isLoading } = useGetOpeningBalancesQuery(
    `per_page=${pagination.pageSize}&page=${
      pagination.pageIndex + 1
    }`
  );


  const financialYear = data?.data || [];

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
              <Plus className="mr-2 h-4 w-4" /> Add Journal Entry
            </Button>
          </div>
          <Separator />
          {financialYear && (
            <div>
              <DataTable
                columns={subAccountColumns}
                data={financialYear}
                paginationInfo={paginationInfo}
                pagination={paginationInfo && pagination}
                setPagination={paginationInfo && setPagination}
              />
            </div>
          )}
        </div>
      </div>
{/*       <Modal
        title="Add Journal Entry"
        isOpen={isOpen}
        toggleModal={() => setIsOpen(false)}
        className="max-w-5xl h-[87vh] "
      >
        <AddJournalForm modalClose={() => setIsOpen(false)} />
      </Modal> */}
    </>
  );
};

export default OpeningBalance;
