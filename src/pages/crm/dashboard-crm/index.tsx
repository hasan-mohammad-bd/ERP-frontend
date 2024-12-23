import React, { useState } from "react";
import {
  CalendarDays,
  CircleCheck,
  CircleDashed,
  ListChecks,
} from 'lucide-react';
import { useGetDashboardCrmQuery } from '@/store/services/crm/api/dashboard-hrm';
import { DashboardCrm } from '@/store/services/crm/api/dashboard-hrm/type';
import { getBackgroundColor } from '@/utils/colors';
import { LeadPieChart } from './lead-pie-chart';
import { RangeBarChart } from './range-bar-chart';
import { Modal } from "@/components/common/modal";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { useGetLeadActivitiesQuery } from "@/store/services/crm/api/lead-activities";
import { format, parseISO } from "date-fns";

const CrmDashboard = () => {
  const pagination = {
    pageIndex: 0,
    pageSize: 1000,
  };
  const { data: dashboardData } = useGetDashboardCrmQuery();

  const [selectedType, setSelectedType] = useState<string>("all");
  const [showModal, setShowModal] = useState(false);
  const [startDate, setStartDate] = useState<string | null>(new Date().toLocaleDateString('en-CA'));
  const [endDate, setEndDate] = useState<string | null>(new Date().toLocaleDateString('en-CA'));

  const crmDashboardData = (dashboardData?.data as DashboardCrm) || [];
  const [activityModalTitle, setActivityModalTitle] = useState("");

  const { data: leadActivitiesData } = useGetLeadActivitiesQuery(
    `per_page=${pagination.pageSize}&page=${pagination.pageIndex + 1}&start_date_time=${startDate}&end_date_time=${endDate}&type=${selectedType !== "all" ? selectedType : ""}`
  );

  const leadActivities = leadActivitiesData?.data || [];

  const handleTodayActivityClick = (type: string, titlePrefix: string) => {
    const today = new Date();
    setStartDate(today.toLocaleDateString('en-CA')); // 'Y-m-d' format
    setEndDate(today.toLocaleDateString('en-CA'));
    setShowModal(true);
    setActivityModalTitle(`${titlePrefix} ${type}`);
    setSelectedType(type);
  };

  const handleTodayCompletedActivityClick = (type: string, titlePrefix: string) => {
    const today = new Date();
    setStartDate(null);
    setEndDate(today.toLocaleDateString('en-CA')); // 'Y-m-d' format
    setShowModal(true);
    setActivityModalTitle(`${titlePrefix} ${type}`);
    setSelectedType(type);
  };

  const handleUpcomingActivityClick = (type: string, titlePrefix: string) => {
    let startDate = new Date();
    startDate.setDate(startDate.getDate() + 1); // Adds 1 day
    setStartDate(startDate.toLocaleDateString('en-CA')); // 'Y-m-d' format
    setEndDate(null);
    setShowModal(true);
    setActivityModalTitle(`${titlePrefix} ${type}`);
    setSelectedType(type);
  };

  const handlePendingActivityClick = (type: string, titlePrefix: string) => {
    let startDate = new Date();
    startDate.setDate(startDate.getDate() + 1); // Adds 1 day
    setStartDate(startDate.toLocaleDateString('en-CA')); // 'Y-m-d' format
    setEndDate(null);
    setShowModal(true);
    setActivityModalTitle(`${titlePrefix} ${type}`);
    setSelectedType(type);
  };



  return (
    <div className='flex h-full flex-col'>
      <div className='flex-1 space-y-4'>
        <div className='flex items-center justify-between space-y-2'>
          <h2 className='text-xl tracking-tight'>CRM Dashboard</h2>
        </div>
        <Tabs defaultValue='overview' className='space-y-4'>
          <TabsContent value='overview' className='space-y-4'>
            <Card className='p-3'>
              <div className='flex justify-between mb-2'>
                <h3 className='text-md '></h3>
              </div>
              <div className='grid gap-3 mb-3 md:grid-cols-1 lg:grid-cols-4'>
                {crmDashboardData?.overviews?.today_activities.map(
                  (activity, index) => (
                    <Card
                      className='p-4'
                      key={index}
                      onClick={() => handleTodayActivityClick(activity.type, "Today's Scheduled")}
                    >
                      <div className='flex items-center'>
                        <div className={`p-2 rounded-md ${getBackgroundColor(index)}`}>
                          <ListChecks size={16} />
                        </div>
                        <div className='ml-3 text-lg font-bold'>
                          <span>{activity.value}</span>
                        </div>
                      </div>
                      <h2 className='mt-2 text-sm'>Today's Scheduled {activity.type}</h2>
                    </Card>
                  )
                )}
              </div>
              <div className='grid gap-3 mb-3 md:grid-cols-1 lg:grid-cols-4'>
                {crmDashboardData?.overviews?.today_completed_activities.map(
                  (activity, index) => (
                    <Card
                      className='p-4'
                      key={index}
                      onClick={() => handleTodayCompletedActivityClick(activity.type, "Today's Completed")}
                    >
                      <div className='flex items-center'>
                        <div className={`p-2 rounded-md ${getBackgroundColor(index)}`}>
                          <CircleCheck size={16} />
                        </div>
                        <div className='ml-3 text-lg font-bold'>
                          <span>{activity.value}</span>
                        </div>
                      </div>
                      <h2 className='mt-2 text-sm'>Today's Completed {activity.type}</h2>
                    </Card>
                  )
                )}
              </div>
              <div className='grid gap-3 mb-3 md:grid-cols-1 lg:grid-cols-4'>
                {crmDashboardData?.overviews?.upcoming_activities.map(
                  (activity, index) => (
                    <Card
                      className='p-4'
                      key={index}
                      onClick={() => handleUpcomingActivityClick(activity.type, "Upcoming")}
                    >
                      <div className='flex items-center'>
                        <div className={`p-2 rounded-md ${getBackgroundColor(index)}`}>
                          <CalendarDays size={16} />
                        </div>
                        <div className='ml-3 text-lg font-bold'>
                          <span>{activity.value}</span>
                        </div>
                      </div>
                      <h2 className='mt-2 text-sm'>Upcoming {activity.type}</h2>
                    </Card>
                  )
                )}
              </div>
              <div className='grid gap-3 mb-3 md:grid-cols-1 lg:grid-cols-4'>
                {crmDashboardData?.overviews?.pending_activities.map(
                  (activity, index) => (
                    <Card
                      className='p-4'
                      key={index}
                      onClick={() => handlePendingActivityClick(activity.type, "Pending")}
                    >
                      <div className='flex items-center'>
                        <div className={`p-2 rounded-md ${getBackgroundColor(index)}`}>
                          <CircleDashed size={16} />
                        </div>
                        <div className='ml-3 text-lg font-bold'>
                          <span>{activity.value}</span>
                        </div>
                      </div>
                      <h2 className='mt-2 text-sm'>Pending {activity.type}</h2>
                    </Card>
                  )
                )}
              </div>
            </Card>
            <div className='grid grid-cols-2 gap-3'>
              {crmDashboardData?.item_wise_lead?.length > 0 && (
                <div className="pb-3 mt-3">
                  <RangeBarChart chartData={crmDashboardData.item_wise_lead} title="Item Wise Lead" dataKey_1="name" />
                </div>
              )}
              {crmDashboardData?.month_wise_lead?.length > 0 && (
                <div className="pb-3 mt-3">
                  <RangeBarChart chartData={crmDashboardData.month_wise_lead} title="Month Wise Lead" dataKey_1="name" />
                </div>
              )}
            </div>
            <div className='grid grid-cols-3 gap-3'>
              <div className="pb-3 mt-3">
                {crmDashboardData?.user_wise_lead?.length > 0 && (
                  <LeadPieChart innerRadius={20} outerRadius={90} title="User Wise Lead" data={crmDashboardData.user_wise_lead} />
                )}
              </div>
              <div className="pb-3 mt-3">
                {crmDashboardData?.stage_wise_lead?.length > 0 && (
                  <LeadPieChart innerRadius={30} outerRadius={90} title="Stage Wise Lead" data={crmDashboardData.stage_wise_lead} />
                )}
              </div>
              <div className="pb-3 mt-3">
                {crmDashboardData?.source_wise_lead?.length > 0 && (
                  <LeadPieChart innerRadius={0} outerRadius={90} title="Source Wise Lead" data={crmDashboardData.source_wise_lead} />
                )}
              </div>
              <div className="pb-3 mt-3">
                {crmDashboardData?.status_wise_lead?.length > 0 && (
                  <LeadPieChart innerRadius={50} outerRadius={90} title="Status Wise Lead" data={crmDashboardData.status_wise_lead} />
                )}
              </div>
              <div className="pb-3 mt-3">
                {crmDashboardData?.label_wise_lead?.length > 0 && (
                  <LeadPieChart innerRadius={60} outerRadius={90} title="Label Wise Lead" data={crmDashboardData.label_wise_lead} />
                )}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {showModal && (
        <Modal
          title={activityModalTitle}
          isOpen={showModal}
          toggleModal={() => setShowModal(false)}
          className="max-w-5xl h-fit"
        >
          <table className="w-full">
            <thead>
              <tr className="border-b text-left text-sm">
                <th className="pb-2 font-medium">SL</th>
                <th className="pb-2 font-medium">ACTIVITY TYPE</th>
                <th className="pb-2 font-medium">CREATED DATE</th>
                <th className="pb-2 font-medium">START AND END TIME</th>
                <th className="pb-2 font-medium">CREATED BY</th>
                <th className="pb-2 font-medium">PARTICIPANTS</th>
                <th className="pb-2 font-medium">OUTCOME</th>
                <th className="pb-2 font-medium">TITLE</th>
              </tr>
            </thead>
            <tbody>
              {leadActivities &&
                leadActivities.map((leadActivity, key) => (
                  <tr key={leadActivity.id} className="text-sm">
                    <td className="py-2">{key + 1}</td>
                    <td className="py-2">{leadActivity?.type}</td>
                    <td className="py-2">{format(parseISO(leadActivity?.created_at), "dd MMM yyyy, hh:mm a")}</td>
                    <td className="py-2">
                      {format(parseISO(leadActivity?.start_date_time), "dd MMM yyyy, hh:mm a")}<br />
                      {format(parseISO(leadActivity?.end_date_time), "dd MMM yyyy, hh:mm a")}
                    </td>
                    <td className="py-2">{leadActivity?.user?.name}</td>
                    <td className="py-2">
                      {leadActivity.participants &&
                        leadActivity.participants.map((participant, key) => (
                          <React.Fragment key={key}>
                            {participant?.name}
                            <br />
                          </React.Fragment>
                        ))}
                    </td>
                    <td className="py-2">{leadActivity?.outcome}</td>
                    <td className="py-2">{leadActivity?.title}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </Modal>
      )}
    </div>
  );
};

export default CrmDashboard;
