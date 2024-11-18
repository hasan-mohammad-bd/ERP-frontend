import { Heading } from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { AddCustomerForm } from "./components/add-supplier-form";
import { Separator } from "@/components/ui/separator";

const CustomerAddForm = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <Heading
              title="Customer Add"
              description="Manage all items for you business"
            />
            <Button onClick={() => navigate("/billing/customers")} size={"sm"}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Back To All Customer
            </Button>
          </div>
          <Separator />

          <AddCustomerForm />
        </div>
      </div>
    </>
  );
};

export default CustomerAddForm;
