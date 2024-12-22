import { Heading } from "@/components/common/heading";
import { Loading } from "@/components/common/loading";
import PrintPDFWrapper from "@/components/common/print-pdf-wrapper";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useGetSalesInvoicesByIdQuery } from "@/store/services/billing/api/invoices";
import { numberToWords } from "@/utils/formate-number";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const SalesInvoice = () => {
  const navigate = useNavigate();
  const params = useParams();
  const invoiceId = Number(params.id);

  const { data: invoiceData, isLoading: invoiceLoading } =
    useGetSalesInvoicesByIdQuery(invoiceId, { skip: !invoiceId });

  let totalDiscount = 0;

  invoiceData?.data.details.forEach((product) => {
    const discountPerItem = (product.price * product.discount) / 100;
    const discountForProduct = discountPerItem * product.qty;
    totalDiscount += discountForProduct;
  });

  if (invoiceLoading) {
    return <Loading />;
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Heading
          title="Invoice"
          description="Manage your sub accounts for you business"
        />
        <Button onClick={() => navigate("/billing/invoices")} size={"sm"}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Invoice List
        </Button>
      </div>
      <Separator />
      <div className="max-w-4xl mx-auto">
        <Card
          style={{
            padding: "26px",
            margin: "30px",
            border: "1px solid hsl(var(--border))",
          }}
        >
          <PrintPDFWrapper
            className="space-y-5 py-24"
            fileName="due-received-report"
          >
            {/* <div className="flex flex-col justify-center items-center">
              {invoiceData?.data.organization.logo && (
                <img
                  className="w-40 h-auto"
                  src={invoiceData?.data.organization.logo}
                ></img>
              )}
            </div>
            <div
              style={{ marginBottom: "24px", marginTop: "35px", width: "50%" }}
            >
              <h1 style={{ fontSize: "18px", fontWeight: "bold" }}>INVOICE</h1>
              <hr
                className="h-3 mt-2"
                style={{ backgroundColor: "hsl(var(--border))" }}
              />
            </div> */}
            {/* Invoice Header */}
            <div style={{ padding: "16px", backgroundColor: "#f2f2f2" }}>
              <div
                style={{
                  border: "1px solid #c0dad9",
                  borderCollapse: "collapse",
                  width: "100%",
                  fontSize: "12px",
                }}
              >
                {/* Row 1 */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1.5fr 2.5fr 1fr 2fr",
                    borderBottom: "1px solid #c0dad9",
                  }}
                >
                  <div
                    style={{
                      fontWeight: "bold",
                      padding: "3px 8px",
                      borderRight: "1px solid #c0dad9",
                    }}
                  >
                    COMPANY NAME
                  </div>
                  <div
                    style={{
                      padding: "3px 8px",
                      borderRight: "1px solid #c0dad9",
                      backgroundColor: "#ffffff",
                    }}
                  >
                    {invoiceData?.data.organization.name}
                  </div>
                  <div
                    style={{
                      fontWeight: "bold",
                      padding: "3px 8px",
                      borderRight: "1px solid #c0dad9",
                    }}
                  >
                    CLIENT ID
                  </div>
                  <div
                    style={{ padding: "3px 8px", backgroundColor: "#ffffff" }}
                  >
                    {invoiceData?.data.contact.id}
                  </div>
                </div>
                {/* Row 2 */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1.5fr 2.5fr 1fr 2fr",
                    borderBottom: "1px solid #c0dad9",
                  }}
                >
                  <div
                    style={{
                      fontWeight: "bold",
                      padding: "3px 8px",
                      borderRight: "1px solid #c0dad9",
                    }}
                  >
                    CONCERN PERSON
                  </div>
                  <div
                    style={{
                      padding: "3px 8px",
                      borderRight: "1px solid #c0dad9",
                      backgroundColor: "#ffffff",
                    }}
                  >
                    {invoiceData?.data?.sales_person?.name}
                  </div>
                  <div
                    style={{
                      fontWeight: "bold",
                      padding: "3px 8px",
                      borderRight: "1px solid #c0dad9",
                    }}
                  >
                    CELL NO
                  </div>
                  <div
                    style={{ padding: "3px 8px", backgroundColor: "#ffffff" }}
                  >
                    01552417122
                  </div>
                </div>
                {/* Row 3 */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1.5fr 2.5fr 1fr 2fr",
                    borderBottom: "1px solid #c0dad9",
                  }}
                >
                  <div
                    style={{
                      fontWeight: "bold",
                      padding: "3px 8px",
                      borderRight: "1px solid #c0dad9",
                    }}
                  >
                    ADDRESS
                  </div>
                  <div
                    style={{
                      padding: "3px 8px",
                      borderRight: "1px solid #c0dad9",
                      backgroundColor: "#ffffff",
                    }}
                  >
                    {invoiceData?.data.organization.address &&
                      invoiceData?.data.organization.address[0]}
                  </div>
                  <div
                    style={{
                      fontWeight: "bold",
                      padding: "3px 8px",
                      borderRight: "1px solid #c0dad9",
                    }}
                  >
                    EMAIL
                  </div>
                  <div
                    style={{ padding: "3px 8px", backgroundColor: "#ffffff" }}
                  >
                    {invoiceData?.data.contact.email}
                  </div>
                </div>
                {/* Row 4 */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1.5fr 2.5fr 1fr 2fr",
                    borderBottom: "1px solid #c0dad9",
                  }}
                >
                  <div
                    style={{
                      fontWeight: "bold",
                      padding: "3px 8px",
                      borderRight: "1px solid #c0dad9",
                    }}
                  >
                    PREPARED BY
                  </div>
                  <div
                    style={{
                      padding: "3px 8px",
                      borderRight: "1px solid #c0dad9",
                      backgroundColor: "#ffffff",
                    }}
                  >
                    {invoiceData?.data?.sales_person?.name}
                  </div>
                  <div
                    style={{
                      fontWeight: "bold",
                      padding: "3px 8px",
                      borderRight: "1px solid #c0dad9",
                    }}
                  >
                    INVOICE NO
                  </div>
                  <div
                    style={{ padding: "3px 8px", backgroundColor: "#ffffff" }}
                  >
                    {invoiceData?.data.invoice_number}
                  </div>
                </div>
                {/* Row 5 */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1.5fr 2.5fr 1fr 2fr",
                  }}
                >
                  <div
                    style={{
                      fontWeight: "bold",
                      padding: "3px 8px",
                      borderRight: "1px solid #c0dad9",
                    }}
                  >
                    DATE
                  </div>
                  <div
                    style={{
                      padding: "3px 8px",
                      borderRight: "1px solid #c0dad9",
                      backgroundColor: "#ffffff",
                    }}
                  >
                    {invoiceData?.data.date}
                  </div>
                  <div
                    style={{
                      fontWeight: "bold",
                      padding: "3px 8px",
                      borderRight: "1px solid #c0dad9",
                    }}
                  >
                    PO NO
                  </div>
                  <div
                    style={{ padding: "3px 8px", backgroundColor: "#ffffff" }}
                  >
                    N/A
                  </div>
                </div>
              </div>
            </div>

            <div style={{ padding: "16px", backgroundColor: "#f2f2f2" }}>
              {/* TITLE */}
              <div>
                <h2
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    marginBottom: "16px",
                  }}
                >
                  ITEM DETAILS
                </h2>
              </div>

              <div
                style={{
                  border: "2px solid #bfbfbf",
                  fontSize: "12px",
                  borderCollapse: "collapse",
                }}
              >
                {/* Table Header */}
                <div
                  style={{
                    display: "flex",
                    fontWeight: "bold",
                    borderBottom: "1px dashed #bfbfbf",
                    textAlign: "center",
                    backgroundColor: "#f2f2f2",
                  }}
                >
                  <div
                    style={{
                      padding: "5px 12px",
                      borderRight: "2px solid #bfbfbf",
                      maxWidth: "50px",
                      width: "100%",
                    }}
                  >
                    SL
                  </div>
                  <div
                    style={{
                      padding: "5px 12px",
                      borderRight: "2px solid #bfbfbf",
                      maxWidth: "370px",
                      width: "100%",
                    }}
                  >
                    NAME
                  </div>
                  <div
                    style={{
                      padding: "5px 10px",
                      borderRight: "2px solid #bfbfbf",
                      maxWidth: "80px",
                      width: "100%",
                    }}
                  >
                    QTY
                  </div>
                  <div
                    style={{
                      padding: "5px 12px",
                      borderRight: "2px solid #bfbfbf",
                      maxWidth: "110px",
                      width: "100%",
                    }}
                  >
                    UNIT PRICE
                  </div>
                  {/* <div
                    style={{
                      padding: "5px 12px",
                      borderRight: "2px solid #bfbfbf",
                      maxWidth: "110px",
                      width: "100%",
                    }}
                  >
                    DISCOUNT(%)
                  </div> */}
                  <div
                    style={{
                      padding: "5px 12px",
                      maxWidth: "105px",
                      width: "100%",
                      textAlign: "right",
                    }}
                  >
                    AMOUNT
                  </div>
                </div>

                {invoiceData?.data.details.map((item: any, index: number) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      borderBottom:
                        index === invoiceData?.data.details.length - 1
                          ? "2px solid #bfbfbf" // Solid border for the last child
                          : "1px dashed #bfbfbf", // Dashed border for others
                      backgroundColor: "#ffffff",
                    }}
                  >
                    <div
                      style={{
                        borderRight: "2px solid #bfbfbf",
                        padding: "4px 12px",
                        textAlign: "center",
                        maxWidth: "50px",
                        width: "100%",
                      }}
                    >
                      {index + 1}
                    </div>
                    <div
                      style={{
                        borderRight: "2px solid #bfbfbf",
                        padding: "4px 12px",
                        maxWidth: "370px",
                        width: "100%",
                      }}
                    >
                      {item.item.name}
                    </div>
                    <div
                      style={{
                        borderRight: "2px solid #bfbfbf",
                        textAlign: "center",
                        padding: "4px 12px",
                        maxWidth: "80px",
                        width: "100%",
                      }}
                    >
                      {item.qty}
                    </div>
                    <div
                      style={{
                        borderRight: "2px solid #bfbfbf",
                        textAlign: "right",
                        padding: "4px 10px",
                        maxWidth: "110px",
                        width: "100%",
                      }}
                    >
                      {Number(item.price).toFixed(2)}
                    </div>
                    {/* <div
                      style={{
                        borderRight: "2px solid #bfbfbf",
                        textAlign: "center",
                        padding: "4px 12px",
                        maxWidth: "110px",
                        width: "100%",
                      }}
                    >
                      {item.discount}
                    </div> */}

                    <div
                      style={{
                        textAlign: "right",
                        padding: "4px 12px",
                        maxWidth: "105px",
                        width: "100%",
                      }}
                    >
                      {/* {Number(item.total).toFixed(2)} */}
                      {Number(item.price * item.qty).toFixed(2)}
                    </div>
                  </div>
                ))}

                {/* Totals */}
                <div
                  style={{
                    display: "flex",
                    borderBottom: "2px solid #bfbfbf",
                    fontWeight: "bold",
                  }}
                >
                  <div
                    style={{
                      flex: 4,
                      borderRight: "2px solid #bfbfbf",
                      textAlign: "right",
                      padding: "4px 12px",
                    }}
                  >
                    TOTAL
                  </div>
                  <div
                    style={{
                      flex: 1,
                      textAlign: "right",
                      padding: "4px 12px",
                      maxWidth: "105px",
                      width: "100%",
                    }}
                  >
                    {invoiceData?.data.sub_total}
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    borderBottom: "2px solid #bfbfbf",
                  }}
                >
                  <div
                    style={{
                      flex: 4,
                      borderRight: "2px solid #bfbfbf",
                      textAlign: "right",
                      padding: "4px 12px",
                    }}
                  >
                    DISCOUNT TOTAL
                  </div>
                  <div
                    style={{
                      flex: 1,
                      textAlign: "right",
                      padding: "4px 12px",
                      maxWidth: "105px",
                      width: "100%",
                    }}
                  >
                    {totalDiscount?.toFixed(2)}
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    borderBottom: "2px solid #bfbfbf",
                  }}
                >
                  <div
                    style={{
                      flex: 4,
                      borderRight: "2px solid #bfbfbf",
                      textAlign: "right",
                      padding: "4px 12px",
                    }}
                  >
                    Tax ({invoiceData?.data.tax_type})
                  </div>
                  <div
                    style={{
                      flex: 1,
                      textAlign: "right",
                      padding: "4px 12px",
                      maxWidth: "105px",
                      width: "100%",
                    }}
                  >
                    {invoiceData?.data.tax}
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    borderBottom: "2px solid #bfbfbf",
                  }}
                >
                  <div
                    style={{
                      flex: 4,
                      borderRight: "2px solid #bfbfbf",
                      textAlign: "right",
                      padding: "4px 12px",
                    }}
                  >
                    SHIPPING CHARGES
                  </div>
                  <div
                    style={{
                      flex: 1,
                      textAlign: "right",
                      padding: "4px 12px",

                      maxWidth: "105px",
                      width: "100%",
                    }}
                  >
                    {invoiceData?.data.shipping_charges || 0}
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <div style={{ padding: "4px 12px" }}>
                    <strong>IN WORDS</strong>:{" "}
                    {numberToWords(invoiceData?.data.total || 0)}
                  </div>
                  <div
                    style={{
                      flex: 2,
                      borderRight: "2px solid #bfbfbf",
                      textAlign: "right",
                      fontWeight: "bold",
                      padding: "4px 12px 4px 0px",
                    }}
                  >
                    GRAND TOTAL
                  </div>
                  <div
                    style={{
                      flex: 1,
                      textAlign: "right",
                      fontWeight: "bold",
                      padding: "4px 12px",
                      maxWidth: "105px",
                      width: "100%",
                    }}
                  >
                    {invoiceData?.data.total}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div style={{ marginTop: "20px" }}>
              {invoiceData?.data?.warranty && (
                <div
                  style={{
                    padding: "16px",
                    backgroundColor: "#f2f2f2",
                    marginBottom: "20px",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "12px",
                      fontWeight: "bold",
                      padding: "4px 40px 4px 10px",
                      border: "2px solid #bfbfbf",
                      borderBottom: "none",
                      width: "fit-content",
                    }}
                  >
                    CALIBRATION & WARRANTY
                  </h3>
                  <div
                    style={{
                      padding: "10px",
                      backgroundColor: "#ffffff",
                      border: "2px solid #bfbfbf",
                    }}
                  >
                    <p style={{ fontSize: "12px" }}>
                      {invoiceData?.data?.warranty}
                    </p>
                  </div>
                </div>
              )}

              <div
                style={{
                  padding: "16px",
                  backgroundColor: "#f2f2f2",
                  display: "flex",
                  gap: "20px",
                }}
              >
                <div style={{ width: "70%" }}>
                  <h3
                    style={{
                      fontSize: "12px",
                      fontWeight: "bold",
                      padding: "4px 40px 4px 10px",
                      border: "2px solid #bfbfbf",
                      borderBottom: "none",
                      width: "fit-content",
                    }}
                  >
                    TERMS & CONDITIONS
                  </h3>
                  <div
                    style={{
                      padding: "10px",
                      backgroundColor: "#ffffff",
                      border: "2px solid #bfbfbf",
                    }}
                  >
                    <p style={{ fontSize: "12px" }}>
                      {invoiceData?.data.terms_conditions}
                    </p>
                  </div>
                </div>

                <div style={{ width: "30%" }}>
                  <h3
                    style={{
                      fontSize: "12px",
                      fontWeight: "bold",
                      padding: "4px 40px 4px 10px",
                      border: "2px solid #bfbfbf",
                      borderBottom: "none",
                    }}
                  >
                    SIGNATURE
                  </h3>
                  <div
                    style={{
                      padding: "10px",
                      backgroundColor: "#ffffff",
                      border: "2px solid #bfbfbf",
                      height: "120px",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </PrintPDFWrapper>
        </Card>
      </div>
    </div>
  );
};
export default SalesInvoice;
