import { Card, CardTitle, CardContent } from "@/components/ui/card"; // Import components you're using

import { Edit, Plus, Trash } from "lucide-react";
import { Loading } from "@/components/common/loading";

import { useState } from "react";
import { Modal } from "@/components/common/modal";
import { AddressForm } from "./components/AddressForm";
import {
  useGetAddressesQuery,
  useRemoveAddressMutation,
} from "@/store/services/billing/api/addresses";
import { AddressColumn } from "@/lib/validators/billing/customer";
import { AlertModal } from "@/components/common/alert-modal";
import { ErrorResponse } from "@/types";
import handleErrors from "@/lib/handle-errors";
import { toast } from "sonner";
import { cn } from "@/utils";

interface AddressProps {
  customer_id: number;
}

export const Addresses: React.FC<AddressProps> = ({ customer_id }) => {
  const { data: billingAddresses, isLoading: isBillingAddressLoading } =
    useGetAddressesQuery(`type=Billing&contact_id=${customer_id}`);
  const { data: shippingAddresses, isLoading: isShippingAddressLoading } =
    useGetAddressesQuery(`type=Shipping&contact_id=${customer_id}`);
  const billingAddressData = billingAddresses?.data || [];
  const shippingAddressData = shippingAddresses?.data || [];

  const [deleteAddress, { isLoading: isDeleting }] = useRemoveAddressMutation();

  const [addAddressModalOpen, setAddAddressModalOpen] = useState(false);
  const [addressType, setAddressType] = useState("");
  const [previousData, setPreviousData] = useState<AddressColumn | undefined>(
    undefined
  );
  const [alertModalOpen, setAlertModalOpen] = useState(false);
  const [selectedDeleteAddress, setSelectedDeleteAddress] = useState<
    AddressColumn | undefined
  >(undefined);

  const handleAddressDelete = async (id: number) => {
    try {
      await deleteAddress(id).unwrap();
      setAlertModalOpen(false);
      toast.success("Address deleted successfully");
    } catch (error) {
      handleErrors(error as ErrorResponse);
      console.log(error);
    }
  };

  if (isBillingAddressLoading || isShippingAddressLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div>
        <CardTitle className="mb-4 text-xl">Billing Addresses</CardTitle>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {billingAddressData.length > 0 &&
          billingAddressData.map((address, index) => (
            <Card key={index}>
              <CardContent className="p-5 flex items-start gap-3">
                <div>
                  <div
                    className={cn(
                      address.attention || address.phone ? "mb-3" : ""
                    )}
                  >
                    <p>{address.attention}</p>
                    <p className="text-sm">{address.phone}</p>
                  </div>
                  <p>{`${address.address ? address.address : ""} ${
                    address.post_code
                  }, ${address.city.name}, ${address.country.name}`}</p>
                </div>

                <div className="flex items-center gap-2.5 ml-auto">
                  <button
                    className="text-primary"
                    onClick={() => {
                      setPreviousData(address);
                      setAddAddressModalOpen(true);
                      setAddressType("Billing");
                    }}
                  >
                    <Edit size={18} />
                  </button>
                  <button
                    onClick={() => {
                      setAlertModalOpen(true);
                      setSelectedDeleteAddress(address);
                    }}
                    className="text-red-500"
                  >
                    <Trash size={18} />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        <Card
          onClick={() => {
            setAddAddressModalOpen(true);
            setAddressType("Billing");
          }}
        >
          <CardContent className="p-5 cursor-pointer text-center grid place-items-center h-full">
            <div className="flex flex-col gap-1.5 justify-center items-center">
              <Plus />
              <span className="underline">Add new billing address</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <CardTitle className="mb-4 mt-8 text-xl">Shipping Addresses</CardTitle>

      <div className="grid grid-cols-3 gap-4">
        {shippingAddressData.length > 0 &&
          shippingAddressData.map((address, index) => (
            <div key={index}>
              <Card>
                <CardContent className="p-5 flex items-start gap-3">
                  <div>
                    <div
                      className={cn(
                        address.attention || address.phone ? "mb-3" : ""
                      )}
                    >
                      <p>{address.attention}</p>
                      <p className="text-sm">{address.phone}</p>
                    </div>
                    <p>{`${address.address ? address.address : ""} ${
                      address.post_code
                    }, ${address.city.name}, ${address.country.name}`}</p>
                  </div>
                  <div className="flex items-center gap-2.5 ml-auto">
                    <button
                      className="text-primary"
                      onClick={() => {
                        setPreviousData(address);
                        setAddAddressModalOpen(true);
                        setAddressType("Shipping");
                      }}
                    >
                      <Edit size={18} />
                    </button>
                    <button
                      className="text-red-500"
                      onClick={() => {
                        setAlertModalOpen(true);
                        setSelectedDeleteAddress(address);
                      }}
                    >
                      <Trash size={18} />
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        <Card
          onClick={() => {
            setAddAddressModalOpen(true);
            setAddressType("Shipping");
          }}
        >
          <CardContent className="p-5 cursor-pointer text-center grid place-items-center h-full">
            <div className="flex flex-col gap-1.5 justify-center items-center">
              <Plus />
              <span className="underline">Add new delivery address</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {addAddressModalOpen && (
        <Modal
          title={`${previousData ? "Edit" : "Add"} ${addressType} Address`}
          isOpen={addAddressModalOpen}
          toggleModal={() => {
            setAddAddressModalOpen(false);
            setPreviousData(undefined);
          }}
          className="!w-full max-w-2xl"
        >
          <AddressForm
            modalClose={() => {
              setAddAddressModalOpen(false);
              setPreviousData(undefined);
            }}
            customer_id={customer_id}
            addressType={addressType}
            data={previousData}
          />
        </Modal>
      )}

      <AlertModal
        title="Are you sure?"
        description="This action cannot be undone."
        name={selectedDeleteAddress?.attention}
        isOpen={alertModalOpen}
        onClose={() => setAlertModalOpen(false)}
        onConfirm={() => handleAddressDelete(selectedDeleteAddress!.id!)}
        loading={isDeleting}
      />
    </div>
  );
};
