import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { ErrorResponse } from "@/types";
import handleErrors from "@/lib/handle-errors";
import { Loading } from "@/components/common/loading";
import { Textarea } from "@/components/ui/textarea";
import {
    LeadActivityFormValues,
    LeadActivitySchema,
} from "@/lib/validators/crm/lead-activities";
import {
    useCreateLeadActivityMutation,
    useUpdateLeadActivityMutation,
} from "@/store/services/crm/api/lead-activities";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import MultipleSelector, { Option } from "@/components/ui/multiSelectSearch";
import { LEAD_ACTIVITY_TYPES } from "@/constants/crm";
import { LeadActivityRow } from "@/store/services/crm/api/lead-activities/type";
import { LeadRow } from "@/store/services/crm/api/leads/type";
import { useGetUsersQuery } from "@/store/services/erp-main/api/users";
import { useEffect, useState } from "react";
import { UsersRow } from "@/lib/validators/web/users";

interface AddLeadActivityProps {
    modalClose: () => void;
    lead: LeadRow;
    data?: LeadActivityRow;
}

export function AddLeadActivityForm({
    lead,
    data: previousData,
    modalClose,
}: AddLeadActivityProps) {

    const [participantsOptions, setParticipantsOptions] = useState<Option[]>([]);
    const [userSearchTerm, setUserSearchTerm] = useState("");
    const [createLeadActivity, { isLoading }] = useCreateLeadActivityMutation();
    const [updateLeadActivity, { isLoading: updateLoading }] = useUpdateLeadActivityMutation();
    const { data: userList } = useGetUsersQuery(`per_page=15&page=1&text=${userSearchTerm}`);


    console.log('previousData', previousData);
    console.log('previousData-map', previousData?.participants?.map((item: { id: number }) => item.id));

    const form = useForm<LeadActivityFormValues>({
        resolver: zodResolver(LeadActivitySchema),
        defaultValues: {
            title: previousData?.title || "",
            description: previousData?.description || "",
            outcome: previousData?.outcome || "",
            is_completed: previousData?.is_completed === 0 ? 0 : 1,
            lead_id: lead.id,
            type: previousData?.type || "Other",

            start_date_time: previousData?.start_date_time || "",
            end_date_time: previousData?.end_date_time || "",
            reminder_date_time: previousData?.reminder_date_time || "",
            participants: previousData?.participants?.map((item: { id: number }) => item.id) || [],
        },
    });

    const handleSearchParticipants = async (query: string): Promise<Option[]> => {
        setUserSearchTerm(query);
        const options =
            userList?.data?.map((item: UsersRow) => ({
                value: String(item.id),
                label: `${item.name} (${item.id})`,
            })) || [];
        return options;
    };

    useEffect(() => {
        if (previousData?.participants) {
            const newOptions = previousData.participants.map((item: { id: number; name: string }) => ({
                value: String(item.id),
                label: `${item.name} (${item.id})`,
            }));

            setParticipantsOptions((prev) => {
                const existingValues = new Set(prev.map((option) => option.value));
                return [
                    ...prev,
                    ...newOptions.filter((option) => !existingValues.has(option.value)),
                ];
            });
        }
    }, [previousData]);


    async function onSubmit(data: LeadActivityFormValues) {
        try {
            // Format the date fields before sending to the API
            const formattedData = {
                ...data,
                start_date_time: data.start_date_time
                    ? format(new Date(data.start_date_time), "yyyy-MM-dd HH:mm")
                    : "",
                end_date_time: data.end_date_time
                    ? format(new Date(data.end_date_time), "yyyy-MM-dd HH:mm")
                    : "",
                reminder_date_time: data.reminder_date_time
                    ? format(new Date(data.reminder_date_time), "yyyy-MM-dd HH:mm")
                    : "",
            };

            if (previousData) {
                // Update activity
                await updateLeadActivity({
                    leadActivityId: previousData.id,
                    updatedLeadActivity: formattedData,
                }).unwrap();
                toast.success("Activity updated successfully");
                modalClose();
            } else {
                // Create activity
                await createLeadActivity(formattedData).unwrap();
                toast.success("Activity created successfully");
                modalClose();
            }
        } catch (error) {
            console.log(error);
            handleErrors(error as ErrorResponse);
        }
    }

    return (
        <>
            {isLoading || updateLoading ? (
                <div>
                    <Loading />
                </div>
            ) : (
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            {/* Title */}
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Title</FormLabel>
                                        <FormControl>
                                            <Input
                                                className=""
                                                placeholder="Enter Title"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/* Description */}
                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Description</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Type your description here."
                                                {...field}
                                                value={field.value || ""}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/* Type and Completed */}
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <FormField
                                    control={form.control}
                                    name="type"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Type</FormLabel>
                                            <Select
                                                onValueChange={(value) => field.onChange(value)}
                                                value={field.value}
                                            >
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select Type" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    {LEAD_ACTIVITY_TYPES.map((lg) => (
                                                        <SelectItem key={lg.id} value={lg.id}>
                                                            {lg.name}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="is_completed"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Completed</FormLabel>
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
                                                    <SelectItem value={"1"}>Yes</SelectItem>
                                                    <SelectItem value={"0"}>No</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            {/* Outcome */}
                            <FormField
                                control={form.control}
                                name="outcome"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Outcome</FormLabel>
                                        <FormControl>
                                            <Input
                                                className=""
                                                placeholder="Enter Outcome"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/* Start Date */}
                            <FormField
                                control={form.control}
                                name="start_date_time"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Start Date & Time</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="datetime-local"
                                                value={
                                                    field.value
                                                        ? format(
                                                            new Date(field.value),
                                                            "yyyy-MM-dd'T'HH:mm"
                                                        )
                                                        : ""
                                                }
                                                onChange={(e) => field.onChange(e.target.value)}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/* End Date */}
                            <FormField
                                control={form.control}
                                name="end_date_time"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>End Date & Time</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="datetime-local"
                                                value={
                                                    field.value
                                                        ? format(
                                                            new Date(field.value),
                                                            "yyyy-MM-dd'T'HH:mm"
                                                        )
                                                        : ""
                                                }
                                                onChange={(e) => field.onChange(e.target.value)}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/* Reminder Date */}
                            <FormField
                                control={form.control}
                                name="reminder_date_time"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Reminder Date & Time</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="datetime-local"
                                                value={
                                                    field.value
                                                        ? format(
                                                            new Date(field.value),
                                                            "yyyy-MM-dd'T'HH:mm"
                                                        )
                                                        : ""
                                                }
                                                onChange={(e) => field.onChange(e.target.value)}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="participants"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Participants Name</FormLabel>
                                        <FormControl>
                                            <MultipleSelector
                                                {...field}
                                                value={participantsOptions}
                                                onSearch={handleSearchParticipants}
                                                onChange={(options) => {
                                                    setParticipantsOptions(options);
                                                    field.onChange(
                                                      options.map((option) => parseInt(option.value))
                                                    );
                                                  }}
                                                hidePlaceholderWhenSelected
                                                placeholder="Search and select options"
                                                loadingIndicator={<span>Loading...</span>}
                                                emptyIndicator={<span>No options found</span>}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="text-right">
                            <Button variant="default" type="submit" className="w-fit mt-4">
                                {previousData ? "Update" : "Add"}
                            </Button>
                        </div>
                    </form>
                </Form>
            )}
        </>
    );
}
