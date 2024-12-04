import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { EmployeeColumn } from "./validators";

export default function EducationExperienceSkills({
  previousData,
}: {
  previousData: EmployeeColumn;
}) {
  return (
    <div className="space-y-6">
      {previousData.educations && previousData.educations.length > 0 && (
        <ProfileSection
          title="Education"
          data={previousData.educations || []}
          columns={[
            { header: "Education Type", key: "type" },
            { header: "Academy", key: "academy" },
            { header: "Grade", key: "grade" },
            { header: "Start Date", key: "start_date", isDate: true },
            { header: "End Date", key: "end_date", isDate: true },
          ]}
        />
      )}
      {previousData.experiences && previousData.experiences.length > 0 && (
        <ProfileSection
          title="Experience"
          data={previousData.experiences || []}
          columns={[
            { header: "Institution", key: "institution" },
            { header: "Designation", key: "designation" },
            { header: "Start Date", key: "start_date", isDate: true },
            { header: "End Date", key: "end_date", isDate: true },
          ]}
        />
      )}

      {previousData.skills && previousData.skills.length > 0 && (
        <ProfileSection
          title="Skills"
          data={previousData.skills || []}
          columns={[
            { header: "Skill Name", key: "name" },
            { header: "Proficiency Level", key: "type" },
            { header: "Start Date", key: "start_date", isDate: true },
            { header: "End Date", key: "end_date", isDate: true },
          ]}
        />
      )}
    </div>
  );
}

interface Column {
  header: string;
  key: string;
  isDate?: boolean;
}

interface ProfileSectionProps {
  title: string;
  data: any[];
  columns: Column[];
}

function ProfileSection({ title, data, columns }: ProfileSectionProps) {
  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="w-full">
          <Table>
            <TableHeader>
              <TableRow>
                {columns.map((column) => (
                  <TableHead key={column.key} className="min-w-[150px]">
                    {column.header}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((item) => (
                <TableRow key={item.id}>
                  {columns.map((column) => (
                    <TableCell key={`${item.id}-${column.key}`}>
                      {column.isDate ? (
                        <Badge variant="outline">
                          {format(new Date(item[column.key]), "MMM yyyy")}
                        </Badge>
                      ) : (
                        item[column.key]
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
