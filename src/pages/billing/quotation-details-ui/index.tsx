import PrintPDFWrapper from "@/components/common/print-pdf-wrapper";
import { Card } from "@/components/ui/card";

const QuotationDetailsUI = () => {
  return (
    <Card
      style={{
        // padding: "26px",
        // margin: "30px",
        border: "1px solid hsl(var(--border))",
      }}
      className="max-w-6xl mx-auto p-7"
    >
      <PrintPDFWrapper className="space-y-4" fileName="due-received-report">
        {/* <div className="flex flex-col justify-center items-center">
          <img
            className="w-40 h-auto"
            src="https://api.amarsolution.xyz/main/storage/uploads/logo/entries/logo17313063031947642332.png"
          ></img>
        </div> */}

        <div
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: "14px",
            // border: "1px solid hsl(var(--border))",
            width: "100%",
            // margin: "20px auto",
          }}
          className="mt-10 "
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: "20px",
            }}
          >
            <div style={{ textAlign: "left" }}>
              <p className="mb-3">
                <strong>Quote To</strong>
              </p>
              <p>Attn: Mr. Momtaz Uddin</p>
              <p>TS Geosystems Bangladesh</p>
              <p>ceots-geosystems.com</p>
              <p>88 01552417122</p>
            </div>

            {/* <div style={{ textAlign: "right" }}>
              <h1
                style={{
                  fontSize: "24px",
                  textAlign: "center",
                  fontWeight: "bold",
                  marginBottom: "10px",
                }}
              >
                Quotation
              </h1>
              <p>
                <strong>Quote No:</strong> 2023301
              </p>
              <p>
                <strong>Client ID:</strong> Y0000
              </p>
              <p>
                <strong>Date:</strong> 03/Dec/2023
              </p>
              <p>
                <strong>Pages:</strong> 1 of 4
              </p>
              <p>
                <strong>Quoted By:</strong> Mosharraf
              </p>
            </div> */}

            {/* Quotation right section */}

            <div
              style={{
                textAlign: "center",
                marginBottom: "10px",
                width: "27%",
              }}
            >
              <h1
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  marginBottom: "20px",
                }}
              >
                Quotation
              </h1>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  margin: "0 auto",
                  textAlign: "left",
                }}
              >
                <tbody>
                  <tr>
                    <td
                      style={{
                        border: "1px solid hsl(var(--border))",
                        padding: "9px",
                      }}
                    >
                      <strong>Quote No</strong>
                    </td>
                    <td
                      style={{
                        border: "1px solid hsl(var(--border))",
                        padding: "9px",
                      }}
                    >
                      2023301
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        border: "1px solid hsl(var(--border))",
                        padding: "9px",
                      }}
                    >
                      <strong>Client Id</strong>
                    </td>
                    <td
                      style={{
                        border: "1px solid hsl(var(--border))",
                        padding: "9px",
                      }}
                    >
                      Y 0000
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        border: "1px solid hsl(var(--border))",
                        padding: "9px",
                      }}
                    >
                      <strong>Date</strong>
                    </td>
                    <td
                      style={{
                        border: "1px solid hsl(var(--border))",
                        padding: "9px",
                      }}
                    >
                      03/Dec/2023
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        border: "1px solid hsl(var(--border))",
                        padding: "9px",
                      }}
                    >
                      <strong>Pages</strong>
                    </td>
                    <td
                      style={{
                        border: "1px solid hsl(var(--border))",
                        padding: "9px",
                      }}
                    >
                      1 of 4
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        border: "1px solid hsl(var(--border))",
                        padding: "9px",
                      }}
                    >
                      <strong>Quoted By</strong>
                    </td>
                    <td
                      style={{
                        border: "1px solid hsl(var(--border))",
                        padding: "9px",
                      }}
                    >
                      Mosharraf
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "20px",
            }}
          >
            <thead>
              <tr>
                <th
                  style={{
                    border: "1px solid hsl(var(--border))",
                    padding: "8px",
                    textAlign: "left",
                    fontWeight: "bold",
                  }}
                >
                  SN
                </th>
                <th
                  style={{
                    border: "1px solid hsl(var(--border))",
                    padding: "8px",
                    textAlign: "left",
                    fontWeight: "bold",
                  }}
                >
                  Description
                </th>
                <th
                  style={{
                    border: "1px solid hsl(var(--border))",
                    padding: "8px",
                    textAlign: "left",
                    fontWeight: "bold",
                  }}
                >
                  Qty
                </th>
                <th
                  style={{
                    border: "1px solid hsl(var(--border))",
                    padding: "8px",
                    textAlign: "left",
                    fontWeight: "bold",
                  }}
                >
                  Unit Price
                </th>
                <th
                  style={{
                    border: "1px solid hsl(var(--border))",
                    padding: "8px",
                    textAlign: "left",
                    fontWeight: "bold",
                  }}
                >
                  Total Price
                </th>
                <th
                  style={{
                    border: "1px solid hsl(var(--border))",
                    padding: "8px",
                    textAlign: "left",
                    fontWeight: "bold",
                  }}
                >
                  Remarks
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  style={{
                    border: "1px solid hsl(var(--border))",
                    padding: "8px",
                    verticalAlign: "top", // Aligns content at the top
                  }}
                >
                  01
                </td>
                <td
                  style={{
                    border: "1px solid hsl(var(--border))",
                    padding: "8px",
                    verticalAlign: "top", // Aligns content at the top
                  }}
                >
                  <strong>Total Station</strong>
                  <div className="ml-7 my-2">
                    <p>Brand: Kolida</p>
                    <p>Model: KTS 442 UT</p>
                    <p>Country of Origin: China</p>
                    <p>Country of Manufacturer: China</p>
                    <p>Calibration: 1 Calibration free within first year</p>
                    <p>
                      Warranty: 1 Year manufacturer defect parts replacement
                    </p>
                  </div>
                  <strong>Standard Package Accessories</strong>
                  <div className="ml-7 my-2">
                    <p>Total Station</p>
                    <p>Charger and Power Cable</p>
                    <p>Battery x2</p>
                    <p>Reflector Sheet x4</p>
                    <p>Plumb Bob</p>
                    <p>Tools Kit</p>
                    <p>Carrying Case</p>
                    <p>Carrying Belt</p>
                    <p>Lense Cleaning Cloth</p>
                    <p>User Manual Book</p>
                    <p>Rain Cover</p>
                    <p>Capbration Certificate</p>
                  </div>
                  <strong>Additional Accessories</strong>
                  <div className="ml-7 my-2">
                    <p>Double Lock Aluminum Tripod</p>
                    <p>Big Prism with holder with soft bag</p>
                    <p>Prism Pole with circular bubble with soft bag</p>
                  </div>
                </td>

                <td
                  style={{
                    border: "1px solid hsl(var(--border))",
                    padding: "8px",
                    verticalAlign: "top", // Aligns content at the top
                  }}
                >
                  1 Set
                </td>
                <td
                  style={{
                    border: "1px solid hsl(var(--border))",
                    padding: "8px",
                    verticalAlign: "top", // Aligns content at the top
                  }}
                >
                  2,00,000
                </td>
                <td
                  style={{
                    border: "1px solid hsl(var(--border))",
                    padding: "8px",
                    verticalAlign: "top", // Aligns content at the top
                  }}
                >
                  2,00,000
                </td>
                <td
                  style={{
                    border: "1px solid hsl(var(--border))",
                    padding: "8px",
                    verticalAlign: "top", // Aligns content at the top
                  }}
                >
                  Ready Stock
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* footer grand total section */}

        <div style={{ paddingTop: "100px" }}>
          <hr className="" />
          <div className="flex justify-between mx-2 mt-3">
            <div>
              <div>
                <p>SL</p>
              </div>
              <div className="my-2">
                <p>1</p>
                <p className="my-2">2</p>
                <p>3</p>
              </div>
            </div>
            <div>
              <div>Item</div>
              <div className="mt-2">
                <p>Kolida KTS 442 UT Total Statio</p>
                <p className="my-2">Kolida X 4 Total Station</p>
                <p>Sokkia B20 Auto Leve</p>
              </div>
            </div>
            <div>
              Price
              <div className="mt-2">
                <p>2,00,000.00</p>
                <p className="my-2">2,20,000.00</p>
                <p>50,000.00</p>
              </div>
            </div>
            <div>
              Quantity
              <div className="mt-2">
                <p>1 Set</p>
                <p className="my-2">1 Set</p>
                <p>1 Set</p>
              </div>
            </div>
            <div>
              Total
              <div className="mt-2">
                <p>2,00,000.00</p>
                <p className="my-2">2,20,000.00</p>
                <p>50,000.00</p>
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-2">
            <div>In Words : Four Lac Seventy Thousand Taka Only.</div>
            <div>Grand Total : 4,70,000.0</div>
          </div>
        </div>

        <div className="pt-20">Terms and Condition</div>
      </PrintPDFWrapper>
    </Card>
  );
};

export default QuotationDetailsUI;
