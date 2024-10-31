import { locationColumn } from "@/lib/validators";
import {z} from "zod";


const adminSchema = z.object({
  id: z.coerce.number().nullable(),
  name: z.string().nullable(),
  username: z.string().nullable(),
  image: z.string().url(),
  phone: z.string().nullable(),
  email: z.string().nullable(),
  organization_id: z.coerce.number().nullable(),
  location_id: z.coerce.number().nullable(),
  role_id: z.coerce.number().nullable(),
});

const levelSchema = z.object({
  level: z.coerce.number(),
  admin_ids: z.array(z.coerce.number()),
  admins: z.array(adminSchema),
});

export const approvalGroupSchema = z.object({
  id: z.coerce.number().nullable(),
  name: z.string(),
  type: z.string(),
  status: z.coerce.number(),
  level_count: z.coerce.number(),
  location_id: z.coerce.number().nullable(),
  location: locationColumn,
  levels: z.array(levelSchema),
  // created_at: z.string().datetime(),
});




// export type ApprovalFormValues = z.infer<typeof approvalGroupSchema>;

export const approvalGroupRow = approvalGroupSchema

export type ApprovalGroupRow = z.infer<typeof approvalGroupRow>;

//schema for Details

const MemberSchema = z.object({
  id: z.number(),
  name: z.string(),
  username: z.string(),
  image: z.string().url(),
  phone: z.string(),
  email: z.string().email(),
  organization_id: z.number(),
  location_id: z.number().nullable(),
  role_id: z.number(),
});

const OrganizationSchema = z.object({
  id: z.number(),
  name: z.string(),
  title: z.string(),
  logo: z.string().url(),
  banner: z.string().url(),
  phone: z.array(z.string()),
  email: z.array(z.string().email()),
  address: z.array(z.string()),
  website: z.array(z.string().url()),
  g_map: z.array(z.string()),
  data: z.unknown().nullable(),
  parent_id: z.number().nullable(),
  sorting_index: z.number().nullable(),
  created_at: z.string().datetime(),
});

const LevelSchema = z.object({
  level: z.number(),
  admin_ids: z.array(z.number()),
  admins: z.array(MemberSchema),
});

const detailsSchema = z.object({
  id: z.number(),
  name: z.string(),
  type: z.string(),
  status: z.number(),
  level_count: z.number(),
  location_id: z.number().nullable(),
  location: z.unknown().nullable(),
  members: z.array(MemberSchema),
  user: z.unknown().nullable(),
  organization: OrganizationSchema,
  levels: z.array(LevelSchema),
  created_at: z.string().datetime(),
});

export type DetailsApprovalGroupRow = z.infer<typeof detailsSchema>; 

//for update / create

const LevelSchema2 = z.object({
  level: z.coerce.number(),
  admin_ids: z.array(z.coerce.number()),
});

export const approvalGroupsSchema = z.object({
  name: z.string(),
  type: z.string(),
  location_id: z.coerce.number().nullable(),
  membars: z.array(z.number()),
  level_count: z.coerce.number(),
  levels: z.array(LevelSchema2),
});

export type ApprovalGroupFormValues = z.infer<typeof approvalGroupsSchema>;