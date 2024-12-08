import withFallback from "@/utils/with-fallback";
import {
  AddExpense,
  // AddQuoteForm,
  AddSalesOrder,
  EditCustomerForm,
  EditExpense,
  // EditQuoteForm,
  // EditSalesOrder,
  EditSupplierForm,
  // DashboardAccounts,
  ErrorPage,
  ExpensesList,
  Layout,
  NotFoundPage,
  PaymentTerms,
  // Quotes,
  SalesOrderList,
} from "./components";

import Units from "@/pages/billing/units";
import Category from "@/pages/billing/category";
import ClassCategory from "@/pages/billing/child-category";

import ItemAddForm from "@/pages/billing/items/add-item";
import ItemList from "@/pages/billing/items/items-list";
import PurchaseReceive from "@/pages/billing/purchase-receive";
import { AddPurchaseReceiveForm } from "@/pages/billing/purchase-receive/components/add-purchase-recieve-form";
// import Customers from "@/pages/billing/customer";
import Invoice from "@/pages/billing/invoices";

import SalesReceipt from "@/pages/billing/sales-receipts";
import { AddSalesReceiptForm } from "@/pages/billing/sales-receipts/components/add-sales-receipts-form";
import PaymentsReceived from "@/pages/billing/payments-received";
import { AddPaymentReceivedFrom } from "@/pages/billing/payments-received/components/add-sales-receipts-form";
import RecurringInvoice from "@/pages/billing/recurring-invoice";
import { AddRecurringInvoice } from "@/pages/billing/recurring-invoice/components/add-recurring-invoice-form";
import CreditNotes from "@/pages/billing/credit-notes";
import { AddCreditNotes } from "@/pages/billing/credit-notes/components/add-credit-notes-form";
import SupplierList from "@/pages/billing/supplier/supplier-list";
import Supplier from "@/pages/billing/supplier/add-supplier";
import SubCategory from "@/pages/billing/sub-category";
import Customers from "@/pages/billing/customers/customer-list";
import ManagePurchase from "@/pages/billing/manage-purchase";
import { AddManagePurchase } from "@/pages/billing/manage-purchase/components/add-manage-purchase-form";
import MadePayment from "@/pages/billing/made-payment";
import { AddMadePaymentForm } from "@/pages/billing/made-payment/components/add-purchase-recieve-form";
import MasterSales from "@/pages/billing/reports/master-sales-report";
import ProductSales from "@/pages/billing/reports/product-wise-sales";
import PurchaseReport from "@/pages/billing/reports/purchase-report";
import StockReport from "@/pages/billing/reports/stock-report";
import CustomerReport from "@/pages/billing/reports/customer-report";
import StockLedgerReport from "@/pages/billing/reports/stcok-ledger";
import CustomerLedgerReport from "@/pages/billing/reports/customer-ledger";
import DueReceiveableReport from "@/pages/billing/reports/due-receiveable-report";
import DueReceivedReport from "@/pages/billing/reports/due-received-report";

