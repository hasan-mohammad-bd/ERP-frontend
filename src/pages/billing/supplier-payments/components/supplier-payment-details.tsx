import { UserIcon, MailIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useParams } from "react-router-dom";

import { useGetSupplierPaymentByIdQuery } from "@/store/services/billing/api/supplier-payments";

export default function SupplierPaymentDetails() {
  const params = useParams();
  const supplierPaymentId = Number(params?.id);

  const { data: InvoiceSingleData } = useGetSupplierPaymentByIdQuery(
    supplierPaymentId,
    {
      skip: !supplierPaymentId,
    }
  );

  const data = InvoiceSingleData && InvoiceSingleData?.data;

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-3xl font-bold">
          Supplier Payment Details
        </CardTitle>
{/*         <img
          src={data?.organization?.logo}
          alt={data?.organization?.name}
          className="h-10 w-auto"
        /> */}
      </CardHeader>
      <CardContent className="grid gap-8">
        {/* Invoice Information */}
        <section>
          <h3 className="text-2xl font-semibold mb-4">Invoice Information</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Invoice Number
              </p>
              <p className="text-lg font-bold">{data?.invoice_number}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Date</p>
              <p>
                {data?.date ? new Date(data?.date).toLocaleDateString() : "N/A"}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Amount</p>
              <p className="text-2xl font-bold text-green-600">
                ${data?.amount?.toFixed(2) || "0.00"}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Note</p>
              <p className="text-gray-600 text-sm">
              {data?.note || "N/A"}
              </p>
            </div>
       
          </div>
        </section>
        <Separator />

        {/* Contact Details */}
        <section>
          <h3 className="text-2xl font-semibold mb-4">Contact Details</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <UserIcon className="inline-block w-5 h-5 mr-2 text-gray-500" />
              {data?.contact?.name || "N/A"}
            </div>
            <div>
              <MailIcon className="inline-block w-5 h-5 mr-2 text-gray-500" />
              {data?.contact?.email || "N/A"}
            </div>
          </div>
        </section>
        <Separator />

        {/* Source Invoice Details */}
        <section>
          <h3 className="text-2xl font-semibold mb-4">
            Invoice Details
          </h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice Number</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Paid Amount</TableHead>
                <TableHead>Due</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data?.details.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <div className="flex flex-col">
                      <span>{item.source?.invoice_number || "N/A"}</span>
                      {/* <span className="text-xs text-gray-500">{item.source?.date ? new Date(item.source?.date).toLocaleDateString() : 'N/A'}</span> */}
                    </div>
                  </TableCell>
                  <TableCell>
                    {item.source?.date
                      ? new Date(item.source?.date).toLocaleDateString()
                      : "N/A"}
                  </TableCell>
                  <TableCell>
                    ${item.source?.total?.toFixed(2) || "0.00"}
                  </TableCell>
                  <TableCell>
                    ${item.source?.paid_amount?.toFixed(2) || "0.00"}
                  </TableCell>
                  <TableCell>
                    ${item.source?.total_due?.toFixed(2) || "0.00"}
                  </TableCell>
                </TableRow>
              ))}

            </TableBody>
          </Table>
        </section>
      </CardContent>
    </Card>
  );
}
