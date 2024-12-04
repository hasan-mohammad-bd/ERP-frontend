import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { User, Users, Phone, CreditCard, MapPin } from 'lucide-react'



export default function NomineeInformation({ nomineeData }: any) {
  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Nominee Information</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[500px] pr-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <User className="h-5 w-5" />
                Basic Information
              </h3>
              <InfoField 
                label="Name" 
                value={nomineeData.name} 
                icon={<User className="h-4 w-4" />}
              />
              <InfoField 
                label="Father's Name" 
                value={nomineeData.fathers_name} 
                icon={<Users className="h-4 w-4" />}
              />
              <InfoField 
                label="Mother's Name" 
                value={nomineeData.mothers_name} 
                icon={<Users className="h-4 w-4" />}
              />
              <InfoField 
                label="Relation" 
                value={nomineeData.relation} 
                icon={<Users className="h-4 w-4" />}
              />
              <InfoField 
                label="Phone Number" 
                value={nomineeData.phone_number} 
                icon={<Phone className="h-4 w-4" />}
              />
              <InfoField 
                label="NID Number" 
                value={nomineeData.nid_number} 
                icon={<CreditCard className="h-4 w-4" />}
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Address Information
              </h3>
              <InfoField 
                label="Country" 
                value={nomineeData.present_address.country.name} 
                icon={<MapPin className="h-4 w-4" />}
              />
              <InfoField 
                label="City" 
                value={nomineeData.present_address.city.name} 
                icon={<MapPin className="h-4 w-4" />}
              />
              <InfoField 
                label="Post Code" 
                value={nomineeData.present_address.post_code} 
                icon={<MapPin className="h-4 w-4" />}
              />
              <InfoField 
                label="Address" 
                value={nomineeData.present_address.address} 
                icon={<MapPin className="h-4 w-4" />}
              />
            </div>
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}

interface InfoFieldProps {
  label: string;
  value: string;
  icon: React.ReactNode;
}

function InfoField({ label, value, icon }: InfoFieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={label.toLowerCase()} className="text-sm text-muted-foreground flex items-center gap-2">
        {icon}
        {label}
      </Label>
      <Input
        id={label.toLowerCase()}
        value={value || "N/A"}
        readOnly
        // className="bg-muted"
      />
    </div>
  )
}