import SupplierSummary from "@/pages/billing/reports/supplier-summary";
import SupplierLedgerReport from "@/pages/billing/reports/supplier-ledger";
import DuePayableReport from "@/pages/billing/reports/due-payable-report";
import DuePaidReport from "@/pages/billing/reports/due-paid-report";
import ProductProfitLoss from "@/pages/billing/reports/product-wise-profit-loss";
import InvoiceWiseProfitLoss from "@/pages/billing/reports/invoice-wise-profit-loss";
import CustomerWiseProfitLoss from "@/pages/billing/reports/customer-wise-profit-loss";
import SalesTaxReport from "@/pages/billing/reports/sales-tax-report";
import PurchaseTaxReport from "@/pages/billing/reports/purchase-tax-report";
import BillingDashboard from "@/pages/billing/dashboard-billing";
// import AttributeCategory from "@/pages/billing/attribute-category";
import Brand from "@/pages/billing/brand";
import AttributeCategory from "@/pages/billing/attribute-category";
import Attributes from "@/pages/billing/attributes";
import ExpensesCategory from "@/pages/billing/expenses-category";
import CustomerAddForm from "@/pages/billing/customers/add-customer";
import QuotationDetailsUI from "@/pages/billing/quotation-details-ui";
import AddInvoiceForm from "@/pages/billing/invoices/components/add-invoice-form";
import EditInvoiceForm from "@/pages/billing/invoices/components/edit-invoice-form";
import PurchaseOrder from "@/pages/billing/purchase-order";
import AddPurchaseOrderForm from "@/pages/billing/purchase-order/components/add-purchase-order";
import EditPurchaseOrder from "@/pages/billing/purchase-order/components/edit-quotes-form";
import InvoiceUI from "@/pages/billing/invoices/components/invoiceUI";
import WareHouse from "@/pages/billing/warehouse";

