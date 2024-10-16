// import { z } from "zod";


// export const supplierSchema = z.object({
//   name: z.string().min(2, {
//     message: "Name must be at least 2 characters.",
//   }),

// });

// export type SupplierFormValues = z.infer<typeof supplierSchema>;

// export const supplierRow = supplierSchema.extend({
//   id: z.coerce
//     .number()
//     .int()
//     .min(0, {
//       message: "Id must be at least 0.",
//     })
//     .max(9999, {
//       message: "Id must be at most 9999.",
//     }),
// });

// export type SupplierRow = z.infer<typeof supplierRow>;



import { z } from "zod";

export const supplierSchema = z.object({
   name: z.string().min(2, {
         message: "Name must be at least 2 characters.",
       }),
  company_name: z.string().min(2, {
    message: "Company name must be at least 2 characters.",
  }),
  company_id: z.coerce
    .number()
    .int()
    .min(0, {
      message: "Company ID must be at least 0.",
    })
    .max(9999, {
      message: "Company ID must be at most 9999.",
    }),
  work_phone: z.string().min(10, {
    message: "Work phone must be at least 10 characters.",
  }),
  mobile_number: z.string().min(10, {
    message: "Mobile number must be at least 10 characters.",
  }),
  email: z
    .string()
    .email({ message: "Invalid email address." }),
  opening_balance: z.coerce.number().min(0, {
    message: "Opening balance must be at least 0.",
  }),
  date: z.date({
    invalid_type_error: "Invalid date format.",
  }),
  note: z.string().optional(),

  suppliers: z.array(
    z.object({
      name: z.string().min(2, { message: "Name must be at least 2 characters." }),
      email: z.string().email({ message: "Invalid email address." }),
      mobile_number: z.string().min(10, { message: "Mobile number must be at least 10 characters." }),
      note: z.string().optional(),
    })
  ),


});

export type SupplierFormValues = z.infer<typeof supplierSchema>;

export const supplierRow = supplierSchema.extend({
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

export type SupplierRow = z.infer<typeof supplierRow>;
