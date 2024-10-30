export interface attendanceSummary {
    employee_id: number;
    employee_name: string;
    late: number;
    extreme_late: number;
    on_time: number;
    working_days: number;
    present_days: number;
    absent_days: number;
    leaves: {
        total_days: number;
        total_hours: number;
    };
    length: string
}
