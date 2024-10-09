
import { useParams, useNavigate } from "react-router-dom";
import SearchSelect from "../../search-select";
import { LedgerRow, SubAccountRow } from "@/lib/validators/accounts";
import { useEffect } from "react";
import { ProjectRow } from "@/lib/validators/accounts/projects";
// import { set } from "date-fns";

interface ItemFilterProps {
  filterProp?: {
    setAccount?: (account: LedgerRow) => void;
    account?: LedgerRow | undefined;
    project?: ProjectRow | undefined;
    setProject?: (project: ProjectRow) => void;
    arrayItems?: LedgerRow[];
    loadingData?: boolean;
    arrayItemsTwo?: ProjectRow[];
    loadingDataTwo?: boolean;
    arrayItemsThree?: SubAccountRow[];
    loadingDataThree?: boolean;
    detailedGeneralLedger?: boolean;
    contact?: SubAccountRow | undefined;
    setContact?: (contact: SubAccountRow) => void;
  };
}

const ItemFilter = ({ filterProp }: ItemFilterProps) => {
  const {
    setAccount,
    account,
    arrayItems,
    arrayItemsTwo,
    arrayItemsThree,
    setProject,
    project,
    contact,
    setContact,
    detailedGeneralLedger,
  } = filterProp || {};

  const param = useParams();


  const navigate = useNavigate();

  useEffect(() => {
    if (param.ledgerId) {
      const found = arrayItems?.find((item: LedgerRow) => {
        return Number(param.ledgerId) === (item?.id ?? null);
      });

      if (found && setAccount) {
        setAccount(found);
      }
    }
  }, []);

  useEffect(() => {
    if (param.ledgerId) {
      if (detailedGeneralLedger) {
        navigate(`/accounts/reports/detailed-general-ledger/${account?.id}`);
      }
    }
  }, [account]);


  return (
    <div className="flex space-x-3">
      {arrayItems && arrayItems.length !== 0 && (
        <div className="">
          <SearchSelect
            items={arrayItems || []}
            labelKey="name"
            valueKey="id"
            value={account}
            placeholder="Select ledger account"
            onSelect={setAccount}
          />
        </div>
      )}
      {arrayItemsTwo && arrayItemsTwo.length !== 0 && (
        <div className="">
          <SearchSelect
            items={arrayItemsTwo || []}
            labelKey="name"
            valueKey="id"
            value={project}
            placeholder="Select project"
            onSelect={setProject}
          />
        </div>
      )}
      {arrayItemsThree && arrayItemsThree.length !== 0 && (
        <div className="">
          <SearchSelect
            items={arrayItemsThree || []}
            labelKey="name"
            valueKey="id"
            value={contact}
            placeholder="Select Contact"
            onSelect={setContact}
          />
        </div>
      )}
    </div>
  );
};

export default ItemFilter;
