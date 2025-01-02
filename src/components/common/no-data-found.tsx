import { Card } from "../ui/card";
import { FileX2 } from "lucide-react";

export default function NoDataFound() {
  return (
    <Card className="w-full p-8 flex flex-col items-center justify-center space-y-4 min-h-[300px]">
      <div className="rounded-full bg-muted p-3">
        <FileX2 className="h-6 w-6 text-muted-foreground" />
      </div>
      <div className="text-center space-y-2">
        <h3 className="text-lg font-semibold">No Records Found</h3>
        <p className="text-sm text-muted-foreground max-w-[300px]">
          No records match your current filter criteria. Try adjusting your
          filters or selecting a different date.
        </p>
      </div>
    </Card>
  );
}
