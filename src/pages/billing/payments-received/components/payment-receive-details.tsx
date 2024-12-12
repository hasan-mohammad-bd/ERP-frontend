import { CalendarIcon, CreditCardIcon, UserIcon, PhoneIcon, BuildingIcon, MailIcon, FileTextIcon, BanknoteIcon, GlobeIcon } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"


export const fakePaymentReceiveData = {
  id: 1234,
  invoice_prifix: "INV",
  invoice_suffix: 5678,
  invoice_number: "INV-5678",
  date: "2024-12-15",
  amount: 2500.75,
  note: "Payment for Q4 services",
  contact: {
    id: 9876,
    name: "Jane Smith",
    company_name: "Tech Innovations Ltd.",
    company_id: "TI-2023",
    work_phone: "+1 (555) 123-4567",
    phone: "+1 (555) 987-6543",
    email: "jane.smith@techinnovations.com",
    type: "Client",
    opening_balance: "10000.00",
    date: "2023-01-01",
    note: "VIP client, handle with care"
  },
  details: [
    {
      id: 5432,
      amount: 2500.75,
      source: {
        id: 7890,
        invoice_prifix: "INV",
        invoice_suffix: 1234,
        invoice_number: "INV-1234",
        reference: "Q4-2024-SERVICES",
        date: "2024-11-30",
        delivery_date: "2024-12-10",
        due_date: "2024-12-31",
        discount_type: "percentage",
        tax_type: "inclusive",
        tax: 250.07,
        sub_total: 2500.75,
        discount: 50.01,
        shipping_charges: 0,
        total: 2500.75,
        paid_amount: 2500.75,
        return_amount: 0,
        total_due: 0,
        note: "Q4 services including software maintenance and support",
        terms_conditions: "Payment due within 30 days of invoice date",
        status: 2,
        created_at: "2024-11-30T09:00:00.000000Z"
      }
    }
  ],
  ledger_account: {
    id: 101,
    code: "1010",
    name: "Accounts Receivable",
    type: "Asset",
    nature: "Debit",
    is_active: true,
    is_ledger: true,
    description: "Tracks money owed to the company by clients"
  },
  files: [],
  user: {
    id: 42,
    name: "Alex Johnson",
    username: "alex.j",
    image: "https://i.pravatar.cc/150?img=68",
    phone: "+1 (555) 246-8101",
    email: "alex.johnson@company.com"
  },
  organization: {
    id: 1,
    name: "Acme Corporation",
    title: "Leading Innovation in Technology",
    logo: "https://logo.clearbit.com/acmecorp.com",
    phone: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
    email: ["info@acmecorp.com", "support@acmecorp.com"],
    address: ["123 Tech Street, Silicon Valley, CA 94000", "456 Innovation Avenue, New York, NY 10001"],
    website: ["https://www.acmecorp.com"]
  },
  created_at: "2024-12-15T14:30:00.000000Z"
};


