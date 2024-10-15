import { useState } from "react";
import { Heading } from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { Modal } from "@/components/common/modal";
import { SubCategoryColumn } from "@/lib/validators/billing/category";
import { AddClassCategoryForm } from "./components/add-class-category-form";

const ClassCategory = () => {
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

  const [selectedSubCategory, setSelectedSubCategory] = useState<
    SubCategoryColumn | undefined
  >(undefined);

  const [selectedCategory, setSelectedCategory] = useState<
    SubCategoryColumn | undefined
  >(undefined);

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <Heading
              title="Class Category"
              description="Manage job apply for you business"
            />
            <Button onClick={() => setIsOpen(true)} size={"sm"}>
              <Plus className="mr-2 h-4 w-4" /> Add Class Category
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
          title="Add Subcategory"
          isOpen={isOpen}
          toggleModal={() => setIsOpen(false)}
          className="w-[480px]"
        >
          <AddClassCategoryForm
            modalClose={() => setIsOpen(false)}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedSubCategory={selectedSubCategory}
            setSelectedSubCategory={setSelectedSubCategory}
          />
        </Modal>
      )}
    </>
  );
};

export default ClassCategory;
