import { Card } from "@/components/ui/card";
import BankSalaryVoucher from "./components/bank-salary-boucher";

const BankSalaryAdvice = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <Card className="flex-1 space-y-4 max-w-4xl mx-auto p-3 pb-4">
        <BankSalaryVoucher />
      </Card>
    </div>
  );
};

export default BankSalaryAdvice;
