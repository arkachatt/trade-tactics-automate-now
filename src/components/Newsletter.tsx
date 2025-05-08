
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast({
        title: "Email is required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Subscription successful!",
        description: "Thank you for subscribing to our newsletter.",
        variant: "success",
      });
      
      // Reset form
      setEmail("");
    }, 1000);
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
          
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-3 rounded-md flex-grow"
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-primary text-white font-bold py-3 px-6 rounded-md hover:bg-primary-dark transition-colors duration-300 flex items-center justify-center"
            >
              {isSubmitting ? (
                <span className="inline-block animate-spin mr-2">⟳</span>
              ) : null}
              Subscribe
            </button>
          </form>
          
          <p className="text-white/80 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
