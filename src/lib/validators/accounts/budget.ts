

import { z } from "zod";
import {  entryTypeSchema } from "./entry";
import { locationColumn, organizationColumn } from "@/lib/validators";
import { usersRow } from "../web/users";
import { projectRow } from "./projects";



export const budgetSchema = z.object({
  // type: z.string(),
  name: z.string(),
  start_date: z.string().date(),
  end_date: z.string().date(),
  project_id: z.coerce.number().optional().nullable(),
  
  location_id: z.coerce.number().optional().nullable(),
  details: entryTypeSchema.array(),
  note: z.string(),


});

export type BudgetFromValues = z.infer<typeof budgetSchema>

export const budgetRow = budgetSchema.extend({
  id: z.coerce.number(),
  dr_amount: z.coerce.number(),
  cr_amount: z.coerce.number(),
  total: z.coerce.number(),
  location: locationColumn,
  user: usersRow,
  organization: organizationColumn,
  project: projectRow



})

export type BudgetRow = z.infer<typeof budgetRow>

