import { Loading } from "@/components/common/loading";
import { Heading } from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetLedgerGroupsQuery } from "@/store/services/accounts/api/ledger-group";
import ChartOfAccountItem from "./components/chart-of-account-item";
import COA_TYPES from "./coa-types";
import { useState } from "react";
import { Modal } from "@/components/common/modal";
import { AddLedgerGroupForm } from "./components/add-ledger-group-form";
import { AddLedgerForm } from "./components/add-ledger-form";

const ChartOfAccounts = () => {
	const { data, isLoading } = useGetLedgerGroupsQuery();

	const [ledgerGroupModalOpen, setLedgerGroupModalOpen] = useState(false);
	const [ledgerModalOpen, setLedgerModalOpen] = useState(false);
	const chartOfAccount = data?.data || [];
	// console.log(chartOfAccount);

	if (isLoading) return <Loading />;

	return (
		<>
			<div className="flex items-center justify-between">
				<Heading
					title="Chart Of Account"
					description="Manage Chart of account for you business"
				/>
				<div className="flex space-x-2 items-center">
					<Button onClick={() => setLedgerGroupModalOpen(true)} size={"sm"}>
						<Plus className="mr-2 h-4 w-4" /> Add Group
					</Button>
					<Button onClick={() => setLedgerModalOpen(true)} size={"sm"}>
						<Plus className="mr-2 h-4 w-4" /> Add Account
					</Button>
				</div>
			</div>
			<Separator />
			<Tabs defaultValue={COA_TYPES[0].type} className="w-full mt-3">
				<TabsList className="w-fit">
					{COA_TYPES.map((item) => (
						<TabsTrigger key={item.type} value={item.type}>
							{item.title}
						</TabsTrigger>
					))}
				</TabsList>
				{COA_TYPES.map((item) => (
					<TabsContent key={item.type} value={item.type}>
						<ChartOfAccountItem
							title={item.title}
							coaType={item.type}
							description={item.description}
							data={chartOfAccount}
						/>
					</TabsContent>
				))}
			</Tabs>

			{ledgerGroupModalOpen && (
				<Modal
					title="Add Group"
					isOpen={ledgerGroupModalOpen}
					toggleModal={() => setLedgerGroupModalOpen(false)}
				>
					<AddLedgerGroupForm
						// rowData={rowData}
						modalClose={() => setLedgerGroupModalOpen(false)}
					/>
				</Modal>
			)}
			{ledgerModalOpen && (
				<Modal
					title="Add Account"
					isOpen={ledgerModalOpen}
					toggleModal={() => setLedgerModalOpen(false)}
				>
					<AddLedgerForm
						// rowData={rowData}
						// coaType={coaType}
						modalClose={() => setLedgerModalOpen(false)}
					/>
				</Modal>
			)}
		</>
	);
};

export default ChartOfAccounts;
