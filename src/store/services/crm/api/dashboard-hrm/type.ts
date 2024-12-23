export interface DashboardCrm {
  overviews: {
    today_activities: Activity[];
    today_completed_activities: Activity[];
    upcoming_activities: Activity[];
    pending_activities: Activity[];
  };
  user_wise_lead: LeadPieChartType[];
  stage_wise_lead: LeadPieChartType[];
  source_wise_lead: LeadPieChartType[];
  label_wise_lead: LeadPieChartType[];
  item_wise_lead: LeadPieChartType[];
  month_wise_lead: LeadPieChartType[];
  status_wise_lead: LeadPieChartType[];
}

interface Activity {
  type: string;
  value: number;
}
interface LeadPieChartType {
  id: number;
  name: string;
  lead_count: number;
  lead_percentage: string;
}