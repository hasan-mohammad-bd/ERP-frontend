import { Card } from '@/components/ui/card'
import { Tabs, TabsContent } from '@/components/ui/tabs'
import {
  CalendarDays,
  CircleCheck,
  CircleDashed,
  ListChecks,
} from 'lucide-react'

import { useGetDashboardCrmQuery } from '@/store/services/crm/api/dashboard-hrm'
import { DashboardCrm } from '@/store/services/crm/api/dashboard-hrm/type'
import { getBackgroundColor } from '@/utils/colors'
import { LeadPieChart } from './lead-pie-chart'
import { RangeBarChart } from './range-bar-chart'

const CrmDashboard = () => {
  const { data } = useGetDashboardCrmQuery()
  const crmDashboardData = (data?.data as DashboardCrm) || []
  return (
    <div className='flex h-full flex-col'>
      <div className='flex-1 space-y-4'>
        <div className='flex items-center justify-between space-y-2'>
          <h2 className='text-xl tracking-tight'>CRM Dashboard</h2>
          <div className='flex items-center space-x-2'></div>
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
                    <Card className='p-4' key={index}>
                      <div className='flex items-center'>
                        <div className={`p-2 rounded-md ${getBackgroundColor(index)}`}>
                          <ListChecks size={16} />
                        </div>
                        <div className='ml-3 text-lg font-bold'>
                          <span>{activity.value}</span>
                        </div>
                      </div>
                      <h2 className='mt-2 text-sm'>
                        Today's Scheduled {activity.type}
                      </h2>
                    </Card>
                  )
                )}
              </div>
              <div className='grid gap-3 mb-3 md:grid-cols-1 lg:grid-cols-4'>
                {crmDashboardData?.overviews?.today_completed_activities.map(
                  (activity, index) => (
                    <Card className='p-4' key={index}>
                      <div className='flex items-center'>
                        <div className={`p-2 rounded-md ${getBackgroundColor(index)}`}>
                          <CircleCheck size={16} />
                        </div>
                        <div className='ml-3 text-lg font-bold'>
                          <span>{activity.value}</span>
                        </div>
                      </div>
                      <h2 className='mt-2 text-sm'>
                        Today's Completed {activity.type}
                      </h2>
                    </Card>
                  )
                )}
              </div>
              <div className='grid gap-3 mb-3 md:grid-cols-1 lg:grid-cols-4'>
                {crmDashboardData?.overviews?.upcoming_activities.map(
                  (activity, index) => (
                    <Card className='p-4' key={index}>
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
                    <Card className='p-4' key={index}>
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
                  <LeadPieChart innerRadius={20} outerRadius={90}title="User Wise Lead" data={crmDashboardData.user_wise_lead} />
                )}
              </div>
              <div className="pb-3 mt-3">
                {crmDashboardData?.stage_wise_lead?.length > 0 && (
                  <LeadPieChart innerRadius={30} outerRadius={90}title="Stage Wise Lead" data={crmDashboardData.stage_wise_lead} />
                )}
              </div>
              <div className="pb-3 mt-3">
                {crmDashboardData?.source_wise_lead?.length > 0 && (
                  <LeadPieChart innerRadius={0} outerRadius={90}title="Source Wise Lead" data={crmDashboardData.source_wise_lead} />
                )}
              </div>
              <div className="pb-3 mt-3">
                {crmDashboardData?.status_wise_lead?.length > 0 && (
                  <LeadPieChart innerRadius={50} outerRadius={90}title="Status Wise Lead" data={crmDashboardData.status_wise_lead} />
                )}
              </div>
              <div className="pb-3 mt-3">
                {crmDashboardData?.label_wise_lead?.length > 0 && (
                  <LeadPieChart innerRadius={60} outerRadius={90}title="Label Wise Lead" data={crmDashboardData.label_wise_lead} />
                )}
              </div>

            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default CrmDashboard
