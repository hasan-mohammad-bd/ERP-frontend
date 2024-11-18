import { Heading } from "@/components/common/heading";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { DataTable } from "@/components/ui/data-table/data-table";
import { PaginationState } from "@tanstack/react-table";
import { ErrorResponse, PaginationInfo } from "@/types";
import { contactPersonColumn } from "./components/column";
import ListSkeleton from "@/components/common/ListSkeleton";
import FileUpload from "@/components/common/file-uploader";
import {
  useCreateAttachmentMutation,
  useGetAttachmentsQuery,
} from "@/store/services/billing/api/attachment";
import { Button } from "@/components/ui/button";
import handleErrors from "@/lib/handle-errors";
import { toast } from "sonner";

interface AttachmentProps {
  customer_id: number;
}

export type AttachmentFormValues = {
  files: File[];
  contact_id: number;
};

const CustomerAttachment = ({ customer_id }: AttachmentProps) => {
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [uploadedFiles, setUploadedFiles] = React.useState<File[]>([]);
  console.log(uploadedFiles);

  const { data, isLoading, refetch } = useGetAttachmentsQuery(
    `contact_id=${customer_id}&per_page=${pagination.pageSize}&page=${
      pagination.pageIndex + 1
    }`
  );

  const [createAttachment, { isLoading: isCreateLoading }] =
    useCreateAttachmentMutation();

  const contactPersonsData = data?.data || [];
  const paginationInfo: PaginationInfo | undefined = data?.meta;

  // Handle save button click
  const handleSave = async () => {
    if (!uploadedFiles.length) {
      toast.error("Please upload at least one file.");
      return;
    }

    try {
      const formData = new FormData();
      uploadedFiles.forEach((file) => formData.append("files[]", file));
      formData.append("contact_id", customer_id.toString());

      await createAttachment(formData).unwrap();
      toast.success("Files uploaded successfully!");
      setUploadedFiles([]);
    } catch (error) {
      console.error("Error uploading files:", error);
      handleErrors(error as ErrorResponse);
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between pt-4">
        <Heading
          title="Attachments"
          description="Manage all items for you business"
        />
      </div>
      <Separator />
      {isLoading && <ListSkeleton />}
      <div>
        <DataTable
          columns={contactPersonColumn}
          data={contactPersonsData}
          paginationInfo={paginationInfo}
          pagination={pagination}
          setPagination={setPagination}
        />
      </div>{" "}
      <div className="w-full mt-3">
        <div className="space-y-2">
          <p>Add Attachments</p>
          <FileUpload
            setFilesToUpload={setUploadedFiles}
            filesToUpload={uploadedFiles}
            onDeleteSuccess={() => refetch()}
          />
        </div>

        <div className="flex flex-row-reverse items-center pt-5">
          <Button
            variant="default"
            className="w-fit ml-2"
            onClick={handleSave}
            disabled={isCreateLoading}
          >
            {isCreateLoading ? "Saving..." : "Save"}
          </Button>
          <Button
            variant="primary"
            type="button"
            className="w-fit"
            onClick={() => setUploadedFiles([])}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CustomerAttachment;
