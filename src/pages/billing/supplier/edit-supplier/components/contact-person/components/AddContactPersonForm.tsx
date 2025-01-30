import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  contactPersonsFormSchema,
  ContactPersonsFormValues,
} from "@/lib/validators/billing/contact-persons";
import {
  useCreateContactPersonMutation,
  useUpdateContactPersonMutation,
} from "@/store/services/billing/api/contact-person";
import { ErrorResponse } from "@/types";
import handleErrors from "@/lib/handle-errors";
import { toast } from "sonner";
import { Loading } from "@/components/common/loading";
import { CustomerColumn } from "@/lib/validators/billing/customer-supplier";
import { useEffect } from "react";

interface AddContactPersonProps {
  modalClose: () => void;
  customer_id: number;
  data?: CustomerColumn;
}

const AddContactPersonForm = ({
  modalClose,
  customer_id,
  data: previousData,
}: AddContactPersonProps) => {
  const [createContactPerson, { isLoading: isCreating }] =
    useCreateContactPersonMutation();
  const [updateContactPerson, { isLoading: isUpdating }] =
    useUpdateContactPersonMutation();

  console.log(previousData);

  const form = useForm<ContactPersonsFormValues>({
    resolver: zodResolver(contactPersonsFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      note: "",
      contact_id: customer_id,
    },
  });

  useEffect(() => {
    if (previousData) {
      form.reset({
        ...previousData,
        contact_id: customer_id,
      });
    }
  }, [customer_id, form, previousData]);

  const onSubmit = async (data: ContactPersonsFormValues) => {
    try {
      if (previousData) {
        console.log(previousData.id);
        await updateContactPerson({
          contactPersonId: previousData?.id,
          updatedContactPerson: data,
        }).unwrap();
        toast.success("Contact person updated successfully");
        modalClose();
      } else {
        await createContactPerson(data).unwrap();
        toast.success("Contact person added successfully");
        modalClose();
      }
    } catch (error) {
      handleErrors(error as ErrorResponse);
    }
  };

  return (
    <>
      {isCreating || isUpdating ? (
        <Loading />
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            {/* Name field */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Enter name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Email field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter email address"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Mobile number field */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mobile Number</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Enter mobile number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Note field */}
            <FormField
              control={form.control}
              name="note"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Note</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter your note" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-row-reverse items-center pt-5">
              <Button variant="default" type="submit" className="w-fit ml-2">
                Save
              </Button>
              <Button
                variant="primary"
                type="button"
                className="w-fit"
                onClick={() => modalClose()}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Form>
      )}
    </>
  );
};

export default AddContactPersonForm;
