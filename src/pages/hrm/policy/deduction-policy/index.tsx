import { Heading } from "@/components/common/heading";
import { AbsentPolicy } from "./components/absent-policy";
import { Button } from "@/components/ui/button";
import { SaveAll } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Form } from "@/components/ui/form";
import { DelayPolicy } from "./components/delay-policy";
import { ExtremeDelayPolicy } from "./components/extreme-delay-policy";

const DeductionPolicy = () => {
  const form = useForm({
    // resolver: zodResolver(FormSchema),
    defaultValues: {
      items: ["consider-absent-policy"],
    },
  });

  function onSubmit(data: any) {
    toast.success(JSON.stringify(data));
  }

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <Heading
              title="Deduction Policy"
              description="Manage your holidays for you organization"
            />
            <Button size={"sm"} onClick={form.handleSubmit(onSubmit)}>
              <SaveAll className="mr-2 h-4 w-4" /> Save Policy
            </Button>
          </div>
          <Separator />
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-6 items-center"
            >
              <AbsentPolicy form={form} />
              <DelayPolicy form={form} />
              <ExtremeDelayPolicy form={form} />
            </form>
          </Form>
        </div>
      </div>
    </>
  );
};

export default DeductionPolicy;
