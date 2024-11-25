import { useState } from "react";
import { Loading } from "@/components/common/loading";
import { Heading } from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";

import { Modal } from "@/components/common/modal";
import { UpdateAccountsSettingForm } from "./components/update-accounts-settings-form";

import { useGetAccountsSettingsQuery } from "@/store/services/accounts/api/accounts-settings";
import { CurrencyRow } from "@/lib/validators/accounts";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import RoleAccess from "@/lib/access-control/role-access";

const AccountSettings = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { data, isLoading } = useGetAccountsSettingsQuery();
  const accountsSettings = data?.data || null;

  if (isLoading) return <Loading />;

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <Heading
              title=" Accounts Settings"
              description="Manage your sub accounts for you business"
            />
            <RoleAccess roles={["settings.edit"]}>
              <Button onClick={() => setIsOpen(true)} size={"sm"}>
                <Plus className="mr-2 h-4 w-4" /> Update Accounts Settings
              </Button>
            </RoleAccess>
          </div>
          <Separator />

          {accountsSettings && (
            <div className="">
              <div>
                <h3 className="font-semibold text-lg mb-3">Currencies</h3>

                <div className="grid 2xl:grid-cols-4 grid-cols-3 gap-4">
                  <Card>
                    <div className="p-4 ">
                      <div className="flex justify-between items-center mb-3">
                        <h2 className="font-bold text-xl">
                          {" "}
                          {accountsSettings?.currency?.name}
                        </h2>
                        <span className="">
                          <Badge>Default</Badge>
                        </span>
                      </div>

                      <div>
                        <span className="font-bold">Symbol:</span>{" "}
                        {accountsSettings?.currency?.symbol}
                      </div>
                      <div>
                        <span className="font-bold">Code:</span>{" "}
                        {accountsSettings?.currency?.code}
                      </div>
                    </div>
                  </Card>
                  {accountsSettings?.currencies.map((currency: CurrencyRow) => (
                    <Card key={currency.id}>
                      <div className="p-4">
                        <h2 className="font-bold text-xl mb-3">
                          <span className="font-bold"></span> {currency?.name}
                        </h2>
                        <div>
                          <span className="font-bold">Symbol:</span>{" "}
                          {currency?.symbol}
                        </div>
                        <div>
                          <span className="font-bold">Code:</span>{" "}
                          {currency?.code}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
              {/*               <DataTable
                columns={accountSettingsColumns}
                data={accountsSettings}
                noPagination={true}
              /> */}
            </div>
          )}
        </div>
      </div>
      <Modal
        title="Update Accounts Settings"
        isOpen={isOpen}
        toggleModal={() => setIsOpen(false)}
      >
        <UpdateAccountsSettingForm
          rowData={accountsSettings}
          modalClose={() => setIsOpen(false)}
        />
      </Modal>
    </>
  );
};

export default AccountSettings;
