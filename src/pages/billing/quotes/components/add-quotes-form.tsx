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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// import { toast } from "sonner";

import { ScrollArea } from "@/components/ui/scroll-area";

// search

import { useState } from "react";
import SearchProduct from "./search-product";
import FileUpload from "@/components/common/file-uploader";
import Calculation from "./calculation";

const suppliers = [
  { id: "1", name: "Acme Corp" },
  { id: "2", name: "Globex Corporation" },
  { id: "3", name: "Soylent Corp" },
  { id: "4", name: "Initech" },
  { id: "5", name: "Umbrella Corporation" },
];

export function AddQuoteForm() {
  const navigate = useNavigate();
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  console.log(uploadedFiles);
  const form = useForm<any>({
    // resolver: zodResolver(openingBalanceSchema),
    defaultValues: {},
  });

  async function onSubmit(data: any) {
    console.log(data);
  }

  const filteredSuppliers = suppliers.filter((supplier) =>
    supplier.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // to conduct search

  /*   const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      Papa.parse(file, {
        complete: (result) => {
          const newProducts: Product[] = result.data
            .slice(1) // Skip header row
            .map((row: any, index) => ({
              id: (allProducts.length + index + 1).toString(),
              name: row[0],
              barcode: row[1],
              stock: row[2],
              purchasePrice: parseFloat(row[3]),
              sellingPrice: parseFloat(row[4]),
              ppp: parseFloat(row[5]),
              pMrp: parseFloat(row[6]),
              quantity: 1,
              subTotal: parseFloat(row[4]), // Assuming selling price as initial subtotal
              discount: 0,
              total: parseFloat(row[4]) // Assuming selling price as initial total
            }))
          setAllProducts(prev => [...prev, ...newProducts])
        },
        header: true,
        skipEmptyLines: true
      })
    })
  }, [allProducts]) */

  return (
    <>
      <div>
        <div className="flex items-center justify-between mb-4">
          <Heading
            title={"Add Quote"}
            description="Manage your sub accounts for you business"
          />
          <Button onClick={() => navigate("/billing/quotes")} size={"sm"}>
            Quotes List
          </Button>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-3 mb-4  overflow-y-scroll no-scrollbar"
          >
            <div className="">
              <Card className="p-3">
                <div className="grid grid-cols-3 gap-4">
                  <FormField
                    control={form.control}
                    name="supplierName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Customer Name</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a customer" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <Input
                              placeholder="Search customer..."
                              className="mb-2"
                              value={searchTerm}
                              onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <ScrollArea className="h-[200px]">
                              {filteredSuppliers.map((supplier) => (
                                <SelectItem
                                  key={supplier.id}
                                  value={supplier.id}
                                >
                                  {supplier.name}
                                </SelectItem>
                              ))}
                            </ScrollArea>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="poNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Quote</FormLabel>
                        <FormControl>
                          <Input placeholder="Quote-0001" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/*                   <FormField
                    control={form.control}
                    name="poDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>PO Date</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  /> */}

                  <FormField
                    control={form.control}
                    name="reference"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Reference</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter reference" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="deliveryDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Quote Date</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="paymentTerms"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Expire Date</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="paymentTerms"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Sales Person</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select Sells person" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <Input
                              placeholder="Search items..."
                              className="mb-2"
                              value={searchTerm}
                              onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <ScrollArea className="h-[200px]">
                              {filteredSuppliers.map((supplier) => (
                                <SelectItem
                                  key={supplier.id}
                                  value={supplier.id}
                                >
                                  {supplier.name}
                                </SelectItem>
                              ))}
                            </ScrollArea>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="paymentTerms"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project Name</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select Project" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <Input
                              placeholder="Search Items"
                              className="mb-2"
                              value={searchTerm}
                              onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <ScrollArea className="h-[200px]">
                              {filteredSuppliers.map((supplier) => (
                                <SelectItem
                                  key={supplier.id}
                                  value={supplier.id}
                                >
                                  {supplier.name}
                                </SelectItem>
                              ))}
                            </ScrollArea>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="Type Subject." {...field} />
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
                        <FormLabel>Customer Note</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Type Subject." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="termsAndConditions"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Terms and conditions</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Type terms and conditions."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="space-y-2">
                    <FormLabel>Upload Files</FormLabel>
                    <FileUpload
                      setFilesToUpload={setUploadedFiles}
                      filesToUpload={uploadedFiles}
                      // uploadedFiles={previousData?.files}
                      // onDeleteSuccess={() => refetch()}
                    />
                  </div>
                </div>
              </Card>
            </div>
            {/* product Search */}
            <Card className="mb-4">
              <SearchProduct />
            </Card>
            {/* calculation */}
            <div className="flex justify-end">
              <Calculation />
            </div>
            <div className="text-right">
              <Button
                onClick={() => navigate("/billing/quotes")}
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
      </div>
    </>
  );
}
