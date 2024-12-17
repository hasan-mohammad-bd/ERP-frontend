import { FileQuestion } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/utils";

export function LeadNotFound({ className }: { className?: string }) {
  return (
    <div className={cn("flex justify-center p-6", className)}>
      <Card className="max-w-md text-center">
        <CardHeader>
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-muted">
            <FileQuestion className="h-10 w-10 text-muted-foreground" />
          </div>
          <CardTitle className="text-2xl">No Lead Selected</CardTitle>
          <CardDescription>
            Please select a lead from the sidebar or create a new one.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            You can view detailed information about a lead by selecting it from
            the list on the left. If you haven't added any leads yet, you can
            create a new one to get started.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button>Create New Lead</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
