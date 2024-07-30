import { EntryRow } from "@/lib/validators/accounts";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { numberToWords } from "@/utils/formate-number";
import { Button } from "@/components/ui/button";
import { File, Printer } from "lucide-react";
import ReactToPrint from "react-to-print";
import { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

interface Props {
  data: EntryRow;
}

const VoucherDetails = ({ data }: Props) => {
  const componentRef = useRef<HTMLDivElement>(null);
  console.log(data);

  const total = data.total as number;

  const handleDownloadPDF = async () => {
    if (!componentRef.current) return;

    const canvas = await html2canvas(componentRef.current);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('voucher-details.pdf');
  };

  return (
    <div ref={componentRef}>
      <div className="p-4">
        <div className="font-bold text-center text-xl">
          {data.organization.name}
        </div>
        <div className="text-center text-lg mb-3">{data.type}</div>
        <div className="text-right text-sm mb-3">
          <div>
            <span className="font-bold">Voucher No:</span> {data.entry_number}
          </div>
          <div>
            <span className="font-bold">Date:</span> {data.date}
          </div>
        </div>
        <div>
          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="">Particulars</TableHead>
                  <TableHead>Debit</TableHead>
                  <TableHead>Credit</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="">
                    {data.details[0]?.account?.name}
                  </TableCell>
                  <TableCell>{data.details[0].dr_amount}</TableCell>
                  <TableCell>{data.details[0].cr_amount}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="">BRACK Bank Limited</TableCell>
                  <TableCell>{data.details[1].dr_amount}</TableCell>
                  <TableCell>{data.details[1].cr_amount}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-right font-bold">Total</TableCell>
                  <TableCell className="font-bold">
                    {data.details[1].total}
                  </TableCell>
                  <TableCell className="font-bold">
                    {data.details[1].total}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>In Words: {numberToWords(total)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="max-w-sm">
                    Remarks: {data.note}{" "}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>

          <div className="grid grid-cols-4 text-sm mt-14 gap-4 text-center">
            <div>Prepared By {data.user.name}</div>
            <div>Checked By</div>
            <div>Authorized By</div>
            <div>Pay By</div>
          </div>
          <div className="flex space-x-2 items-center justify-end mt-8 print:hidden">
            <ReactToPrint
              trigger={() => (
                <Button size="input" variant="outline" className="h-8 lg:flex">
                  Print <Printer className="ml-1" size={16} strokeWidth={1.2} />
                </Button>
              )}
              content={() => componentRef.current}
            />
            <Button variant="outline" size="input" className="h-8 lg:flex" onClick={handleDownloadPDF}>
              PDF <File className="ml-1" size={16} strokeWidth={1.2} />
            </Button>

            {/* <DataTableViewOptions table={table} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoucherDetails;
