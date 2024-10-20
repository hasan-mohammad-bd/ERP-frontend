import withFallback from "@/utils/with-fallback";
import {
  // DashboardAccounts,
  ErrorPage,
  Layout,
  NotFoundPage,
} from "./components";


import Units from "@/pages/billing/units";
import Category from "@/pages/billing/category";
import SubCategory from "@/pages/billing/sub-category";
import ClassCategory from "@/pages/billing/child-category";
import Brand from "@/pages/billing/brand";
import PurchaseOrder from "@/pages/billing/purchase-order";
import { AddPurchaseOrderForm } from "@/pages/billing/purchase-order/components/add-purchase-order-form";
import ItemAddForm from "@/pages/billing/items/add-item";
import ItemList from "@/pages/billing/items/items-list";
import PurchaseReceive from "@/pages/billing/purchase-receive";
import { AddPurchaseReceiveForm } from "@/pages/billing/purchase-receive/components/add-purchase-recieve-form";
import Customers from "@/pages/billing/customer";
import { AddQuoteForm } from "@/pages/billing/quotes/components/add-quotes-form";
import Quotes from "@/pages/billing/quotes";
import Invoice from "@/pages/billing/invoices";
import { AddInvoiceForm } from "@/pages/billing/invoices/components/add-quotes-form";
import SalesReceipt from "@/pages/billing/sales-receipts";
import { AddSalesReceiptForm } from "@/pages/billing/sales-receipts/components/add-sales-receipts-form";
import PaymentsReceived from "@/pages/billing/payments-received";
import { AddPaymentReceivedFrom } from "@/pages/billing/payments-received/components/add-sales-receipts-form";
import RecurringInvoice from "@/pages/billing/recurring-invoice";
import { AddRecurringInvoice } from "@/pages/billing/recurring-invoice/components/add-recurring-invoice-form";
import CreditNotes from "@/pages/billing/credit-notes";
import { AddCreditNotes } from "@/pages/billing/credit-notes/components/add-credit-notes-form";
import SupplierList from "@/pages/billing/supplier/supplier-list";
import { AddSupplierForm } from "@/pages/billing/supplier/add-supplier/components/add-supplier-form";
import Supplier from "@/pages/billing/supplier/add-supplier";
import ExpensesList from "@/pages/billing/expenses/expenses-list";
import Expenses from "@/pages/billing/expenses/add-expenses";
import AddExpensesForm from "@/pages/billing/expenses/add-expenses/components/add-expenses-form";


const billingRoutes = {
  path: "billing/",
  element: withFallback(<Layout />),
  children: [
    {
      index: true,
      element: withFallback(<NotFoundPage />),
    },

    {
      path: "customers",
      element: withFallback(<Customers />),
      errorElement: withFallback(<ErrorPage />),
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
          element: withFallback(<AddSupplierForm />),
          errorElement: withFallback(<ErrorPage />),
        },
      ],
    },


    {
      path: "expenses",
      element: withFallback(<Expenses />),
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
          element: withFallback(<Expenses />),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "edit/:id",
          element: withFallback(<AddExpensesForm />),
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
      path: "class-category",
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

    // {
    //   path: "manage-purchase",
    //   errorElement: withFallback(<ErrorPage />),
    //   children: [
    //     {
    //       index: true,
    //       element: withFallback(<ManagePurchase />),
    //       errorElement: withFallback(<ErrorPage />),
    //     },
    //     {
    //       path: "add",
    //       element: withFallback(<AddManagePurchase />),
    //       errorElement: withFallback(<ErrorPage />),
    //     }
    //   ]
    // },

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
      path: "quotes",
      // element: withFallback(<Quotes />),
      errorElement: withFallback(<ErrorPage />),
      children: [
        {
          index: true,
          element: withFallback(<Quotes />),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "add",
          element: withFallback(<AddQuoteForm />),
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
      path: "*",
      element: withFallback(<NotFoundPage />),
    },
  ],
};

export default billingRoutes;
