import { z } from "zod";

//leave type
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
});

export type LeaveTypeRow = z.infer<typeof leaveTypeRow>;

//leave group
const leave = z.object({
  leave_type_id: z.string(),
  leave_count: z.coerce.number(),
});

export const leaveGroupSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  leave: z.array(leave),

});

export type LeaveGroupFormValues = z.infer<typeof leaveGroupSchema>;

const leave_group_types = z.object({
  leave_type: leaveTypeRow,
  id: z.coerce.number(),
  leave_count: z.coerce.number(),
});
export const leaveGroupRow = leaveGroupSchema.extend({
  id: z.coerce.number(),
  leave_group_types: z.array(leave_group_types),
}).omit({ leave: true });

export type LeaveGroupRow = z.infer<typeof leaveGroupRow>;


//leave request 

