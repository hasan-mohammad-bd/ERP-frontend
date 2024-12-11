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

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { zodResolver } from "@hookform/resolvers/zod";
import FormSearchSelect from "@/components/ui/form-items/form-search-select";
import { useGetWarehouseQuery } from "@/store/services/billing/api/warehouse";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { useEffect, useState } from "react";
import {
  ItemRow,
  SetOpeningStockFormValues,
  setOpeningStockSchema,
} from "@/lib/validators/billing/items";
import { Input } from "@/components/ui/input";
import {
  useGetOpeningStockQuery,
  useSetOpeningStockMutation,
} from "@/store/services/billing/api/items";
import { toast } from "sonner";
import { ErrorResponse } from "@/types";
import handleErrors from "@/lib/handle-errors";
import { Loading } from "@/components/common/loading";

interface AddAttributeProps {
  modalClose: () => void;
  data?: ItemRow;
}

export function AddOpeningStockForm({
  modalClose,
  data: item,
}: AddAttributeProps) {
  const { data: warehousesData, isLoading: isWarehousesLoading } =
    useGetWarehouseQuery(`page=1&per_page=1000`);

  const { data: openingStockData } = useGetOpeningStockQuery(
    `page=1&per_page=1000&item_id=${item?.id}`,
    { skip: !item }
  );

  const warehouses = warehousesData?.data || [];
  const openingStocks = openingStockData?.data || [];

  const [setOpeningStock, { isLoading: isSetOpeningStockLoading }] =
    useSetOpeningStockMutation();

  const [openDatePickers, setOpenDatePickers] = useState({
    date: false,
  });

  const handleDatePickerToggle = (type: "date") => {
    setOpenDatePickers((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  const form = useForm<SetOpeningStockFormValues>({
    resolver: zodResolver(setOpeningStockSchema),
    defaultValues: {
      barcodes:
        item?.item_barcode?.map(() => ({
          item_barcode_id: item.id,
          qty: 0,
          price: 0,
        })) || [],
    },
  });

  const warehouse_id = form.watch("warehouse_id");
  const date = form.watch("date");

  const wareHouseStockData = openingStocks.find(
    (openingStock) => openingStock.id === Number(warehouse_id)
  );
  useEffect(() => {
    if (wareHouseStockData) {
      form.reset({
        date: date,
        warehouse_id: warehouse_id,
        barcodes:
          item?.item_barcode?.map(() => ({
            item_barcode_id: item.id,
            qty: wareHouseStockData.qty || 0,
            price: Number(wareHouseStockData.price) || 0,
          })) || [],
      });
    } else {
      form.reset({
        date: date,
        warehouse_id: warehouse_id,
        barcodes:
          item?.item_barcode?.map(() => ({
            item_barcode_id: item.id,
            qty: 0,
            price: 0,
          })) || [],
      });
    }
  }, [form, item, wareHouseStockData]);

  async function onSubmit(data: SetOpeningStockFormValues) {
    try {
      await setOpeningStock(data).unwrap();
      toast.success("Item set opening stock successfully");
      modalClose();
    } catch (error) {
      console.log(error);
      handleErrors(error as ErrorResponse);
    }
    console.log(data);
    modalClose();
  }

  return (
    <>
      {isSetOpeningStockLoading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-1">
              {/* Form Fields */}

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name={`date`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Date</FormLabel>
                      <Popover
                        open={openDatePickers.date}
                        onOpenChange={() => handleDatePickerToggle("date")}
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
                        <PopoverContent
                          className="w-auto p-0 z-[200]"
                          align="start"
                        >
                          <Calendar
                            mode="single"
                            selected={
                              field.value ? new Date(field.value) : undefined
                            }
                            onSelect={(date) => {
                              field.onChange(
                                date ? format(date, "yyyy-MM-dd") : ""
                              );
                            }}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormSearchSelect
                  loading={isWarehousesLoading}
                  data={warehouses}
                  displayField="name"
                  valueField="id"
                  form={form}
                  name="warehouse_id"
                  placeholder="Select Warehouse"
                  title="Warehouse"
                  className="w-full"
                />
              </div>

              <div className="mt-6">
                <Table>
                  <TableHeader className="border rounded">
                    <TableRow>
                      {["Product Name", "Unit Name", "Stock", "Price"].map(
                        (header) => (
                          <TableHead key={header}>{header}</TableHead>
                        )
                      )}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {item?.item_barcode?.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={3} className="text-center py-5">
                          No BarCode Items.
                        </TableCell>
                      </TableRow>
                    ) : (
                      <>
                        {item?.item_barcode.map((itemBarCode, index) => (
                          <TableRow key={index}>
                            <TableCell>
                              {`${item.name} (${itemBarCode.barcode_attribute})`}
                              <br />
                              <span className="text-sm text-gray-500">
                                Barcode: {itemBarCode.barcode}
                              </span>
                            </TableCell>
                            <TableCell>{item.primary_unit.name}</TableCell>

                            <TableCell>
                              <FormField
                                control={form.control}
                                name={`barcodes.${index}.qty`}
                                render={({ field }) => (
                                  <FormItem>
                                    <FormControl>
                                      <Input
                                        placeholder="Enter Stock Number"
                                        {...field}
                                        className="w-32"
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </TableCell>

                            <TableCell>
                              <FormField
                                control={form.control}
                                name={`barcodes.${index}.price`}
                                render={({ field }) => (
                                  <FormItem>
                                    <FormControl>
                                      <Input
                                        placeholder="Enter Price"
                                        {...field}
                                        className="w-32"
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </TableCell>
                          </TableRow>
                        ))}
                      </>
                    )}
                  </TableBody>
                </Table>
              </div>
            </div>

            <div className="text-right">
              <Button
                onClick={() => modalClose()}
                className="mr-2"
                variant="primary"
              >
                Cancel
              </Button>
              <Button variant="default" type="submit" className="w-fit mt-4">
                Add
              </Button>
            </div>
          </form>
        </Form>
      )}
    </>
  );
}
