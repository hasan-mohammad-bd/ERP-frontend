// import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray, FieldValue } from "react-hook-form";
import { useEffect, useState } from "react";
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
  LocationColumn,
  // EmployeeColumn,
} from "@/lib/validators";
import { Loading } from "@/components/common/loading";
import { Card, CardTitle } from "@/components/ui/card";
import { Plus, Trash2 } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import handleErrors from "@/lib/handle-errors";
import { ErrorResponse } from "@/types";
import {
  useCreateApprovalGroupMutation,
  useGetApprovalGroupByIdQuery,
  useGetCatalogQuery,
  useUpdateApprovalGroupMutation,
} from "@/store/services/erp-main/api/approval-groups";
import {
  ApprovalGroupFormValues,
  approvalGroupsSchema,
  // DetailsApprovalGroupRow,
  // approvalGroupSchema,
} from "@/lib/validators/web/approval-group";
import { useGetLocationsQuery } from "@/store/services/erp-main/api/location";
import FormSearchSelect from "@/components/ui/form-items/form-search-select_DEPRECATED";
import MultipleSelector, { Option } from "@/components/ui/multiSelectSearch";
// import { useGetEmployeesQuery } from "@/store/services/hrm/api/employee-list";
import { useGetUsersQuery } from "@/store/services/erp-main/api/users";
import { UsersRow } from "@/lib/validators/web/users";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedEmployeeAction } from "@/store/services/erp-main/slices/commonSlice";
import { zodResolver } from "@hookform/resolvers/zod";

