import PrintPDFWrapper from "@/components/common/print-pdf-wrapper";
import { Card } from "@/components/ui/card";

// const data = [
//   {
//     date: "2024-10-01",
//     invoiceNumber: "INV-2024-001",
//     orderNumber: "ORD-1001",
//     customerName: "Customer A",
//     status: "Paid",
//     dueDate: "2024-10-05",
//     amount: 1000.0,
//     balanceDue: 0.0,
//   },
//   {
//     date: "2024-10-02",
//     invoiceNumber: "INV-2024-002",
//     orderNumber: "ORD-1002",
//     customerName: "Customer B",
//     status: "Unpaid",
//     dueDate: "2024-10-10",
//     amount: 2500.0,
//     balanceDue: 2500.0,
//   },
//   {
//     date: "2024-10-03",
//     invoiceNumber: "INV-2024-003",
//     orderNumber: "ORD-1003",
//     customerName: "Customer C",
//     status: "Partially Paid",
//     dueDate: "2024-10-07",
//     amount: 4000.0,
//     balanceDue: 1000.0,
//   },
//   {
//     date: "2024-10-04",
//     invoiceNumber: "INV-2024-004",
//     orderNumber: "ORD-1004",
//     customerName: "Customer D",
//     status: "Paid",
//     dueDate: "2024-10-08",
//     amount: 500.0,
//     balanceDue: 0.0,
//   },
// ];
const InvoiceUI = () => {
  return (
    <>
    <Card style={{ padding: "26px", margin:'30px', border: "1px solid hsl(var(--border))" }}>
    <PrintPDFWrapper className="space-y-4" fileName="due-received-report">
        <div className="flex flex-col justify-center items-center">
           <img 
            className="w-40 h-auto" 
             src="https://api.amarsolution.xyz/main/storage/uploads/logo/entries/logo17313063031947642332.png"
             ></img>
           
        </div>
  <div style={{ marginBottom: "24px", marginTop:"35px", width:"800px"}}>
    <h1 style={{ fontSize: "18px", fontWeight: "bold" }}>INVOICE</h1>
    <hr className="h-3 mt-2" style={{backgroundColor:"hsl(var(--border))"}}/>
  </div>
  {/* Invoice Header */}
  <div style={{ border: "1px solid hsl(var(--border))", borderCollapse: "collapse", width: "100%", fontSize: "14px" }}>
  {/* Row 1 */}
  <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr 2fr", borderBottom: "1px solid hsl(var(--border))" }}>
    <div style={{ fontWeight: "bold", padding: "8px", borderRight: "1px solid hsl(var(--border))" }}>COMPANY NAME</div>
    <div style={{ padding: "8px", borderRight: "1px solid hsl(var(--border))" }}>TS Geosystems Bangladesh</div>
    <div style={{ fontWeight: "bold", padding: "8px", borderRight: "1px solid hsl(var(--border))" }}>CLIENT ID</div>
    <div style={{ padding: "8px" }}>Y 3399</div>
  </div>
  {/* Row 2 */}
  <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr 2fr", borderBottom: "1px solid hsl(var(--border))" }}>
    <div style={{ fontWeight: "bold", padding: "8px", borderRight: "1px solid hsl(var(--border))" }}>CONCERN PERSON</div>
    <div style={{ padding: "8px", borderRight: "1px solid hsl(var(--border))" }}>Mosharraf</div>
    <div style={{ fontWeight: "bold", padding: "8px", borderRight: "1px solid hsl(var(--border))" }}>CELL NO</div>
    <div style={{ padding: "8px" }}>01552417122</div>
  </div>
  {/* Row 3 */}
  <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr 2fr", borderBottom: "1px solid hsl(var(--border))" }}>
    <div style={{ fontWeight: "bold", padding: "8px", borderRight: "1px solid hsl(var(--border))" }}>ADDRESS</div>
    <div style={{ padding: "8px", borderRight: "1px solid hsl(var(--border))" }}>Banglamotor</div>
    <div style={{ fontWeight: "bold", padding: "8px", borderRight: "1px solid hsl(var(--border))" }}>EMAIL</div>
    <div style={{ padding: "8px" }}>N/A</div>
  </div>
  {/* Row 4 */}
  <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr 2fr", borderBottom: "1px solid hsl(var(--border))" }}>
    <div style={{ fontWeight: "bold", padding: "8px", borderRight: "1px solid hsl(var(--border))" }}>PREPARED BY</div>
    <div style={{ padding: "8px", borderRight: "1px solid hsl(var(--border))" }}>Mosharraf</div>
    <div style={{ fontWeight: "bold", padding: "8px", borderRight: "1px solid hsl(var(--border))" }}>INVOICE NO</div>
    <div style={{ padding: "8px" }}>20231103</div>
  </div>
  {/* Row 5 */}
  <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr 2fr" }}>
    <div style={{ fontWeight: "bold", padding: "8px", borderRight: "1px solid hsl(var(--border))" }}>DATE</div>
    <div style={{ padding: "8px", borderRight: "1px solid hsl(var(--border))" }}>3-Nov-23</div>
    <div style={{ fontWeight: "bold", padding: "8px", borderRight: "1px solid hsl(var(--border))" }}>PO NO</div>
    <div style={{ padding: "8px" }}>N/A</div>
  </div>
</div>
  <div style={{ marginTop: "24px", marginBottom: "16px" }}>
    <h2 style={{ fontSize: "16px", fontWeight: "600" }}>INSTRUMENT DETAILS</h2>
  </div>
  {/* Instrument Details */}
  <div style={{ border: "1px solid hsl(var(--border))", fontSize: "14px", borderCollapse: "collapse" }}>
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
    <div style={{ flex: 1,  padding: "5px", borderRight: "1px solid hsl(var(--border))" }}>SL</div>
    <div  className="ml-[65px]" style={{ flex: 4,  padding: "5px", borderRight: "1px solid hsl(var(--border))" }}>DESCRIPTION</div>
    <div   style={{ flex: 1,  padding: "5px", borderRight: "1px solid hsl(var(--border))" }}>QTY</div>
    <div style={{ flex: 1,  padding: "5px", borderRight: "1px solid hsl(var(--border))" }}>UNIT PRICE</div>
    <div  style={{ flex: 1 }}>AMOUNT</div>
  </div>
  {/* Row 1 */}
  {/* <div  style={{ display: "flex", borderBottom: "1px solid hsl(var(--border))" }}>
    <div style={{ flex: 1, borderRight: "1px solid hsl(var(--border))", textAlign: "center" }}>1</div>
    <div  style={{ flex: 4, borderRight: "1px solid hsl(var(--border))", padding: "4px" }}>
      Kolida KTS-442UT Total Station
      <br />
      <span className="ml-14" style={{ fontSize: "12px", color: "#6b7280" }}>Serial Number: K666666</span>
    </div>
    <div style={{ flex: 1, borderRight: "1px solid hsl(var(--border))", textAlign: "center" }}>1 Set</div>
    <div style={{ flex: 1, borderRight: "1px solid hsl(var(--border))", textAlign: "right" }}>198,000</div>
    <div style={{ flex: 1, textAlign: "right" }}>198,000</div>
  </div> */}
  <div style={{ display: "flex", borderBottom: "1px solid hsl(var(--border))" }}>
    
    <div style={{ flex: 0, borderRight: "1px solid hsl(var(--border))" }}></div>
     <div  className="ml-[185px]" style={{ fontWeight: "bold", fontSize:"15px", flex: 7, borderRight: "1px solid hsl(var(--border))", padding: "4px" }}>Kolida KTS-442UT Total Station</div>
     
  </div>
  <div style={{ display: "flex", borderBottom: "1px solid hsl(var(--border))" }}>
    <div style={{ flex: 1, borderRight: "1px solid hsl(var(--border))" }}></div>
    <div className="ml-14" style={{ flex: 4, borderRight: "1px solid hsl(var(--border))", padding: "4px" }}>
       Serial Number: K666666
    </div>
    <div style={{ flex: 1, borderRight: "1px solid hsl(var(--border))", textAlign: "center" }}>1 Set</div>
    <div style={{ flex: 1, borderRight: "1px solid hsl(var(--border))", textAlign: "right" }}>198,000</div>
    <div style={{ flex: 1, textAlign: "right" }}>198,000</div>
  </div>
  {/* Standard Package Accessories */}
 
  <div style={{ display: "flex", borderBottom: "1px solid hsl(var(--border))" }}>
    
    <div style={{ flex: 0, borderRight: "1px solid hsl(var(--border))" }}></div>
     <div  className="ml-[185px]" style={{ fontWeight: "bold", fontSize:"15px", flex: 7, borderRight: "1px solid hsl(var(--border))", padding: "4px" }}> Standard Package Accessories</div>
     
  </div>
  <div style={{ display: "flex",  borderBottom: "1px solid hsl(var(--border))" }}>
    
    <div style={{ flex: 1, borderRight: "1px solid hsl(var(--border))" }}></div>
    <div className="ml-14" style={{  flex: 4, borderRight: "1px solid hsl(var(--border))", padding: "4px" }}>Total Station</div>
    <div style={{ flex: 1, borderRight: "1px solid hsl(var(--border))", textAlign: "center" }}>1x</div>
    <div style={{ flex: 1, borderRight: "1px solid hsl(var(--border))" }}></div>
    <div style={{ flex: 1 }}></div>
  </div>
  <div style={{ display: "flex", borderBottom: "1px solid hsl(var(--border))" }}>
    <div style={{ flex: 1, borderRight: "1px solid hsl(var(--border))" }}></div>
    <div className="ml-14" style={{ flex: 4, borderRight: "1px solid hsl(var(--border))", padding: "4px" }}>
      Charger and Power Cable
    </div>
    <div style={{ flex: 1, borderRight: "1px solid hsl(var(--border))", textAlign: "center" }}>1x</div>
    <div style={{ flex: 1, borderRight: "1px solid hsl(var(--border))" }}></div>
    <div style={{ flex: 1 }}></div>
  </div>
  <div style={{ display: "flex", borderBottom: "1px solid hsl(var(--border))" }}>
    <div style={{ flex: 1, borderRight: "1px solid hsl(var(--border))" }}></div>
    <div className="ml-14" style={{ flex: 4, borderRight: "1px solid hsl(var(--border))", padding: "4px" }}>
      Battery
    </div>
    <div style={{ flex: 1, borderRight: "1px solid hsl(var(--border))", textAlign: "center" }}>1x</div>
    <div style={{ flex: 1, borderRight: "1px solid hsl(var(--border))" }}></div>
    <div style={{ flex: 1 }}></div>
  </div>
  <div style={{ display: "flex", borderBottom: "1px solid hsl(var(--border))" }}>
    <div style={{ flex: 1, borderRight: "1px solid hsl(var(--border))" }}></div>
    <div className="ml-14" style={{ flex: 4, borderRight: "1px solid hsl(var(--border))", padding: "4px" }}>
      Reflector Sheet 1 set
    </div>
    <div style={{ flex: 1, borderRight: "1px solid hsl(var(--border))", textAlign: "center" }}>1x</div>
    <div style={{ flex: 1, borderRight: "1px solid hsl(var(--border))" }}></div>
    <div style={{ flex: 1 }}></div>
  </div>
  <div style={{ display: "flex", borderBottom: "1px solid hsl(var(--border))" }}>
    <div style={{ flex: 1, borderRight: "1px solid hsl(var(--border))" }}></div>
    <div className="ml-14" style={{ flex: 4, borderRight: "1px solid hsl(var(--border))", padding: "4px" }}>
      Tools Kit
    </div>
    <div style={{ flex: 1, borderRight: "1px solid hsl(var(--border))", textAlign: "center" }}>1x</div>
    <div style={{ flex: 1, borderRight: "1px solid hsl(var(--border))" }}></div>
    <div style={{ flex: 1 }}></div>
  </div>
  <div style={{ display: "flex", borderBottom: "1px solid hsl(var(--border))" }}>
    <div style={{ flex: 1, borderRight: "1px solid hsl(var(--border))" }}></div>
    <div className="ml-14" style={{ flex: 4, borderRight: "1px solid hsl(var(--border))", padding: "4px" }}>
      Carrying Case
    </div>
    <div style={{ flex: 1, borderRight: "1px solid hsl(var(--border))", textAlign: "center" }}>1x</div>
    <div style={{ flex: 1, borderRight: "1px solid hsl(var(--border))" }}></div>
    <div style={{ flex: 1 }}></div>
  </div>
  <div style={{ display: "flex", borderBottom: "1px solid hsl(var(--border))" }}>
    <div style={{ flex: 1, borderRight: "1px solid hsl(var(--border))" }}></div>
    <div className="ml-14" style={{ flex: 4, borderRight: "1px solid hsl(var(--border))", padding: "4px" }}>
      Carrying Belt
    </div>
    <div style={{ flex: 1, borderRight: "1px solid hsl(var(--border))", textAlign: "center" }}>1x</div>
    <div style={{ flex: 1, borderRight: "1px solid hsl(var(--border))" }}></div>
    <div style={{ flex: 1 }}></div>
  </div>
  <div style={{ display: "flex", borderBottom: "1px solid hsl(var(--border))" }}>
    <div style={{ flex: 1, borderRight: "1px solid hsl(var(--border))" }}></div>
    <div className="ml-14" style={{ flex: 4, borderRight: "1px solid hsl(var(--border))", padding: "4px" }}>
      Lance Cleaning Cloth
    </div>
    <div style={{ flex: 1, borderRight: "1px solid hsl(var(--border))", textAlign: "center" }}>1x</div>
    <div style={{ flex: 1, borderRight: "1px solid hsl(var(--border))" }}></div>
    <div style={{ flex: 1 }}></div>
  </div>
  {/* Additional Accessories */}
  <div style={{ display: "flex", borderBottom: "1px solid hsl(var(--border))" }}>
    
    <div style={{ flex: 0, borderRight: "1px solid hsl(var(--border))" }}></div>
     <div  className="ml-[185px]" style={{ fontWeight: "bold", fontSize:"15px", flex: 7, borderRight: "1px solid hsl(var(--border))", padding: "4px" }}> Additional Accessories</div>
     
  </div>
  <div style={{ display: "flex", borderBottom: "1px solid hsl(var(--border))" }}>
    <div style={{ flex: 1, borderRight: "1px solid hsl(var(--border))" }}></div>
    <div className="ml-14" style={{ flex: 4, borderRight: "1px solid hsl(var(--border))", padding: "4px" }}>
      Topcon Double Lock Aluminum Tripod
    </div>
    <div style={{ flex: 1, borderRight: "1px solid hsl(var(--border))", textAlign: "center" }}>1x</div>
    <div style={{ flex: 1, borderRight: "1px solid hsl(var(--border))" }}></div>
    <div style={{ flex: 1 }}></div>
  </div>
  <div style={{ display: "flex", borderBottom: "1px solid hsl(var(--border))" }}>
    <div style={{ flex: 1, borderRight: "1px solid hsl(var(--border))" }}></div>
    <div className="ml-14" style={{ flex: 4, borderRight: "1px solid hsl(var(--border))", padding: "4px" }}>
      Sokkia Big Prism with holder with soft ba
    </div>
    <div style={{ flex: 1, borderRight: "1px solid hsl(var(--border))", textAlign: "center" }}>1x</div>
    <div style={{ flex: 1, borderRight: "1px solid hsl(var(--border))" }}></div>
    <div style={{ flex: 1 }}></div>
  </div>
  <div style={{ display: "flex", borderBottom: "1px solid hsl(var(--border))" }}>
    <div style={{ flex: 1, borderRight: "1px solid hsl(var(--border))" }}></div>
    <div className="ml-14" style={{ flex: 4, borderRight: "1px solid hsl(var(--border))", padding: "4px" }}>
      Prism Pole with circular bubble with soft bag
    </div>
    <div style={{ flex: 1, borderRight: "1px solid hsl(var(--border))", textAlign: "center" }}>1x</div>
    <div style={{ flex: 1, borderRight: "1px solid hsl(var(--border))" }}></div>
    <div style={{ flex: 1 }}></div>
  </div>
  {/* Totals */}
  <div style={{ display: "flex", borderBottom: "1px solid hsl(var(--border))", padding: "4px 0", fontWeight: "bold" }}>
    <div style={{ flex: 4, borderRight: "1px solid hsl(var(--border))", textAlign: "right", paddingRight: "8px" }}>
      TOTAL AMOUNT
    </div>
    <div style={{ flex: 1, textAlign: "right" }}>198,000</div>
  </div>
  <div style={{ display: "flex", borderBottom: "1px solid hsl(var(--border))", padding: "4px 0" }}>
    <div style={{ flex: 2, marginLeft:'15px'}}>IN WORLDS : One Lac Ninety Five Thousand Taka Only</div>
    <div style={{ flex: 2, borderRight: "1px solid hsl(var(--border))", textAlign: "right", paddingRight: "8px" }}>DISCOUNT</div>
    <div style={{ flex: 1, textAlign: "right" }}>3,000</div>
  </div>
  <div style={{ display: "flex", padding: "4px 0", fontWeight: "bold" }}>
    <div style={{ flex: 4, borderRight: "1px solid hsl(var(--border))", textAlign: "right", paddingRight: "8px" }}>
      GRAND TOTAL
    </div>
    <div style={{ flex: 1, textAlign: "right" }}>195,000</div>
  </div>
</div>
  {/* Footer */}
  <div style={{ marginTop: "24px" }}>
    <h3 style={{ fontSize: "14px", fontWeight: "bold" }}>CALIBRATION & WARRANTY</h3>
    <p style={{ fontSize: "14px" }}>
      01 Calibration free within the First Year from the date of purchase.
      <br />
      01 Year manufacturer defect parts replacement warranty from the date of
      purchase as per terms & conditions.
    </p>
    <h3 style={{ marginTop: "16px", fontSize: "14px", fontWeight: "bold" }}>TERMS & CONDITIONS</h3>
    <ol style={{ paddingLeft: "16px", fontSize: "14px", listStyleType: "decimal" }}>
      <li>Please check and test instruments at the time of delivery. No complaint will be accepted after receiving the confirmation.</li>
      <li>Full payment must be cleared at the time of product delivery.</li>
      <li>Goods once sold are not refundable.</li>
      <li>Please do not remove the sticker to claim Warranty.</li>
      <li>There is no warranty for Battery, Charger & Data Cable.</li>
    </ol>
  </div>
  </PrintPDFWrapper>
</Card>
    </>
  );
};
export default InvoiceUI;