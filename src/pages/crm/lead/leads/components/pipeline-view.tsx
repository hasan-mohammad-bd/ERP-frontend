import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Pipeline, PipelineStage } from "@/store/services/crm/api/leads/type";
import { cn } from "@/utils";

type PipelineViewProps = {
  pipeline: Pipeline;
  currentStage: PipelineStage;
};

export default function PipelineView({
  pipeline,
  currentStage,
}: PipelineViewProps) {
  let flag = true;

  const isActive = (stage: PipelineStage) => {
    if (stage?.id === currentStage?.id) {
      flag = false;
      return true;
    } else if (flag && currentStage) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between space-x-4">
          {pipeline &&
            pipeline?.details?.map((stage, index) => (
              <>
                <div className="flex items-center space-x-4">
                  <div
                    className={cn(
                      "flex h-7 w-7 items-center justify-center rounded-full",
                      isActive(stage)
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-700"
                    )}
                  >
                    {index + 1}
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-sm font-medium">{stage?.name}</div>
                  </div>
                </div>
                {index + 1 !== pipeline?.details?.length && (
                  <Separator className="flex-1" />
                )}
              </>
            ))}
        </div>
      </CardContent>
    </Card>
  );
}
