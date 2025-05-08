
import { useEffect, useState } from "react";

const Process = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    {
      number: "01",
      title: "Strategy Consultation",
      description:
        "We begin by understanding your trading strategy in detail, including entry/exit rules, risk parameters, and performance goals.",
      timeframe: "1-2 Days",
    },
    {
      number: "02",
      title: "Algorithm Design",
      description:
        "Our team converts your strategy into a detailed technical specification and algorithmic workflow with your review and approval.",
      timeframe: "3-5 Days",
    },
    {
      number: "03",
      title: "Development & Testing",
      description:
        "We develop the algorithm in our secure environment, testing against historical data to validate performance.",
      timeframe: "1-2 Weeks",
    },
    {
      number: "04",
      title: "Paper Trading",
      description:
        "The algorithm runs in a simulated environment with real market data but without executing actual trades to verify its performance.",
      timeframe: "1-2 Weeks",
    },
    {
      number: "05",
      title: "Deployment & Integration",
      description:
        "Upon your approval, we deploy the system to production, connecting to your broker accounts with proper security protocols.",
      timeframe: "1-2 Days",
    },
    {
      number: "06",
      title: "Monitoring & Optimization",
      description:
        "We provide ongoing monitoring, performance analysis, and optimization to ensure your algorithm adapts to changing market conditions.",
      timeframe: "Continuous",
    },
  ];

  // Auto-advance through steps for demonstration
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
    }, 3000);
    
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <section id="process" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="section-title">
          <h2>Our Process</h2>
          <p>
            We follow a structured approach to transform your trading strategies into robust algorithms.
          </p>
        </div>

        <div className="mt-16">
          {/* Step indicators */}
          <div className="hidden md:flex justify-between mb-8 relative">
            <div className="absolute top-1/2 h-1 bg-gray-200 w-full -z-10"></div>
            
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`relative flex flex-col items-center ${
                  index <= activeStep ? "text-secondary" : "text-gray-400"
                }`}
              >
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                    index <= activeStep ? "bg-secondary text-white" : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {index < activeStep ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  ) : (
                    <span>{step.number}</span>
                  )}
                </div>
                <div className="text-xs font-medium">{step.title}</div>
              </div>
            ))}
          </div>

          {/* Active step details */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <div className="md:hidden text-secondary text-lg font-bold mb-2">
                  Step {steps[activeStep].number}
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">{steps[activeStep].title}</h3>
                <div className="inline-block bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium">
                  {steps[activeStep].timeframe}
                </div>
              </div>
              <div className="md:col-span-2">
                <p className="text-gray-700">{steps[activeStep].description}</p>
              </div>
            </div>
          </div>

          {/* Mobile step list */}
          <div className="md:hidden mt-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`border-l-2 ${
                  index <= activeStep ? "border-secondary" : "border-gray-200"
                } pl-4 pb-8 ${index === steps.length - 1 ? "border-0" : ""} timeline-item`}
              >
                <div className={`text-sm font-medium ${
                  index <= activeStep ? "text-secondary" : "text-gray-400"
                }`}>
                  Step {step.number}
                </div>
                <div className="font-semibold">{step.title}</div>
                <div className="text-xs text-gray-500">{step.timeframe}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">Ready to Automate Your Trading?</h3>
          <a 
            href="#contact" 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }} 
            className="btn-primary"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;
