export type salaryAdjustmentFormValues = {
  salary_month: string | null;
  adjustments: {
    employee_id: number;
    allowance_adjustment: number;
    allowance_adjustment_note: string;
    deduction_adjustment: number;
    deduction_adjustment_note: string;
  }[];
};
