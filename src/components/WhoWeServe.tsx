
const WhoWeServe = () => {
  const clientTypes = [
    {
      title: "Proprietary Traders",
      description: "Individual traders looking to automate profitable strategies and scale their operations without increasing manual effort.",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "High Net Worth Individuals",
      description: "Sophisticated investors seeking to diversify their portfolios with custom algorithmic trading solutions tailored to their risk profile.",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Portfolio Managers",
      description: "Investment professionals looking to enhance their existing strategies with automated execution and risk management systems.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Trading Firms & Startups",
      description: "Companies that need robust, scalable trading infrastructure to execute their proprietary strategies across multiple markets.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
  ];

  return (
    <section id="who-we-serve" className="section-padding bg-muted">
      <div className="container mx-auto">
        <div className="section-title">
          <h2>Who We Serve</h2>
          <p>
            We work with a diverse range of clients who share one common goal: leveraging technology to improve trading performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {clientTypes.map((client, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={client.image} 
                  alt={client.title} 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{client.title}</h3>
                <p className="text-gray-600">{client.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary text-white p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Not Sure if We're the Right Fit?</h3>
              <p className="mb-6">
                Every trading strategy is unique, and we understand you may have questions about how our services apply to your specific needs. Schedule a consultation with our team to discuss your requirements in detail.
              </p>
              <a 
                href="#contact" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }} 
                className="bg-white text-primary font-bold py-3 px-6 rounded-md hover:bg-gray-100 transition-colors inline-block"
              >
                Schedule Consultation
              </a>
            </div>
            
            <div className="hidden md:block">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="p-6 bg-primary-light rounded-lg">
                  <div className="text-3xl font-bold mb-2">95%</div>
                  <p className="text-sm">Client Retention Rate</p>
                </div>
                <div className="p-6 bg-primary-light rounded-lg">
                  <div className="text-3xl font-bold mb-2">24/7</div>
                  <p className="text-sm">Technical Support</p>
                </div>
                <div className="p-6 bg-primary-light rounded-lg">
                  <div className="text-3xl font-bold mb-2">3-4 Weeks</div>
                  <p className="text-sm">Average Development Time</p>
                </div>
                <div className="p-6 bg-primary-light rounded-lg">
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <p className="text-sm">Confidentiality</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
