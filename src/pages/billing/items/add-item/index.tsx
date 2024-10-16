import { Heading } from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";
import ItemAddForm from "./components/item-add-form";

export default function Items() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4">
        <div className="flex items-center justify-between">
          <Heading
            title="Add Item"
            description="Manage all items for you business"
          />
          <Button onClick={() => navigate("/billing/items")} size={"sm"}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Back To All Items
          </Button>
        </div>
        <Separator />
        <ItemAddForm />
      </div>
    </div>
  );
}
