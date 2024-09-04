import { Heading } from "@/components/common/heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import { useState } from "react";
import { AddAttendanceForm } from "./components/attendance-form";

export type Tab = "check-in" | "check-out";
export default function CreateAttendance() {
  const [tab, setTab] = useState<Tab>("check-in");
  console.log("🚀 ~ Attendance ~ tab:", tab);
  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <Heading
              title="Attendance"
              description="Manage Attendance for you business"
            />
          </div>
          <Separator />
          {/* <Tabs
            defaultValue="check-in"
            className="max-w-2xl mx-auto flex flex-col items-center py-20 space-y-2"
          >
            <TabsList>
              <TabsTrigger className="bg-green-500 text-white" value="check-in">
                Check In
              </TabsTrigger>
              <TabsTrigger className="bg-red-500 text-white" value="check-out">
                Check Out
              </TabsTrigger>
            </TabsList>
            <TabsContent value="check-in">
              <AddAttendanceForm />
            </TabsContent>
            <TabsContent value="check-out">
              <AddAttendanceForm />
            </TabsContent>
          </Tabs> */}
          <Tabs
            defaultValue={tab}
            onValueChange={(value) => setTab(value as Tab)}
            className="w-[400px] mx-auto"
          >
            <TabsList className="grid w-full grid-cols-2 my-2">
              <TabsTrigger value="check-in">Check In</TabsTrigger>
              <TabsTrigger value="check-out">Check Out</TabsTrigger>
            </TabsList>
            <TabsContent value="check-in">
              <Card>
                <CardHeader>
                  <CardTitle>Check In</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <AddAttendanceForm tab={tab} />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="check-out">
              <Card>
                <CardHeader>
                  <CardTitle>Check Out</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <AddAttendanceForm tab={tab} />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
