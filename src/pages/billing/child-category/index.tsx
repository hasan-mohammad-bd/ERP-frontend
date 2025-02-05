import React, { useState } from "react";
import { Heading } from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { Modal } from "@/components/common/modal";
// import { SubCategoryColumn } from "@/lib/validators/billing/category";
import { DataTable } from "@/components/ui/data-table/data-table";
import { PaginationState } from "@tanstack/react-table";
import ListSkeleton from "@/components/common/ListSkeleton";
import { PaginationInfo } from "@/types";
import { useGetCategoryQuery } from "@/store/services/billing/api/category";
import { AddChildCategoryForm } from "./components/add-child-category-form";
import { ChildCategoryColumns } from "./components/column";
import RoleAccess from "@/lib/access-control/role-access";

const ChildCategory = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  // Correct API call to get category data
  const { data, isLoading } = useGetCategoryQuery(
    `type=child&per_page=${pagination.pageSize}&page=${
      pagination.pageIndex + 1
    }`
  );

  const categories = data?.data || []; // Fallback to empty array if no data
  const paginationInfo: PaginationInfo | undefined = data?.meta;

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <Heading
              title="Child Category"
              description="Manage job apply for you business"
            />
            <RoleAccess roles={["categories.create"]}>
              <Button onClick={() => setIsOpen(true)} size={"sm"}>
                <Plus className="mr-2 h-4 w-4" /> Add child Category
              </Button>
            </RoleAccess>
          </div>
          <Separator />
          {isLoading && <ListSkeleton />}
          {categories && !isLoading && (
            <div>
              <DataTable
                columns={ChildCategoryColumns}
                data={categories}
                paginationInfo={paginationInfo}
                pagination={pagination}
                setPagination={setPagination}
              />
            </div>
          )}
        </div>
      </div>

      {isOpen && (
        <Modal
          title="Add Child Category"
          isOpen={isOpen}
          toggleModal={() => setIsOpen(false)}
          className="max-w-2xl"
        >
          <AddChildCategoryForm modalClose={() => setIsOpen(false)} />
        </Modal>
      )}
    </>
  );
};

export default ChildCategory;
