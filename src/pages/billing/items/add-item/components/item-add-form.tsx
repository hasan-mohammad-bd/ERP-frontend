"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";
import FileUpload from "@/components/common/file-uploader";
import { PricingArea } from "./pricing-area";
import PriceAndStockTable from "./price-and-stock-table";
import {
  useCreateItemMutation,
  useGetItemByIdQuery,
  useUpdateItemMutation,
} from "@/store/services/billing/api/items";
import { ItemFormValues, ItemSchema } from "@/lib/validators/billing/items";
import { useParams } from "react-router-dom";
import { ErrorResponse } from "@/types";
import handleErrors from "@/lib/handle-errors";
import { toast } from "sonner";
import { serialize } from "object-to-formdata";
import FormSearchSelect from "@/components/ui/form-items/form-search-select";
import { UnitRow } from "@/lib/validators/billing/unit";
import { useGetUnitsQuery } from "@/store/services/billing/api/unit";
import { useGetCategoryQuery } from "@/store/services/billing/api/category";
import { CategoryRow } from "@/lib/validators/billing/category";
import { BrandRow } from "@/lib/validators/billing/brand";
import { useGetBrandQuery } from "@/store/services/billing/api/brand";
import { useGetLedgerAccountsQuery } from "@/store/services/accounts/api/ledger-account";
import { LedgerRow } from "@/lib/validators/accounts/balance-sheet";
import { useGetTaxesQuery } from "@/store/services/accounts/api/tax";
import { TaxRow } from "@/lib/validators/accounts/tax";
import { Loading } from "@/components/common/loading";

