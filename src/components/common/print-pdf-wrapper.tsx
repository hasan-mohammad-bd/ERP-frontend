import { Button } from "@/components/ui/button";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { File, Printer } from "lucide-react";
import { useRef } from "react";
import ReactToPrint from "react-to-print";
import { cn } from "@/utils";

interface PrintPDFProps {
  children: React.ReactNode;
  fileName?: string;
  className?: string;
  landscape?: boolean; // New prop to control orientation
}

const PrintPDFWrapper = ({
  children,
  fileName,
  className = "",
  landscape = false, // Default is portrait
}: PrintPDFProps) => {
  const componentRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = async () => {
    if (!componentRef.current) return;

    // Hide elements with the class 'hide-in-pdf'
    const hiddenElements =
      componentRef.current.querySelectorAll<HTMLElement>(".hide-in-pdf");
    hiddenElements.forEach((el) => (el.style.display = "none"));

    // Set orientation dynamically
    const pdf = new jsPDF({
      orientation: landscape ? "landscape" : "portrait",
      unit: "mm",
      format: "a4",
    });

    const canvas = await html2canvas(componentRef.current, {
      scale: 2, // Reduce scale to lower image resolution
      useCORS: true,
    });

    const imgData = canvas.toDataURL("image/jpeg", 1);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const canvasHeight = canvas.height * (pdfWidth / canvas.width);
    let heightLeft = canvasHeight;
    let y = 0;

    pdf.addImage(
      imgData,
      "JPEG",
      0,
      y,
      pdfWidth,
      Math.min(pdfHeight, heightLeft)
    );
    heightLeft -= pdfHeight;

    while (heightLeft > 0) {
      y = y - pdfHeight;
      pdf.addPage();
      pdf.addImage(
        imgData,
        "JPEG",
        0,
        y,
        pdfWidth,
        Math.min(pdfHeight, heightLeft)
      );
      heightLeft -= pdfHeight;
    }

    pdf.save(`${fileName || "file"}-${Date.now()}.pdf`);

    // Restore hidden elements
    hiddenElements.forEach((el) => (el.style.display = ""));
  };

  return (
    <div className={cn("flex-1 w-full mx-auto")}>
      <div className="flex space-x-2 items-center justify-end print:hidden px-4 pt-4">
        <ReactToPrint 
          trigger={() => (
            <Button size="input" variant="outline" className="h-8 lg:flex">
              Print <Printer className="ml-1" size={16} strokeWidth={1.2} />
            </Button>
          )}
          content={() => componentRef.current}
          pageStyle={landscape ? "@page { size: A4 landscape; }" : ""}
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
      <div className={cn("p-4", className)} ref={componentRef}>{children}</div>
    </div>
  );
};

export default PrintPDFWrapper;
