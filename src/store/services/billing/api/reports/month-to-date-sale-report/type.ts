export type MonthToDateSaleReport = {
  sale_date: string; // Date in "YYYY-MM-DD" format
  daily_sale: string; // Daily sale as a string representing a monetary value
  month_to_date_sale: string; // Month-to-date sale as a string representing a monetary value
  organization: string | null; // Organization name or null if not available
};