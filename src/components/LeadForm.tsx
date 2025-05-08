
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  strategy?: string;
  message?: string;
}

interface LeadFormProps {
  type: "hero" | "contact";
  title?: string;
  subtitle?: string;
  buttonText: string;
}

const LeadForm = ({ type, title, subtitle, buttonText }: LeadFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    strategy: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Form submitted successfully!",
        description: "We'll get back to you shortly.",
        variant: "default", // Changed from "success" to "default"
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        strategy: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      {title && <h3 className="text-xl md:text-2xl font-bold mb-2">{title}</h3>}
      {subtitle && <p className="text-gray-600 mb-6">{subtitle}</p>}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-input"
            placeholder="Your full name"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
            placeholder="your@email.com"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="form-input"
            placeholder="Your contact number"
          />
        </div>
        
        {type === "hero" && (
          <div>
            <label htmlFor="strategy" className="block text-sm font-medium text-gray-700 mb-1">
              Strategy Description
            </label>
            <input
              type="text"
              id="strategy"
              name="strategy"
              value={formData.strategy}
              onChange={handleChange}
              className="form-input"
              placeholder="Briefly describe your strategy"
            />
          </div>
        )}
        
        {type === "contact" && (
          <>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                Company/Trading Entity
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="form-input"
                placeholder="Your company name"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="form-input"
                placeholder="Tell us about your requirements"
              />
            </div>
          </>
        )}
        
        <div className="mt-2">
          <p className="text-xs text-gray-500 mb-4">
            By submitting this form, you agree to our privacy policy. We'll never share your data with third parties.
          </p>
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary w-full flex items-center justify-center"
          >
            {isSubmitting ? (
              <span className="inline-block animate-spin mr-2">⟳</span>
            ) : null}
            {buttonText}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LeadForm;
