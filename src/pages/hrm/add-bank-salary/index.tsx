import { Modal } from "@/components/common/modal";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import BankSalaryVoucher from "./components/bank-salary-boucher";

const AddBankSalary = () => {
  const [voucherDetailsOpen, setVoucherDetailsOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col h-full justify-center items-center">
        <Button
          size={"sm"}
          className="w-fit"
          onClick={() => setVoucherDetailsOpen(true)}
        >
          <Plus className="mr-2 h-4 w-4" /> Add Bank Salary
        </Button>

        <div>
          {voucherDetailsOpen && (
            <Modal
              isOpen={voucherDetailsOpen}
              toggleModal={() => setVoucherDetailsOpen(false)}
              className="max-w-5xl h-fit"
            >
              <BankSalaryVoucher />
            </Modal>
          )}
        </div>
      </div>
    </>
  );
};

export default AddBankSalary;
