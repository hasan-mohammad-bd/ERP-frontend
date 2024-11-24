import { Heading } from "@/components/common/heading";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import EditExpensesForm from "./components/edit-expenses-form";

const EditExpense = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <Heading
              title="Edit Expense"
              description="Manage job apply for you business"
            />
            <Button onClick={() => navigate("/billing/expenses")} size={"sm"}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Back To All Expenses
            </Button>
          </div>
          <Separator />
        </div>
      </div>
      <EditExpensesForm />
    </>
  );
};

export default EditExpense;
