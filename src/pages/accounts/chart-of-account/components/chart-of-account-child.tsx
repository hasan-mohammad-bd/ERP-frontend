// import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { LedgerGroupRow } from "@/lib/validators/accounts";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Pencil, Trash2 } from "lucide-react";
import { Modal } from "@/components/common/modal";
import { AddLedgerForm } from "./add-ledger-form";
import { AddLedgerGroupForm } from "./add-ledger-group-form";
import { AlertModal } from "@/components/common/alert-modal";
import { useRemoveLedgerAccountMutation } from "@/store/services/accounts/api/ledger-account";
import { toast } from "sonner";
import { useRemoveLedgerGroupMutation } from "@/store/services/accounts/api/ledger-group";
import { ErrorResponse } from "@/types";
import handleErrors from "@/lib/handle-errors";

interface ChartOfAccountItemProps {
  group: LedgerGroupRow;
  coaType: string;
  depth?: number;
}

const ChartOfAccountChild = ({
  group,
  coaType,
  depth = 0,
}: ChartOfAccountItemProps) => {
  const indent = Array(depth)
    .fill("\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0")
    .join(""); // Non-breaking spaces

  // Use null or the id of the item/ledger that needs a modal open
  const [editAccountModalOpen, setEditAccountModalOpen] = useState<
    number | null
  >(null);
  const [editGroupModalOpen, setEditGroupModalOpen] = useState<number | null>(
    null
  );
  const [accountData, setAccountData] = useState<any | null>(null);
  const [groupData, setGroupData] = useState<any | null>(null);
  const [alertModalOpen, setAlertModalOpen] = useState<number | null>(null);
  const [groupAlertModalOpen, setGroupAlertModalOpen] = useState<number | null>(
    null
  );

  const [deleteAccount, { isLoading: deleteLoading }] =
    useRemoveLedgerAccountMutation();
  const [deleteGroup, { isLoading: deleteGroupLoading }] =
    useRemoveLedgerGroupMutation();

  const hanldeAccountDelete = async (id: number) => {
    try {
      await deleteAccount(id).unwrap();
      toast.success("Account deleted successfully");
      setAlertModalOpen(null);
    } catch (error) {
      handleErrors(error as ErrorResponse);
      console.log(error);
    }
  };
  const hanldeGroupDelete = async (id: number) => {
    try {
      await deleteGroup(id).unwrap();
      toast.success("Account deleted successfully");
      setGroupAlertModalOpen(null);
    } catch (error) {
      handleErrors(error as ErrorResponse);
      console.log(error);
    }
  };

  return group.childs_group.map((item) => (
    <React.Fragment key={item.id}>
      <TableRow>
        <TableCell className="py-2.5 col-span-2 w-2/3 font-medium">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <span>
                  {indent}
                  {item.name}
                </span>
              </TooltipTrigger>
              <TooltipContent>
                <div className="flex items-center gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-secondary"
                    onClick={() => {
                      setEditGroupModalOpen(item.id);
                      setGroupData(item);
                    }}
                  >
                    <Pencil className="h-4 w-4 text-foreground" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-secondary"
                    onClick={() => {
                      setGroupAlertModalOpen(item.id);
                      setGroupData(item);
                    }}
                  >
                    <Trash2 className="h-4 w-4 text-foreground" />
                  </Button>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </TableCell>
        <TableCell className="py-2.5">{item.code}</TableCell>
        <TableCell className="py-2.5">Group</TableCell>
      </TableRow>

      {item.childs_group && item.childs_group.length > 0 && (
        <ChartOfAccountChild group={item} coaType={coaType} depth={depth + 1} />
      )}
      {item.ledgers &&
        item.ledgers.length > 0 &&
        item.ledgers.map((ledger) => (
          <TableRow key={ledger.id}>
            <TableCell className="py-0 col-span-2 w-2/3">
              <div className="py-2.5 col-span-2 w-2/3 font-medium">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        className={buttonVariants({
                          variant: "link",
                          size: "sm",
                          className: "text-blue-400 hover:no-underline",
                        })}
                        to={`/accounts/reports/detailed-general-ledger/${ledger.id}`}
                      >
                        {indent}
                        {ledger.name}
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <div className="flex items-center gap-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="hover:bg-secondary"
                          onClick={() => {
                            setEditAccountModalOpen(ledger.id);
                            setAccountData(ledger);
                          }}
                        >
                          <Pencil className="h-4 w-4 text-foreground" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="hover:bg-secondary"
                          onClick={() => {
                            setAlertModalOpen(ledger.id);
                            setAccountData(ledger);
                          }}
                        >
                          <Trash2 className="h-4 w-4 text-foreground" />
                        </Button>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </TableCell>
            <TableCell className="py-2.5">{ledger.code}</TableCell>
            <TableCell className="py-2.5">Account</TableCell>
            <TableCell className="py-2.5">
              {/* Only open modal if editAccountModalOpen matches the ledger ID */}
              {ledger?.id === editAccountModalOpen && (
                <Modal
                  title="Edit Account"
                  isOpen={ledger?.id === editAccountModalOpen}
                  toggleModal={() => setEditAccountModalOpen(null)}
                >
                  <AddLedgerForm
                    rowData={accountData}
                    modalClose={() => setEditAccountModalOpen(null)}
                  />
                </Modal>
              )}
              <AlertModal
                title="Are you sure?"
                description="This action cannot be undone."
                name={accountData?.name}
                isOpen={alertModalOpen === ledger?.id}
                onClose={() => setAlertModalOpen(null)}
                onConfirm={() => hanldeAccountDelete(accountData?.id)}
                loading={deleteLoading}
              />
            </TableCell>
          </TableRow>
        ))}
      {/* {accountData?.id === editAccountModalOpen && (
        <Modal
          title="Edit Account"
          isOpen={accountData?.id === editAccountModalOpen}
          toggleModal={() => setEditAccountModalOpen(null)}
        >
          <AddLedgerForm
            rowData={accountData}
            modalClose={() => setEditAccountModalOpen(null)}
          />
        </Modal>
      )} */}

      {/* Only open modal if editGroupModalOpen matches the group ID */}
      {item?.id === editGroupModalOpen && (
        <Modal
          title="Edit Group"
          isOpen={item?.id === editGroupModalOpen}
          toggleModal={() => setEditGroupModalOpen(null)}
        >
          <AddLedgerGroupForm
            rowData={groupData}
            modalClose={() => setEditGroupModalOpen(null)}
          />
        </Modal>
      )}
      {/* <AlertModal
        title="Are you sure?"
        description="This action cannot be undone."
        name={accountData?.name}
        isOpen={alertModalOpen === accountData?.id}
        onClose={() => setAlertModalOpen(null)}
        onConfirm={() => hanldeAccountDelete(accountData?.id)}
        loading={deleteLoading}
      /> */}
      <AlertModal
        title="Are you sure?"
        description="This action cannot be undone."
        name={groupData?.name}
        isOpen={item?.id === groupAlertModalOpen}
        onClose={() => setGroupAlertModalOpen(null)}
        onConfirm={() => hanldeGroupDelete(groupData?.id)}
        loading={deleteGroupLoading}
      />
    </React.Fragment>
  ));
};

export default ChartOfAccountChild;
