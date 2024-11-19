import { Heading } from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { AddSupplierForm } from "./components/add-supplier-form";
import { Separator } from "@/components/ui/separator";

const SupplierAddForm = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <Heading
              title="Supplier Add"
              description="Manage all items for you business"
            />
            <Button onClick={() => navigate("/billing/supplier")} size={"sm"}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Back To All Supplier
            </Button>
          </div>

          <Separator />

          <AddSupplierForm />
        </div>
      </div>
    </>
  );
};

export default SupplierAddForm;
