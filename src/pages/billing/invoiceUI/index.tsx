import { Loading } from "@/components/common/loading";
import PrintPDFWrapper from "@/components/common/print-pdf-wrapper";
import { Card } from "@/components/ui/card";
import { useGetSalesInvoicesByIdQuery } from "@/store/services/billing/api/invoices";
import { useParams } from "react-router-dom";

const InvoiceUI = () => {
  const params = useParams();
  const invoiceId = Number(params.id);

  const { data: invoiceData, isLoading: invoiceLoading } =
    useGetSalesInvoicesByIdQuery(invoiceId, { skip: !invoiceId });

  // const invoice = invoiceData?.data || {};

  if (invoiceLoading) {
    return <Loading />;
  }

  return (
    <div className="max-w-6xl mx-auto">
      <Card
        style={{
          padding: "26px",
          margin: "30px",
          border: "1px solid hsl(var(--border))",
        }}
      >
        <PrintPDFWrapper className="space-y-4" fileName="due-received-report">
          <div className="flex flex-col justify-center items-center">
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
          </div>
          {/* Invoice Header */}
          <div
            style={{
              border: "1px solid hsl(var(--border))",
              borderCollapse: "collapse",
              width: "100%",
              fontSize: "14px",
            }}
          >
            {/* Row 1 */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 2fr 1fr 2fr",
                borderBottom: "1px solid hsl(var(--border))",
              }}
            >
              <div
                style={{
                  fontWeight: "bold",
                  padding: "8px",
                  borderRight: "1px solid hsl(var(--border))",
                }}
              >
                COMPANY NAME
              </div>
              <div
                style={{
                  padding: "8px",
                  borderRight: "1px solid hsl(var(--border))",
                }}
              >
                {invoiceData?.data.organization.name}
              </div>
              <div
                style={{
                  fontWeight: "bold",
                  padding: "8px",
                  borderRight: "1px solid hsl(var(--border))",
                }}
              >
                CLIENT ID
              </div>
              <div style={{ padding: "8px" }}>
                {invoiceData?.data.contact.id}
              </div>
            </div>
            {/* Row 2 */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 2fr 1fr 2fr",
                borderBottom: "1px solid hsl(var(--border))",
              }}
            >
              <div
                style={{
                  fontWeight: "bold",
                  padding: "8px",
                  borderRight: "1px solid hsl(var(--border))",
                }}
              >
                CONCERN PERSON
              </div>
              <div
                style={{
                  padding: "8px",
                  borderRight: "1px solid hsl(var(--border))",
                }}
              >
                {invoiceData?.data.sales_person.name}
              </div>
              <div
                style={{
                  fontWeight: "bold",
                  padding: "8px",
                  borderRight: "1px solid hsl(var(--border))",
                }}
              >
                CELL NO
              </div>
              <div style={{ padding: "8px" }}>01552417122</div>
            </div>
            {/* Row 3 */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 2fr 1fr 2fr",
                borderBottom: "1px solid hsl(var(--border))",
              }}
            >
              <div
                style={{
                  fontWeight: "bold",
                  padding: "8px",
                  borderRight: "1px solid hsl(var(--border))",
                }}
              >
                ADDRESS
              </div>
              <div
                style={{
                  padding: "8px",
                  borderRight: "1px solid hsl(var(--border))",
                }}
              >
                {invoiceData?.data.organization.address &&
                  invoiceData?.data.organization.address[0]}
              </div>
              <div
                style={{
                  fontWeight: "bold",
                  padding: "8px",
                  borderRight: "1px solid hsl(var(--border))",
                }}
              >
                EMAIL
              </div>
              <div style={{ padding: "8px" }}>
                {invoiceData?.data.contact.email}
              </div>
            </div>
            {/* Row 4 */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 2fr 1fr 2fr",
                borderBottom: "1px solid hsl(var(--border))",
              }}
            >
              <div
                style={{
                  fontWeight: "bold",
                  padding: "8px",
                  borderRight: "1px solid hsl(var(--border))",
                }}
              >
                PREPARED BY
              </div>
              <div
                style={{
                  padding: "8px",
                  borderRight: "1px solid hsl(var(--border))",
                }}
              >
                {invoiceData?.data.sales_person.name}
              </div>
              <div
                style={{
                  fontWeight: "bold",
                  padding: "8px",
                  borderRight: "1px solid hsl(var(--border))",
                }}
              >
                INVOICE NO
              </div>
              <div style={{ padding: "8px" }}>
                {invoiceData?.data.invoice_number}
              </div>
            </div>
            {/* Row 5 */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 2fr 1fr 2fr",
              }}
            >
              <div
                style={{
                  fontWeight: "bold",
                  padding: "8px",
                  borderRight: "1px solid hsl(var(--border))",
                }}
              >
                DATE
              </div>
              <div
                style={{
                  padding: "8px",
                  borderRight: "1px solid hsl(var(--border))",
                }}
              >
                {invoiceData?.data.date}
              </div>
              <div
                style={{
                  fontWeight: "bold",
                  padding: "8px",
                  borderRight: "1px solid hsl(var(--border))",
                }}
              >
                PO NO
              </div>
              <div style={{ padding: "8px" }}>N/A</div>
            </div>
          </div>
          <div style={{ marginTop: "24px", marginBottom: "16px" }}>
            <h2 style={{ fontSize: "16px", fontWeight: "600" }}>
              ITEM DETAILS
            </h2>
          </div>
          {/* Instrument Details */}
          <div
            style={{
              border: "1px solid hsl(var(--border))",
              fontSize: "14px",
              borderCollapse: "collapse",
            }}
          >
            {/* Table Header */}
            <div
              className=""
              style={{
                display: "flex",
                fontWeight: "bold",
                borderBottom: "1px solid hsl(var(--border))",
                borderTop: "1px solid hsl(var(--border))",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  padding: "5px 16px",
                  borderRight: "1px solid hsl(var(--border))",
                  maxWidth: "100px",
                  width: "100%",
                }}
              >
                SL
              </div>
              <div
                style={{
                  flex: 3,
                  padding: "5px 24px",
                  borderRight: "1px solid hsl(var(--border))",
                }}
              >
                NAME
              </div>
              <div
                style={{
                  flex: 1,
                  padding: "5px 16px",
                  borderRight: "1px solid hsl(var(--border))",
                }}
              >
                QTY
              </div>
              <div
                style={{
                  flex: 1,
                  padding: "5px 16px",
                  borderRight: "1px solid hsl(var(--border))",
                }}
              >
                UNIT PRICE
              </div>
              <div
                style={{
                  flex: 1,
                  padding: "5px 16px",
                  borderRight: "1px solid hsl(var(--border))",
                }}
              >
                Discount(%)
              </div>
              <div style={{ flex: 1, padding: "5px 16px" }}>AMOUNT</div>
            </div>

            {invoiceData?.data.details.map((item: any, index: number) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  borderBottom: "1px solid hsl(var(--border))",
                }}
              >
                <div
                  style={{
                    borderRight: "1px solid hsl(var(--border))",
                    padding: "4px 12px",
                    textAlign: "center",
                    maxWidth: "100px",
                    width: "100%",
                  }}
                >
                  {item.item.id}
                </div>
                <div
                  style={{
                    flex: 3,
                    borderRight: "1px solid hsl(var(--border))",
                    padding: "4px 12px",
                  }}
                >
                  {item.item.name}
                </div>
                <div
                  style={{
                    flex: 1,
                    borderRight: "1px solid hsl(var(--border))",
                    textAlign: "center",
                    padding: "4px 12px",
                  }}
                >
                  {item.qty}
                </div>
                <div
                  style={{
                    flex: 1,
                    borderRight: "1px solid hsl(var(--border))",
                    textAlign: "right",
                    padding: "4px 12px",
                  }}
                >
                  {item.price}
                </div>
                <div
                  style={{
                    flex: 1,
                    borderRight: "1px solid hsl(var(--border))",
                    textAlign: "center",
                    padding: "4px 12px",
                  }}
                >
                  {item.discount}
                </div>

                <div
                  style={{ flex: 1, textAlign: "right", padding: "4px 12px" }}
                >
                  {item.total}
                </div>
              </div>
            ))}

            {/* Totals */}
            <div
              style={{
                display: "flex",
                borderBottom: "1px solid hsl(var(--border))",
                padding: "4px 12px",
                fontWeight: "bold",
              }}
            >
              <div
                style={{
                  flex: 4,
                  borderRight: "1px solid hsl(var(--border))",
                  textAlign: "right",
                  paddingRight: "8px",
                }}
              >
                TOTAL
              </div>
              <div style={{ flex: 1, textAlign: "right" }}>
                {invoiceData?.data.details.reduce(
                  (acc, product) => acc + product.total,
                  0
                )}
              </div>
            </div>

            <div
              style={{
                display: "flex",
                borderBottom: "1px solid hsl(var(--border))",
                padding: "4px 12px",
              }}
            >
              <div
                style={{
                  flex: 4,
                  borderRight: "1px solid hsl(var(--border))",
                  textAlign: "right",
                  paddingRight: "8px",
                }}
              >
                DISCOUNT
              </div>
              <div style={{ flex: 1, textAlign: "right" }}>
                {invoiceData?.data.discount}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                borderBottom: "1px solid hsl(var(--border))",
                padding: "4px 12px",
              }}
            >
              <div
                style={{
                  flex: 4,
                  borderRight: "1px solid hsl(var(--border))",
                  textAlign: "right",
                  paddingRight: "8px",
                }}
              >
                SHIPPING CHARGES
              </div>
              <div style={{ flex: 1, textAlign: "right" }}>
                {invoiceData?.data.shipping_charges}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                borderBottom: "1px solid hsl(var(--border))",
                padding: "4px 12px",
              }}
            >
              <div style={{ flex: 2 }}>
                IN WORLDS : One Lac Ninety Five Thousand Taka Only
              </div>
              <div
                style={{
                  flex: 2,
                  borderRight: "1px solid hsl(var(--border))",
                  textAlign: "right",
                  paddingRight: "8px",
                  fontWeight: "bold",
                }}
              >
                GRAND TOTAL
              </div>
              <div style={{ flex: 1, textAlign: "right", fontWeight: "bold" }}>
                {invoiceData?.data.total}
              </div>
            </div>
          </div>
          {/* Footer */}
          <div style={{ marginTop: "24px" }}>
            <h3 style={{ fontSize: "14px", fontWeight: "bold" }}>
              CALIBRATION & WARRANTY
            </h3>
            <p style={{ fontSize: "14px" }}>
              01 Calibration free within the First Year from the date of
              purchase.
              <br />
              01 Year manufacturer defect parts replacement warranty from the
              date of purchase as per terms & conditions.
            </p>
            <h3
              style={{
                marginTop: "16px",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              TERMS & CONDITIONS
            </h3>

            <p>{invoiceData?.data.terms_conditions}</p>
          </div>
        </PrintPDFWrapper>
      </Card>
    </div>
  );
};
export default InvoiceUI;
