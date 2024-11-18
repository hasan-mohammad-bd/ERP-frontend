import { Heading } from "@/components/common/heading";
import {
  Table,
  TableBody,

  TableCell,

  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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

import { useEffect, useState } from "react";
// import SearchProduct from "./search-product";
import FileUpload from "@/components/common/file-uploader";
// import Calculation from "./calculation";

const suppliers = [
  { id: "1", name: "Acme Corp" },
  { id: "2", name: "Globex Corporation" },
  { id: "3", name: "Soylent Corp" },
  { id: "4", name: "Initech" },
  { id: "5", name: "Umbrella Corporation" },
];

const purchaseOrdersToReceive = [
  {
    poNumber: "PO-2345",
    id: "PO-2345-001",
    products: [
      {
        id: "PRD-001",
        name: "Laptop",
        description: "15-inch display, 16GB RAM, 512GB SSD",
        ordered: 10,
        received: 8,
        inTransit: 2,
        barcode: "1234567890",
        stock: "10 Piece",
        purchasePrice: 800,
        sellingPrice: 1000,
        ppp: 900,
        pMrp: 1100,
        quantity: 1,
        subTotal: 1000,
        discount: 0,
        total: 1000,
      },
    ],
  },
  {
    poNumber: "PO-2346",
    id: "PO-2346-001",
    products: [
      {
        id: "PRD-002",
        name: "Smartphone",
        description: "6.5-inch screen, 128GB storage, 12MP camera",
        ordered: 20,
        received: 15,
        inTransit: 5,
        barcode: "0987654321",
        stock: "20 Piece",
        purchasePrice: 400,
        sellingPrice: 500,
        ppp: 450,
        pMrp: 550,
        quantity: 1,
        subTotal: 500,
        discount: 0,
        total: 500,
      },
      {
        id: "PRD-003",
        name: "Headphones",
        description: "Wireless, Noise-Cancelling",
        ordered: 30,
        received: 30,
        inTransit: 0,
        barcode: "1122334455",
        stock: "30 Piece",
        purchasePrice: 50,
        sellingPrice: 80,
        ppp: 65,
        pMrp: 90,
        quantity: 1,
        subTotal: 80,
        discount: 0,
        total: 80,
      },
    ],
  },
  {
    poNumber: "PO-2347",
    id: "PO-2347-001",
    products: [
      {
        id: "PRD-004",
        name: "Laptop",
        description: "15-inch display, 16GB RAM, 512GB SSD",
        ordered: 10,
        received: 10,
        inTransit: 0,
        barcode: "1234567890",
        stock: "10 Piece",
        purchasePrice: 800,
        sellingPrice: 1000,
        ppp: 900,
        pMrp: 1100,
        quantity: 1,
        subTotal: 1000,
        discount: 0,
        total: 1000,
      },
      {
        id: "PRD-005",
        name: "Smartphone",
        description: "6.5-inch screen, 128GB storage, 12MP camera",
        ordered: 20,
        received: 18,
        inTransit: 2,
        barcode: "0987654321",
        stock: "20 Piece",
        purchasePrice: 400,
        sellingPrice: 500,
        ppp: 450,
        pMrp: 550,
        quantity: 1,
        subTotal: 500,
        discount: 0,
        total: 500,
      },
      {
        id: "PRD-006",
        name: "Headphones",
        description: "Wireless, Noise-Cancelling",
        ordered: 30,
        received: 25,
        inTransit: 5,
        barcode: "1122334455",
        stock: "30 Piece",
        purchasePrice: 50,
        sellingPrice: 80,
        ppp: 65,
        pMrp: 90,
        quantity: 1,
        subTotal: 80,
        discount: 0,
        total: 80,
      },
    ],
  },
];

export function AddPurchaseReceiveForm() {
  const navigate = useNavigate();
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  console.log(uploadedFiles);

  const form = useForm<any>({
    // resolver: zodResolver(openingBalanceSchema),
    defaultValues: {},
  });
  const [selectedProducts, setSelectedProducts] = useState<any>([]);


  useEffect(() => {
    const selectedPurchaseOrderProduct = purchaseOrdersToReceive.find(
      (purchaseOrder) => purchaseOrder.poNumber === form.watch("poNumber")
    );
    setSelectedProducts(selectedPurchaseOrderProduct?.products || []);
  }, [form.watch("poNumber")]);

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
            title={"Add Purchase Receive"}
            description="Manage your sub accounts for you business"
          />
          <Button
            onClick={() => navigate("/billing/purchase-receive")}
            size={"sm"}
          >
            Purchase Receive List
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
                        <FormLabel>Supplier Name</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a supplier" />
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
                    name="poNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Purchase Order</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select purchase order" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <Input
                              placeholder="Search purchase orders..."
                              className="mb-2"
                              value={searchTerm}
                              onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <ScrollArea className="h-[200px]">
                              {purchaseOrdersToReceive.map((purchaseOrder) => (
                                <SelectItem
                                  key={purchaseOrder.id}
                                  value={purchaseOrder.poNumber}
                                >
                                  {purchaseOrder.poNumber}
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
                    name="prNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Purchase Receive</FormLabel>
                        <FormControl>
                          <Input placeholder="PR-0001" {...field} />
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
                        <FormLabel>Receive Date</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
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
                        <FormLabel>Add a note</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Type your message here."
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
            <Card className="mb-4 w-3/5 mx-auto">
              <Table>
                <TableHeader className="bg-gray-100">
                  <TableRow>
                    <TableHead className="">item/description</TableHead>
                    <TableHead className="">Order</TableHead>
                    <TableHead>Receive</TableHead>
                    <TableHead className="text-right">In Transit</TableHead>
                    <TableHead className="text-right">
                      Order to Receive
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {selectedProducts.map((product: any) => (
                    <TableRow key={product.id}>
                      <TableCell className="font-medium">
                        {product.name}
                      </TableCell>
                      <TableCell>{product.ordered}</TableCell>
                      <TableCell>{product.received}</TableCell>
                      <TableCell className="text-right">
                        {product.inTransit}
                      </TableCell>
                      <TableCell className="text-right flex justify-end">
                        <Input
                          className="w-20"
                          placeholder="001"
                          type="number"
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>

            <div className="text-right">
              <Button
                onClick={() => navigate("/billing/purchase-receive")}
                className="mr-2"
                variant="primary"
              >
                Cancel
              </Button>
              <Button variant="default" type="submit" className="w-fit mt-4">
                Received
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
}
