type Schedule = {
  id: number;
  name: string;
  hour: string;
  start_time: string;
  end_time: string;
  sorting_index: number | null;
};

export interface dailyAttendanceReport {
  id: number;
  date: string;
  type: string | null;
  check_in_status: string;
  check_in: string | null;
  late_time: {
    in_minute: number;
    in_hours: string;
  } | null;
  check_out: string | null;
  is_early_exit: boolean | null;
  early_exit_time: number | null;
  duration: {
    in_minute: number;
    in_hours: string;
  } | null;
  calculate_duration: string | null;
  note: string;
  latitude: number | null;
  longitude: number | null;
  employee: {
    id: number;
    department_id: number;
    designation_id: number;
    name: string;
    department: {
      id: number;
      name: string;
      parent_id: number | null;
      // sorting_index: number;
      user_id: number | null;
      organization_id: number | null;
    };
    location: {
      name: string;
    };
    section: {
      name: string;
    };
    designation: {
      id: number;
      name: string;
      // sorting_index: number;
      user_id: number | null;
      organization_id: number | null;
    };
    schedule: Schedule;
  };
}
