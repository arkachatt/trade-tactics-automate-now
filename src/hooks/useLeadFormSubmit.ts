
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { LeadFormData } from "@/schemas/leadFormSchema";

interface UseLeadFormSubmitProps {
  type: "hero" | "contact" | "newsletter";
}

export const useLeadFormSubmit = ({ type }: UseLeadFormSubmitProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const submitForm = async (values: LeadFormData) => {
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
      
      return true;
      
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Submission failed",
        description: "There was an issue processing your request. Please try again.",
        variant: "destructive",
      });
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    submitForm
  };
};
