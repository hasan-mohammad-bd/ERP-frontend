import { Modal } from "@/components/common/modal";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import SalaryCertificateVoucher from "./components/salary-certificate-boucher";

const SalaryCertificateScreen = () => {
  const [voucherDetailsOpen, setVoucherDetailsOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col h-full justify-center items-center">
        <Button
          size={"sm"}
          className="w-fit"
          onClick={() => setVoucherDetailsOpen(true)}
        >
          <Plus className="mr-2 h-4 w-4" /> Salary Certificate
        </Button>

        <div>
          {voucherDetailsOpen && (
            <Modal
              isOpen={voucherDetailsOpen}
              toggleModal={() => setVoucherDetailsOpen(false)}
              className="max-w-4xl"
            >
              <SalaryCertificateVoucher />
            </Modal>
          )}
        </div>
      </div>
    </>
  );
};

export default SalaryCertificateScreen;
