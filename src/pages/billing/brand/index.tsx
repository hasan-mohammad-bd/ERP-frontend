import { useState } from "react";
import { Heading } from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { Modal } from "@/components/common/modal";
import { AddBrandForm } from "./components/add-brand-form";

const Brand = () => {
  const [isOpen, setIsOpen] = useState(false);
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
              title="Brand"
              description="Manage job apply for you business"
            />
            <Button onClick={() => setIsOpen(true)} size={"sm"}>
              <Plus className="mr-2 h-4 w-4" /> Add New Brand
            </Button>
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

      {isOpen && (
        <Modal
          title="Add Brand"
          isOpen={isOpen}
          toggleModal={() => setIsOpen(false)}
          className="w-[420px]"
        >
          <AddBrandForm modalClose={() => setIsOpen(false)} />
        </Modal>
      )}
    </>
  );
};

export default Brand;
