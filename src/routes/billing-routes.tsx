import withFallback from "@/utils/with-fallback";
import {
  // DashboardAccounts,
  ErrorPage,
  Layout,
  NotFoundPage,
} from "./components";
import Customers from "@/pages/billing/customer";
import Supplier from "@/pages/billing/supplier";
import Unit from "@/pages/billing/unit";
import Category from "@/pages/billing/category";
import SubCategory from "@/pages/billing/sub-category";
import ClassCategory from "@/pages/billing/child-category";
import Brand from "@/pages/billing/brand";
import PurchaseOrder from "@/pages/billing/purchase-order";
import { AddPurchaseOrderForm } from "@/pages/billing/purchase-order/components/add-purchase-order-form"
import ItemAddForm from "@/pages/billing/items/add-item";
import ItemList from "@/pages/billing/items/items-list";
import PurchaseReceive from "@/pages/billing/purchase-receive";
import { AddPurchaseReceiveForm } from "@/pages/billing/purchase-receive/components/add-purchase-recieve-form";

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
      element: withFallback(<Supplier />),
      errorElement: withFallback(<ErrorPage />),
    },

    {
      path: "unit",
      element: withFallback(<Unit />),
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
        }
      ]
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
        }
      ]
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
      path: "*",
      element: withFallback(<NotFoundPage />),
    },
  ],
};

export default billingRoutes;
