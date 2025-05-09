
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { UseFormReturn } from "react-hook-form";
import { LeadFormData } from "@/schemas/leadFormSchema";

interface FormFieldsProps {
  form: UseFormReturn<LeadFormData>;
  type: "hero" | "contact";
}

export const FormFields = ({ form, type }: FormFieldsProps) => {
  return (
    <>
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-sm font-medium text-gray-700">Name *</FormLabel>
            <FormControl>
              <Input placeholder="Your full name" {...field} className="form-input" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-sm font-medium text-gray-700">Email *</FormLabel>
            <FormControl>
              <Input type="email" placeholder="your@email.com" {...field} className="form-input" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="phone"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-sm font-medium text-gray-700">Phone *</FormLabel>
            <FormControl>
              <Input placeholder="Your contact number" {...field} className="form-input" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      {type === "hero" && (
        <FormField
          control={form.control}
          name="strategy"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-gray-700">Strategy Description</FormLabel>
              <FormControl>
                <Input placeholder="Briefly describe your strategy" {...field} className="form-input" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )}
      
      {type === "contact" && (
        <>
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700">Company/Trading Entity</FormLabel>
                <FormControl>
                  <Input placeholder="Your company name" {...field} className="form-input" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700">Message</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Tell us about your requirements" 
                    {...field} 
                    rows={4}
                    className="form-input" 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </>
      )}
    </>
  );
};
