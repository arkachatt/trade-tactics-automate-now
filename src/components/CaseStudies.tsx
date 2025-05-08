
import { useState } from "react";

const CaseStudies = () => {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      title: "Options Scalping Algorithm",
      client: "Proprietary Trading Desk",
      challenge: "Manual execution of a complex options scalping strategy was leading to missed opportunities and execution slippage.",
      solution: "Developed a low-latency system that monitors multiple options chains simultaneously and executes scalping opportunities within milliseconds.",
      results: [
        "Improved trade execution speed by 95%",
        "Reduced slippage by 40%",
        "Increased daily trading volume by 300%",
        "Consistent performance even during high volatility"
      ],
      timeline: "4 Weeks",
    },
    {
      title: "Multi-timeframe Trend Following System",
      client: "High Net Worth Individual",
      challenge: "Client had a profitable manual strategy but couldn't monitor markets 24/7, missing major trend developments outside trading hours.",
      solution: "Built an automated system that analyzes multiple timeframes to identify trend formations and executes entries and exits with customized risk management.",
      results: [
        "Successfully captured 85% of major trends",
        "Reduced drawdowns by 25%",
        "Implemented dynamic position sizing based on volatility",
        "Customized reporting dashboard for performance monitoring"
      ],
      timeline: "6 Weeks",
    },
    {
      title: "Arbitrage Detection Engine",
      client: "Trading Startup",
      challenge: "Identifying and executing arbitrage opportunities across multiple exchanges required speed beyond human capabilities.",
      solution: "Created a high-frequency system that identifies price discrepancies across exchanges and executes synchronized trades to capture arbitrage spreads.",
      results: [
        "Average execution time under 50ms",
        "Captured over 1200+ arbitrage opportunities monthly",
        "Built-in risk controls to prevent adverse execution",
        "Custom analytics dashboard for monitoring spreads"
      ],
      timeline: "8 Weeks",
    },
  ];

  return (
    <section id="case-studies" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="section-title">
          <h2>Case Studies</h2>
          <p>
            Real-world examples of how we've helped traders and firms automate their strategies and improve performance.
          </p>
        </div>

        {/* Case study selection tabs */}
        <div className="flex overflow-x-auto space-x-4 mb-8 pb-2">
          {caseStudies.map((caseStudy, index) => (
            <button
              key={index}
              className={`px-6 py-3 rounded-md whitespace-nowrap transition-all ${
                activeCase === index
                  ? "bg-secondary text-white font-semibold"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveCase(index)}
            >
              {caseStudy.title}
            </button>
          ))}
        </div>

        {/* Active case study details */}
        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="bg-secondary/10 text-secondary text-xs uppercase font-bold py-1 px-3 rounded-full">
                  {caseStudies[activeCase].client}
                </div>
                <div className="ml-4 text-sm text-gray-500">
                  Timeline: {caseStudies[activeCase].timeline}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-6">{caseStudies[activeCase].title}</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-2">The Challenge</h4>
                  <p className="text-gray-700">{caseStudies[activeCase].challenge}</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-2">Our Solution</h4>
                  <p className="text-gray-700">{caseStudies[activeCase].solution}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-primary mb-4">Results</h4>
              <ul className="space-y-3">
                {caseStudies[activeCase].results.map((result, index) => (
                  <li key={index} className="flex items-start">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                    <span className="text-gray-700">{result}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="btn-primary w-full text-center"
                >
                  Discuss Your Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
