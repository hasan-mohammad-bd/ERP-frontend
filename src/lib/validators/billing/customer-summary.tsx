export type CustomerSummaryType = {
  id: number;
  customer_id: number
  name: string;
  region: string;
  area: string;
  territory: string;
  sales_executive: string;
  sales_target: number;
  previous_due: number;
  sales_value: string;
  sales_return: string;
  net_sales_value: number;
  adjust: number;
  collection_value: string;
  due: number;
  collection_percentage: number;
};


  export type TotalsType = {
    total_sales_target: number;
    total_previous_due: number;
    total_sales_value: number;
    total_sales_return: number;
    total_net_sales_value: number;
    total_adjust: number;
    total_collection_value: number;
    total_due: number;
    collection_percentage: number;
  };
  
