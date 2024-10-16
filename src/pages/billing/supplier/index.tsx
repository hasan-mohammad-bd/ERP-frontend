import { Heading } from "@/components/common/heading";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { AddSupplierForm } from "./components/add-supplier-form";

const Supplier = () => {
  // const [isOpen, setIsOpen] = useState(false);
  //   const [pagination, setPagination] = React.useState<PaginationState>({
  //     pageIndex: 0,
  //     pageSize: 10,
  //   });

  //   const { data, isLoading } = useGetLeaveTypesQuery(
  //     `per_page=${pagination.pageSize}&page=${pagination.pageIndex + 1}`
  //   );

  //   const leaveType = data?.data || [];
  //   console.log(leaveType)
  //   const paginationInfo: PaginationInfo | undefined = data?.meta;

  //   if (isLoading) return <Loading />;

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <Heading
              title="Supplier"
              description="Manage job apply for you business"
            />
          </div>
          <Separator />
          {/* {leaveType && (
            <div>
              <DataTable
                columns={attendanceColumns}
                data={leaveType}
                paginationInfo={paginationInfo}
                pagination={paginationInfo && pagination}
                setPagination={paginationInfo && setPagination}
              />
            </div>
          )} */}
        </div>
      </div>

      <AddSupplierForm />
    </>
  );
};

export default Supplier;
