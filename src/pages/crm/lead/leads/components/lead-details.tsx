import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { LeadDetailsType } from "@/store/services/crm/api/leads/type";
import PipelineView from "./pipeline-view";
import LeadActivityView from "./lead-activity-view";

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
      <PipelineView
        pipeline={lead.pipeline}
        currentStage={lead.pipelineStage}
      />
      <LeadActivityView lead={lead} />
    </div>
  );
}
