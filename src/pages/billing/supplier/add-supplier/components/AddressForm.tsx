// import { CardTitle, CardDescription, CardContent, FormField, FormItem, FormLabel, FormControl, Input, Textarea, FormMessage } from '@/components/ui/card'; // Import components you're using
import { CardTitle } from "@/components/ui/card";
// import { CardTitle } from "";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

import { Input } from "@/components/ui/input";

interface AddressFormProps {
  form: any; // The form control from react-hook-form
  namePrefix: string; // Prefix like 'billing' or 'shipping'
  title: string; // Title to differentiate between Billing and Shipping
}

export const AddressForm: React.FC<AddressFormProps> = ({
  form,
  namePrefix,
  title,
}) => {
  return (
    <div>
      <CardTitle className="mb-4">{title} Address</CardTitle>

      <div>
        <FormField
          control={form.control}
          name={`${namePrefix}_attention`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Attention</FormLabel>
              <FormControl>
                <Input className="" placeholder="Enter attention" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="my-3">
        <FormField
          control={form.control}
          name={`${namePrefix}_country_origin`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Country / Region</FormLabel>
              <FormControl>
                <Input
                  className=""
                  placeholder="Enter country or region"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div>
        <FormField
          control={form.control}
          name={`${namePrefix}_address`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter address" {...field} className="" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="my-3">
        <FormField
          control={form.control}
          name={`${namePrefix}_city`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>City</FormLabel>
              <FormControl>
                <Input className="" placeholder="Enter city" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div>
        <FormField
          control={form.control}
          name={`${namePrefix}_state`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>State</FormLabel>
              <FormControl>
                <Input className="" placeholder="Enter state" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="my-3">
        <FormField
          control={form.control}
          name={`${namePrefix}_zip_code`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Zip Code</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Enter zip code" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={form.control}
        name={`${namePrefix}_phone`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Phone</FormLabel>
            <FormControl>
              <Input type="text" placeholder="Enter phone number" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};
