import React, { useState } from "react";
import { Loading } from "@/components/common/loading";
import { Heading } from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { DataTable } from "@/components/ui/data-table/data-table";
import { Modal } from "@/components/common/modal";
import { AddCheckBookForm } from "./components/add-check-book-form";
import { PaginationInfo } from "@/types";
import { PaginationState } from "@tanstack/react-table";
import { subAccountColumns } from "./components/columns";
import { useGetCheckBooksQuery } from "@/store/services/accounts/api/check-books";
import RoleAccess from "@/lib/access-control/role-access";

const CheckBooks = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const { data, isLoading } = useGetCheckBooksQuery(
    `per_page=${pagination.pageSize}&page=${pagination.pageIndex + 1}`
  );
  const checkBooks = data?.data || [];

  console.log("checkBooks", checkBooks);

  const paginationInfo: PaginationInfo | undefined = data?.meta;

  if (isLoading) return <Loading />;

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <Heading
              title="Check Books"
              description="Manage your sub accounts for you business"
            />
            <RoleAccess roles={["check-books.create"]}>
              <Button onClick={() => setIsOpen(true)} size={"sm"}>
                <Plus className="mr-2 h-4 w-4" /> Add Check Book
              </Button>
            </RoleAccess>
          </div>
          <Separator />
          {checkBooks && (
            <div>
              <DataTable
                columns={subAccountColumns}
                data={checkBooks}
                paginationInfo={paginationInfo}
                pagination={pagination}
                setPagination={setPagination}
              />
            </div>
          )}
        </div>
      </div>
      <Modal
        title="Add Check Book"
        isOpen={isOpen}
        toggleModal={() => setIsOpen(false)}
      >
        <AddCheckBookForm modalClose={() => setIsOpen(false)} />
      </Modal>
    </>
  );
};

export default CheckBooks;
