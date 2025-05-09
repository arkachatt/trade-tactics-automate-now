
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { leadFormSchema, LeadFormData } from "@/schemas/leadFormSchema";
import { FormFields } from "@/components/forms/FormFields";
import { useLeadFormSubmit } from "@/hooks/useLeadFormSubmit";

interface LeadFormProps {
  type: "hero" | "contact";
  title?: string;
  subtitle?: string;
  buttonText: string;
}

const LeadForm = ({ type, title, subtitle, buttonText }: LeadFormProps) => {
  const { isSubmitting, submitForm } = useLeadFormSubmit({ type });
  
  const form = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      strategy: "",
      message: "",
    },
  });

  const onSubmit = async (values: LeadFormData) => {
    const success = await submitForm(values);
    if (success) {
      form.reset();
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      {title && <h3 className="text-xl md:text-2xl font-bold mb-2">{title}</h3>}
      {subtitle && <p className="text-gray-600 mb-6">{subtitle}</p>}
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormFields form={form} type={type} />
          
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
