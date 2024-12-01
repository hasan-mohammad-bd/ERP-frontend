import { Loading } from "@/components/common/loading";

import { Separator } from "@radix-ui/react-dropdown-menu";
import { PaginationInfo } from "@/types";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Paginator } from "@/components/common/paginator";
import { useGetApprovalGroupsQuery } from "@/store/services/erp-main/api/approval-groups";
import ApprovalGroupsTable from "./components/approval-groups-table";
import { Heading } from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ApprovalGroup = () => {
  const [page, setPage] = useState(1); // Default current page
  const [pageSize, setPageSize] = useState(10); // Number of items per page
  const navigate = useNavigate();

  const { data, isLoading } = useGetApprovalGroupsQuery(
    `per_page=${pageSize}&page=${page}`
  );

  const fetchedData = data?.data || [];

  // console.log("fetchedData", fetchedData);

  const paginationInfo: PaginationInfo | undefined = data?.meta;

  // console.log(departments);
  if (isLoading) return <Loading />;

  return (
    <>
      <Card className="p-5 mb-3">
        <div className="flex-1 space-y-4 my-4">
          <div className="flex items-center justify-between mx-4">
            <Heading
              title="Approval Groups"
              description="Manage your sub accounts for you business"
            />
            <Button
              onClick={() => navigate("/web/approval-group/add")}
              size={"sm"}
            >
              <Plus className="mr-2 h-4 w-4" /> Add Approval Group
            </Button>
          </div>
        </div>
        <div className="flex-1 space-y-4 w-full mx-auto">
          <Separator />

          {fetchedData ? <ApprovalGroupsTable tableData={fetchedData} /> : null}
        </div>

        {paginationInfo && (
          <Paginator
            className="px-4 pb-4 mt-4"
            meta={paginationInfo} // Pagination information
            dataCount={fetchedData.length} // Total number of data is shown in the paginator
            onPageChange={setPage} // Function to handle page change event
            onPageSizeChange={setPageSize} // Function to handle page size change event
          />
        )}
      </Card>
    </>
  );
};

export default ApprovalGroup;
