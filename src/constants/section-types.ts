// All available section types
const ALL_SECTION_TYPES = [
  {
    type: "web",
    title: "Web",
    description: "Manage web for your business",
  },
  {
    type: "accounts",
    title: "Accounts",
    description: "Manage accounts for your business",
  },
  {
    type: "hrm",
    title: "HRM",
    description: "Manage hrm for your business",
  },
  {
    type: "billing",
    title: "Billing",
    description: "Manage billing for your business",
  },
  {
    type: "finance",
    title: "Finance",
    description: "Manage finance for your business",
  },
  {
    type: "crm",
    title: "CRM",
    description: "Manage crm for your business",
  },
  {
    type: "mfg",
    title: "MFG",
    description: "Manage mfg for your business",
  },
];

// Get modules from environment variables
const modulesEnv = import.meta.env.VITE_MODULES || "";
const enabledModules = modulesEnv
  .split(",")
  .map((module: string) => module.trim().toLowerCase());

// Filter section types based on enabled modules
const SECTION_TYPES = ALL_SECTION_TYPES.filter((section) =>
  enabledModules.includes(section.type)
);

export default SECTION_TYPES;
