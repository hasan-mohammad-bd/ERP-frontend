

import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
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
import { Calendar } from "@/components/ui/calendar"; // Assuming you have a Calendar component
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { Heading } from "@/components/common/heading";


// Define the Zod schema for holiday details with all fields required
const holidaySchema = z.object({
  holiday_name: z.string().min(1, "Holiday name is required"),
  fromDate: z
    .date()
    .nullable()
    .refine((date) => date !== null, {
      message: "From Date is required",
    }),
  toDate: z
    .date()
    .nullable()
    .refine((date) => date !== null, {
      message: "To Date is required",
    }),
  duration: z.string().optional(),
  note: z.string().min(1, "Note is required"),
});

// Define the main schema for the form
const schema = z.object({
  details: z.array(holidaySchema),
});

interface HolidayFormValues {
  details: {
    holiday_name: string;
    fromDate: Date | null;
    toDate: Date | null;
    duration: string;
    note: string;
  }[];
}


export function AddHolidayForm(){

  const [openDatePickers, setOpenDatePickers] = useState<{
    fromDate: boolean[];
    toDate: boolean[];
  }>({
    fromDate: [false],
    toDate: [false],
  });

  const [showToDateError, setShowToDateError] = useState<boolean[]>([]);

  const form = useForm<HolidayFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      details: [
        {
          holiday_name: "",
          fromDate: null,
          toDate: null,
          duration: "",
          note: "",
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "details",
  });

  const calculateDuration = (fromDate: Date | null, toDate: Date | null) => {
    if (fromDate && toDate) {
      const timeDiff = toDate.getTime() - fromDate.getTime();
      const dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
      return `${dayDiff + 1} day${dayDiff === 0 ? "" : "s"}`;
    }
    return "";
  };

  const onSubmit = (data: HolidayFormValues) => {
    console.log("Form Data:", data);
    toast.success("Form Submitted!");
  };

  // const handleDatePickerToggle = (
  //   index: number,
  //   type: "fromDate" | "toDate"
  // ) => {
  //   setOpenDatePickers((prev) => {
  //     const newState = { ...prev };
  //     if (type === "fromDate") {
  //       newState.fromDate[index] = !newState.fromDate[index];
  //       newState.toDate[index] = false; // Close To Date if From Date is opened
  //     } else {
  //       newState.toDate[index] = !newState.toDate[index];
  //       newState.fromDate[index] = false; // Close From Date if To Date is opened
  //     }
  //     return newState;
  //   });
  // };



  const handleDatePickerToggle = (
    index: number,
    type: "fromDate" | "toDate"
  ) => {
    setOpenDatePickers((prev) => {
      const newState = { ...prev };
      if (type === "fromDate") {
        newState.fromDate[index] = !newState.fromDate[index];
        newState.toDate[index] = false; // Close To Date if From Date is opened
        setShowToDateError((prevError) => {
          const errorState = [...prevError];
          errorState[index] = false; // Reset To Date error message when opening From Date
          return errorState;
        });
      } else {
        const fromDate = form.getValues(`details.${index}.fromDate`);
        if (!fromDate) {
          setShowToDateError((prevError) => {
            const errorState = [...prevError];
            errorState[index] = true; // Show error if trying to open To Date without From Date
            return errorState;
          });
        } else {
          newState.toDate[index] = !newState.toDate[index];
          setShowToDateError((prevError) => {
            const errorState = [...prevError];
            errorState[index] = false; // Reset To Date error message when From Date is selected
            return errorState;
          });
        }
        newState.fromDate[index] = false; // Close From Date if To Date is opened
      }
      return newState;
    });
  };


  const navigate = useNavigate();




  return (
    <div className="">
      <div className="flex items-center justify-between mb-4">
      <Heading
              title={"Add Holiday"}
              description=""
            />
         <Button size={"sm"}
              onClick={() => navigate("/hrm/holidays")}
            >
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
                  <div className="w-[215px]">
                    <FormField
                      control={form.control}
                      name={`details.${index}.holiday_name`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{index === 0 && "Holiday Name"}</FormLabel>
                          <FormControl>
                            <Input
                              type="text"
                              placeholder="Enter holiday name"
                              {...field}
                              value={field.value || ""}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="w-[250px]">
                    <FormField
                      control={form.control}
                      name={`details.${index}.fromDate`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{index === 0 && "From Date"}</FormLabel>
                          <Popover
                            open={openDatePickers.fromDate[index]}
                            onOpenChange={() =>
                              handleDatePickerToggle(index, "fromDate")
                            }
                          >
                            <PopoverTrigger asChild className="p-3">
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
                            <PopoverContent
                              className="w-auto p-0"
                              align="start"
                            >
                              <Calendar
                                mode="single"
                                selected={field.value ?? undefined} // Convert null to undefined
                                onSelect={(date) => {
                                  field.onChange(date);
                                  const toDate = form.getValues(
                                    `details.${index}.toDate`
                                  );
                                  if (date && toDate) {
                                    const duration = calculateDuration(
                                      date,
                                      toDate
                                    );
                                    form.setValue(
                                      `details.${index}.duration`,
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

                  <div className="w-[250px]">
                    <FormField
                      control={form.control}
                      name={`details.${index}.toDate`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{index === 0 && "To Date"}</FormLabel>
                          <Popover
                            open={openDatePickers.toDate[index]}
                            onOpenChange={() =>
                              handleDatePickerToggle(index, "toDate")
                            }
                          >
                            <PopoverTrigger asChild className="p-3">
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
                                  const fromDate = form.getValues(
                                    `details.${index}.fromDate`
                                  );
                                  return !!(fromDate && date < fromDate); // Use type assertion if necessary
                                }}
                                onSelect={(date) => {
                                  field.onChange(date);
                                  const fromDate = form.getValues(
                                    `details.${index}.fromDate`
                                  );
                                  if (fromDate && date) {
                                    const duration = calculateDuration(
                                      fromDate,
                                      date
                                    );
                                    form.setValue(
                                      `details.${index}.duration`,
                                      duration
                                    );
                                  }
                                }}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          {showToDateError[index] && (
                            <p className="text-red-500 text-sm mt-1">
                              Please select From Date first
                            </p>
                          )}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>





                  <div className="w-[112px]">
                    <FormField
                      control={form.control}
                      name={`details.${index}.duration`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{index === 0 && "Duration"}</FormLabel>
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
                  </div>

                  <div className="flex-1">
                    <FormField
                      control={form.control}
                      name={`details.${index}.note`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{index === 0 && "Note"}</FormLabel>
                          <FormControl>
                            <Input
                              type="text"
                              placeholder="Enter note"
                              {...field}
                              value={field.value || ""}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>




                  <div className={`${index===0 ? 'mt-10' : 'mt-4'} `}>
                  <FormItem className={``}>
                    <span
                      onClick={() => remove(index)}
                      className="cursor-pointer"
                    >
                      <Trash2 size={16} color="red" />
                    </span>
                  </FormItem>
                  </div>

                </div>
              </Card>
            ))}

            <Button
              variant="outline"
              className="border border-dashed border-gray-700 w-full"
              type="button"
              onClick={() => {
                append({
                  holiday_name: "",
                  fromDate: null,
                  toDate: null,
                  duration: "",
                  note: "",
                });
                setOpenDatePickers((prev) => ({
                  fromDate: [...prev.fromDate, false], // Add new false state for From Date
                  toDate: [...prev.toDate, false], // Add new false state for To Date
                }));
              }}
            >
              <Plus size={16} /> <span className="ml-2">Add Holiday</span>
            </Button>

            <div className="flex flex-row-reverse items-center !mb-2">
              <Button variant="default" type="submit" className="w-fit ml-2">
                Save
              </Button>
              <Button
                    variant="primary"
                    onClick={() => navigate("/hrm/holidays")}
                    className="w-fit "
                  >
                    Back
                  </Button>
            </div>
          </form>
        </Form>
      </Card>
    </div>
  );
}
