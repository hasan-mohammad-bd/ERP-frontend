import React, { useState } from "react";
import { Loading } from "@/components/common/loading";
import { Heading } from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { DataTable } from "@/components/ui/data-table/data-table";
import { sectionColumns } from "./components/columns";
import { Modal } from "@/components/common/modal";

import { useGetSectionsQuery } from "@/store/services/hrm/api/section";
import { AddSectionForm } from "./components/add-section-form";
import { PaginationState } from "@tanstack/react-table";
import { PaginationInfo } from "@/types";
import RoleAccess from "@/lib/access-control/role-access";

const initialPaginationState = {
  pageIndex: 0,
  pageSize: 10,
};

const Section = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pagination, setPagination] = React.useState<PaginationState>(
    initialPaginationState
  );
  const [searchTerm, setSearchTerm] = useState<string>("");

  const { data, isLoading } = useGetSectionsQuery(
    `per_page=${pagination.pageSize}&page=${
      pagination.pageIndex + 1
    }&text=${searchTerm}`
  );

  const sections = data?.data || [];
  const paginationInfo: PaginationInfo | undefined = data?.meta;

  // console.log(departments);
  if (isLoading) return <Loading />;

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <Heading
              title="Sections"
              description="Manage sections for you business"
            />
            <RoleAccess roles={["sections.create"]}>
              <Button onClick={() => setIsOpen(true)} size={"sm"}>
                <Plus className="mr-2 h-4 w-4" /> Add Section
              </Button>
            </RoleAccess>
          </div>
          <Separator />
          {sections && (
            <div>
              <DataTable
                columns={sectionColumns}
                data={sections}
                paginationInfo={paginationInfo}
                pagination={pagination}
                setPagination={setPagination}
                onChangeSearch={(value) => {
                  setPagination(initialPaginationState);
                  setSearchTerm(value);
                }}
              />
            </div>
          )}
        </div>
      </div>
      {isOpen && (
        <Modal
          title="Add Section"
          isOpen={isOpen}
          toggleModal={() => setIsOpen(false)}
        >
          <AddSectionForm modalClose={() => setIsOpen(false)} />
        </Modal>
      )}
    </>
  );
};

export default Section;
