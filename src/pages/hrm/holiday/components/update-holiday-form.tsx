// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Calendar } from "@/components/ui/calendar"; // Assuming you have a Calendar component
// import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
// import { toast } from "sonner";
// import { format } from "date-fns";
// import {
//   HolidayColumn,
//   HolidayFormSchema,
//   HolidayFromValues,
// } from "@/lib/validators";
// import { Loading } from "@/components/common/loading";
// import { useCreateHolidayMutation, useUpdateHolidayMutation } from "@/store/services/hrm/api/holiday";
// import handleErrors from "@/lib/handle-errors";
// import { CalendarIcon } from "lucide-react";

// interface AddHolidayFormProps {
//   modalClose: () => void;
//   data?: HolidayColumn;
// }

// export function UpdateHolidayForm({
//   modalClose,
//   data: previousData,
// }: AddHolidayFormProps) {
//   const [openDatePickers, setOpenDatePickers] = useState({
//     fromDate: false,
//     toDate: false,
//   });
//   const [showToDateError, setShowToDateError] = useState<boolean>(false);

//   const [createHoliday, { isLoading }] = useCreateHolidayMutation();
//   const [updateHoliday, { isLoading: updateLoading }] = useUpdateHolidayMutation();

//   const form = useForm<HolidayFromValues>({
//     resolver: zodResolver(HolidayFormSchema),
//     defaultValues: {
//       holiday_name: previousData?.holiday_name || "",
//       fromDate: previousData?.fromDate || null,
//       toDate: previousData?.toDate || null,
//       duration: previousData?.duration || "",
//       note: previousData?.note || "",
//     },
//   });

//   const calculateDuration = (fromDate: Date | null, toDate: Date | null) => {
//     if (fromDate && toDate) {
//       const timeDiff = toDate.getTime() - fromDate.getTime();
//       const dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
//       return `${dayDiff + 1} day${dayDiff === 0 ? "" : "s"}`;
//     }
//     return "";
//   };

//   async function onSubmit(data: HolidayFromValues) {
//     try {
//       if (previousData) {
//         await updateHoliday({
//           holidayId: previousData.id,
//           updatedHoliday: data,
//         }).unwrap();
//         toast.success("Holiday updated successfully");
//         modalClose();
//       } else {
//         await createHoliday(data).unwrap();
//         toast.success("Holiday created successfully");
//         modalClose();
//       }
//     } catch (error) {
//       console.log(error);
//       handleErrors(error);
//     }
//   }

//   const handleDatePickerToggle = (type: "fromDate" | "toDate") => {
//     setOpenDatePickers((prev) => {
//       const newState = { ...prev };
//       if (type === "fromDate") {
//         newState.fromDate = !newState.fromDate;
//         newState.toDate = false; // Close To Date if From Date is opened
//         setShowToDateError(false); // Reset To Date error
//       } else {
//         const fromDate = form.getValues("fromDate");
//         if (!fromDate) {
//           setShowToDateError(true); // Show error if trying to open To Date without From Date
//         } else {
//           newState.toDate = !newState.toDate;
//           setShowToDateError(false); // Reset error
//         }
//         newState.fromDate = false; // Close From Date if To Date is opened
//       }
//       return newState;
//     });
//   };

