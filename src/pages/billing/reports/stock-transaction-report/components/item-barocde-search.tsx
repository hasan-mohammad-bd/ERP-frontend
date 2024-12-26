import { Dispatch, SetStateAction, useState } from "react";
import { Input } from "@/components/ui/input";
import { useGetSearchBarcodeProductsQuery } from "@/store/services/billing/api/search-barcode";
import { SearchBarcodeItem } from "@/lib/validators/billing/search-barcode-item";

export interface BarcodeLineItemType {
  detailId?: number;
  barcodeId: number;
  barcode: string;
  barcodeAttribute: string;
  name: string;
}

interface SearchProductProps {
    selectedProducts: BarcodeLineItemType[];
    setSelectedProducts: Dispatch<SetStateAction<BarcodeLineItemType[]>>;
    usedFor?: "purchase" | "invoice";
  }

  export default function ItemBarcodeSearch({
    selectedProducts,
    setSelectedProducts,
  }: SearchProductProps) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(true);

  const { data, isLoading, isError } = useGetSearchBarcodeProductsQuery(
    `text=${searchTerm}&type=molestiae`,
    {
      skip: !searchTerm,
    }
  );

  const itemsData = data?.data || [];

  const selectProduct = (product: SearchBarcodeItem) => {
    const alreadySelected = selectedProducts.find(
      (prod) => prod.barcodeId === product.id // here product id is barcode id
    );
    if (!alreadySelected) {
      setSelectedProducts((prev) => [
        ...prev,
        {
          barcodeId: product.id,
          barcode: product.barcode,
          barcodeAttribute: product.barcode_attribute,
          name: product.name,
        },
      ]);
    }
    // Set the selected product name in the search term and hide dropdown
    setSearchTerm(`${product.name} (Barcode: ${product.barcode})`);
    setDropdownVisible(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setDropdownVisible(true); // Show dropdown when input changes
  };

  return (
    <div className="">
      <div className="mb-4 relative z-30">
        <div className="flex items-center space-x-2">
          {/* <span className="h-4 px-4 py-[18px] border border-gray-300 flex justify-center items-center rounded-md">
            <Search className="h-4 w-4" />
          </span> */}
          <Input
            type="text"
            placeholder="Enter barcode"
            value={searchTerm}
            onChange={handleInputChange}
            className="flex-grow"
          />
        </div>
        {searchTerm && dropdownVisible && !isLoading && !isError && itemsData?.length > 0 && (
          <div className="mb-4 absolute ml-14 bg-gray-50 dark:bg-gray-900">
            <ul className="border rounded-lg p-2">
              {itemsData.map((item) => (
                <li
                  key={item.id}
                  className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 p-2 text-sm"
                  onClick={() => selectProduct(item)}
                >
                  {item.name} (Barcode: {item.barcode})
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
