import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { toast } from "sonner";
import { format } from "date-fns";
import { Loading } from "@/components/common/loading";
import { useUpdateHolidayMutation } from "@/store/services/hrm/api/holiday";
import { CalendarIcon } from "lucide-react";
import {
  HolidayFormColumn,
  HolidayFormRows,
  holidaySchema,
} from "@/lib/validators/hrm/holidays";

interface AddHolidayFormProps {
  modalClose: () => void;
  data?: HolidayFormRows;
}

export function UpdateHolidayForm({
  modalClose,
  data: previousData,
}: AddHolidayFormProps) {
  const [openDatePickers, setOpenDatePickers] = useState({
    start_date: false,
    end_date: false,
  });

  const [updateHoliday, { isLoading: updateLoading }] =
    useUpdateHolidayMutation();

  const form = useForm<HolidayFormColumn>({
    resolver: zodResolver(holidaySchema),
    defaultValues: {
      name: previousData?.name || "",
      start_date: previousData?.start_date
        ? new Date(previousData.start_date) // Ensure Date object
        : undefined,
      end_date: previousData?.end_date
        ? new Date(previousData.end_date) // Ensure Date object
        : undefined,
      duration: previousData?.duration || "",
      note: previousData?.note || "",
    },
  });

  // Normalize date to UTC at midnight
  const normalizeDate = (date: Date): Date => {
    const utcDate = new Date(
      Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
    );
    return utcDate;
  };

  const calculateDuration = (
    start_date: Date | null,
    end_date: Date | null
  ) => {
    if (start_date && end_date) {
      const timeDiff = end_date.getTime() - start_date.getTime();
      const dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
      return `${dayDiff + 1} day${dayDiff === 0 ? "" : "s"}`;
    }
    return "";
  };

  async function onSubmit(data: HolidayFormColumn) {
    try {
      if (previousData) {
        const payload = {
          ...data,
          start_date: normalizeDate(data.start_date!), // Ensure UTC
          end_date: normalizeDate(data.end_date!), // Ensure UTC
        };
        await updateHoliday({
          holidayId: previousData.id,
          updatedHoliday: payload,
        }).unwrap();
        toast.success("Holiday updated successfully");
        modalClose();
      }
    } catch (error) {
      console.error("Failed to update holiday:", error);
      toast.error("Failed to update holiday");
    }
  }

  const handleDatePickerToggle = (type: "start_date" | "end_date") => {
    setOpenDatePickers((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  useEffect(() => {
    const start_date = form.getValues("start_date");
    const end_date = form.getValues("end_date");
    if (start_date && end_date) {
      const duration = calculateDuration(start_date, end_date);
      form.setValue("duration", duration);
    }
  }, [form.watch("start_date"), form.watch("end_date")]);

  return (
    <>
      {updateLoading ? (
        <div className="h-56">
          <Loading />
        </div>
      ) : (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-3 mb-auto"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Holiday Name</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Enter holiday name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name={`start_date`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Start Date</FormLabel>
                  <Popover
                    open={openDatePickers.start_date}
                    onOpenChange={() => handleDatePickerToggle("start_date")}
                  >
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={`w-full justify-start text-left font-normal ${
                          !field.value && "text-muted-foreground"
                        }`}
                      >
                        {field.value
                          ? format(field.value, "PP")
                          : "Pick a date"}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value ?? undefined}
                        onSelect={(date) => {
                          const normalized = normalizeDate(date!);
                          field.onChange(normalized);
                          const toDate = form.getValues(`end_date`);
                          if (normalized && toDate) {
                            const duration = calculateDuration(normalized, toDate);
                            form.setValue(`duration`, duration);
                          }
                        }}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name={`end_date`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>End Date</FormLabel>
                  <Popover
                    open={openDatePickers.end_date}
                    onOpenChange={() => handleDatePickerToggle("end_date")}
                  >
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={`w-full justify-start text-left font-normal ${
                          !field.value && "text-muted-foreground"
                        }`}
                      >
                        {field.value
                          ? format(field.value, "PP")
                          : "Pick a date"}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value ?? undefined}
                        disabled={(date) => {
                          const start_date = form.getValues(`start_date`);
                          return !!(start_date && normalizeDate(date) < normalizeDate(start_date));
                        }}
                        
                        onSelect={(date) => {
                          const normalized = normalizeDate(date!);
                          field.onChange(normalized);
                          const start_date = form.getValues(`start_date`);
                          if (start_date && normalized) {
                            const duration = calculateDuration(
                              start_date,
                              normalized
                            );
                            form.setValue(`duration`, duration);
                          }
                        }}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="duration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Duration</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Duration"
                      {...field}
                      value={field.value || ""}
                      disabled={true}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="note"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Note</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Enter note" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div>
              <Button variant="default" type="submit" className="w-full mt-4">
                Update
              </Button>
            </div>
          </form>
        </Form>
      )}
    </>
  );
}