export default function ItemAddForm() {
  const params = useParams();
  const [itemType, setItemType] = useState<"Goods" | "Service">("Goods");
  const { data: dataById, refetch } = useGetItemByIdQuery(`${params.id}`);
  const previousData = dataById?.data ;
  const [createItem, { isLoading }] = useCreateItemMutation();
  const [updateItem, { isLoading: updateLoading }] = useUpdateItemMutation();
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const { data: units, isLoading: unitsLoading } =
    useGetUnitsQuery(`page=1&per_page=1000`);
  const { data: childCategories, isLoading: childCategoriesLoading } =
    useGetCategoryQuery(`type=child&per_page=1000&page=1`);
  const { data: mainCategories, isLoading: mainCategoriesLoading } =
    useGetCategoryQuery(`type=main&per_page=1000&page=1`);
  const { data: subCategories, isLoading: subCategoriesLoading } =
    useGetCategoryQuery(`type=sub&per_page=1000&page=1`);
  const { data: brands, isLoading: brandsLoading } =
    useGetBrandQuery(`page=1&per_page=1000`);
  const { data: ledgerAccount, isLoading: ledgerAccountLoading } =
    useGetLedgerAccountsQuery("page=1&per_page=1000");

  const { data: taxes, isLoading: taxesLoading } =
    useGetTaxesQuery(`per_page=1000&page=1`);

  const unitesData = units?.data || [];
  const childCategoryData = childCategories?.data || [];
  const mainCategoryData = mainCategories?.data || [];
  const subCategoryData = subCategories?.data || [];
  const brandData = brands?.data || [];
  const ledgerAccountData = ledgerAccount?.data || [];
  const taxData = taxes?.data || [];

  const form = useForm<ItemFormValues>({
    // resolver: zodResolver(ItemSchema),
    defaultValues: {
      name: previousData?.name || "",
    },
  });

  const filteredSubCategories = subCategoryData.filter(
    (item) => Number(form.watch("category_id")) === Number(item.parent_id)
  );
  const filteredChildCategories = childCategoryData.filter(
    (item) => Number(form.watch("sub_category_id")) === Number(item.parent_id)
  );

  async function onSubmit(data: ItemFormValues) {
    try {
      const formData = serialize(
        {
          ...data,
          item_nature: itemType,
          _method: previousData ? "PUT" : "POST",

          image: uploadedFiles,
        },
        { indices: true }
      );
      if (previousData) {
        await updateItem({
          itemId: previousData.id,
          updatedItem: formData,
        }).unwrap();
        toast.success("Item updated successfully");
        // modalClose();
      } else {
        await createItem(formData).unwrap();
        toast.success("Employee class created successfully");
        // modalClose();
      }
    } catch (error) {
      console.log(error);
      handleErrors(error as ErrorResponse);
    }
  }

  console.log(form.formState.errors);
  return (
    <>
      {isLoading || updateLoading ? (
        <div className="h-[535px]">
          <Loading />
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-2">
                <Tabs
                  value={itemType}
                  onValueChange={(value) =>
                    setItemType(value as "Goods" | "Service")
                  }
                >
                  <Card className="p-4 space-y-4">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="Goods">Goods</TabsTrigger>
                      <TabsTrigger value="Service">Service</TabsTrigger>
                    </TabsList>
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Item Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter item name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-6">
                      {/* file Upload  */}
                      <div className="space-y-2">
                        <FormLabel>Upload Files</FormLabel>
                        <FileUpload
                          setFilesToUpload={setUploadedFiles}
                          filesToUpload={uploadedFiles}
                          uploadedFiles={ previousData?.images}
                          onDeleteSuccess={() => refetch()}
                        />
                      </div>
                      <div className="col-span-2 grid grid-cols-2 gap-4">
                        <FormSearchSelect<UnitRow>
                          loading={unitsLoading}
                          data={unitesData}
                          displayField="name"
                          valueField="id"
                          form={form}
                          name="primary_unit_id"
                          placeholder="Select primary unit"
                          title="Primary Unit"
                          className="w-[330px]"
                        />
                        <FormSearchSelect<UnitRow>
                          loading={unitsLoading}
                          data={unitesData}
                          displayField="name"
                          valueField="id"
                          form={form}
                          name="secondary_unit_id"
                          placeholder="Select primary unit"
                          title="Primary Unit"
                          className="w-[330px]"
                        />

                        <FormField
                          control={form.control}
                          name="primary_to_secondary_unit"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>1 Primary to Secondary Unit</FormLabel>
                              <FormControl>
                                <Input
                                  type="number"
                                  placeholder="Enter rate"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <FormSearchSelect<CategoryRow>
                        loading={mainCategoriesLoading}
                        data={mainCategoryData}
                        displayField="name"
                        valueField="id"
                        form={form}
                        name="category_id"
                        placeholder="Select main category"
                        title="Category"
                        className="w-[330px]"
                      />
                      <FormSearchSelect<CategoryRow>
                        loading={subCategoriesLoading}
                        data={filteredSubCategories}
                        displayField="name"
                        valueField="id"
                        form={form}
                        name="sub_category_id"
                        placeholder="Select Sub category"
                        title="Sub Category"
                        className="w-[330px]"
                      />
                      <FormSearchSelect<CategoryRow>
                        loading={childCategoriesLoading}
                        data={filteredChildCategories}
                        displayField="name"
                        valueField="id"
                        form={form}
                        name="child_category_id"
                        placeholder="Select child category"
                        title="Child Category"
                        className="w-[330px]"
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <FormSearchSelect<BrandRow>
                        loading={brandsLoading}
                        data={brandData}
                        displayField="name"
                        valueField="id"
                        form={form}
                        name="brand_id"
                        placeholder="Select brand"
                        title="Brand"
                        className="w-[330px]"
                      />
                      <FormField
                        control={form.control}
                        name="sku"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>SKU</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter SKU" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <TabsContent value="goods" className="mt-0"></TabsContent>
                      <TabsContent value="service"></TabsContent>
                    </div>
                  </Card>
                </Tabs>
              </div>
              <div className="h-full">
                <Card className="p-4 space-y-4">
                  <div className="space-y-2 mb-6">
                    <FormField
                      control={form.control}
                      name="track_inventory"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>Track Inventory</FormLabel>
                          </div>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="manufacture"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>Manufacture</FormLabel>
                          </div>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="allow_sale"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>Allow Sale</FormLabel>
                          </div>
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4 items-end">
                    <FormSearchSelect<LedgerRow>
                      loading={ledgerAccountLoading}
                      data={ledgerAccountData}
                      displayField="name"
                      valueField="id"
                      form={form}
                      name="purchase_account_id"
                      title="Purchase Account"
                      className="w-[250px]"
                    />
                    <FormSearchSelect<TaxRow>
                      loading={taxesLoading}
                      data={taxData}
                      displayField="name"
                      valueField="id"
                      form={form}
                      name="purchase_account_tax_id"
                      title="Purchase Tax"
                      className="w-[250px]"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4 items-end">
                    <FormSearchSelect<LedgerRow>
                      loading={ledgerAccountLoading}
                      data={ledgerAccountData}
                      displayField="name"
                      valueField="id"
                      form={form}
                      name="sale_account_id"
                      title="Sale Account"
                      className="w-[250px]"
                    />
                    <FormSearchSelect<TaxRow>
                      loading={taxesLoading}
                      data={taxData}
                      displayField="name"
                      valueField="id"
                      form={form}
                      name="sale_account_tax_id"
                      title="Sale Tax"
                      className="w-[250px]"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4 items-end">
                    <FormSearchSelect<LedgerRow>
                      loading={ledgerAccountLoading}
                      data={ledgerAccountData}
                      displayField="name"
                      valueField="id"
                      form={form}
                      name="inventory_account_id"
                      title="Inventory Account"
                      className="w-[250px]"
                    />
                    <FormSearchSelect<TaxRow>
                      loading={taxesLoading}
                      data={taxData}
                      displayField="name"
                      valueField="id"
                      form={form}
                      name="inventory_account_tax_id"
                      title="Inventory Tax"
                      className="w-[250px]"
                    />
                  </div>
                </Card>
              </div>
            </div>
            <div>
              <PricingArea />
            </div>
            <div className="mt-1">
              <PriceAndStockTable />
            </div>

            <div className="flex justify-end space-x-4 mt-5">
              <Button variant="outline" onClick={() => form.reset()}>
                Cancel
              </Button>
              <Button type="submit">Save</Button>
            </div>
          </form>
        </Form>
      )}
    </>
  );
}
