
import { Loading } from "@/components/common/loading";

import { useGetEntriesQuery } from "@/store/services/accounts/api/entries";
import { useNavigate } from "react-router-dom";
import VoucherTableDashboard from "./components/voucher-table-dashboad";
import { Card } from "@/components/ui/card";

import { ChevronRight } from "lucide-react";

const Voucher = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const { data, isLoading } = useGetEntriesQuery(`per_page=1000&page=1`);

  const journalVoucher = data?.data || [];

  if (isLoading) return <Loading />;

  return (
    <>

      <Card className="p-3">
        <div className="flex justify-between items-center">

        <h2 className="text-md ml-0 px-2">Recent Transaction</h2> <div className="flex items-center  cursor-pointer"><h2 onClick={() => navigate("/accounts/reports/transaction")}>View All </h2> <ChevronRight size={16} /></div>
        </div>

        {journalVoucher && (
          <div>
            <VoucherTableDashboard tableData={journalVoucher} />
          </div>
        )}
      </Card>
    </>
  );
};

export default Voucher;
