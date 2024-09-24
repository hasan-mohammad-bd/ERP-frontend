import { Heading } from "@/components/common/heading";
import { Separator } from "@/components/ui/separator";
import SalarySheetFilters from "./components/salary-sheet-filters";
import { Card } from "@/components/ui/card";
import SalarySheetTable from "./components/salary-sheet-table";
import departmentsData from "./components/department-data";

export default function SalarySheet() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <Heading
          title="Salary Sheet"
          description="Manage job apply for you business"
        />
      </div>
      <Separator />
      <SalarySheetFilters
        modalClose={function (): void {
          throw new Error("Function not implemented.");
        }}
      />

      <Card className="p-4">
        <div className="flex flex-col items-center capitalize mb-8">
          <h3 className="text-lg font-semibold">
            habiganj Agriculture Univercity
          </h3>
          <p>Habiganj - 3300.</p>
          <p>Salary Bill ( Teachers, Officers and Staff ) January, 2023</p>
        </div>
        <div className="rounded-md overflow-hidden">
          <SalarySheetTable data={departmentsData} />
        </div>
      </Card>
    </div>
  );
}
