import { Dispatch, SetStateAction, useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search } from "lucide-react";
import { useGetCustomersQuery } from "@/store/services/billing/api/customer";
import { useGetSalesInvoicesQuery } from "@/store/services/billing/api/invoices";

export interface PurchaseRow {
  id: number;
  date: string;
  invoice_number: string;
  total_due: number;
  amount?: number;
}

interface SearchProductProps {
  selectedProducts: PurchaseRow[];
  setSelectedProducts: Dispatch<SetStateAction<PurchaseRow[]>>;
  previousData: boolean;
  setContactId: Dispatch<SetStateAction<number | null>>;
  receivedAmount: number;
  setReceivedAmount: Dispatch<SetStateAction<number>>;
}

export default function SearchPaymentReceived({
  selectedProducts,
  setSelectedProducts,
  setContactId,
  receivedAmount,
  setReceivedAmount,
}: SearchProductProps) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCustomerId, setSelectedCustomerId] = useState<number | null>(
    null
  );
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);

  const { data: customerData, isLoading: isCustomerLoading } =
    useGetCustomersQuery("only_due=-1&per_page=1000&page=1", {
      skip: !searchTerm,
    });

  const { data: purchasesData } = useGetSalesInvoicesQuery(
    `only_due=-1&contact_id=${selectedCustomerId}&per_page=1000&page=1`,
    { skip: !selectedCustomerId }
  );

  const suppliers = customerData?.data || [];
  const filteredSuppliers = suppliers.filter((customer) =>
    customer.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const purchases =
    purchasesData?.data.map((invoice) => ({
      ...invoice,
      total_due: Math.abs(invoice.total_due), // Make total_due always positive
      amount: Math.abs(invoice.total_due), // Ensure amount is also positive
    })) || [];

  const selectCustomer = (customerId: number, customerName: string) => {
    setSelectedCustomerId(customerId);
    setSearchTerm(customerName); // Set the selected customer's name in the input field
    setDropdownVisible(false); // Hide the dropdown after selection
  };

  const toggleInvoiceSelection = (invoice: PurchaseRow) => {
    const alreadySelected = selectedProducts.find(
      (product) => product.id === invoice.id
    );

    if (alreadySelected) {
      const updatedProducts = selectedProducts.filter(
        (product) => product.id !== invoice.id
      );
      setSelectedProducts(updatedProducts);
      setReceivedAmount(
        updatedProducts.reduce(
          (total, product) => total + (product.amount || 0),
          0
        )
      );
    } else {
      const updatedProducts = [...selectedProducts, invoice];
      setSelectedProducts(updatedProducts);
      setReceivedAmount(
        updatedProducts.reduce(
          (total, product) => total + (product.amount || 0),
          0
        )
      );
    }
  };

  const updateReceivedAmount = (newAmount: number) => {
    let remainingAmount = newAmount;
    const updatedProducts: PurchaseRow[] = [];

    for (const purchase of purchases) {
      if (remainingAmount <= 0) break;

      const allocatedAmount = Math.min(purchase.total_due, remainingAmount);
      updatedProducts.push({ ...purchase, amount: allocatedAmount });
      remainingAmount -= allocatedAmount;
    }

    setReceivedAmount(newAmount);
    setSelectedProducts(updatedProducts);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const parsedValue = parseFloat(value);

    // Allow empty input or valid number
    if (value === "" || !isNaN(parsedValue)) {
      setReceivedAmount(parsedValue || 0); // Update state to reflect the value
      updateReceivedAmount(parsedValue || 0); // Call the update function
    }
  };

  const updateInvoiceAmount = (id: number, newAmount: number) => {
    const updatedProducts = selectedProducts.map((product) =>
      product.id === id
        ? { ...product, amount: Math.min(newAmount, product.total_due) }
        : product
    );
    setSelectedProducts(updatedProducts);

    const updatedAmount = updatedProducts.reduce(
      (total, product) => total + (product.amount || 0),
      0
    );
    setReceivedAmount(updatedAmount);

    // If the updated amount of the invoice is zero, uncheck it
    if (newAmount === 0) {
      const updatedProductsWithoutUnchecked = updatedProducts.filter(
        (product) => product.amount !== 0
      );
      setSelectedProducts(updatedProductsWithoutUnchecked);
    }
  };

  return (
    <div className="p-4">
      {/* Customer Search */}
      <div className="mb-4 relative z-30">
        <div className="flex items-center space-x-2">
          <span className="h-4 px-4 py-[18px] border border-gray-300 flex justify-center items-center rounded-md">
            <Search className="h-4 w-4" />
          </span>
          <Input
            type="text"
            placeholder="Enter Customer Name"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setDropdownVisible(true); // Show the dropdown when typing
            }}
            className="flex-grow"
          />
        </div>
        {searchTerm &&
          dropdownVisible &&
          !isCustomerLoading &&
          filteredSuppliers.length > 0 && (
            <div className="absolute ml-14 bg-gray-50 dark:bg-gray-900">
              <ul className="border rounded-lg p-2">
                {filteredSuppliers.map((customer) => (
                  <li
                    key={customer.id}
                    className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 p-2 text-sm w-full"
                    onClick={() => {
                      selectCustomer(customer.id, customer.name);
                      setContactId(customer.id);
                    }}
                  >
                    {customer.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
      </div>

      {/* Invoice Table */}
      <Table>
        <TableHeader className="border rounded">
          <TableRow>
            {["Select", "Date", "Invoice No", "Due Amount", "Amount"].map(
              (header) => (
                <TableHead key={header}>{header}</TableHead>
              )
            )}
          </TableRow>
        </TableHeader>
        <TableBody>
          {purchases.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} className="text-center py-5">
                No Items Selected Yet
              </TableCell>
            </TableRow>
          ) : (
            <>
              {purchases.map((invoice) => (
                <TableRow key={invoice.id}>
                  <TableCell>
                    <input
                      type="checkbox"
                      checked={selectedProducts.some(
                        (product) => product.id === invoice.id
                      )}
                      onChange={() => toggleInvoiceSelection(invoice)}
                    />
                  </TableCell>
                  <TableCell>{invoice.date}</TableCell>
                  <TableCell>{invoice.invoice_number}</TableCell>
                  <TableCell>{invoice.total_due}</TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      value={
                        selectedProducts.find(
                          (product) => product.id === invoice.id
                        )?.amount || invoice.total_due
                      }
                      onChange={(e) =>
                        updateInvoiceAmount(
                          invoice.id,
                          parseFloat(e.target.value) || 0
                        )
                      }
                    />
                  </TableCell>
                </TableRow>
              ))}
            </>
          )}
        </TableBody>
      </Table>

      {/* Received Amount Input */}
      <div className="mt-4">
        <label className="block mb-2 font-medium">Received Amount*</label>
        <Input
          type="number"
          value={receivedAmount === 0 ? "" : receivedAmount} // Avoid showing "0" if the value is zero
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
}
