import {z} from "zod";

export const UsersFormSchema = z.object({
name: z.string().min(2, {
  message: "Name must be at least 2 characters.",
}),
username: z.string().optional().nullable(),
phone: z.string().optional().nullable(),
email: z.string(),
password: z.string()
.min(8, { message: "Password must be at least 8 characters long" })
.regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
.regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
.regex(/[0-9]/, { message: "Password must contain at least one digit" })
.regex(/[@$!%*?&#]/, { message: "Password must contain at least one special character (@$!%*?&#)" }),
password_confirmation: z.string(),

organization_id: z.coerce.number().optional().nullable(),
location_id: z.coerce.number().optional().nullable(),
role_id: z.coerce.number().optional().nullable(),
image: z.string().optional().nullable(),

});

export type UsersFormValues = z.infer<typeof UsersFormSchema>;

export const usersRow = UsersFormSchema.extend({
  id: z.coerce.number(),
})

export type UsersRow = z.infer<typeof usersRow>