const billingRoutes = {
  path: "billing/",
  element: withFallback(<Layout />),
  children: [
    {
      index: true,
      element: withFallback(<BillingDashboard />),
      errorElement: withFallback(<ErrorPage />),
    },

    {
      path: "customers",
      // element: withFallback(<Customers />),
      errorElement: withFallback(<ErrorPage />),
      children: [
        {
          index: true,
          element: withFallback(<Customers />),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "add",
          element: withFallback(<CustomerAddForm />),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "edit/:id",
          element: withFallback(<EditCustomerForm />),
          errorElement: withFallback(<ErrorPage />),
        },
      ],
    },

    {
      path: "supplier",
      errorElement: withFallback(<ErrorPage />),
      children: [
        {
          index: true,
          element: withFallback(<SupplierList />),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "add",
          element: withFallback(<Supplier />),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "edit/:id",
          element: withFallback(<EditSupplierForm />),
          errorElement: withFallback(<ErrorPage />),
        },
      ],
    },

    {
      path: "expenses-category",
      element: withFallback(<ExpensesCategory />),
      errorElement: withFallback(<ErrorPage />),
    },

    {
      path: "expenses",
      errorElement: withFallback(<ErrorPage />),
      children: [
        {
          index: true,
          element: withFallback(<ExpensesList />),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "add",
          element: withFallback(<AddExpense />),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "edit/:id",
          element: withFallback(<EditExpense />),
          errorElement: withFallback(<ErrorPage />),
        },
      ],
    },

    {
      path: "units",
      element: withFallback(<Units />),
      errorElement: withFallback(<ErrorPage />),
    },

    {
      path: "category",
      element: withFallback(<Category />),
      errorElement: withFallback(<ErrorPage />),
    },

    {
      path: "sub-category",
      element: withFallback(<SubCategory />),
      errorElement: withFallback(<ErrorPage />),
    },

    {
      path: "child-category",
      element: withFallback(<ClassCategory />),
      errorElement: withFallback(<ErrorPage />),
    },

    {
      path: "Brand",
      element: withFallback(<Brand />),
      errorElement: withFallback(<ErrorPage />),
    },
    {
      path: "purchase-orders/",
      errorElement: withFallback(<ErrorPage />),
      children: [
        {
          index: true,
          element: withFallback(<PurchaseOrder />),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "add",
          element: withFallback(<AddPurchaseOrderForm />),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "edit/:id",
          element: withFallback(<EditPurchaseOrder />),
          errorElement: withFallback(<ErrorPage />),
        },
      ],
    },
    {
      path: "purchase-receive",
      errorElement: withFallback(<ErrorPage />),
      children: [
        {
          index: true,
          element: withFallback(<PurchaseReceive />),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "add",
          element: withFallback(<AddPurchaseReceiveForm />),
          errorElement: withFallback(<ErrorPage />),
        },
      ],
    },
    {
      path: "purchase-receive",
      errorElement: withFallback(<ErrorPage />),
      children: [
        {
          index: true,
          element: withFallback(<PurchaseReceive />),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "add",
          element: withFallback(<AddPurchaseReceiveForm />),
          errorElement: withFallback(<ErrorPage />),
        },
      ],
    },

    {
      path: "manage-purchase",
      errorElement: withFallback(<ErrorPage />),
      children: [
        {
          index: true,
          element: withFallback(<ManagePurchase />),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "add",
          element: withFallback(<AddManagePurchase />),
          errorElement: withFallback(<ErrorPage />),
        },
      ],
    },

    {
      path: "items",
      errorElement: withFallback(<ErrorPage />),
      children: [
        {
          index: true,
          element: withFallback(<ItemList />),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "add",
          element: withFallback(<ItemAddForm />),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "edit/:id",
          element: withFallback(<ItemAddForm />),
          errorElement: withFallback(<ErrorPage />),
        },
      ],
    },
    // {
    //   path: "quotes",
    //   // element: withFallback(<Quotes />),
    //   errorElement: withFallback(<ErrorPage />),
    //   children: [
    //     {
    //       index: true,
    //       element: withFallback(<Quotes />),
    //       errorElement: withFallback(<ErrorPage />),
    //     },
    //     {
    //       path: "add",
    //       element: withFallback(<AddQuoteForm />),
    //       errorElement: withFallback(<ErrorPage />),
    //     },
    //     {
    //       path: "edit/:id",
    //       element: withFallback(<EditQuoteForm />),
    //       errorElement: withFallback(<ErrorPage />),
    //     },
    //   ],
    // },
    {
      path: "quotes/", // basically the sales order
      errorElement: withFallback(<ErrorPage />),
      children: [
        {
          index: true,
          element: withFallback(<SalesOrderList />),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "add",
          element: withFallback(<AddSalesOrder />),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "edit/:id",
          element: withFallback(<AddSalesOrder />),
          errorElement: withFallback(<ErrorPage />),
        },
      ],
    },
    {
      path: "invoices",
      // element: withFallback(<Invoice />),
      errorElement: withFallback(<ErrorPage />),
      children: [
        {
          index: true,
          element: withFallback(<Invoice />),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "add",
          element: withFallback(<AddInvoiceForm />),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "edit/:id",
          element: withFallback(<EditInvoiceForm />),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "view/:id",
          element: withFallback(<InvoiceUI />),
          errorElement: withFallback(<ErrorPage />),
        },
      ],
    },
    
    {
      path: "sales-receipts",
      // element: withFallback(<Invoice />),
      errorElement: withFallback(<ErrorPage />),
      children: [
        {
          index: true,
          element: withFallback(<SalesReceipt />),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "add",
          element: withFallback(<AddSalesReceiptForm />),
          errorElement: withFallback(<ErrorPage />),
        },
      ],
    },
    {
      path: "payments-received",
      // element: withFallback(<Invoice />),
      errorElement: withFallback(<ErrorPage />),
      children: [
        {
          index: true,
          element: withFallback(<PaymentsReceived />),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "add",
          element: withFallback(<AddPaymentReceivedFrom />),
          errorElement: withFallback(<ErrorPage />),
        },
      ],
    },
    {
      path: "recurring-invoice",
      // element: withFallback(<Invoice />),
      errorElement: withFallback(<ErrorPage />),
      children: [
        {
          index: true,
          element: withFallback(<RecurringInvoice />),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "add",
          element: withFallback(<AddRecurringInvoice />),
          errorElement: withFallback(<ErrorPage />),
        },
      ],
    },
    {
      path: "credit-notes",
      // element: withFallback(<Invoice />),
      errorElement: withFallback(<ErrorPage />),
      children: [
        {
          index: true,
          element: withFallback(<CreditNotes />),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "add",
          element: withFallback(<AddCreditNotes />),
          errorElement: withFallback(<ErrorPage />),
        },
      ],
    },
    {
      path: "made-payment",
      // element: withFallback(<Invoice />),
      errorElement: withFallback(<ErrorPage />),
      children: [
        {
          index: true,
          element: withFallback(<MadePayment />),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "add",
          element: withFallback(<AddMadePaymentForm />),
          errorElement: withFallback(<ErrorPage />),
        },
      ],
    },
    {
      path: "payment-terms",
      element: withFallback(<PaymentTerms />),
      errorElement: withFallback(<ErrorPage />),
    },
    {
      path: "attribute-category",
      element: withFallback(<AttributeCategory />),
      errorElement: withFallback(<ErrorPage />),
    },
    {
      path: "attributes",
      element: withFallback(<Attributes />),
      errorElement: withFallback(<ErrorPage />),
    },

    {
      path: "master-sales",
      element: withFallback(<MasterSales />),
      errorElement: withFallback(<ErrorPage />),
    },

    {
      path: "product-sales",
      element: withFallback(<ProductSales />),
      errorElement: withFallback(<ErrorPage />),
    },

    {
      path: "purchase-report",
      element: withFallback(<PurchaseReport />),
      errorElement: withFallback(<ErrorPage />),
    },

    {
      path: "stock-summary",
      element: withFallback(<StockReport />),
      errorElement: withFallback(<ErrorPage />),
    },
    {
      path: "stock-ledger",
      element: withFallback(<StockLedgerReport />),
      errorElement: withFallback(<ErrorPage />),
    },

    {
      path: "customer-summary",
      element: withFallback(<CustomerReport />),
      errorElement: withFallback(<ErrorPage />),
    },

    {
      path: "customer-ledger",
      element: withFallback(<CustomerLedgerReport />),
      errorElement: withFallback(<ErrorPage />),
    },

    {
      path: "due-receivable-report",
      element: withFallback(<DueReceiveableReport />),
      errorElement: withFallback(<ErrorPage />),
    },
    {
      path: "due-received-report",
      element: withFallback(<DueReceivedReport />),
      errorElement: withFallback(<ErrorPage />),
    },
    {
      path: "supplier-summary",
      element: withFallback(<SupplierSummary />),
      errorElement: withFallback(<ErrorPage />),
    },
    {
      path: "supplier-ledger",
      element: withFallback(<SupplierLedgerReport />),
      errorElement: withFallback(<ErrorPage />),
    },
    {
      path: "due-payable-report",
      element: withFallback(<DuePayableReport />),
      errorElement: withFallback(<ErrorPage />),
    },

    {
      path: "due-paid-report",
      element: withFallback(<DuePaidReport />),
      errorElement: withFallback(<ErrorPage />),
    },

    {
      path: "product-profit-loss",
      element: withFallback(<ProductProfitLoss />),
      errorElement: withFallback(<ErrorPage />),
    },
    {
      path: "invoice-profit-loss",
      element: withFallback(<InvoiceWiseProfitLoss />),
      errorElement: withFallback(<ErrorPage />),
    },
    {
      path: "customer-profit-loss",
      element: withFallback(<CustomerWiseProfitLoss />),
      errorElement: withFallback(<ErrorPage />),
    },
    {
      path: "sales-tax-report",
      element: withFallback(<SalesTaxReport />),
      errorElement: withFallback(<ErrorPage />),
    },
    {
      path: "purchase-tax-report",
      element: withFallback(<PurchaseTaxReport />),
      errorElement: withFallback(<ErrorPage />),
    },

    {
      path: "quotation-qetails-ui",
      element: withFallback(<QuotationDetailsUI />),
      errorElement: withFallback(<ErrorPage />),
    },
    {
      path: "warehouse",
      element: withFallback(<WareHouse />),
      errorElement: withFallback(<ErrorPage />),
    },
    {
      path: "*",
      element: withFallback(<NotFoundPage />),
    },
  ],
};

export default billingRoutes;
