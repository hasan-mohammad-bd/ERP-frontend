import { Modal } from "@/components/common/modal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LeadDetailsType } from "@/store/services/crm/api/leads/type";
import { Plus } from "lucide-react";
import { useState } from "react";

export default function LeadActivityView({ lead }: { lead: LeadDetailsType }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Card>
        <CardContent className="p-0">
          <div className="flex items-start justify-between p-3">
            <Tabs defaultValue="history" className="w-full">
              <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
                <TabsTrigger
                  value="history"
                  className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary"
                >
                  History
                </TabsTrigger>
                <TabsTrigger
                  value="call"
                  className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary"
                >
                  Call
                </TabsTrigger>
                <TabsTrigger
                  value="email"
                  className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary"
                >
                  Email
                </TabsTrigger>
                <TabsTrigger
                  value="meeting"
                  className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary"
                >
                  Meeting
                </TabsTrigger>
              </TabsList>
              <TabsContent value="history" className="p-4">
                <table className="w-full">
                  <thead>
                    <tr className="border-b text-left text-sm">
                      <th className="pb-2 font-medium">SL</th>
                      <th className="pb-2 font-medium">ACTIVITY TYPE</th>
                      <th className="pb-2 font-medium">DATE</th>
                      <th className="pb-2 font-medium">CALL BY</th>
                      <th className="pb-2 font-medium">FOLLOW UP DATE</th>
                      <th className="pb-2 font-medium">DESCRIPTION</th>
                      <th className="pb-2 font-medium">OUTCOME</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="text-sm">
                      <td className="py-2">1</td>
                      <td className="py-2">Call</td>
                      <td className="py-2">Aug 19, 2024, 12:00 pm</td>
                      <td className="py-2">Nur A Safa Soad</td>
                      <td className="py-2">Aug 20, 2024</td>
                      <td className="py-2 max-w-md">
                        <ul className="list-inside list-decimal space-y-1">
                          <li>Company Size: 120 + employee</li>
                          <li>Industry: Trading, Retail</li>
                          <li>Geography/Location: Banani</li>
                          <li>
                            Pain Point: Face difficulty to manage their whole
                            business
                          </li>
                          <li>Needs: Basic ERP WITH PRODUCTION.</li>
                          <li>Timeline: -</li>
                        </ul>
                      </td>
                      <td className="py-2">-</td>
                    </tr>
                  </tbody>
                </table>
              </TabsContent>
            </Tabs>

            <Button
              onClick={() => setShowModal(true)}
              variant="ghost"
              size="icon"
            >
              <Plus className="h-4 w-4" />
              <span className="sr-only">Edit</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {showModal && (
        <Modal isOpen={showModal} toggleModal={() => setShowModal(false)} title="Add Activity">
          <h1>{lead.name}</h1>
        </Modal>
      )}
    </>
  );
}
