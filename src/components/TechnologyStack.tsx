
const TechnologyStack = () => {
  const technologies = {
    languages: [
      "Python", "C++", "Java", "JavaScript/TypeScript", "Go",
    ],
    infrastructure: [
      "AWS", "Google Cloud", "Kubernetes", "Docker", "Redis",
    ],
    dataFeeds: [
      "Refinitiv", "Bloomberg", "NSE DotEx", "BSE BOLT", "WebSocket APIs",
    ],
    brokers: [
      "Zerodha", "Upstox", "Angel One", "ICICI Direct", "HDFC Securities", "Fyers",
    ],
  };

  return (
    <section id="tech-stack" className="section-padding chart-bg bg-muted">
      <div className="container mx-auto">
        <div className="section-title">
          <h2>Our Technology Stack</h2>
          <p>
            We use cutting-edge technologies to build robust, high-performance trading systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-6">Development Languages</h3>
            <div className="flex flex-wrap gap-3">
              {technologies.languages.map((tech, index) => (
                <div
                  key={index}
                  className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-6">Infrastructure</h3>
            <div className="flex flex-wrap gap-3">
              {technologies.infrastructure.map((tech, index) => (
                <div
                  key={index}
                  className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-6">Market Data Feeds</h3>
            <div className="flex flex-wrap gap-3">
              {technologies.dataFeeds.map((tech, index) => (
                <div
                  key={index}
                  className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-6">Broker Integrations</h3>
            <div className="flex flex-wrap gap-3">
              {technologies.brokers.map((tech, index) => (
                <div
                  key={index}
                  className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-primary text-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Performance Metrics</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="w-6 h-6 mr-2 rounded-full bg-secondary flex items-center justify-center text-xs">✓</span>
                <span>Sub-millisecond order routing</span>
              </li>
              <li className="flex items-center">
                <span className="w-6 h-6 mr-2 rounded-full bg-secondary flex items-center justify-center text-xs">✓</span>
                <span>99.9% system uptime</span>
              </li>
              <li className="flex items-center">
                <span className="w-6 h-6 mr-2 rounded-full bg-secondary flex items-center justify-center text-xs">✓</span>
                <span>Secure VPN connectivity</span>
              </li>
              <li className="flex items-center">
                <span className="w-6 h-6 mr-2 rounded-full bg-secondary flex items-center justify-center text-xs">✓</span>
                <span>24/7 monitoring & alerts</span>
              </li>
            </ul>
          </div>

          <div className="bg-primary text-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Data Security</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="w-6 h-6 mr-2 rounded-full bg-secondary flex items-center justify-center text-xs">✓</span>
                <span>256-bit encryption</span>
              </li>
              <li className="flex items-center">
                <span className="w-6 h-6 mr-2 rounded-full bg-secondary flex items-center justify-center text-xs">✓</span>
                <span>Secure API authentication</span>
              </li>
              <li className="flex items-center">
                <span className="w-6 h-6 mr-2 rounded-full bg-secondary flex items-center justify-center text-xs">✓</span>
                <span>Regular security audits</span>
              </li>
              <li className="flex items-center">
                <span className="w-6 h-6 mr-2 rounded-full bg-secondary flex items-center justify-center text-xs">✓</span>
                <span>Strict access controls</span>
              </li>
            </ul>
          </div>

          <div className="bg-primary text-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Infrastructure</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="w-6 h-6 mr-2 rounded-full bg-secondary flex items-center justify-center text-xs">✓</span>
                <span>Cloud & co-located servers</span>
              </li>
              <li className="flex items-center">
                <span className="w-6 h-6 mr-2 rounded-full bg-secondary flex items-center justify-center text-xs">✓</span>
                <span>Redundant architecture</span>
              </li>
              <li className="flex items-center">
                <span className="w-6 h-6 mr-2 rounded-full bg-secondary flex items-center justify-center text-xs">✓</span>
                <span>Automated failover systems</span>
              </li>
              <li className="flex items-center">
                <span className="w-6 h-6 mr-2 rounded-full bg-secondary flex items-center justify-center text-xs">✓</span>
                <span>Continuous deployment</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;
