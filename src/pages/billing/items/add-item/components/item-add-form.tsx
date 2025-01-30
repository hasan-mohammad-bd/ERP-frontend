"use client";

import { useEffect, useState } from "react";
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

import {
  useCreateItemMutation,
  useGetItemByIdQuery,
  useUpdateItemMutation,
} from "@/store/services/billing/api/items";
import { ItemFormValues, ItemSchema } from "@/lib/validators/billing/items";
import { useNavigate, useParams } from "react-router-dom";
import { ErrorResponse } from "@/types";
import handleErrors from "@/lib/handle-errors";
import { toast } from "sonner";
// import { serialize } from "object-to-formdata";
import FormSearchSelect from "@/components/ui/form-items/form-search-select_DEPRECATED";
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
import PriceAndStockTable from "./price-and-stock-table";

export interface StockItem {
  barcode_attribute: string;
  barcode: string | null;
  purchase_price: number | null;
  selling_price: number | null;
  discount: number | null;
  discount_amount: number | null;
  after_discount: number | null;
  wholesale_price: number | null;
  attribute_ids: number[];
}

export default function ItemAddForm() {

  // const [barcodeData, setBarcodeData] = useState([]);
  const [attributeCategoriesData, setAttributeCategoriesData] = useState([]);
  const [responseData, setResponseData] = useState([]);
  console.log(attributeCategoriesData);
  const navigate = useNavigate();
  const params = useParams();
  const [itemType, setItemType] = useState<"Goods" | "Service">("Goods");
  const { data: dataById, refetch } = useGetItemByIdQuery(`${params.id}`);
  const previousData = dataById?.data;
  // console.log(previousData)
  const [items, setItems] = useState<StockItem[]>( [
    {
      barcode_attribute: "Default",
      barcode: null,
      purchase_price: null,
      selling_price: null,
      discount: null,
      discount_amount: null,
      after_discount: null,
      wholesale_price: null,
      attribute_ids: [],
    },
    // ... other items
  ]);

  useEffect(() => {
   if(previousData){
     setItems(previousData?.item_barcode);
     setItemType(previousData?.item_nature )
    //  setAttributeCategoriesData(previousData?.attribute_categories);
   } 
  },[previousData?.item_barcode ]);

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
    resolver: zodResolver(ItemSchema),
    defaultValues: {
      name: previousData?.name || "",
      primary_to_secondary_unit: previousData?.primary_to_secondary_unit || 1,
    },
  });

  useEffect(() => {
    if (previousData) {
      form.reset({
        name: previousData.name,
        category_id: previousData?.category?.id.toString() || undefined,
        sub_category_id: previousData?.sub_category?.id.toString() || undefined,
        child_category_id:
          previousData?.child_category?.id.toString() || undefined,
        brand_id: previousData?.brand?.id.toString() || undefined,
        // images: previousData?.images || [],
        primary_unit_id: previousData.primary_unit.id.toString(),
        secondary_unit_id: previousData.secondary_unit.id.toString(),
        purchase_account_tax_id:
          previousData.purchase_account_tax_id.toString(),
        sale_account_tax_id: previousData.sale_account_tax_id.toString(),
        inventory_account_tax_id:
          previousData.inventory_account_tax_id.toString(),
        purchase_account_id: previousData.purchase_account_id.toString(),
        sale_account_id: previousData.sale_account_id.toString(),
        inventory_account_id: previousData.inventory_account_id.toString(),
        primary_to_secondary_unit: previousData.primary_to_secondary_unit || 1,
        track_inventory: previousData.track_inventory,
        manufacture: previousData.manufacture,
        allow_sale: previousData.allow_sale,
        sku: previousData?.sku,
      });
    }
  }, [previousData, form]);

  const filteredSubCategories = subCategoryData.filter(
    (item) => Number(form.watch("category_id")) === Number(item.parent_id)
  );
  const filteredChildCategories = childCategoryData.filter(
    (item) => Number(form.watch("sub_category_id")) === Number(item.parent_id)
  );

  console.log(previousData)


  async function onSubmit(data: ItemFormValues) {
    try {
            const newData = {
          ...data,
          item_nature: itemType,
          _method: previousData ? "PUT" : "POST",
          attribute_categories:
            itemType === "Goods" ? attributeCategoriesData : [],
          barcodes: items,
      };
/*       const formData = serialize(
        {
          ...data,
          item_nature: itemType,
          _method: previousData ? "PUT" : "POST",
          attribute_categories:
            itemType === "Goods" ? attributeCategoriesData : JSON.stringify([]),
          barcodes: items,
          image: uploadedFiles,
        },
        { indices: true }
      ); */
      if (previousData) {
        await updateItem({
          itemId: previousData.id,
          updatedItem: newData,
        }).unwrap();
        toast.success("Item updated successfully");
        // modalClose();
        navigate("/billing/items");
      } else {
        await createItem(newData).unwrap();
        toast.success("Employee class created successfully");
        navigate("/billing/items");
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
        <>
          <Form {...form}>
            <form
              id="itemForm"
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6"
            >
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
                                <Input
                                  placeholder="Enter item name"
                                  {...field}
                                />
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
                            uploadedFiles={previousData?.images}
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
                            placeholder="Select Secondary unit"
                            title="Secondary Unit"
                            className="w-[330px]"
                          />
                          {
                            form.watch("secondary_unit_id") && 
                            <FormField
                            control={form.control}
                            name="primary_to_secondary_unit"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>
                                  1 Primary to Secondary Unit
                                </FormLabel>
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
                          }


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
                        <TabsContent
                          value="goods"
                          className="mt-0"
                        ></TabsContent>
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
                                checked={field.value === 1}
                                onCheckedChange={(checked) => {
                                  field.onChange(checked ? 1 : 0);
                                }}
                                defaultValue={
                                  previousData
                                    ? previousData.track_inventory
                                    : 0
                                }
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
                                checked={field.value === 1}
                                onCheckedChange={(checked) => {
                                  field.onChange(checked ? 1 : 0);
                                }}
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
                                checked={field.value === 1}
                                onCheckedChange={(checked) => {
                                  field.onChange(checked ? 1 : 0);
                                }}
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
            </form>
          </Form>
          <>
            <div>
              {itemType === "Goods" && (
                <PricingArea
                  setAttributeCategoriesData={setAttributeCategoriesData}
                  // attributeCategoriesData={attributeCategoriesData}
                  previousData={previousData}
                  setResponseData={setResponseData}
                />
              )}
            </div>
            <div className="mt-1">
              <PriceAndStockTable
                setItems={setItems}
                items={items}
                responseData={responseData}
              />
            </div>
            <div className="flex justify-end space-x-4 mt-5">
              <Button variant="outline" onClick={() => navigate("/billing/items")}>
                Cancel
              </Button>
              <Button form="itemForm" type="submit">
                Save
              </Button>
            </div>
          </>
        </>
      )}
    </>
  );
}
