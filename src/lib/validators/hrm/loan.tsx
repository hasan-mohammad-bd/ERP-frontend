import { z } from "zod";

export const LoanFormValues = z.object({
  employee_id: z.coerce.number().int().positive(),
  loan_type_id: z.coerce.number().int().positive(),
  subject: z.string().optional(),
  description: z.string().optional(),
  date: z
    .string()
    .refine((value) => !isNaN(Date.parse(value)), {
      message: "Invalid date format",
    }),
  start_date: z
    .string()
    .optional()
    .refine((value) => value === undefined || !isNaN(Date.parse(value)), {
      message: "Invalid start date format",
    }),
  end_date: z
    .string()
    .optional()
    .refine((value) => value === undefined || !isNaN(Date.parse(value)), {
      message: "Invalid end date format",
    }),
  loan_request_amount: z.coerce.number().positive(),
  total_installments: z.coerce.number().int().positive(),
  pay_by: z.enum(["salary", "other"]),
});

export type LoanFormValues = z.infer<typeof LoanFormValues>;

export type LoanRow = {
  id: number;
  subject: string;
  description: string;
  interest_rate: string;
  date: string;
  start_date: string;
  end_date: string;
  loan_request_amount: string;
  refundable_amount: string;
  installment_amount: string;
  total_installments: number;
  paid_installments: number;
  remaining_balance: string;
  disbursed_amount: string;
  approved_amount: string;
  pay_by: string;
  employee: {
    id: number;
    first_name: string;
    last_name: string
  }
  user: {
    id: number;
    name: string;
    username: string;
  };
  organization: {
    id: number;
    name: string;
    title: string;
  };

  approval: {
    id: number;
    sorce_type: string;
    sorce_id: number;
    status: number;
    module: string;
    created_at: string;
  };
};
