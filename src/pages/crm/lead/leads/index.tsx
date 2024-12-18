import { Edit, ListIcon, Plus } from "lucide-react";
import { cn } from "@/utils";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { LeadDetails } from "./components/lead-details";
import { LeadsList } from "./components/lead-list";
import { LeadNotFound } from "./components/lead-not-found";
import { useNavigate, useParams } from "react-router-dom";

export function LeadsMailView() {
  const { leadId } = useParams();
  const navigate = useNavigate();
  
  return (
    <div className="grid w-full lg:grid-cols-[280px_1fr]">
      <div
        className={cn(
          "sticky top-0  flex h-screen w-[280px] flex-col border-r bg-background transition-transform"
        )}
      >
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <ListIcon className="h-4 w-4" />
            <h2 className="text-lg font-semibold">Leads</h2>
          </div>
          <Button onClick={() => navigate("/crm/lead/leads-view/add")} variant="ghost" size="icon">
            <Plus className="h-4 w-4" />
            <span className="sr-only">New lead</span>
          </Button>
        </div>
        <div className="p-4 pt-0">
          <Label htmlFor="filter" className="sr-only">
            Filter
          </Label>
          <Input id="filter" placeholder="Filter by..." className="w-full" />
        </div>
        <Separator />
        <LeadsList leadId={Number(leadId)} />
      </div>
      <div className="flex flex-col min-h-[120vh]">
        <div className="flex h-16 items-center justify-between border-b bg-background px-6">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-semibold">Khair Group</h1>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Edit className="h-4 w-4" />
              <span className="sr-only">Edit</span>
            </Button>
            <Button variant="destructive" size="sm">
              Reject
            </Button>
          </div>
        </div>
        <div className="flex-1 overflow-auto">
          {!leadId ? <LeadNotFound className="mt-20" /> : <LeadDetails />}
        </div>
      </div>
    </div>
  );
}
