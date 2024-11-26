import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { Plus, Trash2, CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { Heading } from "@/components/common/heading";
import { useCreateHolidayMutation } from "@/store/services/hrm/api/holiday";
import { Loading } from "@/components/common/loading";
import { HolidayFormValues, schema } from "@/lib/validators/hrm/holidays";

export default function AddHolidayForm() {
  const [openDatePickers, setOpenDatePickers] = useState<{
    fromDate: boolean[];
    toDate: boolean[];
  }>({
    fromDate: [false],
    toDate: [false],
  });

  const [showToDateError, setShowToDateError] = useState<boolean[]>([]);
  const [createHoliday, { isLoading }] = useCreateHolidayMutation();
  const navigate = useNavigate();

  const form = useForm<HolidayFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      holidays: [
        {
          name: "",
          start_date: null,
          end_date: null,
          duration: "",
          note: "",
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "holidays",
  });

  const calculateDuration = (start_date: Date, end_date: Date) => {
    if (start_date && end_date) {
      const timeDiff = end_date.getTime() - start_date.getTime();
      const dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
      return `${dayDiff + 1} day${dayDiff === 0 ? "" : "s"}`;
    }
    return "";
  };

  const onSubmit = async (data: HolidayFormValues) => {
    // Format dates before sending the payload
    const formattedData = {
      ...data,
      holidays: data.holidays.map((holiday) => ({
        ...holiday,
        start_date: holiday.start_date
          ? format(new Date(holiday.start_date), "yyyy-MM-dd")
          : null,
        end_date: holiday.end_date
          ? format(new Date(holiday.end_date), "yyyy-MM-dd")
          : null,
      })),
    };

    try {
      await createHoliday(formattedData as any);
      toast.success("Holidays Created Successfully!");
      navigate("/hrm/holidays");
    } catch (error) {
      toast.error("Failed to create holidays!");
    }
  };

  const handleDatePickerToggle = (
    index: number,
    type: "fromDate" | "toDate"
  ) => {
    setOpenDatePickers((prev) => {
      const newState = { ...prev };
      if (type === "fromDate") {
        newState.fromDate[index] = !newState.fromDate[index];
        newState.toDate[index] = false;
      } else {
        const fromDate = form.getValues(`holidays.${index}.start_date`);
        if (!fromDate) {
          setShowToDateError((prevError) => {
            const errorState = [...prevError];
            errorState[index] = true;
            return errorState;
          });
        } else {
          newState.toDate[index] = !newState.toDate[index];
          setShowToDateError((prevError) => {
            const errorState = [...prevError];
            errorState[index] = false;
            return errorState;
          });
        }
        newState.fromDate[index] = false;
      }
      return newState;
    });
  };

  return (
    <>
      {isLoading ? (
        <div className="h-56">
          <Loading />
        </div>
      ) : (
        <div>
          <div className="flex items-center justify-between mb-4">
            <Heading title={"Add Holiday"} description="" />
            <Button size={"sm"} onClick={() => navigate("/hrm/holidays")}>
              Holiday List
            </Button>
          </div>

          <Card className="p-3">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-3 mb-auto px-2 overflow-y-scroll no-scrollbar"
              >
                {fields.map((field, index) => (
                  <Card key={field.id} className="p-3">
                    <div className="flex w-full gap-x-3">
                      {/* Holiday Name */}
                      <div className="w-[215px]">
                        <FormField
                          control={form.control}
                          name={`holidays.${index}.name`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>
                                {index === 0 && "Holiday Name"}
                              </FormLabel>
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
                      </div>

                      {/* From Date */}
                      <div className="w-[250px]">
                        <FormField
                          control={form.control}
                          name={`holidays.${index}.start_date`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>
                                {index === 0 && "From Date"}
                              </FormLabel>
                              <Popover
                                open={openDatePickers.fromDate[index]}
                                onOpenChange={() =>
                                  handleDatePickerToggle(index, "fromDate")
                                }
                              >
                                <PopoverTrigger asChild>
                                  <Button
                                    variant={"outline"}
                                    className={`w-full justify-start text-left font-normal ${
                                      !field.value && "text-muted-foreground"
                                    }`}
                                  >
                                    {field.value
                                      ? format(new Date(field.value), "PP")
                                      : "Pick a date"}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                  </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                  <Calendar
                                    mode="single"
                                    selected={field.value ?? undefined}
                                    onSelect={(date) => {
                                      field.onChange(date);
                                      const toDate = form.getValues(
                                        `holidays.${index}.end_date`
                                      );
                                      if (date && toDate) {
                                        const duration = calculateDuration(
                                          date,
                                          toDate
                                        );
                                        form.setValue(
                                          `holidays.${index}.duration`,
                                          duration
                                        );
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
                      </div>

                      {/* To Date */}
                      <div className="w-[250px]">
                        <FormField
                          control={form.control}
                          name={`holidays.${index}.end_date`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{index === 0 && "To Date"}</FormLabel>
                              <Popover
                                open={openDatePickers.toDate[index]}
                                onOpenChange={() =>
                                  handleDatePickerToggle(index, "toDate")
                                }
                              >
                                <PopoverTrigger asChild>
                                  <Button
                                    variant={"outline"}
                                    className={`w-full justify-start text-left font-normal ${
                                      !field.value && "text-muted-foreground"
                                    }`}
                                  >
                                    {field.value
                                      ? format(new Date(field.value), "PP")
                                      : "Pick a date"}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                  </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                  <Calendar
                                    mode="single"
                                    selected={field.value ?? undefined}
                                    disabled={(date) => {
                                      const fromDate = form.getValues(
                                        `holidays.${index}.start_date`
                                      );
                                      return !!(fromDate && date < fromDate);
                                    }}
                                    onSelect={(date) => {
                                      field.onChange(date);
                                      const fromDate = form.getValues(
                                        `holidays.${index}.start_date`
                                      );
                                      if (fromDate && date) {
                                        const duration = calculateDuration(
                                          fromDate,
                                          date
                                        );
                                        form.setValue(
                                          `holidays.${index}.duration`,
                                          duration
                                        );
                                      }
                                    }}
                                    initialFocus
                                  />
                                </PopoverContent>
                              </Popover>
                              {showToDateError[index] && (
                                <FormMessage>
                                  Please select a From Date first.
                                </FormMessage>
                              )}
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Duration */}
                      <div className="w-[150px]">
                        <FormField
                          control={form.control}
                          name={`holidays.${index}.duration`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>
                                {index === 0 && "Duration"}
                              </FormLabel>
                              <FormControl>
                                <Input type="text" disabled {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Note */}
                      <div className="w-[300px]">
                        <FormField
                          control={form.control}
                          name={`holidays.${index}.note`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{index === 0 && "Note"}</FormLabel>
                              <FormControl>
                                <Input
                                  type="text"
                                  placeholder="Enter note"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Remove Button */}
                      <div>
                        <Button
                          type="button"
                          variant="destructive"
                          className="mt-6"
                          onClick={() => remove(index)}
                        >
                          <Trash2 className="mr-2 h-4 w-4" />
                          Remove
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}

                <div className="flex justify-end items-center space-x-3">
                  <Button
                    type="button"
                    variant="secondary"
                    size={"sm"}
                    onClick={() =>
                      append({
                        name: "",
                        start_date: null,
                        end_date: null,
                        duration: "",
                        note: "",
                      })
                    }
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Add Row
                  </Button>
                  <Button type="submit" size={"sm"} disabled={isLoading}>
                    Save
                  </Button>
                </div>
              </form>
            </Form>
          </Card>
        </div>
      )}
    </>
  );
}