//   return (
//     <>
//       {isLoading || updateLoading ? (
//         <div className="h-56">
//           <Loading />
//         </div>
//       ) : (
//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 mb-auto">
//             <FormField
//               control={form.control}
//               name="holiday_name"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Holiday Name</FormLabel>
//                   <FormControl>
//                     <Input
//                       type="text"
//                       placeholder="Enter holiday name"
//                       {...field}
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="fromDate"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>From Date</FormLabel>
//                   <Popover
//                     open={openDatePickers.fromDate}
//                     onOpenChange={() => handleDatePickerToggle("fromDate")}
//                   >
//                     <PopoverTrigger asChild>
//                       <Button
//                         variant={"outline"}
//                         className={`w-full justify-start text-left font-normal ${
//                           !field.value && "text-muted-foreground"
//                         }`}
//                       >
//                         {field.value ? format(field.value, "PP") : "Pick a date"}
//                         <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
//                       </Button>
//                     </PopoverTrigger>
//                     <PopoverContent className="w-auto p-0" align="start">
//                       <Calendar
//                         mode="single"
//                         selected={field.value ?? undefined}
//                         onSelect={(date) => {
//                           field.onChange(date);
//                           const toDate = form.getValues("toDate");
//                           if (date && toDate) {
//                             const duration = calculateDuration(date, toDate);
//                             form.setValue("duration", duration);
//                           }
//                         }}
//                         initialFocus
//                       />
//                     </PopoverContent>
//                   </Popover>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="toDate"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>To Date</FormLabel>
//                   <Popover
//                     open={openDatePickers.toDate}
//                     onOpenChange={() => handleDatePickerToggle("toDate")}
//                   >
//                     <PopoverTrigger asChild>
//                       <Button
//                         variant={"outline"}
//                         className={`w-full justify-start text-left font-normal ${
//                           !field.value && "text-muted-foreground"
//                         }`}
//                       >
//                         {field.value ? format(field.value, "PP") : "Pick a date"}
//                         <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
//                       </Button>
//                     </PopoverTrigger>
//                     <PopoverContent className="w-auto p-0" align="start">
//                       <Calendar
//                         mode="single"
//                         selected={field.value ?? undefined}
//                         disabled={(date) => {
//                           const fromDate = form.getValues("fromDate");
//                           return !!(fromDate && date < fromDate);
//                         }}
//                         onSelect={(date) => {
//                           field.onChange(date);
//                           const fromDate = form.getValues("fromDate");
//                           if (fromDate && date) {
//                             const duration = calculateDuration(fromDate, date);
//                             form.setValue("duration", duration);
//                           }
//                         }}
//                         initialFocus
//                       />
//                     </PopoverContent>
//                   </Popover>
//                   {showToDateError && (
//                     <p className="text-red-500 text-sm mt-1">
//                       Please select From Date first
//                     </p>
//                   )}
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="duration"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Duration</FormLabel>
//                   <FormControl>
//                     <Input
//                       type="text"
//                       placeholder="Duration"
//                       {...field}
//                       value={field.value || ""}
//                       disabled={true}
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="note"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Note</FormLabel>
//                   <FormControl>
//                     <Input
//                       type="text"
//                       placeholder="Enter note"
//                       {...field}
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <div>
//               <Button variant="default" type="submit" className="w-full mt-4">
//                 Update
//               </Button>
//             </div>
//           </form>
//         </Form>
//       )}
//     </>
//   );
// }





import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { toast } from "sonner";
import {
  HolidayColumn,
  HolidayFormSchema,
  HolidayFromValues,

} from "@/lib/validators";
import { Loading } from "@/components/common/loading";



import {
  useCreateHolidayMutation,
  useUpdateHolidayMutation,
} from "@/store/services/hrm/api/holiday";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ErrorResponse } from "@/types";
import handleErrors from "@/lib/handle-errors";

interface AddHolidayFormProps {
  modalClose: () => void;
  data?: HolidayColumn;
}

export function UpdateHolidayForm({
  modalClose,
  data: previousData,
}: AddHolidayFormProps) {
  const [createHoliday, { isLoading }] = useCreateHolidayMutation();
  const [updateHoliday, { isLoading: updateLoading }] =
    useUpdateHolidayMutation();


  const form = useForm<HolidayFromValues>({
    resolver: zodResolver(HolidayFormSchema),
    defaultValues: {
      name: previousData?.name || "",
      date: previousData?.date?.date || "",
      type: previousData?.type || "Mandatory",

    },
  });

  async function onSubmit(data: HolidayFromValues) {
    try {
      if (previousData) {
        await updateHoliday({
          holidayId: previousData.id,
          updatedHoliday: data,
        }).unwrap();
        toast.success("Holiday updated successfully");
        modalClose();
      } else {
        await createHoliday(data).unwrap();
        toast.success("Holiday created successfully");
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
        <div className="h-56">
          <Loading />
        </div>
      ) : (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-3"
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
                      placeholder="Enter holiday name "
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Type</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value?.toString()}
                      className="flex items-center space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="Mandatory" />
                        </FormControl>
                        <FormLabel className="font-normal">Mandatory</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="Optional" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Optional
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date</FormLabel>
                  <FormControl>
                    <Input type="date" placeholder="Enter date " {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div>
              <Button variant="default" type="submit" className="w-full mt-4">
                {previousData ? "Update" : "Add"}
              </Button>
            </div>
          </form>
        </Form>
      )}
    </>
  );
}
