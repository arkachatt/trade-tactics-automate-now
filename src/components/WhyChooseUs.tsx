
import { CheckCircle } from "lucide-react";

const WhyChooseUs = () => {
  const benefits = [
    {
      title: "Technical Expertise",
      description: "Founded by IISc alumni with deep expertise in algorithmic trading systems and market microstructure.",
    },
    {
      title: "Focused on Indian Markets",
      description: "Specialized knowledge of Indian market nuances, regulations, and broker APIs.",
    },
    {
      title: "High Performance Systems",
      description: "Custom-built infrastructure that offers sub-millisecond execution speeds and 99.9% uptime.",
    },
    {
      title: "Strategy Privacy",
      description: "Your trading logic remains confidential. We build your system while protecting your IP.",
    },
    {
      title: "Long-term Partnership",
      description: "Ongoing support, optimization, and adaptation as markets and your strategies evolve.",
    },
    {
      title: "End-to-End Solutions",
      description: "From strategy analysis to deployment and monitoring—we handle the complete lifecycle.",
    },
  ];

  return (
    <section id="why-choose" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="section-title">
          <h2>Why Choose TradeTactics</h2>
          <p>
            When you partner with us, you're choosing a team that combines academic rigor with practical market experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mt-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex">
              <div className="flex-shrink-0 mr-4">
                <CheckCircle className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-20 p-8 bg-primary rounded-lg shadow-lg text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold">The TradeTactics Advantage</h3>
            <p className="mt-2">Our performance metrics speak for themselves</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="text-4xl font-bold mb-2">&lt;5ms</div>
              <p className="text-sm">Average Execution Latency</p>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <p className="text-sm">System Uptime</p>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold mb-2">6+</div>
              <p className="text-sm">Broker Integrations</p>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold mb-2">100+</div>
              <p className="text-sm">Custom Indicators</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
