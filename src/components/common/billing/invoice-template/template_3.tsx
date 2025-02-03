import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import PrintPDFWrapper from "../../print-pdf-wrapper";
import { numberToWords } from "@/utils/formate-number";
import { useAuth } from "@/store/hooks";

interface Props {
  invoiceData: any;
  totalDiscount: number;
}

export default function Invoice_template_3({
  invoiceData,
  totalDiscount,
}: Props) {
  const { user } = useAuth();
  return (
    <Card className="p-4 m-4 border">
      <PrintPDFWrapper fileName="due-received-report">
        <div className="max-w-3xl mx-auto p-4 bg-white text-xs">
          {/* Header */}
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-2">
              {user?.organization?.logo && (
                <img
                  src={user?.organization?.logo}
                  alt="ERP Logo"
                  className="rounded h-12 object-contain"
                />
              )}
            </div>
            <div className="text-2xl font-bold text-primary">INVOICE</div>
          </div>

          {/* Company Info & Billing */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="space-y-1">
              <p className="truncate">
                <span className="font-medium">Address: </span>
                {invoiceData?.organization?.address}
              </p>
              <p>
                <span className="font-medium">Mobile: </span>
                {invoiceData?.organization?.phone?.join(", ")}
              </p>
              <p>
                <span className="font-medium">Email: </span>
                {invoiceData?.organization?.email?.join(", ")}
              </p>
              <p>
                <span className="font-medium">Sold By: </span>
                {invoiceData?.organization?.name}
              </p>
            </div>
            <div className="space-y-1">
              <p>
                <span className="font-medium">Invoice No: </span>
                {invoiceData?.invoice_number}
              </p>
              <p>
                <span className="font-medium">Date: </span>
                {invoiceData?.date}
              </p>
              <div className="border inline-block px-2 py-0.5 mb-1 text-xs">
                Billing To
              </div>
              <p>
                <span className="font-medium">Name: </span>
                {invoiceData?.contact?.name}
              </p>
              <p>
                <span className="font-medium">Mobile: </span>
                {invoiceData?.contact?.phone}
              </p>
            </div>
          </div>

          {/* Items Table */}
          <Card className="mb-4">
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-transparent">
                    <TableHead className="h-8 px-2 py-1">SL.</TableHead>
                    <TableHead className="h-8 px-2 py-1">Item Description</TableHead>
                    <TableHead className="h-8 px-2 py-1 text-right">Price</TableHead>
                    <TableHead className="h-8 px-2 py-1 text-right">Discount</TableHead>
                    <TableHead className="h-8 px-2 py-1 text-right">Qty</TableHead>
                    <TableHead className="h-8 px-2 py-1 text-right">Total</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {invoiceData?.details.map((item: any, index: number) => (
                    <TableRow key={item.id} className="hover:bg-transparent">
                      <TableCell className="px-2 py-1">{index + 1}</TableCell>
                      <TableCell className="px-2 py-1">
                        <div>{item?.item?.name}</div>
                        <div className="text-gray-600 text-2xs">
                          {item?.item_barcode?.barcode}
                        </div>
                      </TableCell>
                      <TableCell className="px-2 py-1 text-right">{item.price}</TableCell>
                      <TableCell className="px-2 py-1 text-right">{item.discount}</TableCell>
                      <TableCell className="px-2 py-1 text-right">{item.qty}</TableCell>
                      <TableCell className="px-2 py-1 text-right">{item.total}</TableCell>
                    </TableRow>
                  ))}
                  <TableRow className="hover:bg-transparent">
                    <TableCell colSpan={4} className="px-2 py-1 text-right font-medium">
                      Total Qty:
                    </TableCell>
                    <TableCell className="px-2 py-1 text-right">
                      {invoiceData?.details.reduce(
                        (total: number, item: any) => total + item.qty,
                        0
                      )}
                    </TableCell>
                    <TableCell className="px-2 py-1"></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Totals */}
          <div className="flex justify-end mb-4">
            <div className="w-56 space-y-1">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>Tk. {invoiceData?.sub_total}</span>
              </div>
              <div className="flex justify-between">
                <span>Discount:</span>
                <span>Tk. {totalDiscount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax:</span>
                <span>Tk. {invoiceData?.tax}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span>Tk. {invoiceData?.shipping_charges || 0}</span>
              </div>
              <div className="flex justify-between font-medium border-t pt-1">
                <span>Total:</span>
                <span>Tk. {invoiceData?.total}</span>
              </div>
            </div>
          </div>

          <div className="text-xs mb-4">
            <p className="font-medium">
              {numberToWords(invoiceData?.total)}
            </p>
          </div>

          {/* Signatures */}
          <div className="flex justify-between mt-8">
            <div className="text-center">
              <div className="border-t border-black w-24 mx-auto"></div>
              <p className="text-2xs mt-1">Received By</p>
            </div>
            <div className="text-center">
              <div className="border-t border-black w-24 mx-auto"></div>
              <p className="text-2xs mt-1">Authorised By</p>
            </div>
          </div>
        </div>
      </PrintPDFWrapper>
    </Card>
  );
}