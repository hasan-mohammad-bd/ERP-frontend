import { Heading } from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import handleErrors from "@/lib/handle-errors";
import { ErrorResponse } from "@/types";
import { toast } from "sonner";
import {
  pipelineSchema,
  PipelineFormValues,
} from "@/lib/validators/crm/pipelines";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  useCreatePipelineMutation,
  useGetPipelineByIdQuery,
  useUpdatePipelineMutation,
} from "@/store/services/crm/api/pipelines";
import { PipelineStage } from "@/store/services/crm/api/pipelines/type";
import { Trash2, Plus } from "lucide-react";

export default function AddPipelineForm() {
  const navigate = useNavigate();
  const [pipelineDetails, setPipelineDetails] = useState<PipelineStage[]>(
    []
  );

  const [createPipeline, { isLoading: isCreating }] =
    useCreatePipelineMutation();
  const [updatePipeline, { isLoading: isUpdating }] =
    useUpdatePipelineMutation();

  const form = useForm<PipelineFormValues>({
    resolver: zodResolver(pipelineSchema),
    defaultValues: {
      name: "",
      status: 1,
      details: [],
    },
  });

  const params = useParams();
  const pipelineId = Number(params.id);
  const { data: pipelineData } = useGetPipelineByIdQuery(pipelineId, {
    skip: !pipelineId,
  });
  const pipeline = pipelineData?.data || undefined;

  useEffect(() => {
    if (pipeline && pipeline.details) {
      setPipelineDetails(pipeline.details.map((stage) => ({ ...stage })));
    }
  }, [pipeline]);

  useEffect(() => {
    if (pipeline) {
      form.reset({
        name: pipeline.name,
        status: pipeline.status,
      });
    }
  }, [pipeline]);

  const handleAddStage = () => {
    setPipelineDetails([...pipelineDetails, { probability: 0, name: "", id: 0 }]);
  };

  const handleChangeStage = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setPipelineDetails(
      pipelineDetails.map((stage, i) =>
        i === index ? { ...stage, [name]: value } : stage
      )
    );
  };

  async function onSubmit(data: PipelineFormValues) {
    if (pipelineDetails.length === 0) {
      return toast.error("Please add at least one Stage");
    }

    const payload: PipelineFormValues = {
      ...data,
      details: pipelineDetails,
    };

    try {
      if (!pipeline) {
        await createPipeline(payload).unwrap();
        toast.success("Pipeline created successfully");
      } else {
        await updatePipeline({ pipelineId, updatedPipeline: payload }).unwrap();
        toast.success("Pipeline updated successfully");
      }
      navigate("/crm/lead/pipelines");
    } catch (error) {
      handleErrors(error as ErrorResponse);
    }
  }

  const handleRemoveStage = (index: number) => {
    if (pipelineDetails.length <= 1) {
      return toast.error("You must have at least one stage.");
    }
    setPipelineDetails(pipelineDetails.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <Heading
          title={pipeline ? "Edit Pipeline" : "Add Pipeline"}
          description="Manage your pipelines"
        />
        <Button onClick={() => navigate("/crm/lead/pipelines")} size="sm">
          Pipeline List
        </Button>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <Card className="p-3">
            <div className="grid grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pipeline Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Pipeline Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <Select
                      onValueChange={(value) => field.onChange(Number(value))}
                      value={String(field.value)}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="1">Active</SelectItem>
                        <SelectItem value="0">Inactive</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </Card>

          <Card className="p-4">
            <div className="mb-4 font-medium">Pipeline Stages</div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse table-auto">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2 border">Name</th>
                    <th className="px-4 py-2 border">Probability (%)</th>
                    <th className="px-4 py-2 border"></th>
                  </tr>
                </thead>
                <tbody>
                  {pipelineDetails.map((stage, index) => (
                    <tr key={index}>
                      <td className="border px-4 py-2">
                        <Input
                          name="name"
                          value={stage.name}
                          onChange={(e) => handleChangeStage(index, e)}
                        />
                      </td>
                      <td className="border px-4 py-2">
                        <Input
                          type="number"
                          name="probability"
                          value={stage.probability}
                          onChange={(e) => handleChangeStage(index, e)}
                          min="1"
                          step="1" // Ensures only whole numbers are accepted
                        />
                      </td>
                      <td className="border px-4 py-2 text-center">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleRemoveStage(index)}
                        >
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Button type="button" onClick={handleAddStage} className="mt-2">
              <Plus className="mr-2 h-4 w-4" /> Add Stage
            </Button>
          </Card>

          <div className="text-right">
            <Button
              type="button"
              onClick={() => navigate("/crm/lead/pipelines")}
              className="mr-2"
              variant="ghost"
            >
              Cancel
            </Button>
            <Button
              disabled={
                !form.formState.isValid ||
                isCreating ||
                isUpdating ||
                pipelineDetails.length === 0
              }
              type="submit"
            >
              {pipeline ? "Update" : "Add"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
