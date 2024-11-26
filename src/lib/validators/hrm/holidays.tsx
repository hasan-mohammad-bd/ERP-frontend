import { z } from "zod";

// Define the schema for a single holiday (without id for new entries)
export const holidaySchema = z.object({
  id: z.coerce.number().optional(),
  name: z.string().min(1, "Holiday name is required"),
  start_date: z.date().nullable(), // Changed from z.date() to z.string()
  end_date: z.date().nullable(),
  duration: z.string().optional(), // Optional since it might be calculated
  note: z.string().min(1, "Note is required"),
});

// Main schema for the form, which includes an array of holidays
export const schema = z.object({
  holidays: z.array(holidaySchema),
});

// Infer types from the schemas
export type HolidayFormColumn = z.infer<typeof holidaySchema>; // Holiday without id
export type HolidayFormValues = z.infer<typeof schema>; // Form values type

// Holiday schema with an id (used for existing holiday records)
export const HolidayFormRow = holidaySchema.extend({
  id: z.coerce.number(), // Coerce id to a number, even if it's a string
});

// Infer type for holidays with id
export type HolidayFormRows = z.infer<typeof HolidayFormRow>;
