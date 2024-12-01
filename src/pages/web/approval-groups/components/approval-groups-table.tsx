import { AlertModal } from "@/components/common/alert-modal";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ApprovalGroupRow } from "@/lib/validators/web/approval-group";
import { useRemoveApprovalGroupMutation } from "@/store/services/erp-main/api/approval-groups";
import { Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface Props {
  tableData?: ApprovalGroupRow[];
}
const ApprovalGroupsTable = ({ tableData }: Props) => {
  const [alertModalOpen, setAlertModalOpen] = useState(false);
  const [deleteOrganization, { isLoading: deleteLoading }] =
    useRemoveApprovalGroupMutation();

  const handleDepartmentDelete = async (id: number) => {
    try {
      await deleteOrganization(id);
      toast.success("Approval Group deleted successfully");
      setAlertModalOpen(false);
    } catch (error) {
      console.log(error);
    }
  };
  const navigate = useNavigate();
  // console.log(tableData);
  return (
    <Card>
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-200">
            <TableHead className="w-[200px]">Approval Group Name</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Level</TableHead>
            <TableHead>User Name</TableHead>
            {/* <TableHead className="">Admin Image</TableHead> */}
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableData?.map((group) =>
            group.levels.map((level, levelIndex) =>
              level.admins.map((admin, adminIndex) => (
                <TableRow key={`${group.id}-${level.level}-${admin.id}`}>
                  {/* Group Name and Location cells with rowspan */}
                  {levelIndex === 0 && adminIndex === 0 && (
                    <>
                      <TableCell
                        rowSpan={group.levels.reduce(
                          (sum, lvl) => sum + lvl.admins.length,
                          0
                        )}
                        className="font-medium border border-gray-200"
                      >
                        {group.name}
                      </TableCell>
                      <TableCell
                        className="font-medium border border-gray-200"
                        rowSpan={group.levels.reduce(
                          (sum, lvl) => sum + lvl.admins.length,
                          0
                        )}
                      >
                        {group?.location?.name || "Not specified"}
                      </TableCell>
                    </>
                  )}
                  {/* Level cell with rowspan */}
                  {adminIndex === 0 && (
                    <TableCell
                      className="font-medium border border-gray-200"
                      rowSpan={level.admins.length}
                    >
                      Level {level.level}
                    </TableCell>
                  )}
                  {/* Admin name and image */}
                  <TableCell className="border border-gray-200">
                    {admin.name || "Not specified"}
                  </TableCell>
                  {/*                   <TableCell className="border border-gray-200">
                    <img src={admin.image} alt="Admin" width="50" height="50" />
                  </TableCell> */}
                  {/* action column */}
                  {levelIndex === 0 && adminIndex === 0 && (
                    <>
                      <TableCell
                        rowSpan={group.levels.reduce(
                          (sum, lvl) => sum + lvl.admins.length,
                          0
                        )}
                        className="font-medium text-center border border-gray-200"
                      >
                        <Button
                          variant="ghost"
                          size="icon"
                          className="hover:bg-secondary"
                          // onClick={() => setUpdateModalOpen(true)}
                          onClick={() =>
                            navigate(`/web/approval-group/edit/${group.id}`)
                          }

                          // onClick={() => toggleModal()}
                        >
                          <Pencil className="h-4 w-4 text-foreground" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="hover:bg-secondary"
                          onClick={() => {
                            setAlertModalOpen(true);
                          }}
                        >
                          <Trash2 className="h-4 w-4 text-foreground" />
                        </Button>
                        <AlertModal
                          title="Are you sure?"
                          description="This action cannot be undone."
                          name={group.name}
                          isOpen={alertModalOpen}
                          onClose={() => setAlertModalOpen(false)}
                          onConfirm={() =>
                            handleDepartmentDelete(group?.id as number)
                          }
                          loading={deleteLoading}
                        />
                      </TableCell>
                    </>
                  )}
                </TableRow>
              ))
            )
          )}
        </TableBody>
      </Table>
    </Card>
  );
};

export default ApprovalGroupsTable;
