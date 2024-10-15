import { Button } from "@/components/ui/button";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { File, Printer } from "lucide-react";
import { useRef } from "react";
import ReactToPrint from "react-to-print";
import { Card } from "@/components/ui/card";
import { cn } from "@/utils";

interface PrintPDFProps {
  children: React.ReactNode;
  fileName?: string;
  className?: string;
}

const PrintPDFWrapper = ({ children, fileName, className = "" }: PrintPDFProps) => {
  const componentRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = async () => {
    if (!componentRef.current) return;
  
    // Hide elements with the class 'hide-in-pdf'
    const hiddenElements = componentRef.current.querySelectorAll<HTMLElement>(".hide-in-pdf");
    hiddenElements.forEach((el) => (el.style.display = "none"));
  
    const pdf = new jsPDF("p", "mm", "a4");
  
    const canvas = await html2canvas(componentRef.current, { 
      scale: 2,  // Reduce scale to lower image resolution
      useCORS: true,
    });
  
    const imgData = canvas.toDataURL("image/jpeg", 1);  // Use JPEG with quality 0.75
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
  
    const canvasHeight = canvas.height * (pdfWidth / canvas.width);
    let heightLeft = canvasHeight;
    let y = 0;
  
    pdf.addImage(imgData, "JPEG", 0, y, pdfWidth, Math.min(pdfHeight, heightLeft));
    heightLeft -= pdfHeight;
  
    while (heightLeft > 0) {
      y = y - pdfHeight;
      pdf.addPage();
      pdf.addImage(imgData, "JPEG", 0, y, pdfWidth, Math.min(pdfHeight, heightLeft));
      heightLeft -= pdfHeight;
    }
  
    pdf.save(`${fileName || "file"}-${Date.now()}.pdf`);
  
    // Restore hidden elements
    hiddenElements.forEach((el) => (el.style.display = ""));
  };

  return (
    <Card className="flex-1 space-y-4 w-full mx-auto pb-4">
      <div className={cn("p-4", className)} ref={componentRef}>
        {children}
      </div>
      <div className="flex space-x-2 items-center justify-end px-4 pt-6 print:hidden">
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
    </Card>
  );
};

export default PrintPDFWrapper;
