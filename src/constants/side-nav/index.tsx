import accountsNavItems from "./accounts-nav-items";
import billingNavItems from "./billing-nav-items";
import crmNavItems from "./crm-nav-items";
import hrmNavItems from "./hrm-nav-items";
import webNavItems from "./web-nav-items";

const sideNavItems = {
	hrm: hrmNavItems,
	accounts: accountsNavItems,
	web: webNavItems,
	billing:billingNavItems,
	crm:crmNavItems
};

export default sideNavItems;
