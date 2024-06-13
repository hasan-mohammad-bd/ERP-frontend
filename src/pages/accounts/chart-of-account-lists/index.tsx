import { Loading } from "@/components/common/loading";
import { Heading } from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetLedgerGroupsQuery } from "@/store/services/accounts/api/chart-of-account";
import ChartOfAccountItem from "./components/chart-of-account-item";

const ChartOfAccountsLists = () => {
	const { data, isLoading } = useGetLedgerGroupsQuery();
	const chartOfAccount = data?.data || [];
	// console.log(chartOfAccount);

	if (isLoading) return <Loading />;

	return (
		<>
			<div className="flex items-center justify-between md:p-8">
				<Heading
					title="Chart Of Account"
					description="Manage Chart of account for you business"
				/>
				<Button
				// onClick={() => setIsOpen(true)}
				>
					<Plus className="mr-2 h-4 w-4" /> Add Chart of Account
				</Button>
			</div>
			<Separator />
			<Tabs defaultValue="assets" className="w-full mt-3 px-3">
				<TabsList className="grid w-full grid-cols-4">
					<TabsTrigger value="assets"> Assets</TabsTrigger>
					<TabsTrigger value="liabilities-and-owners-equity">
						Liabilities and Owners Equity
					</TabsTrigger>
					<TabsTrigger value="incomes">Incomes</TabsTrigger>
					<TabsTrigger value="expenses">Expenses</TabsTrigger>
				</TabsList>
				<TabsContent value="assets">
					<ChartOfAccountItem
						title="Assets"
						description="Make changes to your assets here."
						data={chartOfAccount}
					/>
				</TabsContent>
			</Tabs>
		</>
	);
};

export default ChartOfAccountsLists;
