import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Plus, Minus, Trash2, Search } from "lucide-react";

interface Product {
  id: string;
  name: string;
  barcode: string;
  stock: string;
  purchasePrice: number;
  sellingPrice: number;
  ppp: number;
  pMrp: number;
  quantity: number;
  subTotal: number;
  discount: number;
  total: number;
}

const demoProducts: Product[] = [
  {
    id: "1",
    name: "Laptop",
    barcode: "1234567890",
    stock: "10 Piece",
    purchasePrice: 800,
    sellingPrice: 1000,
    ppp: 900,
    pMrp: 1100,
    quantity: 1,
    subTotal: 1000,
    discount: 0,
    total: 1000,
  },
  {
    id: "2",
    name: "Smartphone",
    barcode: "0987654321",
    stock: "20 Piece",
    purchasePrice: 400,
    sellingPrice: 500,
    ppp: 450,
    pMrp: 550,
    quantity: 1,
    subTotal: 500,
    discount: 0,
    total: 500,
  },
  {
    id: "3",
    name: "Headphones",
    barcode: "1122334455",
    stock: "30 Piece",
    purchasePrice: 50,
    sellingPrice: 80,
    ppp: 65,
    pMrp: 90,
    quantity: 1,
    subTotal: 80,
    discount: 0,
    total: 80,
  },
];

export default function SearchProduct() {
  const [searchTerm, setSearchTerm] = useState("");
  const [allProducts] = useState<Product[]>(demoProducts);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [searchResults, setSearchResults] = useState<Product[]>([]);

  useEffect(() => {
    if (searchTerm) {
      const results = allProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.barcode.includes(searchTerm)
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm, allProducts]);

  const selectProduct = (product: Product) => {
    const alreadySelected = selectedProducts.find(
      (prod) => prod.id === product.id
    );
    if (!alreadySelected) {
      setSelectedProducts((prev) => [...prev, { ...product, quantity: 1 }]);
    }
    setSearchTerm("");
    setSearchResults([]); // Clear the search results after selecting a product
  };

  const updateQuantity = (id: string, increment: boolean) => {
    setSelectedProducts((products) =>
      products.map((product) =>
        product.id === id
          ? {
              ...product,
              quantity: increment
                ? product.quantity + 1
                : Math.max(0, product.quantity - 1),
              subTotal:
                product.sellingPrice *
                (increment
                  ? product.quantity + 1
                  : Math.max(0, product.quantity - 1)),
              total:
                product.sellingPrice *
                  (increment
                    ? product.quantity + 1
                    : Math.max(0, product.quantity - 1)) -
                product.discount,
            }
          : product
      )
    );
  };

  const removeProduct = (id: string) => {
    setSelectedProducts((products) =>
      products.filter((product) => product.id !== id)
    );
  };

  return (
    <div className="container mx-auto p-4 ">
      <div className="mb-4 relative z-30">
        <div className="flex items-center space-x-2">
          <span className="h-4 px-4 py-[18px] border border-gray-300 flex justify-center items-center rounded-md">
            <Search className="h-4 w-4" />
          </span>
          <Input
            type="text"
            placeholder="Enter Product Name/Sku/scan barcode"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow"
          />
        </div>
        {/* Display search results instantly */}
        {searchResults.length > 0 && (
          <div className="mb-4 absolute ml-14 bg-white">
            <ul className="border border-gray-300 rounded-lg p-2">
              {searchResults.map((product) => (
                <li
                  key={product.id}
                  className="cursor-pointer hover:bg-gray-100 p-2 text-sm"
                  onClick={() => selectProduct(product)}
                >
                  {product.name} (Barcode: {product.barcode})
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <Table>
        <TableHeader className="bg-gray-100 rounded">
          <TableRow className=" ">
            <TableHead>Product Name</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead>Purchase Price</TableHead>
            <TableHead>Selling Price</TableHead>
            <TableHead>PPP</TableHead>
            <TableHead>P. MRP</TableHead>
            <TableHead>P.O. Quantity</TableHead>
            <TableHead>Sub Total</TableHead>
            <TableHead>Discount</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {selectedProducts.map((product) => (
            <TableRow key={product.id}>
              <TableCell>
                {product.name}
                <br />
                <span className="text-sm text-gray-500">
                  Barcode: {product.barcode}
                </span>
              </TableCell>
              <TableCell>{product.stock}</TableCell>
              <TableCell>{product.purchasePrice}</TableCell>
              <TableCell>{product.sellingPrice}</TableCell>
              <TableCell>{product.ppp}</TableCell>
              <TableCell>{product.pMrp}</TableCell>
              <TableCell>
                <div className="flex items-center space-x-2">
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={() => updateQuantity(product.id, false)}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span>{product.quantity}</span>
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={() => updateQuantity(product.id, true)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
              <TableCell>{product.subTotal.toFixed(2)}</TableCell>
              <TableCell>{product.discount.toFixed(2)}</TableCell>
              <TableCell>{product.total.toFixed(2)}</TableCell>
              <TableCell>
                <Button
                  size="icon"
                  variant="destructive"
                  onClick={() => removeProduct(product.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
