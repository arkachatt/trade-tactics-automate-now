
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  const faqs = [
    {
      question: "What types of trading strategies can you automate?",
      answer:
        "We can automate virtually any rule-based trading strategy, including technical analysis-based systems, statistical arbitrage, trend following, mean reversion, options strategies, and more. If your strategy can be defined with clear rules, we can automate it.",
    },
    {
      question: "How long does it typically take to automate a strategy?",
      answer:
        "The timeline varies based on strategy complexity, but most projects take between 3-8 weeks from initial consultation to live deployment. Simple strategies might be completed in as little as 2 weeks, while more complex systems involving multiple markets or advanced analytics may take longer.",
    },
    {
      question: "Which brokers do you integrate with?",
      answer:
        "We have existing integrations with all major Indian brokers including Zerodha, Upstox, Angel One, ICICI Direct, HDFC Securities, and Fyers. We can also build custom integrations for other platforms if needed.",
    },
    {
      question: "How do you ensure the security of my trading strategy?",
      answer:
        "We take intellectual property protection seriously. All client engagements are covered by strict NDAs. Your strategy logic remains your property, and we implement it in a way that protects your IP. We also use secure infrastructure with encryption and strict access controls.",
    },
    {
      question: "Can I make changes to my algorithm after it's deployed?",
      answer:
        "Absolutely. We design our systems to be modular and adaptable. Many parameter changes can be made through user interfaces without requiring code changes. For more substantial modifications, our team can implement updates quickly. We also offer ongoing support and optimization packages.",
    },
    {
      question: "Do you provide backtesting services?",
      answer:
        "Yes, comprehensive backtesting is a standard part of our development process. We test strategies against historical market data, providing detailed performance metrics and visualizations. This helps validate the strategy before live deployment and gives insights for potential optimization.",
    },
    {
      question: "What kind of support do you provide after deployment?",
      answer:
        "We offer various support tiers, from basic technical support to comprehensive monitoring and optimization services. Our standard support includes system monitoring, troubleshooting, and regular performance reviews. Premium support includes strategy enhancement, market adaptation, and 24/7 technical assistance.",
    },
    {
      question: "Do I need programming knowledge to work with you?",
      answer:
        "No programming knowledge is required. We handle all technical aspects while you focus on your trading expertise. Our process begins with understanding your strategy in trader's terms, and we translate that into technical specifications and code.",
    },
  ];

  return (
    <section id="faq" className="section-padding bg-muted">
      <div className="container mx-auto">
        <div className="section-title">
          <h2>Frequently Asked Questions</h2>
          <p>
            Get answers to common questions about our algorithmic trading solutions.
          </p>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none"
                  onClick={() => toggleItem(index)}
                >
                  <h3 className="text-lg font-semibold text-primary">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 transition-transform duration-300 faq-icon ${
                      openItem === index ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    openItem === index
                      ? "max-h-96 pb-6 opacity-100"
                      : "max-h-0 pb-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-6">
            Don't see your question here? Contact us directly and we'll be happy to help.
          </p>
          <a 
            href="#contact" 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }} 
            className="btn-primary"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
