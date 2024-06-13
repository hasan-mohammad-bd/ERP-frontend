import { Loading } from "@/components/common/loading";
import { Heading } from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetLedgerGroupsQuery } from "@/store/services/accounts/api/chart-of-account";
import ChartOfAccountItem from "./components/chart-of-account-item";
import COA_OPTIONS from "./coa-options";

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
			<Tabs defaultValue={COA_OPTIONS[0].key} className="w-full mt-3 px-3">
				<TabsList className="w-fit mx-4">
					{COA_OPTIONS.map((item) => (
						<TabsTrigger key={item.key} value={item.key}>
							{item.title}
						</TabsTrigger>
					))}
				</TabsList>
				{COA_OPTIONS.map((item) => (
					<TabsContent key={item.key} value={item.key}>
						<ChartOfAccountItem
							title={item.title}
							coaKey={item.key}
							description={item.description}
							data={chartOfAccount}
						/>
					</TabsContent>
				))}
			</Tabs>
		</>
	);
};

export default ChartOfAccountsLists;
