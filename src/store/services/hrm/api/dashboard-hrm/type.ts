export interface dashboardHrm {
  employee: {
    total_employee: number;
    new_employee: string;
  };
  // employee_month: string; // Assuming array with unknown structure

  employee_month: {
    count: number;
    month: number;
    month_short: string;
  }[];

  departments: {
    id: number;
    name: string;
    employees_count: number;
  }[]; // Updated departments type to match API data structure
  locations: {
    id: number;
    name: string;
    employees_count: number;
  }[];
  organizations: {
    id: number;
    name: string;
    employees_count: number;
  }[];
  genders: {
    id: number;
    name: string;
    employees_count: number;
  }[];
  leaves_today: string; // Assuming array with unknown structure
  leaves_today_count: number;
  upcoming_birthdays: string; // Assuming array with unknown structure
  employee_age_group: {
    age_60_plus: string;
    age_40_to_60: string;
    age_20_to_40: string;
    age_10_to_20: string;
    age_less_than_10: string;
  };
  employee_service_life: {
    years_10_plus: string;
    years_5_to_10: string;
    years_2_to_5: string;
    years_0_to_2: string;
    less_than_1_year: string;
  };
  todays_present:number;
  employee_anniversary: string; // Assuming array with unknown structure
}
