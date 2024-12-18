import withFallback from "@/utils/with-fallback";
import {
  AddExpense,
  AddPurchaseForm,
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
  InvoiceRefunds,
  Layout,
  NotFoundPage,
  PaymentTerms,
  PurchaseList,
  PurchaseRefunds,
  // Quotes,
  SalesOrderList,
  Stocks,
  SupplierPayments,
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
import SaleRegister from "@/pages/billing/reports/sale-register";
import ProductSales from "@/pages/billing/reports/product-wise-sales";
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

import Brand from "@/pages/billing/brand";
import AttributeCategory from "@/pages/billing/attribute-category";
import Attributes from "@/pages/billing/attributes";
import ExpensesCategory from "@/pages/billing/expenses-category";
import CustomerAddForm from "@/pages/billing/customers/add-customer";
import QuotationDetailsUI from "@/pages/billing/quotation-details-ui";
import AddInvoiceForm from "@/pages/billing/invoices/components/add-invoice-form";
import PurchaseOrder from "@/pages/billing/purchase-order";
import AddPurchaseOrderForm from "@/pages/billing/purchase-order/components/add-purchase-order";
// import EditPurchaseOrder from "@/pages/billing/purchase-order/components/edit-quotes-form";
import InvoiceUI from "@/pages/billing/invoices/components/invoiceUI";
import WareHouse from "@/pages/billing/warehouse";
import PurchaseReturn from "@/pages/billing/purchase-return";
import AddPurchaseReturnForm from "@/pages/billing/purchase-return/components/add-purchase-return";
import PurchaseRegister from "@/pages/billing/reports/purchase-register";

import InvoiceReturn from "@/pages/billing/invoice-return";
import AddInvoiceReturnForm from "@/pages/billing/invoice-return/components/add-invoice-return";
import SupplierWisePurchase from "@/pages/billing/reports/supplier-wise-purchase";
import PaymentReceiveDetails from "@/pages/billing/payments-received/components/payment-receive-details";
import CustomerCollection from "@/pages/billing/reports/customer-collection";
import ItemWisePurchase from "@/pages/billing/reports/item-wise-purchase";
import ItemWiseSale from "@/pages/billing/reports/item-wise-sale";
import ReceiveableReport from "@/pages/billing/reports/receivable-report";
import PayableReport from "@/pages/billing/reports/payable-report";
import AgedReceivableReport from "@/pages/billing/reports/aged-receivable-report";

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
      path: "purchases",
      // element: withFallback(<Invoice />),
      errorElement: withFallback(<ErrorPage />),
      children: [
        {
          index: true,
          element: withFallback(<PurchaseList />),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "add",
          element: withFallback(<AddPurchaseForm />),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "edit/:id",
          element: withFallback(<AddPurchaseForm />),
          errorElement: withFallback(<ErrorPage />),
        },
      ],
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
          element: withFallback(<AddPurchaseOrderForm />),
          errorElement: withFallback(<ErrorPage />),
        },
      ],
    },
    {
      path: "purchase-return/",
      errorElement: withFallback(<ErrorPage />),
      children: [
        {
          index: true,
          element: withFallback(<PurchaseReturn />),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "add/:id",
          element: withFallback(<AddPurchaseReturnForm />),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "edit/:id",
          element: withFallback(<AddPurchaseReturnForm />),
          errorElement: withFallback(<ErrorPage />),
        },
      ],
    },
    {
      path: "invoice-return/",
      errorElement: withFallback(<ErrorPage />),
      children: [
        {
          index: true,
          element: withFallback(<InvoiceReturn />),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "add/:id",
          element: withFallback(<AddInvoiceReturnForm />),
          errorElement: withFallback(<ErrorPage />),
        },
        /*         {
          path: "edit/:id",
          element: withFallback(<AddPurchaseReturnForm />),
          errorElement: withFallback(<ErrorPage />),
        }, */
      ],
    },
    {
      path: "purchase-refund",
      errorElement: withFallback(<ErrorPage />),
      children: [
        {
          index: true,
          element: withFallback(<PurchaseRefunds />),
          errorElement: withFallback(<ErrorPage />),
        },
      ],
    },
    {
      path: "invoice-refund",
      errorElement: withFallback(<ErrorPage />),
      children: [
        {
          index: true,
          element: withFallback(<InvoiceRefunds />),
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
        {
          path: "details/:id",
          element: withFallback(<PaymentReceiveDetails />),
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
          element: withFallback(<AddInvoiceForm />),
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
      ],
    },
    {
      path: "supplier-payments",
      errorElement: withFallback(<ErrorPage />),
      children: [
        {
          index: true,
          element: withFallback(<SupplierPayments />),
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
      path: "reports",
      // element: withFallback(<Invoice />),
      errorElement: withFallback(<ErrorPage />),
      children: [
        {
          path: "sale-register",
          element: withFallback(<SaleRegister />),
          errorElement: withFallback(<ErrorPage />),
        },

        {
          path: "product-sales",
          element: withFallback(<ProductSales />),
          errorElement: withFallback(<ErrorPage />),
        },

        {
          path: "purchase-register",
          element: withFallback(<PurchaseRegister />),
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

      ],
    },



    {
      path: "reports/supplier-wise-purchase-report",
      element: withFallback(<SupplierWisePurchase />),
      errorElement: withFallback(<ErrorPage />),
    },
    {
      path: "reports/item-wise-purchase-report",
      element: withFallback(<ItemWisePurchase />),
      errorElement: withFallback(<ErrorPage />),
    },
    {
      path: "reports/item-wise-sale-report",
      element: withFallback(<ItemWiseSale />),
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
      path: "stocks",
      element: withFallback(<Stocks />),
      errorElement: withFallback(<ErrorPage />),
    },
    {
      path: "customer-collection",
      element: withFallback(<CustomerCollection />),
      errorElement: withFallback(<ErrorPage />),
    },
    {
      path: "receivable-report",
      element: withFallback(<ReceiveableReport />),
      errorElement: withFallback(<ErrorPage />),
    },
    {
      path: "payable-report",
      element: withFallback(<PayableReport />),
      errorElement: withFallback(<ErrorPage />),
    },
    {
      path: "aged-receivable-report",
      element: withFallback(<AgedReceivableReport />),
      errorElement: withFallback(<ErrorPage />),
    },
    {
      path: "*",
      element: withFallback(<NotFoundPage />),
    },
  ],
};

export default billingRoutes;
