
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

interface LeadFormProps {
  type: "hero" | "contact";
  title?: string;
  subtitle?: string;
  buttonText: string;
}

const formSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  phone: z.string().min(5, { message: "Phone number is required" }),
  company: z.string().optional(),
  strategy: z.string().optional(),
  message: z.string().optional(),
});

const LeadForm = ({ type, title, subtitle, buttonText }: LeadFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      strategy: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      // Save to Supabase
      const { error: dbError } = await supabase
        .from('leads')
        .insert({
          name: values.name,
          email: values.email,
          phone: values.phone,
          company: values.company || null,
          strategy: values.strategy || null,
          message: values.message || null,
          form_type: type
        });
      
      if (dbError) {
        throw new Error(dbError.message);
      }
      
      // Send confirmation emails
      const { error: emailError } = await supabase.functions.invoke('send-confirmation', {
        body: {
          name: values.name,
          email: values.email,
          phone: values.phone,
          company: values.company,
          strategy: values.strategy,
          message: values.message,
          formType: type
        }
      });
      
      if (emailError) {
        console.warn("Email sending failed but form data was saved:", emailError);
      }
      
      toast({
        title: "Submission successful!",
        description: "Thank you for your inquiry. We'll get back to you shortly.",
        variant: "default",
      });
      
      // Reset form
      form.reset();
      
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Submission failed",
        description: "There was an issue processing your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      {title && <h3 className="text-xl md:text-2xl font-bold mb-2">{title}</h3>}
      {subtitle && <p className="text-gray-600 mb-6">{subtitle}</p>}
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
          
          <div className="mt-2">
            <p className="text-xs text-gray-500 mb-4">
              By submitting this form, you agree to our privacy policy. We'll never share your data with third parties.
            </p>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full flex items-center justify-center"
            >
              {isSubmitting ? (
                <span className="inline-block animate-spin mr-2">⟳</span>
              ) : null}
              {buttonText}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default LeadForm;
