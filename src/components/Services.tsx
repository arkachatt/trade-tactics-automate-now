
import { BarChart3, Cpu, LineChart, Settings, GitMerge, ShieldCheck } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Cpu className="h-12 w-12 text-secondary" />,
      title: "Strategy Automation",
      description: "Convert your manual trading rules into fully automated algorithms that execute 24/7 with precision and speed.",
      features: [
        "Rule-based strategy implementation",
        "Technical indicator integration",
        "Custom entry/exit logic",
        "Multi-timeframe analysis",
      ],
    },
    {
      icon: <LineChart className="h-12 w-12 text-secondary" />,
      title: "Backtesting & Optimization",
      description: "Validate your strategies against historical data and optimize parameters for maximum performance.",
      features: [
        "Comprehensive historical testing",
        "Performance metrics analysis",
        "Parameter optimization",
        "Scenario testing",
      ],
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-secondary" />,
      title: "Real-time Monitoring",
      description: "Track your strategy performance, positions, and P&L in real-time through customized dashboards.",
      features: [
        "Live performance tracking",
        "Position monitoring",
        "Risk analytics",
        "Custom alert systems",
      ],
    },
    {
      icon: <Settings className="h-12 w-12 text-secondary" />,
      title: "Broker Integration",
      description: "Seamlessly connect your algorithms to all major Indian brokers with reliable, low-latency execution.",
      features: [
        "Multi-broker connectivity",
        "FIX protocol implementation",
        "Order routing optimization",
        "Transaction cost analysis",
      ],
    },
    {
      icon: <GitMerge className="h-12 w-12 text-secondary" />,
      title: "API Development",
      description: "Custom APIs to connect your trading systems with other applications and data sources.",
      features: [
        "Custom API development",
        "Data integration services",
        "Webhook implementations",
        "Secure authentication",
      ],
    },
    {
      icon: <ShieldCheck className="h-12 w-12 text-secondary" />,
      title: "Risk Management Systems",
      description: "Implement robust risk controls to protect your capital and ensure trading within defined parameters.",
      features: [
        "Position size management",
        "Drawdown controls",
        "Volatility adjustments",
        "Circuit breakers",
      ],
    },
  ];

  return (
    <section id="services" className="section-padding bg-muted">
      <div className="container mx-auto">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
            We offer end-to-end solutions for algorithmic trading, from strategy design to deployment and ongoing optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md flex flex-col h-full card-hover"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <div className="mt-auto">
                <h4 className="font-semibold text-sm uppercase text-primary mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#contact" 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }} 
            className="btn-primary"
          >
            Discuss Your Requirements
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