export default function PaymentReceiveDetails() {
  const data = fakePaymentReceiveData;

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-3xl font-bold">Payment Receive Details</CardTitle>
        <img src={data.organization.logo} alt={data.organization.name} className="h-10 w-auto" />
      </CardHeader>
      <CardContent className="grid gap-8">
        <section>
          <h3 className="text-2xl font-semibold mb-4">Invoice Information</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-500">Invoice Number</p>
              <p className="text-lg font-bold">{data.invoice_number}</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-500">Date</p>
              <p className="text-lg">{new Date(data.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-500">Amount</p>
              <p className="text-2xl font-bold text-green-600">${data.amount.toFixed(2)}</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-500">Status</p>
              <Badge variant="success">Received</Badge>
            </div>
          </div>
        </section>

        <Separator />

        <section>
          <h3 className="text-2xl font-semibold mb-4">Contact Details</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <UserIcon className="w-5 h-5 text-gray-500" />
                <p className="font-medium">{data.contact.name}</p>
              </div>
              <div className="flex items-center gap-2">
                <BuildingIcon className="w-5 h-5 text-gray-500" />
                <p>{data.contact.company_name}</p>
              </div>
              <p className="text-sm text-gray-500">Company ID: {data.contact.company_id}</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <PhoneIcon className="w-5 h-5 text-gray-500" />
                <p>{data.contact.work_phone}</p>
              </div>
              <div className="flex items-center gap-2">
                <MailIcon className="w-5 h-5 text-gray-500" />
                <p>{data.contact.email}</p>
              </div>
              <Badge variant="outline">{data.contact.type}</Badge>
            </div>
          </div>
          {data.contact.note && (
            <div className="mt-4">
              <p className="text-sm font-medium text-gray-500">Note</p>
              <p className="mt-1 text-sm">{data.contact.note}</p>
            </div>
          )}
        </section>

        <Separator />

        <section>
          <h3 className="text-2xl font-semibold mb-4">Source Invoice Details</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice Number</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Total Amount</TableHead>
                <TableHead>Paid Amount</TableHead>
                <TableHead>Balance Due</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">{data.details[0].source.invoice_number}</TableCell>
                <TableCell>{new Date(data.details[0].source.date).toLocaleDateString()}</TableCell>
                <TableCell>{new Date(data.details[0].source.due_date).toLocaleDateString()}</TableCell>
                <TableCell>${data.details[0].source.total.toFixed(2)}</TableCell>
                <TableCell>${data.details[0].source.paid_amount.toFixed(2)}</TableCell>
                <TableCell>${data.details[0].source.total_due.toFixed(2)}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          {data.details[0].source.note && (
            <div className="mt-4">
              <p className="text-sm font-medium text-gray-500">Invoice Note</p>
              <p className="mt-1 text-sm">{data.details[0].source.note}</p>
            </div>
          )}
        </section>

        <Separator />

        <section>
          <h3 className="text-2xl font-semibold mb-4">Ledger Account</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <BanknoteIcon className="w-5 h-5 text-gray-500" />
                <p className="font-medium">{data.ledger_account.name}</p>
              </div>
              <p className="text-sm text-gray-500">Account Code: {data.ledger_account.code}</p>
            </div>
            <div className="space-y-2">
              <p><span className="font-medium">Type:</span> {data.ledger_account.type}</p>
              <p><span className="font-medium">Nature:</span> {data.ledger_account.nature}</p>
              <Badge variant={data.ledger_account.is_active ? "success" : "secondary"}>
                {data.ledger_account.is_active ? "Active" : "Inactive"}
              </Badge>
            </div>
          </div>
          {data.ledger_account.description && (
            <div className="mt-4">
              <p className="text-sm font-medium text-gray-500">Description</p>
              <p className="mt-1 text-sm">{data.ledger_account.description}</p>
            </div>
          )}
        </section>

        <Separator />

        <section>
          <h3 className="text-2xl font-semibold mb-4">Recorded By</h3>
          <div className="flex items-center gap-4">
            <img src={data.user.image} alt={data.user.name} className="w-12 h-12 rounded-full" />
            <div>
              <p className="font-medium">{data.user.name}</p>
              <p className="text-sm text-gray-500">{data.user.email}</p>
            </div>
          </div>
        </section>

        {data.note && (
          <section>
            <h3 className="text-2xl font-semibold mb-4">Additional Notes</h3>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-2">
                  <FileTextIcon className="w-5 h-5 text-gray-500 mt-1" />
                  <p>{data.note}</p>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        <section>
          <h3 className="text-2xl font-semibold mb-4">Organization Details</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="font-medium">{data.organization.name}</p>
              <p className="text-sm text-gray-500">{data.organization.title}</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <PhoneIcon className="w-5 h-5 text-gray-500" />
                <p>{data.organization.phone[0]}</p>
              </div>
              <div className="flex items-center gap-2">
                <MailIcon className="w-5 h-5 text-gray-500" />
                <p>{data.organization.email[0]}</p>
              </div>
              <div className="flex items-center gap-2">
                <GlobeIcon className="w-5 h-5 text-gray-500" />
                <p>{data.organization.website[0]}</p>
              </div>
            </div>
          </div>
        </section>

        <p className="text-sm text-gray-500 text-right">
          Created on: {new Date(data.created_at).toLocaleString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })}
        </p>
      </CardContent>
    </Card>
  )
}

