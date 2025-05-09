
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLeadFormSubmit } from "@/hooks/useLeadFormSubmit";

const newsletterSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email" }),
});

type NewsletterFormData = z.infer<typeof newsletterSchema>;

const Newsletter = () => {
  const { isSubmitting, submitForm } = useLeadFormSubmit({ type: "newsletter" });
  
  const form = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: NewsletterFormData) => {
    const success = await submitForm({
      name: "Newsletter Subscriber",
      email: values.email,
      phone: "Not provided",
      company: undefined,
      strategy: undefined,
      message: undefined
    });
    
    if (success) {
      form.reset();
    }
  };

  return (
    <section className="py-12 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated on Algorithmic Trading Insights
          </h2>
          <p className="text-white/90 mb-8">
            Subscribe to our newsletter for the latest trends, technologies, and strategies in the algorithmic trading world.
          </p>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex-grow">
                    <FormControl>
                      <Input 
                        type="email" 
                        placeholder="Your email address" 
                        {...field}
                        className="px-4 py-3 rounded-md w-full" 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-primary text-white font-bold py-3 px-6 rounded-md hover:bg-primary-dark transition-colors duration-300 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <span className="inline-block animate-spin mr-2">⟳</span>
                ) : null}
                Subscribe
              </Button>
            </form>
          </Form>
          
          <p className="text-white/80 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
