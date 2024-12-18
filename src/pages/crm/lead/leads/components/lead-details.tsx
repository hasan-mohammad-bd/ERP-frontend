import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LeadDetailsType } from "@/store/services/crm/api/leads/type";
import PipelineView from "./pipeline-view";

export function LeadDetails({ lead }: { lead: LeadDetailsType }) {
  return (
    <div className="space-y-6 p-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="text-sm font-medium">
            Account Details
          </CardHeader>
          <CardContent className="space-y-2">
            <div>
              <Label>Lead Name</Label>
              <div className="text-sm">{lead?.name}</div>
            </div>
            <div>
              <Label>Description </Label>
              <div className="text-sm">{lead?.description}</div>
            </div>
            <div>
              <Label>Email</Label>
              <div className="text-sm">{lead?.email}</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="text-sm font-medium">
            Contact Information
          </CardHeader>
          <CardContent className="space-y-2">
            <div>
              <Label>Contact</Label>
              <div className="text-sm">{lead?.phone}</div>
            </div>
            <div>
              <Label>Designation</Label>
              <div className="text-sm">{lead?.designation}</div>
            </div>
            <div>
              <Label>Address</Label>
              <div className="text-sm">{lead?.address}</div>
              {/* <Badge className="mt-1">{lead?.address}</Badge> */}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="text-sm font-medium">
            Product Information
          </CardHeader>
          <CardContent className="space-y-2">
            <div>
              <Label>Product</Label>
              <div className="text-sm">{lead?.item?.name}</div>
            </div>
            <div>
              <Label>Source</Label>
              <div className="text-sm">{lead?.source}</div>
            </div>
            {/* <div>
              <Label>Reference</Label>
              <div className="text-sm">Jannatul Ferdous</div>
            </div> */}
          </CardContent>
        </Card>
      </div>
      <PipelineView pipeline={lead.pipeline} currentStage={lead.pipelineStage} />
      <Card>
        <CardContent className="p-0">
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
        </CardContent>
      </Card>
    </div>
  );
}
