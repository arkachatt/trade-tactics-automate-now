import { Code, Zap, Lock } from "lucide-react";
const WhatWeDo = () => {
  const features = [{
    icon: <Code size={36} className="text-secondary" />,
    title: "Strategy Automation",
    description: "We transform your manual trading strategies into sophisticated automated algorithms that execute with precision and speed across Indian markets."
  }, {
    icon: <Zap size={36} className="text-secondary" />,
    title: "Execution Optimization",
    description: "Our systems minimize slippage and optimize trade execution to ensure you get the best possible prices for your trades."
  }, {
    icon: <Lock size={36} className="text-secondary" />,
    title: "Secure Infrastructure",
    description: "Built on enterprise-grade infrastructure with 99.9% uptime, keeping your strategies secure and your trades executing reliably."
  }];
  return <section id="what-we-do" className="section-padding bg-muted">
      <div className="container mx-auto">
        <div className="section-title">
          <h2>What We Do</h2>
          <p>We specialize in transforming discretionary trading strategies into powerful automated systems, giving you a technological edge in the Indian markets.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => <div key={index} className="bg-white p-8 rounded-lg shadow-md card-hover">
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>)}
        </div>

        <div className="mt-16 p-8 bg-primary text-white rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                From Manual to Automated in Weeks, Not Months
              </h3>
              <p className="mb-6">
                Our streamlined process converts your manual trading rules into 
                high-performance algorithms that work across all major Indian brokers.
              </p>
              <a href="#process" onClick={e => {
              e.preventDefault();
              document.getElementById("process")?.scrollIntoView({
                behavior: "smooth"
              });
            }} className="bg-white text-primary font-bold py-3 px-6 rounded-md hover:bg-gray-100 transition-colors duration-300 inline-block">
                See Our Process
              </a>
            </div>
            
            <div className="code-snippet">
              <pre>
                <code>
                {`// Sample TradeTactics Algorithm
function executeTrade(signal, quantity) {
  if (signal === "BUY") {
    const bestPrice = getBestPrice("NIFTY");
    placeOrder({
      symbol: "NIFTY",
      type: "LIMIT",
      side: "BUY",
      price: bestPrice,
      quantity: quantity
    });
    console.log("Buy order placed at", bestPrice);
  }
}`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default WhatWeDo;