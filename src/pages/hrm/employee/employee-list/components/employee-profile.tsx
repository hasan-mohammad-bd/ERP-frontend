import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";

import { useGetEmployeeByIdQuery } from "@/store/services/hrm/api/employee-list";
import { useNavigate, useParams } from "react-router-dom";
import { AddressColumnForProfile } from "./address-filed-details";
import { MapPin } from "lucide-react";
import EducationExperienceSkills from "./education-skill-experience-prifile";
import NomineeInformation from "./nominee-filed-details";
import { Button } from "@/components/ui/button";

export default function EmployeeProfile() {
  const params = useParams();
  const navigate = useNavigate();
  const { data: dataById } = useGetEmployeeByIdQuery(`${params.id}`);
  const previousData = dataById?.data;
  console.log(previousData);
  const {
    email,
    first_name,
    last_name,
    phone,
    corporate_phone,
    joining_date,
    bank_name,
    bank_branch,
    account_number,
    fathers_name,
    mothers_name,
    machine_id,
    marital_status,
    card_id,
    image,
    employee_unique_id,
  } = previousData || {};
  return (
    <div className="container mx-auto py-6">
            <div className="flex justify-end">
      <Button className="mb-4 " onClick={() => navigate("/hrm/employees-list")}>Back</Button>
      </div>
      <Card className="w-full mx-auto">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-col items-center gap-4">
              <Avatar className="w-32 h-32">
                <AvatarImage alt="Profile picture" src={image || ""} />
                <AvatarFallback>{`${first_name}${last_name}`}</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <h2 className="text-2xl font-bold">{`${first_name} ${last_name}`}</h2>
                <p className="text-sm text-muted-foreground">{email}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Employee ID: {employee_unique_id}
                </p>
              </div>
            </div>
            <ScrollArea className="flex-1 h-[600px] w-full rounded-md border p-4">
              <div className="space-y-6">
                <section>
                  <h3 className="text-lg font-semibold mb-4">
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first_name">First Name</Label>
                      <Input id="first_name" value={first_name} readOnly />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last_name">Last Name</Label>
                      <Input id="last_name" value={last_name} readOnly />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" value={phone} readOnly />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="corporate_phone">Corporate Phone</Label>
                      <Input
                        id="corporate_phone"
                        value={corporate_phone || ""}
                        readOnly
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="fathers_name">Father's Name</Label>
                      <Input
                        id="fathers_name"
                        value={fathers_name || ""}
                        readOnly
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="mothers_name">Mother's Name</Label>
                      <Input
                        id="mothers_name"
                        value={mothers_name || ""}
                        readOnly
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="marital_status">Marital Status</Label>
                      <Input
                        id="marital_status"
                        value={marital_status || ""}
                        readOnly
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="blood_group">Blood Group</Label>
                      <Input
                        id="blood_group"
                        value={previousData?.blood_group?.name || ""}
                        readOnly
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="religion">Religion</Label>
                      <Input
                        id="religion"
                        value={previousData?.religion?.name || ""}
                        readOnly
                      />
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-4">
                    Employment Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="joining_date">Joining Date</Label>
                      <Input
                        id="joining_date"
                        type="date"
                        value={joining_date}
                        readOnly
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="machine_id">Machine ID</Label>
                      <Input
                        id="machine_id"
                        value={machine_id || ""}
                        readOnly
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="department">Department</Label>
                      <Input
                        id="department"
                        value={previousData?.department?.name || ""}
                        readOnly
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="designation">Designation</Label>
                      <Input
                        id="designation"
                        value={previousData?.designation?.name || ""}
                        readOnly
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        value={previousData?.location?.name || ""}
                        readOnly
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="workplace">Work Place</Label>
                      <Input
                        id="workplace"
                        value={previousData?.work_place?.name || ""}
                        readOnly
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="schedule">Schedule</Label>
                      <Input
                        id="schedule"
                        value={previousData?.schedule?.name || ""}
                        readOnly
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="section">Section</Label>
                      <Input
                        id="section"
                        value={previousData?.section?.name || ""}
                        readOnly
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="employee-class">Employee Class</Label>
                      <Input
                        id="employee-class"
                        value={previousData?.employee_class?.name || ""}
                        readOnly
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="employee-grade">Employee Grade</Label>
                      <Input
                        id="employee-grade"
                        value={previousData?.employee_grade?.name || ""}
                        readOnly
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="employment-status">
                        Employment Status
                      </Label>
                      <Input
                        id="employment-status"
                        value={previousData?.employment_status?.name || ""}
                        readOnly
                      />
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-4">
                    Financial Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="bank_name">Bank Name</Label>
                      <Input id="bank_name" value={bank_name || ""} readOnly />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bank_branch">Bank Branch</Label>
                      <Input
                        id="bank_branch"
                        value={bank_branch || ""}
                        readOnly
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="account_number">Account Number</Label>
                      <Input
                        id="account_number"
                        value={account_number || ""}
                        readOnly
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="card_id">Card ID</Label>
                      <Input id="card_id" value={card_id || ""} readOnly />
                    </div>
                  </div>
                </section>
              </div>
            </ScrollArea>
          </div>
        </CardContent>
      </Card>
      {/* <CardContent className="p-6"> */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {previousData?.present_address && (
          <Card className="p-6 mt-4">
            <AddressColumnForProfile
              title="Present Address"
              icon={<MapPin className="h-5 w-5 text-muted-foreground" />}
              data={previousData?.present_address}
              idPrefix="present"
            />
          </Card>
        )}
        {previousData?.permanent_address && (
          <Card className="p-6 mt-4">
            <AddressColumnForProfile
              title="Permanent Address"
              icon={<MapPin className="h-5 w-5 text-muted-foreground" />}
              data={previousData?.permanent_address}
              idPrefix="permanent"
            />
          </Card>
        )}
      </div>
      {/* </CardContent> */}
      {previousData && (
        <EducationExperienceSkills
          previousData={{
            ...previousData,
            location_id: parseInt(previousData.location_id, 10),
          }}
        />
      )}

      {previousData?.employee_nominee && (
        <NomineeInformation nomineeData={previousData?.employee_nominee} />
      )}

     
    </div>
  );
}
