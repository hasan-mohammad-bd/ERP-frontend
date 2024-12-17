import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useGetLeadsQuery } from "@/store/services/crm/api/leads";
import { cn } from "@/utils";
import { Link } from "react-router-dom";

export function LeadsList({ leadId }: { leadId: number }) {
  const { data: leadsData } = useGetLeadsQuery("");
  const leads = leadsData?.data || [];
  return (
    <ScrollArea className="flex-1">
      <div className="space-y-1 p-2">
        {leads.map((lead) => (
          <Link
            key={lead.id}
            className={cn("flex w-full items-center justify-between rounded-lg px-4 py-2 text-left text-sm hover:bg-muted",
              leadId === lead.id && "bg-muted"
            )}
            
            to={`/crm/lead/leads-view/${lead.id}`}
          >
            <div className="space-y-1">
              <div className="text-sm font-medium leading-none">
                {lead.name}
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>{lead.phone}</span>
              </div>
            </div>
            {lead?.pipelineStage && (
              <Badge className="ml-auto">
                {lead.pipelineStage?.name?.slice(0, 1)}
              </Badge>
            )}
          </Link>
        ))}
      </div>
    </ScrollArea>
  );
}
