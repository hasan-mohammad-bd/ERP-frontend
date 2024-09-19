import EmployeeSalaryDetails from "@/components/common/hrm/entry/employee-salary-details";
import { Modal } from "@/components/common/modal";
import { Button } from "@/components/ui/button";

import { Plus } from "lucide-react";
import { useState } from "react";

const JournalVoucher = () => {
  // const [isOpen, setIsOpen] = useState(false);

  const [addEmplyeeSalaryOpen, setAddEmplyeeSalaryOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4">
          <div className="p-20">
            <Button onClick={() => setAddEmplyeeSalaryOpen(true)} size={"sm"}>
              <Plus className="mr-2 h-4 w-4" /> Add Employee Salary
            </Button>
          </div>

          <Modal
            isOpen={addEmplyeeSalaryOpen}
            toggleModal={() => setAddEmplyeeSalaryOpen(false)}
            className="max-w-3xl h-fit"
          >
            <EmployeeSalaryDetails />
          </Modal>
        </div>
      </div>
    </>
  );
};

export default JournalVoucher;
