import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import {
  LedgerFromValues,
  LedgerGroupArrayRow,
  LedgerRow,
  LedgerSchema,
} from "@/lib/validators/accounts";
import { Loading } from "@/components/common/loading";
import {
  useCreateLedgerAccountMutation,
  useUpdateLedgerAccountMutation,
} from "@/store/services/accounts/api/ledger-account";
import { Switch } from "@/components/ui/switch";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useGetLedgerGroupsArrayQuery } from "@/store/services/accounts/api/ledger-group";
import { useGetEnumQuery } from "@/store/services/accounts/api/enum";
import handleErrors from "@/lib/handle-errors";
import { ErrorResponse } from "@/types";

interface AddLedgerFormProps {
  modalClose: () => void;
  rowData?: LedgerRow;
  coaType?: string;
}

export function AddLedgerForm({
  modalClose,
  rowData: previousData,
}: // coaType,
AddLedgerFormProps) {
  const [createLedgerAccount, { isLoading }] = useCreateLedgerAccountMutation();
  const [updateLedgerAccount, { isLoading: isUpdateledgerLoading }] =
    useUpdateLedgerAccountMutation();
  const [isSubTypeTrue, setIsSubTypeTrue] = React.useState(
    previousData?.is_sub_type ? 1 : 0
  );
  /*   const [updateLedgerGroup, { isLoading: updateLoading }] =
    useUpdateLedgerGroupMutation(); */

  const { data: ledgerGroupsArray, isLoading: ledgerGroupsArrayLoading } =
    useGetLedgerGroupsArrayQuery();
  const { data, isLoading: enumLoading } = useGetEnumQuery();

  const account_nature = data?.account_nature || [];

  // const [parentType, setParentType] = useState("Assets");

  const ledgerGroupData = ledgerGroupsArray?.data || [];

  // console.log(ledgerGroupData);

  // const filterLedgerGroupData = ledgerGroupData?.filter(
  //   (ledger_group: LedgerGroupArrayRow) => {
  //     return ledger_group?.type === parentType;
  //   }
  // );

  const form = useForm<LedgerFromValues>({
    resolver: zodResolver(LedgerSchema),
    defaultValues: {
      name: previousData?.name || "",
      parent_id: previousData?.parent_id,
      is_sub_type: previousData?.is_sub_type ? 1 : 0,
      sub_type:
        previousData?.sub_type &&
        ["None", "Employee", "Customer", "Supplier", "Agent"].includes(
          previousData.sub_type
        )
          ? (previousData.sub_type as
              | "None"
              | "Employee"
              | "Customer"
              | "Supplier"
              | "Agent")
          : "None",
      // sub_type: previousData?.sub_type || "None",
      nature: previousData?.nature || "",
      code: previousData?.code || "",
    },
  });

  // const selectedType = form.watch("parent_id");
  // const filteredType = ledgerGroupData?.filter(
  //   (ledger_group: LedgerGroupArrayRow) => ledger_group?.id == selectedType
  // );

  async function onSubmit(data: LedgerFromValues) {
    const validSubType =
      data.sub_type &&
      ["None", "Employee", "Customer", "Supplier", "Agent"].includes(
        data.sub_type
      )
        ? data.sub_type
        : "None"; // Fallback value if invalid
    try {
      if (previousData) {
        await updateLedgerAccount({
          ledgerAccountId: previousData?.id,
          updatedLedgerAccount: {
            ...previousData,
            ...data,
            sub_type: validSubType,
          }, // Use the validated sub_type
        }).unwrap();
        toast.success("Update ledger account successfully");
        modalClose();
      } else {
        await createLedgerAccount(data).unwrap();
        toast.success("Add ledger account successfully");
        modalClose();
      }
      // }
    } catch (error) {
      toast.error("error.data.message");
      handleErrors(error as ErrorResponse);
      console.log(error, "dsadasd");
    }
  }

  return (
    <>
      {isLoading || isUpdateledgerLoading ? (
        <div className="h-56">
          <Loading />
        </div>
      ) : (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-3"
          >
            {/* {previousData?.id && (
              <div>
                <span className="font-semibold">Parent:</span>{" "}
                {previousData?.name}
              </div>
            )} */}

            {/* {!previousData?.id && ( */}
            <>
              <FormField
                control={form.control}
                name="parent_id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Parent Group</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={
                        previousData?.parent_id?.toString()
                          ? previousData?.parent_id?.toString()
                          : undefined
                      }
                      disabled={previousData?.id ? true : false}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Parent" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {ledgerGroupsArrayLoading ? (
                          <Loading />
                        ) : (
                          ledgerGroupData
                            ?.filter(
                              (item) =>
                                item?.name !== "Assets" &&
                                item?.name !== "Liabilities" &&
                                item?.name !== "Equity" &&
                                item?.name !== "Expenses" &&
                                item?.name !== "Income"
                            )
                            .map((parent: LedgerGroupArrayRow) => (
                              <SelectItem
                                key={parent.id}
                                value={String(parent.id)}
                              >
                                {parent.name}
                              </SelectItem>
                            ))
                        )}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Account Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter ledger account name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Code</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter code"
                        {...field}
                        // value={previousData?.code || ""}
                        value={field.value || ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/*                 <FormField
                  // control={}
                  name=""
                  render={() => (
                    <FormItem>
                      <FormLabel>Account Type</FormLabel>
                      <Select
                        value={parentType}
                        onValueChange={(value) => {
                          setParentType(value);
                        }}
                        // defaultValue={"Assets"}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Account Type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Assets">Assets</SelectItem>
                          <SelectItem value="Liabilities">
                            Liabilities
                          </SelectItem>
                          <SelectItem value="Income">Incomes</SelectItem>
                          <SelectItem value="Expenses">Expenses</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                /> */}
            </>
            {/* )} */}

            <FormField
              control={form.control}
              name="nature"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Default Account Type</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={previousData?.nature || ""}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Parent" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {enumLoading ? (
                        <Loading />
                      ) : (
                        account_nature.map(
                          (enumValue: string, index: number) => (
                            <SelectItem
                              key={index}
                              value={enumValue.toString()}
                            >
                              {enumValue.toString()}
                            </SelectItem>
                          )
                        )
                      )}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="is_sub_type"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                  <div className="space-y-0.5">
                    <FormLabel>Is Sub Type</FormLabel>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value === 1}
                      onCheckedChange={(checked: boolean) => {
                        field.onChange(checked ? 1 : 0);
                        setIsSubTypeTrue(checked ? 1 : 0);
                      }}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {isSubTypeTrue === 1 && (
              <FormField
                control={form.control}
                name="sub_type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Sub Type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={previousData?.sub_type || "None"}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value={"None"}>None</SelectItem>
                        <SelectItem value={"Employee"}>Employee</SelectItem>
                        <SelectItem value={"Customer"}>Customer</SelectItem>
                        <SelectItem value={"Supplier"}>Supplier</SelectItem>
                        <SelectItem value={"Agent"}>Agent</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <div>
              <Button variant="default" type="submit" className="w-full mt-4">
                {previousData ? "Update Account" : "Add Account"}
              </Button>
            </div>
          </form>
        </Form>
      )}
    </>
  );
}
