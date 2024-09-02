import {z} from "zod";

export const RoleFormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(255, {
      message: "Name must be at most 255 characters.",
    }),
    permissions: z.string().array(),
    organization_id: z.coerce.number().optional().nullable(),

});

export type RoleFormValues = z.infer<typeof RoleFormSchema>;

export const roleRow = RoleFormSchema.extend({
  id: z.coerce.number(),
})

export type RoleRow = z.infer<typeof roleRow>


type permissionRowType = {
  name: string;
  slug: string;
  comment: string | null;
  permissions: permissionRowType[] | null;
};

const permissionRow: z.ZodType<permissionRowType> = z.lazy(() => z.object({
  name: z.string(),
  slug: z.string(),
  comment: z.string().nullable(),
  permissions: z.array(permissionRow).nullable(),
}));

export type PermissionRow = z.infer<typeof permissionRow>; 
