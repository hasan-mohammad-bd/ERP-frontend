import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table/data-table";
import { PaginationInfo } from "@/types";
import { OnChangeFn, PaginationState } from "@tanstack/react-table";

interface DataTableProps {
  columns?: any;
  data: any;
  paginationInfo: PaginationInfo | undefined 
  pagination: PaginationState;
  setPagination: OnChangeFn<PaginationState>;
  title: string;
  description: string;
}

const DataTableComponent = ({columns, data, paginationInfo, pagination, setPagination, title, description}: DataTableProps) => {
  return (
    <div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardDescription>
          {data && (
            <div>
              <DataTable
                columns={columns}
                data={data}
                paginationInfo={paginationInfo}
                pagination={pagination}
                setPagination={setPagination}
              />
            </div>
          )}
        </CardDescription>
      </CardHeader>
    </div>
  );
};

export default DataTableComponent;
