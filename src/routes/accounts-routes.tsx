import withFallback from "@/utils/with-fallback";
import {
	ChartOfAccounts,
	Dashboard,
	ErrorPage,
	FinancialYears,
	Layout,
	SubAccounts,
	AccountSettings,
} from "./components";
import JournalVoucher from "@/pages/accounts/journal-voucher";

const accountsRoutes = {
	path: "accounts/",
	element: withFallback(<Layout />),
	children: [
		{
			index: true,
			element: withFallback(<Dashboard title="Accounts" />),
			errorElement: withFallback(<ErrorPage />),
		},
		{
			path: "financial-year",
			element: withFallback(<FinancialYears />),
			errorElement: withFallback(<ErrorPage />),
		},
		{
			path: "chart-of-accounts",
			element: withFallback(<ChartOfAccounts />),
			errorElement: withFallback(<ErrorPage />),
		},
		{
			path: "sub-accounts",
			element: withFallback(<SubAccounts />),
			errorElement: withFallback(<ErrorPage />),
		},
		{
			path: "accounts-settings",
			element: withFallback(<AccountSettings />),
			errorElement: <ErrorPage />,
		},
		{
			path: "journal-voucher",
			element: withFallback(<JournalVoucher />),
			errorElement: <ErrorPage />,
		},
	],
};

export default accountsRoutes;
