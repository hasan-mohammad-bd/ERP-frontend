import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Calendar, Save, Trash2 } from "lucide-react";
import { FilterSate } from "..";
import { getDatesInRange } from "@/utils/format-dates";

export default function AttendanceInformation({
  filterData,
}: {
  filterData: FilterSate;
}) {
  // Use date range from filterData
  const [dateRange, setDateRange] = useState<Date[]>([]);

  useEffect(() => {
    const dates = getDatesInRange(filterData.fromDate, filterData.toDate);
    setDateRange(dates);
  }, [filterData]);


  if (!filterData.selectedEmployees.length) {
    return null;
  }

  return (
    <div className="w-full p-6 space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-gray-800">ATTENDANCE INFORMATION</h2>
        <Button className="bg-sky-500 hover:bg-sky-600">
          <Save className="mr-2 h-4 w-4" /> Save All
        </Button>
      </div>
      {filterData.selectedEmployees.map((employee, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center space-x-4 mb-4">
            <div>
              <h3 className="text-lg font-semibold text-sky-500">
                {employee.label}
              </h3>
              <p className="text-sm text-gray-600">Asst. Sales Manager</p>
              <p className="text-sm text-gray-500">
                (Vivasoft sales Head-Office)
              </p>
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="bg-sky-500 text-white">
                  Attendance Date
                </TableHead>
                <TableHead className="bg-sky-500 text-white">Flag</TableHead>
                <TableHead className="bg-sky-500 text-white">In Time</TableHead>
                <TableHead className="bg-sky-500 text-white">
                  InTime Remarks
                </TableHead>
                <TableHead className="bg-sky-500 text-white">
                  Out Time
                </TableHead>
                <TableHead className="bg-sky-500 text-white">
                  Out Time Date
                </TableHead>
                <TableHead className="bg-sky-500 text-white">
                  OutTime Remarks
                </TableHead>
                <TableHead className="bg-sky-500 text-white">
                  Working Hour
                </TableHead>
                <TableHead className="bg-sky-500 text-white">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {dateRange.map((date, index) => {
                const formattedDate = date.toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                  weekday: "short",
                });

                return (
                  <TableRow key={index}>
                    <TableCell>{formattedDate}</TableCell>
                    <TableCell>{/* Add logic for attendance flag */}</TableCell>
                    <TableCell>
                      <Input defaultValue="10:00 AM" className="bg-yellow-50" />
                    </TableCell>
                    <TableCell>
                      <Input placeholder="Enter Remarks" />
                    </TableCell>
                    <TableCell>
                      <Input defaultValue="3:00 PM" className="bg-green-50" />
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Input defaultValue={formattedDate} className="mr-2" />
                        <Calendar className="h-4 w-4 text-gray-400" />
                      </div>
                    </TableCell>
                    <TableCell>
                      <Input placeholder="Enter Remarks" />
                    </TableCell>
                    <TableCell>0:0</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button size="icon" variant="ghost">
                          <Save className="h-4 w-4 text-green-500" />
                        </Button>
                        {index !== 0 && (
                          <Button size="icon" variant="ghost">
                            <Trash2 className="h-4 w-4 text-red-500" />
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      ))}
    </div>
  );
}
