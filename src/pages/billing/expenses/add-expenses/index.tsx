import { Heading } from "@/components/common/heading";
import { Separator } from "@radix-ui/react-dropdown-menu";
import AddExpensesForm from "./components/add-expenses-form";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Expenses = () => {
  const navigate = useNavigate();
  // const [isOpen, setIsOpen] = useState(false);
  //   const [pagination, setPagination] = React.useState<PaginationState>({
  //     pageIndex: 0,
  //     pageSize: 10,
  //   });

  //   const { data, isLoading } = useGetLeaveTypesQuery(
  //     `per_page=${pagination.pageSize}&page=${pagination.pageIndex + 1}`
  //   );

  //   const leaveType = data?.data || [];
  //   console.log(leaveType)
  //   const paginationInfo: PaginationInfo | undefined = data?.meta;

  //   if (isLoading) return <Loading />;

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <Heading
              title="Expenses"
              description="Manage job apply for you business"
            />
            <Button onClick={() => navigate("/billing/expenses")} size={"sm"}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Back To All Expenses
            </Button>
          </div>
          <Separator />

        </div>
      </div>

      <AddExpensesForm />
    </>
  );
};

export default Expenses;
