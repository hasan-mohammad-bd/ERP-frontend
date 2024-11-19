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

export function AddCreditNotes() {
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



  return (
    <>
      <div>
        <div className="flex items-center justify-between mb-4">
          <Heading
            title={"Add Recurring Invoice"}
            description="Manage your sub accounts for you business"
          />
          <Button onClick={() => navigate("/billing/credit-notes")} size={"sm"}>
            Credit Notes
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
                              placeholder="Search suppliers..."
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
                    name="poDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Credit Note</FormLabel>
                        <FormControl>
                          <Input placeholder={"CN-0001"} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
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
                    name="poDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Credit Note Date</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="supplierName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Sales Person</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a Sales Person" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <Input
                              placeholder="Search Sales Person..."
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
                    name="note"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Type Subject." {...field} />
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
                  {/* <FormField
                    control={form.control}
                    name="termsAndConditions"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Add terms and conditions</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Type terms and conditions."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  /> */}
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
                onClick={() => navigate("/billing/invoices")}
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
