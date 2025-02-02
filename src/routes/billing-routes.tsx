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
import ChildCategory from "@/pages/billing/child-category";

import ItemAddForm from "@/pages/billing/items/add-item";
import ItemList from "@/pages/billing/items/items-list";
import PurchaseReceive from "@/pages/billing/purchase-receive";
import { AddPurchaseReceiveForm } from "@/pages/billing/purchase-receive/components/add-purchase-recieve-form";
import Invoice from "@/pages/billing/invoices";

import SalesReceipt from "@/pages/billing/sales-receipts";
import { AddSalesReceiptForm } from "@/pages/billing/sales-receipts/components/add-sales-receipts-form";
import PaymentsReceived from "@/pages/billing/payments-received";
import RecurringInvoice from "@/pages/billing/recurring-invoice";
import { AddRecurringInvoice } from "@/pages/billing/recurring-invoice/components/add-recurring-invoice-form";
import CreditNotes from "@/pages/billing/credit-notes";
import { AddCreditNotes } from "@/pages/billing/credit-notes/components/add-credit-notes-form";
import SupplierList from "@/pages/billing/supplier";
import Supplier from "@/pages/billing/supplier/add-supplier";
import SubCategory from "@/pages/billing/sub-category";
import Customers from "@/pages/billing/customers";
import ManagePurchase from "@/pages/billing/manage-purchase";
import { AddManagePurchase } from "@/pages/billing/manage-purchase/components/add-manage-purchase-form";
import MadePayment from "@/pages/billing/made-payment";
import { AddMadePaymentForm } from "@/pages/billing/made-payment/components/add-purchase-recieve-form";
import SaleRegister from "@/pages/billing/reports/sale-register";
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
import SalesInvoice from "@/pages/billing/invoices/components/sales-invoice";
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
import AgedPayableReport from "@/pages/billing/reports/aged-payable-report";
import CustomerStatement from "@/pages/billing/reports/customer-statement";
import RepresentativeWiseSale from "@/pages/billing/reports/representative-wise-sale";
import PurchaseInvoice from "@/pages/billing/purchases/components/purchase-invoice";
import SaleSummary from "@/pages/billing/reports/sale-summary";
import RoleAccess from "@/lib/access-control/role-access";
import CustomerDetailsStatement from "@/pages/billing/reports/customer-details-statement";
import SupplierStatement from "@/pages/billing/reports/supplier-statement";
import SupplierDetailsStatement from "@/pages/billing/reports/supplier-details-statement";
import WarehouseWiseItemSale from "@/pages/billing/reports/warehouse-wise-item-sale-summary";
import SaleProfitLass from "@/pages/billing/reports/sale-profit-lass";
import CustomerWiseProfit from "@/pages/billing/reports/customer-wise-item-profit";
import TopSoldItems from "@/pages/billing/reports/top-sold-items";
import StockTransactionReport from "@/pages/billing/reports/stock-transaction-report";
import StockBatchReport from "@/pages/billing/reports/stock-batch-report";
import StockItemSummaryReport from "@/pages/billing/reports/stock-item-summary-report";
import SupplierPaymentDetails from "@/pages/billing/supplier-payments/components/supplier-payment-details";
import SupplierWiseSale from "@/pages/billing/reports/supplier-wise-sales";
import MonthToDateSale from "@/pages/billing/reports/month-to-date-sale";
import BillingReportsDashboard from "@/pages/billing/reports-dashboard";
import Division from "@/pages/billing/regions/division";
import Area from "@/pages/billing/regions/area";
import Territory from "@/pages/billing/regions/territory";
import RegionUsers from "@/pages/billing/regions/region-user";
import CustomerSummaryReport from "@/pages/billing/reports/customer-balance-summary-report";


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
      errorElement: withFallback(<ErrorPage />),
      children: [
        {
          index: true,
          element: withFallback(
            <RoleAccess roles={["customers"]} showUnauthorizedPage={true}>
              <Customers />
            </RoleAccess>
          ),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "add",
          element: withFallback(
            <RoleAccess
              roles={["customers.create"]}
              showUnauthorizedPage={true}
            >
              <CustomerAddForm />
            </RoleAccess>
          ),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "edit/:id",
          element: withFallback(
            <RoleAccess roles={["customers.edit"]} showUnauthorizedPage={true}>
              <EditCustomerForm />
            </RoleAccess>
          ),
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
      element: withFallback(
        <RoleAccess roles={["units"]} showUnauthorizedPage={true}>
          <Units />
        </RoleAccess>
      ),
      errorElement: withFallback(<ErrorPage />),
    },

    {
      path: "category",
      element: withFallback(
        <RoleAccess roles={["categories"]} showUnauthorizedPage={true}>
          <Category />
        </RoleAccess>
      ),
      errorElement: withFallback(<ErrorPage />),
    },

    {
      path: "sub-category",
      element: withFallback(
        <RoleAccess roles={["categories"]} showUnauthorizedPage={true}>
          <SubCategory />
        </RoleAccess>
      ),
      errorElement: withFallback(<ErrorPage />),
    },

    {
      path: "child-category",
      element: withFallback(
        <RoleAccess roles={["categories"]} showUnauthorizedPage={true}>
          <ChildCategory />
        </RoleAccess>
      ),
      errorElement: withFallback(<ErrorPage />),
    },

    {
      path: "Brand",
      element: withFallback(
        <RoleAccess roles={["brands"]}  showUnauthorizedPage={true}>
          <Brand />
        </RoleAccess>
      ),
      errorElement: withFallback(<ErrorPage />),
    },

    {
      path: "purchases",
      errorElement: withFallback(<ErrorPage />),
      children: [
        {

          index: true,
          element: withFallback(
            <RoleAccess roles={["purchases"]} showUnauthorizedPage={true}>
              <PurchaseList />
            </RoleAccess>
          ),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "add",
          element: withFallback(
            <RoleAccess roles={["purchases.create"]} showUnauthorizedPage={true}>
              <AddPurchaseForm />
            </RoleAccess>
          ),
          errorElement: withFallback(<ErrorPage />),
        },
        {

          path: "edit/:id",
          element: withFallback(
            <RoleAccess roles={["purchases.edit"]} showUnauthorizedPage={true}>
              <AddPurchaseForm />
            </RoleAccess>
          ),
          errorElement: withFallback(<ErrorPage />),
        },
        {

          path: "view/:id",
          element: withFallback(
            <RoleAccess roles={["purchases.show"]} showUnauthorizedPage={true}>
              <PurchaseInvoice />
            </RoleAccess>
          ),
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
          element: withFallback(
            <RoleAccess roles={["purchase-orders"]} showUnauthorizedPage={true}>
              <PurchaseOrder />
            </RoleAccess>
          ),
          errorElement: withFallback(<ErrorPage />),

        },
        {
          path: "add",
          element: withFallback(
            <RoleAccess roles={["purchase-orders.create"]} showUnauthorizedPage={true}>
              <AddPurchaseOrderForm />
            </RoleAccess>
          ),
          errorElement: withFallback(<ErrorPage />),

        },
        {
        path: "edit/:id",
        element: withFallback(
          <RoleAccess roles={["purchase-orders.edit"]} showUnauthorizedPage={true}>
            <AddPurchaseOrderForm />
          </RoleAccess>
        ),
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
          element: withFallback(
            <RoleAccess roles={["purchase-return"]} showUnauthorizedPage={true}>
              <PurchaseReturn />
            </RoleAccess>
          ),
          errorElement: withFallback(<ErrorPage />),
        },
        {

          path: "add/:id",
          element: withFallback(
            <RoleAccess roles={["purchase-return.create"]} showUnauthorizedPage={true}>
              <AddPurchaseReturnForm />
            </RoleAccess>
          ),
          errorElement: withFallback(<ErrorPage />),          
        },
        {
          path: "edit/:id",
          element: withFallback(
            <RoleAccess roles={["purchase-return.edit"]} showUnauthorizedPage={true}>
              <AddPurchaseReturnForm />
            </RoleAccess>
          ),
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
          element: withFallback(
            <RoleAccess roles={["invoice-return"]} showUnauthorizedPage={true}>
              <InvoiceReturn />
            </RoleAccess>
          ),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "add/:id",
          element: withFallback(
            <RoleAccess roles={["invoice-return.create"]} showUnauthorizedPage={true}>
              <AddInvoiceReturnForm />
            </RoleAccess>
          ),
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
          element: withFallback(
            <RoleAccess roles={["purchase-refunds"]} showUnauthorizedPage={true}>
              <PurchaseRefunds />
            </RoleAccess>
          ),
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
          element: withFallback(
            <RoleAccess roles={["invoice-refunds"]} showUnauthorizedPage={true}>
              <InvoiceRefunds />
            </RoleAccess>
          ),
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
          element: withFallback(
            <RoleAccess roles={["items"]} showUnauthorizedPage={true}>
              <ItemList />
            </RoleAccess>
          ),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "add",
          element: withFallback(
            <RoleAccess roles={["items.create"]} showUnauthorizedPage={true}>
              <ItemAddForm />
            </RoleAccess>
          ),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "edit/:id",
          element: withFallback(
            <RoleAccess roles={["items.edit"]} showUnauthorizedPage={true}>
              <ItemAddForm />
            </RoleAccess>
          ),
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
      errorElement: withFallback(<ErrorPage />),
      children: [
        {
          index: true,
          element: withFallback(
            <RoleAccess roles={["invoices"]} showUnauthorizedPage={true}>
              <Invoice />
            </RoleAccess>
          ),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "add",
          element: withFallback(
            <RoleAccess roles={["invoices.create"]} showUnauthorizedPage={true}>
              <AddInvoiceForm />
            </RoleAccess>
          ),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "edit/:id",
          element: withFallback(
            <RoleAccess roles={["invoices.edit"]} showUnauthorizedPage={true}>
              <AddInvoiceForm />
            </RoleAccess>
          ),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "add-from-sales-order/:sales_order_id",
          element: withFallback(
            <RoleAccess roles={["invoices.create"]} showUnauthorizedPage={true}>
              <AddInvoiceForm />
            </RoleAccess>
          ),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "view/:id",
          element: withFallback(
            <RoleAccess roles={["invoices.show"]} showUnauthorizedPage={true}>
              <SalesInvoice />
            </RoleAccess>
          ),
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
      errorElement: withFallback(<ErrorPage />),
      children: [
        {
          index: true,
          element: withFallback(
            <RoleAccess roles={["payment-receives"]} showUnauthorizedPage={true}>
              <PaymentsReceived />
            </RoleAccess>
          ),
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
        {
          path: "details/:id",
          element: withFallback(<SupplierPaymentDetails />),
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
      element: withFallback(
        <RoleAccess
          roles={["attribute-categories"]}
          showUnauthorizedPage={true}
        >
          <AttributeCategory />
        </RoleAccess>
      ),
      errorElement: withFallback(<ErrorPage />),
    },
    {
      path: "attributes",
      element: withFallback(
        <RoleAccess roles={["attributes"]} showUnauthorizedPage={true}>
          <Attributes />
        </RoleAccess>
      ),
      errorElement: withFallback(<ErrorPage />),
    },

    {
      path: "reports",
      // element: withFallback(<Invoice />),
      errorElement: withFallback(<ErrorPage />),
      children: [
        {
          path: "dashboard",
          element: withFallback(
            <RoleAccess roles={["reports"]}>
              <BillingReportsDashboard />
            </RoleAccess>
          ),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "supplier-statement",
          element: withFallback(<SupplierStatement />),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "supplier-details-statement",
          element: withFallback(<SupplierDetailsStatement />),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "customer-collection",
          element: withFallback(<CustomerCollection />),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "supplier-ledger",
          element: withFallback(<SupplierLedgerReport />),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "customer-ledger",
          element: withFallback(<CustomerLedgerReport />),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "customer-details-statement-report",
          element: withFallback(<CustomerDetailsStatement />),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "aged-receivable-report",
          element: withFallback(<AgedReceivableReport />),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "receivable-report",
          element: withFallback(<ReceiveableReport />),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "sales-register",
          element: withFallback(<SaleRegister />),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "item-sale-summary",
          element: withFallback(<SaleSummary />),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "sale-wise-profit-lass",
          element: withFallback(<SaleProfitLass />),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "stock-batch-report",
          element: withFallback(<StockBatchReport />),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "customer-wise-item-profit",
          element: withFallback(<CustomerWiseProfit />),
          errorElement: withFallback(<ErrorPage />),
        },

        {
          path: "warehouse-wise-item-sale-summary",
          element: withFallback(<WarehouseWiseItemSale />),
          errorElement: withFallback(<ErrorPage />),
        },

        {
          path: "top-sold-items",
          element: withFallback(<TopSoldItems />),
          errorElement: withFallback(<ErrorPage />),
        },

        {
          path: "purchase-register",
          element: withFallback(<PurchaseRegister />),
          errorElement: withFallback(<ErrorPage />),
        },

        {
          path: "stock-report",
          element: withFallback(<StockReport />),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "stock-ledger",
          element: withFallback(<StockLedgerReport />),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "stock-item-summary-report",
          element: withFallback(<StockItemSummaryReport />),
          errorElement: withFallback(<ErrorPage />),
        },

        {
          path: "customer-summary",
          element: withFallback(<CustomerReport />),
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
          path: "supplier-wise-purchase",
          element: withFallback(<SupplierWisePurchase />),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "item-wise-purchase",
          element: withFallback(<ItemWisePurchase />),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "item-wise-sales-report",
          element: withFallback(<ItemWiseSale />),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "stock-transaction-report",
          element: withFallback(<StockTransactionReport />),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "payable-report",
          element: withFallback(<PayableReport />),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "aged-payable-report",
          element: withFallback(<AgedPayableReport />),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "customer-statement-report",
          element: withFallback(<CustomerStatement />),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "customer-summary-report",
          element: withFallback(<CustomerSummaryReport />),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "representative-wise-sale-report",
          element: withFallback(<RepresentativeWiseSale />),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "supplier-wise-sales-report",
          element: withFallback(<SupplierWiseSale />),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "month-to-date-sale-report",
          element: withFallback(<MonthToDateSale />),
          errorElement: withFallback(<ErrorPage />),
        },
       
      ],
    },






    {
      path: "division",
      element: withFallback(
        // <RoleAccess roles={["categories"]} showUnauthorizedPage={true}>
          <Division />
        // </RoleAccess>
      ),
      errorElement: withFallback(<ErrorPage />),
    },

    {
      path: "area",
      element: withFallback(
        // <RoleAccess roles={["categories"]} showUnauthorizedPage={true}>
          <Area />
        // </RoleAccess>
      ),
      errorElement: withFallback(<ErrorPage />),
    },

    {
      path: "territory",
      element: withFallback(
        // <RoleAccess roles={["categories"]} showUnauthorizedPage={true}>
          <Territory />
        // </RoleAccess>
      ),
      errorElement: withFallback(<ErrorPage />),
    },


   {
      path: "region-user",
      element: withFallback(
        // <RoleAccess roles={["categories"]} showUnauthorizedPage={true}>
          <RegionUsers />
        // </RoleAccess>
      ),
      errorElement: withFallback(<ErrorPage />),
    },









    {
      path: "quotation-qetails-ui",
      element: withFallback(<QuotationDetailsUI />),
      errorElement: withFallback(<ErrorPage />),
    },
    {
      path: "warehouse",
      element: withFallback(
        <RoleAccess roles={["warehouses"]} showUnauthorizedPage={true}>
          <WareHouse />
        </RoleAccess>
      ),
      errorElement: withFallback(<ErrorPage />),
    },
    {
      path: "stocks",
      element: withFallback(
        <RoleAccess roles={["stocks"]} showUnauthorizedPage={true}>
          <Stocks />
        </RoleAccess>
      ),
      // element: withFallback(<Stocks />),
      errorElement: withFallback(<ErrorPage />),
    },
    {
      path: "*",
      element: withFallback(<NotFoundPage />),
    },
  ],
};

export default billingRoutes;
