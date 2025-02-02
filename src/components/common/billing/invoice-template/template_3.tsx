import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { Invoice } from "@/lib/validators/billing/billing-responses";
import { numberToWords } from "@/utils/formate-number";
import PrintPDFWrapper from "../../print-pdf-wrapper";

interface Props {
  invoiceData: any;
  totalDiscount: number;
}

export default function Invoice_template_3({
  invoiceData,
  totalDiscount,
}: Props) {
  console.log(invoiceData);
  return (
    <>
      <Card
        style={{
          padding: "26px",
          margin: "30px",
          border: "1px solid hsl(var(--border))",
        }}
      >
        <PrintPDFWrapper
          className=""
          fileName="due-received-report"
        >
          <div className="max-w-4xl mx-auto p-8 bg-white">
            {/* Header */}
            <div className="flex justify-between items-start mb-8">
              <div className="flex items-center gap-2">
                <img
                  src={
                    invoiceData?.organization?.logo
                      ? invoiceData?.organization?.logo
                      : undefined
                  }
                  alt="AmarSolution Logo"
                  width={60}
                  height={60}
                  className="rounded"
                />
                <div className="text-2xl font-bold text-blue-600">
                  {invoiceData?.organization?.name}
                </div>
              </div>
              <div className="text-4xl font-bold text-blue-600">INVOICE</div>
            </div>

            {/* Company Info & Billing */}
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div className="space-y-1">
                <p>
                  <span className="font-semibold">Address:</span>
                  {invoiceData?.organization?.address}
                </p>
                <p>
                  <span className="font-semibold">Mobile:</span>{" "}
                  {invoiceData?.organization?.phone?.join(", ")}
                </p>
                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  {invoiceData?.organization?.email?.join(", ")}
                </p>
                {/* <p>
            <span className="font-semibold">BIN:</span> {invoiceData?.organization?.address?.join(", ") }
          </p> */}
                <p>
                  <span className="font-semibold">Sold By:</span>{" "}
                  {invoiceData?.organization?.name}
                </p>
              </div>
              <div className="space-y-1">
                <p>
                  <span className="font-semibold">Invoice No:</span>{" "}
                  {invoiceData?.invoice_number}
                </p>
                <p>
                  <span className="font-semibold">Date:</span>{" "}
                  {invoiceData?.date}
                </p>
                <div className="border inline-block px-4 py-1 mb-2">
                  Billing To
                </div>
                <p>
                  <span className="font-semibold">Name:</span>{" "}
                  {invoiceData?.contact?.name}
                </p>
                <p>
                  <span className="font-semibold">Mobile:</span>{" "}
                  {invoiceData?.contact?.phone}
                </p>
              </div>
            </div>

            {/* Items Table */}
            <Card className="mb-8">
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>SL.</TableHead>
                      <TableHead>Item Description</TableHead>
                      <TableHead className="text-right">Price</TableHead>
                      <TableHead className="text-right">Discount</TableHead>
                      <TableHead className="text-right">Quantity</TableHead>
                      <TableHead className="text-right">Total</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {invoiceData?.details.map((item, index) => (
                      <TableRow key={item.id}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>
                          <div>{item?.item?.name}</div>
                          <div className="text-gray-600 text-sm">
                            {item?.item_barcode?.barcode}
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          {item.price}
                        </TableCell>
                        <TableCell className="text-right">
                          {item.discount}
                        </TableCell>
                        <TableCell className="text-right">{item.qty}</TableCell>
                        <TableCell className="text-right">
                          {item.total}
                        </TableCell>
                      </TableRow>
                    ))}
                    <TableRow>
                      <TableCell
                        colSpan={4}
                        className="text-right font-semibold"
                      >
                        Total Qty:
                      </TableCell>

                      <TableCell className="text-right">
                        {invoiceData?.details.reduce(
                          (total, item) => total + item.qty,
                          0
                        )}
                      </TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Totals */}
            <div className="flex justify-end mb-8">
              <div className="w-64 space-y-1">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>Tk. {invoiceData?.sub_total}</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span>Discount:</span>
                  <span>Tk. {totalDiscount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span>Tax:</span>
                  <span>Tk. {invoiceData?.tax}</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span>Shipping Charge:</span>
                  <span>
                    Tk.{" "}
                    {invoiceData?.shipping_charges
                      ? invoiceData?.shipping_charges
                      : 0}
                  </span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span>Total:</span>
                  <span>Tk. {invoiceData?.total}</span>
                </div>
                {/* <div className="flex justify-between text-gray-600">
            <span>Paid:</span>
            <span>Tk. { invoiceData?.}</span>
          </div> */}
              </div>
            </div>

            <div className="text-sm mb-8">
              <p className="font-semibold">
                {numberToWords(invoiceData?.total)}
              </p>
            </div>

            {/* Payment Details */}
            {/*       <p>Payment Details</p>
      <Card className="mb-8 w-2/3">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Sl</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Payment Method</TableHead>
                <TableHead>Payment By</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>{invoiceData?.due_date}</TableCell>
                <TableCell>{invoiceData?.payment_term.}</TableCell>
                <TableCell>-</TableCell>
                <TableCell className="text-right">Tk. 1,900.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={4} className="text-right font-semibold">
                  Total:
                </TableCell>
                <TableCell className="text-right">Tk. 1,900.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card> */}

            {/* Signatures */}
            <div className="flex justify-between mt-16">
              <div className="text-center">
                <div className="border-t border-black w-32"></div>
                <p className="text-sm mt-1">Received By</p>
              </div>
              <div className="text-center">
                <div className="border-t border-black w-32"></div>
                <p className="text-sm mt-1">Authorised By</p>
              </div>
            </div>
          </div>
        </PrintPDFWrapper>
      </Card>
    </>
  );
}