interface Catalog {
  name: string;
  id: number;
}
export function AddApprovalGroups() {
  const dispatch = useDispatch();
  const [createApprovalGroup, { isLoading }] = useCreateApprovalGroupMutation();
  const [updateApprovalGroup, { isLoading: updateLoading }] =
    useUpdateApprovalGroupMutation();
  const { data: locations, isLoading: locationLoading } = useGetLocationsQuery(
    "page=1&per_page=1000"
  );
  const { data: catalog, isLoading: catalogLoading } = useGetCatalogQuery(
    "page=1&per_page=1000"
  );

  const catalogData = catalog?.["approval-type"] || [];
  const locationData = locations?.data || [];
  const selectedUserAction = useSelector(
    (state: any) => state.common.selectedEmployeeAction
  );

  const [membarsOptions, setMembarsOptions] = useState<Option[]>([]);
  const [adminOptions, setAdminOptions] = useState<{ [key: number]: Option[] }>(
    {}
  );
  const [employeeSearchTerm, setEmployeeSearchTerm] = useState("");
  const { data: employeeList } = useGetUsersQuery(
    `per_page=15&page=1&text=${employeeSearchTerm}`
  );

  // console.log(membarsOptions);

  // const users = data?.data || [];
  // const { data: employeeList } = useGetEmployeesQuery(`per_page=15&page=1&search=${employeeSearchTerm}`);

  const { id } = useParams();
  const { data } = useGetApprovalGroupByIdQuery(`${id}`, { skip: !id });
  const previousData = data?.data;
  const navigate = useNavigate();
  // console.log(previousData);
  const form = useForm<ApprovalGroupFormValues>({
    resolver: zodResolver(approvalGroupsSchema),
    defaultValues: {
      name: previousData?.name || "",
      location_id: previousData?.location_id?.toString() || null,
      type: previousData?.type || "",
      membars:
        previousData?.members?.map((item: { id: number }) => item.id) || [],
      level_count: previousData?.level_count,
      levels:
        previousData?.levels?.map(
          (item: { level: number; admin_ids: number[] }) => ({
            level: item.level,
            admin_ids: item.admin_ids,
          })
        ) || [],
    },
  });

  useEffect(() => {
    // console.log("Previous Data:", previousData);
    if (previousData) {
      form.reset({
        name: previousData.name || "",
        location_id: previousData.location_id?.toString() || null,
        type: previousData.type || "",
        membars:
          previousData.members?.map((item: { id: number }) => item.id) || [],
        level_count: previousData.level_count,
        levels:
          previousData.levels?.map(
            (item: { level: number; admin_ids: number[] }) => ({
              level: item.level,
              admin_ids: item.admin_ids,
            })
          ) || [],
      });
    }
  }, [previousData, form]);

  useEffect(() => {
    if (
      !previousData &&
      selectedUserAction.action === "approval-groups-select"
    ) {
      const uniqueUsers = selectedUserAction.payload.map((item: UsersRow) => ({
        value: String(item.id),
        label: `${item.name}(${item.id})`,
      }));
      setMembarsOptions(uniqueUsers);
      form.setValue(
        "membars",
        selectedUserAction.payload.map((item: UsersRow) => item.id)
      );
    }
  }, [selectedUserAction, previousData, form]);

  const {
    fields: levels,
    append: appendLevels,
    remove: removeLevels,
  } = useFieldArray({
    control: form.control,
    name: "levels" as keyof FieldValue<ApprovalGroupFormValues>,
  });

  useEffect(() => {
    form.setValue("level_count", levels.length);
  }, [levels.length, form]);

  useEffect(() => {
    levels.forEach((_, index) => {
      form.setValue(`levels.${index}.level`, index + 1);
    });
  }, [levels.length, form]);

  useEffect(() => {
    if (previousData) {
      previousData.members?.map((item: { id: number; name: string }) => {
        setMembarsOptions((prev) => [
          ...prev,
          {
            value: String(item.id),
            label: `${item.name} (${item.id})`,
          },
        ]);
      });
    }
  }, [previousData, form]);

  useEffect(() => {
    if (previousData) {
      previousData.levels?.map(
        (item: { level: number; admins: { id: number; name: string }[] }) => {
          setAdminOptions((prev) => ({
            ...prev,
            [item.level - 1]: item.admins?.map((admin) => ({
              value: String(admin.id),
              label: `${admin.name} (${admin.id})`,
            })),
          }));
        }
      );
    }
  }, [previousData, form]);

  useEffect(() => {
    if (levels.length === 0) {
      appendLevels("");
    }
  }, [levels, appendLevels]);

  const handleSearchMembars = async (query: string): Promise<Option[]> => {
    setEmployeeSearchTerm(query);
    const options =
      employeeList?.data?.map((item: UsersRow) => ({
        value: String(item.id),
        label: `${item.name} (${item.id})`,
      })) || [];
    return options;
  };

  const handleSearchAdmin = async (query: string): Promise<Option[]> => {
    setEmployeeSearchTerm(query);
    const options =
      employeeList?.data?.map((item: UsersRow) => ({
        value: String(item.id),
        label: `${item.name} (${item.id})`,
      })) || [];

    return options;
  };
  // console.log(form.formState.errors);
  console.log(form.getValues("levels"));
  async function onSubmit(data: ApprovalGroupFormValues) {
    console.log(data);
    try {
      if (previousData) {
        await updateApprovalGroup({
          approvalGroupId: previousData.id as number,
          updatedApprovalGroup: data,
        }).unwrap();
        toast.success("Approval group updated successfully");
        navigate("/web/approval-group");
      } else {
        await createApprovalGroup(data).unwrap();
        dispatch(setSelectedEmployeeAction({ action: "", payload: [] }));
        toast.success("Approval group created successfully");
        navigate("/web/approval-group");
      }
    } catch (error) {
      handleErrors(error as ErrorResponse);
      console.log(error);
    }
  }

  return (
    <>
      {isLoading || updateLoading ? (
        <div className="h-56">
          <Loading />
        </div>
      ) : (
        <Card className="p-5 w-1/2 mx-auto">
          <CardTitle className="mb-5">
            {previousData ? "Edit" : "Add"} Approval Group
          </CardTitle>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Approval Group Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter organization name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormSearchSelect<LocationColumn>
                  loading={locationLoading}
                  data={locationData}
                  displayField="name"
                  valueField="id"
                  form={form}
                  name="location_id"
                  placeholder="Location"
                  title="Location"
                  className="w-[330px]"
                />
                <FormSearchSelect<Catalog>
                  loading={catalogLoading}
                  data={catalogData}
                  displayField="name"
                  valueField="name"
                  form={form}
                  name="type"
                  placeholder="Type"
                  title="Type"
                  className="w-[330px]"
                />
                <FormField
                  control={form.control}
                  name="membars"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Employee Name</FormLabel>
                      <FormControl>
                        <MultipleSelector
                          {...field}
                          value={membarsOptions}
                          onSearch={handleSearchMembars}
                          onChange={(options) => {
                            setMembarsOptions(options);
                            field.onChange(
                              options.map((option) => parseInt(option.value))
                            );
                          }}
                          hidePlaceholderWhenSelected
                          placeholder="Search and select options"
                          loadingIndicator={<span>Loading...</span>}
                          emptyIndicator={<span>No options found</span>}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="">
                  {levels.map((field, index) => (
                    <div className="flex gap-x-2" key={field.id}>
                      <FormField
                        control={form.control}
                        name={`levels.${index}.level`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{index === 0 && "Level"}</FormLabel>
                            <FormControl>
                              <div className="flex space-x-2 items-center">
                                <Input
                                  placeholder={`Level ${index + 1}`}
                                  {...field}
                                  readOnly
                                  className="w-16"
                                />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="w-full">
                        <FormField
                          control={form.control}
                          name={`levels.${index}.admin_ids`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{index === 0 && "Admin"}</FormLabel>
                              <FormControl>
                                <MultipleSelector
                                  {...field}
                                  value={adminOptions[index]}
                                  onSearch={handleSearchAdmin}
                                  onChange={(options) => {
                                    setAdminOptions((prev) => ({
                                      ...prev,
                                      [index]: options,
                                    }));
                                    field.onChange(
                                      options.map((option) =>
                                        parseInt(option.value)
                                      )
                                    );
                                  }}
                                  hidePlaceholderWhenSelected
                                  placeholder="Search and select options"
                                  loadingIndicator={<span>Loading...</span>}
                                  emptyIndicator={<span>No options found</span>}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <span
                        className={`flex items-center justify-center ${
                          index === 0 ? "!mt-8" : "!mt-0"
                        }`}
                        onClick={() => removeLevels(index)}
                      >
                        <Trash2 size={16} className="text-red-500" />
                      </span>
                    </div>
                  ))}
                  <Button
                    type="button"
                    onClick={() => appendLevels("")}
                    variant="secondary"
                    className={`mt-2 space-x-2 border border-dashed border-gray-700 w-fit ${
                      levels.length === 5 && "hidden"
                    }`}
                  >
                    <Plus size={14} /> <span>Add Level</span>
                  </Button>
                </div>
              </div>

              <div>
                <Button
                  variant="default"
                  type="submit"
                  className="w-fit flex justify-end mt-4"
                >
                  {previousData ? "Update" : "Add"}
                </Button>
              </div>
            </form>
          </Form>
        </Card>
      )}
    </>
  );
}
