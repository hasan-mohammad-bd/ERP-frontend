import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { EntryRow } from "@/lib/validators/accounts";
import { numberToWords } from "@/utils/formate-number";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { File, Printer } from "lucide-react";
import { useRef } from "react";
import ReactToPrint from "react-to-print";

interface Props {
  data: EntryRow;
}

const VoucherDetails = ({ data }: Props) => {
  const componentRef = useRef<HTMLDivElement>(null);
  const total = data.total as number;
  // console.log(data.organization);

  const handleDownloadPDF = async () => {
    if (!componentRef.current) return;

    const pdf = new jsPDF("p", "mm", "a4");
    const canvas = await html2canvas(componentRef.current, {
      scale: 2, // Reduce scale to lower image resolution
      useCORS: true,
    });
    const imgData = canvas.toDataURL("image/jpeg", 1); // Use JPEG with quality 0.75
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);
    // pdf.save("voucher-details.pdf");
    pdf.save(`${data?.entry_number}-voucher-details.pdf`);
  };

  return (
    <div>
      <div ref={componentRef}>
        <div className="p-7">
          <div className="flex items-start justify-center relative">
            <div className="absolute left-0 top-0 h-[80px] max-w-[180px]">
              {data?.organization?.logo && (
                <img
                  src={data?.organization?.logo}
                  alt=""
                  className="w-full h-full object-contain"
                />
              )}
            </div>
            <div className="text-center mb-2">
              <div className="font-bold text-center text-xl">
                {data?.organization?.name}
              </div>
              <div className="text-sm w-full whitespace-nowrap">
                <div>
                  {/* Address: House 51C Road-13/B, Dhaka 1230 */}
                  {data?.organization?.address?.join(". ")}
                </div>{" "}
                <div className="">
                  Phone: {data?.organization?.phone?.join(", ")}
                </div>
              </div>
              <span className="text-sm">
                Website: {data?.organization?.website}
              </span>
              <div className="text-center text-base my-3 border border-spacing-1 w-fit mx-auto !py-2 px-4 rounded-full">
                {data.type === "Receipt Voucher"
                  ? "Received Voucher"
                  : data.type}
              </div>
            </div>
          </div>

          <div className="text-right text-sm mb-3">
            <div className="flex justify-between items-start">
              <div>
                {data?.project?.name && (
                  <div>
                    <span className="font-bold">Project:</span>{" "}
                    {data.project.name}
                  </div>
                )}
              </div>
              <div>
                <div>
                  <span className="font-bold">Voucher No:</span>{" "}
                  {data?.entry_number}
                </div>
                <div>
                  <span className="font-bold">Date:</span> {data.date}
                </div>
              </div>
            </div>
          </div>
          <div>
            <Card>
              <Table className="border border-black">
                <TableHeader className="border border-black">
                  <TableRow className="border border-black h-0">
                    <TableHead className="border border-black py-[5px] h-0">
                      SL.
                    </TableHead>
                    <TableHead className="border border-black py-[5px] h-0">
                      Account No.
                    </TableHead>
                    <TableHead className="border border-black py-[5px] h-0">
                      Account Code.
                    </TableHead>
                    <TableHead className="border border-black py-[5px] h-0">
                      Contact
                    </TableHead>
                    {/* <TableHead className="border border-black">
                      Particulars
                    </TableHead> */}

                    <TableHead className="border border-black py-[5px] h-0">
                      Description
                    </TableHead>

                    <TableHead className="border border-black py-[5px] h-0">
                      Debit
                    </TableHead>
                    <TableHead className="border border-black py-[5px] h-0">
                      Credit
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="border border-black">
                  {data.details.map((data, index) => {
                    return (
                      <TableRow className="border border-black " key={index}>
                        {/* <TableCell className="border border-black">
                          {index + 1}
                        </TableCell> */}

                        <TableCell className="border border-black py-[5px]">
                          {index + 1}{" "}
                        </TableCell>

                        <TableCell className="border border-black py-[5px]">
                          {data?.account?.name}
                        </TableCell>
                        <TableCell className="border border-black py-[5px]">
                          {data?.account?.code}
                        </TableCell>
                        <TableCell className="border border-black py-[5px] ">
                          {data?.contact?.name}
                        </TableCell>

                        <TableCell className="border border-black py-[5px]">
                          {data?.note}
                        </TableCell>

                        <TableCell className="border border-black py-[5px]">
                          {data.dr_amount.toLocaleString("en-IN")}
                        </TableCell>
                        <TableCell className="border border-black py-[5px]">
                          {data.cr_amount.toLocaleString("en-IN")}
                        </TableCell>
                      </TableRow>
                    );
                  })}

                  <TableRow className="border border-black bg-gray-100">
                    <TableCell
                      //dynamic colspan
                      colSpan={5}
                      // colSpan={TableCell.length -3 }
                      className="text-right font-bold border border-black py-[5px]"
                    >
                      Total
                    </TableCell>
                    <TableCell
                      colSpan={2}
                      className="font-bold border border-black py-[5px]"
                    >
                      {data.total?.toLocaleString("en-IN")}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border border-black">
                    <TableCell colSpan={5} className="py-[5px]">
                      <span className="font-bold">In Words:</span>{" "}
                      {numberToWords(total)}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border border-black">
                    <TableCell colSpan={5} className="max-w-sm py-[5px]">
                      <span className="font-bold"> Remarks: </span>
                      {data.note}{" "}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>

            <div className="flex items-end justify-evenly text-sm mt-20  text-center">
              <div>
                <div className="font-bold flex flex-col">
                  {data?.user?.name}{" "}
                </div>
                <div>Prepared By </div>
              </div>
              <div>Received By</div>
              <div>Accounts</div>
              <div>
                <div></div>
                <div>Checked By</div>
              </div>
              <div>Approved By</div>
            </div>
          </div>
        </div>
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
        <Button
          variant="outline"
          size="input"
          className="h-8 lg:flex"
          onClick={handleDownloadPDF}
        >
          PDF <File className="ml-1" size={16} strokeWidth={1.2} />
        </Button>

        {/* <DataTableViewOptions table={table} /> */}
      </div>
    </div>
  );
};

export default VoucherDetails;
