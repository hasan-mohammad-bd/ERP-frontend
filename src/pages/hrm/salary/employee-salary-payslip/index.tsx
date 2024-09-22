import { Button } from "@/components/ui/button";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { File, Printer } from "lucide-react";
import { useRef } from "react";
import ReactToPrint from "react-to-print";
import Payslip from "./components/payslip";
import { Card } from "@/components/ui/card";

const EmployeeSalaryPayslip = () => {
  const componentRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = async () => {
    if (!componentRef.current) return;

    const pdf = new jsPDF("p", "mm", "a4");
    const canvas = await html2canvas(componentRef.current, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("employee-salary-details.pdf");
  };

  return (
    <Card className="flex-1 space-y-4 max-w-4xl mx-auto p-3 pb-4">
      <div className="flex flex-col">
        <div ref={componentRef}>
          <Payslip />
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

        </div>
      </div>
    </Card>
  );
};

export default EmployeeSalaryPayslip;
