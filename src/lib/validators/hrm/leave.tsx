import { z } from "zod";

export const leaveTypeSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  short_code: z.string({
    required_error: "Short code is required",
  }),
  maternity_leave: z.number(),
  unpaid_leave: z.number(),
});

export type LeaveTypeFormValues = z.infer<typeof leaveTypeSchema>;

export const leaveTypeRow = leaveTypeSchema.extend({
  id: z.coerce
    .number()
    .int()
    .min(0, {
      message: "Id must be at least 0.",
    })
    .max(9999, {
      message: "Id must be at most 9999.",
    }),
})

export type LeaveTypeRow = z.infer<typeof leaveTypeRow>;
