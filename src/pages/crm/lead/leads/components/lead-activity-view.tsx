import { Modal } from "@/components/common/modal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LeadDetailsType } from "@/store/services/crm/api/leads/type";
import { useGetLeadActivitiesQuery, useRemoveLeadActivityMutation } from "@/store/services/crm/api/lead-activities";
import { Plus } from "lucide-react";
import React, { useState, useEffect } from "react";
import { format, parseISO } from "date-fns";
import { LEAD_ACTIVITY_TYPES } from "@/constants/crm";
import { AddLeadActivityForm } from "./add-lead-activity-form";
import { AlertModal } from "@/components/common/alert-modal";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ErrorResponse } from "@/types";
import { Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";
import handleErrors from "@/lib/handle-errors";

export default function LeadActivityView({ lead }: { lead: LeadDetailsType }) {
  const pagination = {
    pageIndex: 0,
    pageSize: 1000,
  };
  const [showModal, setShowModal] = useState(false);
  const [alertModalOpen, setAlertModalOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<string>("all");
  const [deleteLeadActivity, { isLoading }] = useRemoveLeadActivityMutation();

  const { data, refetch } = useGetLeadActivitiesQuery(
    `per_page=${pagination.pageSize}&page=${pagination.pageIndex + 1}&lead_id=${lead.id}&type=${selectedType !== "all" ? selectedType : ""}`,
    { skip: !lead.id }
  );

  const handleLeadActivityDelete = async (id: number) => {
    try {
      await deleteLeadActivity(id).unwrap();
      toast.success("Lead Activity deleted successfully");
      setAlertModalOpen(false);
    } catch (error) {
      console.log(error);
      handleErrors(error as ErrorResponse);
    }
  };

  useEffect(() => {
    refetch();
  }, [selectedType, refetch]);

  const leadActivities = data?.data || [];

  return (
    <>
      <Card>
        <CardContent className="p-0">
          <div className="flex items-start justify-between p-3">
            <Tabs
              defaultValue="all"
              className="w-full"
              onValueChange={(value) => setSelectedType(value)}
            >
              <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
                <TabsTrigger
                  value="all"
                  className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary"
                >
                  All
                </TabsTrigger>
                {LEAD_ACTIVITY_TYPES &&
                  LEAD_ACTIVITY_TYPES.map((leadActivityType) => (
                    <TabsTrigger
                      key={leadActivityType.id}
                      value={leadActivityType.id}
                      className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary"
                    >
                      {leadActivityType.name}
                    </TabsTrigger>
                  ))}
              </TabsList>

              <TabsContent value={selectedType} className="p-4">
                <table className="w-full">
                  <thead>
                    <tr className="border-b text-left text-sm">
                      <th className="pb-2 font-medium">SL</th>
                      <th className="pb-2 font-medium">ACTIVITY TYPE</th>
                      <th className="pb-2 font-medium">CREATED DATE</th>
                      <th className="pb-2 font-medium">START AND END TIME</th>
                      <th className="pb-2 font-medium">CREATED BY</th>
                      <th className="pb-2 font-medium">PARTICIPANTS</th>
                      <th className="pb-2 font-medium">OUTCOME</th>
                      <th className="pb-2 font-medium">TITLE</th>
                      <th className="pb-2 font-medium">DESCRIPTION</th>
                      <th className="pb-2 font-medium">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leadActivities &&
                      leadActivities.map((leadActivity, key) => (
                        <tr key={leadActivity.id} className="text-sm">
                          <td className="py-2">{key + 1}</td>
                          <td className="py-2">{leadActivity?.type}</td>
                          <td className="py-2">{format(parseISO(leadActivity?.created_at), "dd MMM yyyy, hh:mm a")}</td>
                          <td className="py-2">
                            {format(parseISO(leadActivity?.start_date_time), "dd MMM yyyy, hh:mm a")}<br />
                            {format(parseISO(leadActivity?.end_date_time), "dd MMM yyyy, hh:mm a")}
                          </td>
                          <td className="py-2">{leadActivity?.user?.name}</td>
                          <td className="py-2">
                            {leadActivity.participants &&
                              leadActivity.participants.map((participant , key) => (
                                <React.Fragment key={key}>
                                  {participant?.name}
                                  <br />
                                </React.Fragment>
                              ))}
                          </td>
                          <td className="py-2">{leadActivity?.outcome}</td>
                          <td className="py-2">{leadActivity?.title}</td>
                          <td className="py-2">{leadActivity?.description}</td>
                          <td className="py-2">
                            <div className="flex justify-center space-x-2">
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      className="hover:bg-secondary"
                                      onClick={() => setUpdateModalOpen(true)}
                                    >
                                      <Pencil className="h-4 w-4 text-foreground" />
                                    </Button>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>Update Lead Group</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
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
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>Delete Lead Group</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>

                              {alertModalOpen && (
                                <AlertModal
                                  title="Are you sure?"
                                  description="This action cannot be undone."
                                  name={leadActivity.title}
                                  isOpen={alertModalOpen}
                                  onClose={() => setAlertModalOpen(false)}
                                  onConfirm={() => handleLeadActivityDelete(leadActivity.id)}
                                  loading={isLoading}
                                />
                              )}
                              {updateModalOpen && (
                                <Modal
                                  title="Update Lead Activity"
                                  isOpen={updateModalOpen}
                                  toggleModal={() => setUpdateModalOpen(false)}
                                  className="max-w-5xl h-fit"
                                >
                                  <AddLeadActivityForm
                                    lead={lead}
                                    data={leadActivity}
                                    modalClose={() => setUpdateModalOpen(false)}
                                  />
                                </Modal>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </TabsContent>
            </Tabs>

            <Button onClick={() => setShowModal(true)} variant="ghost" size="icon">
              <Plus className="h-4 w-4" />
              <span className="sr-only">Edit</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {showModal && (
        <Modal
          title="Add Activity"
          isOpen={showModal}
          toggleModal={() => setShowModal(false)}
          className="max-w-5xl h-fit"
        >
          <AddLeadActivityForm lead={lead} modalClose={() => setShowModal(false)} />
        </Modal>
      )}
    </>
  );
}
