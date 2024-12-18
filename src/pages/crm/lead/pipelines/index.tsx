import { Heading } from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { DataTable } from "@/components/ui/data-table/data-table";
import { useNavigate } from "react-router-dom";
import { pipelineColumns } from "./components/columns";
import { PaginationState } from "@tanstack/react-table";
import { PaginationInfo } from "@/types";
import { Loading } from "@/components/common/loading";
import { useState } from "react";
import { useGetPipelinesQuery } from "@/store/services/crm/api/pipelines";

const Pipelines = () => {
  const navigate = useNavigate();
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const { data, isLoading } = useGetPipelinesQuery(
    `per_page=${pagination.pageSize}&page=${pagination.pageIndex + 1}`
  );

  const pipelines = data?.data || [];

  const paginationInfo: PaginationInfo | undefined = data?.meta;

  if (isLoading) return <Loading />;

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <Heading
              title="Pipeline List"
              description="Manage your sub accounts for you business"
            />
            <Button
              onClick={() => navigate("/crm/lead/pipelines/add")}
              size={"sm"}
            >
              <Plus className="mr-2 h-4 w-4" /> Add Pipeline
            </Button>
          </div>
          <Separator />
          {data && (
            <div>
              <DataTable
                data={pipelines}
                columns={pipelineColumns}
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

export default Pipelines;
