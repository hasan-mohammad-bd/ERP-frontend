import { Card } from "@/components/ui/card";
import SalaryCertificateVoucher from "./components/salary-certificate-boucher";

const SalaryCertificateScreen = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <Card className="flex-1 space-y-4 max-w-4xl mx-auto p-3 pb-4">
        <SalaryCertificateVoucher />
      </Card>
    </div>
  );
};

export default SalaryCertificateScreen;
