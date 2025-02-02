import Invoice_template_1 from "@/components/common/billing/invoice-template/template_1";
import Invoice_template_2 from "@/components/common/billing/invoice-template/template_2";
import Invoice_template_3 from "@/components/common/billing/invoice-template/template_3";
import { Heading } from "@/components/common/heading";
import { Loading } from "@/components/common/loading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/coonfig/site";

import { useGetSalesInvoicesByIdQuery } from "@/store/services/billing/api/invoices";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const invoices = [
  { id: 1, component: Invoice_template_1 },
  { id: 2, component: Invoice_template_2 },
  { id: 3, component: Invoice_template_3 },
];

const SalesInvoice = () => {
  const navigate = useNavigate();
  const params = useParams();
  const invoiceId = Number(params.id);

  const { data: invoiceData, isLoading: invoiceLoading } =
    useGetSalesInvoicesByIdQuery(invoiceId, { skip: !invoiceId });

  let totalDiscount = 0;

  if (invoiceData?.data?.details) {
    invoiceData.data.details.forEach((product) => {
      const discountPerItem = (product.price * product.discount) / 100;
      const discountForProduct = discountPerItem * product.qty;
      totalDiscount += discountForProduct;
    });
  }

  if (invoiceLoading) {
    return <Loading />;
  }

  // Find the invoice template based on siteConfig.template
  const selectedInvoice = invoices.find(
    (invoice) => invoice.id == siteConfig.template
  );

  const InvoiceTemplate = selectedInvoice ? selectedInvoice.component : null;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Heading
          title="Invoice"
          description="Manage your sub accounts for your business"
        />
        <Button onClick={() => navigate("/billing/invoices")} size={"sm"}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Invoice List
        </Button>
      </div>
      <Separator />
      <div className="max-w-4xl mx-auto">
        {InvoiceTemplate ? (
          <InvoiceTemplate
            invoiceData={invoiceData?.data}
            totalDiscount={totalDiscount}
          />
        ) : (
          <p className="text-center text-gray-500">No template found</p>
        )}
      </div>
    </div>
  );
};

export default SalesInvoice;
