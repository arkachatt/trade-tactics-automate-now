
const AboutUs = () => {
  const team = [
    {
      name: "Dr. Aditya Sharma",
      role: "Founder & CEO",
      bio: "Ph.D. in Computer Science from IISc Bangalore. 10+ years of experience in high-frequency trading systems for global hedge funds.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Priya Mehta",
      role: "Head of Algorithm Development",
      bio: "M.Tech from IISc with specialization in Machine Learning. Former quant developer at a leading proprietary trading firm.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Rohit Verma",
      role: "Chief Technology Officer",
      bio: "MS in Computational Finance with extensive experience in building low-latency trading infrastructure for institutional clients.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="section-title">
          <h2>About Us</h2>
          <p>
            Founded by IISc alumni, TradeTactics combines academic rigor with practical trading experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">Our Story</h3>
            <p className="text-gray-700 mb-4">
              TradeTactics was founded in 2018 by a team of IISc Bangalore alumni who saw a significant gap in the Indian algorithmic trading landscape. While working at global hedge funds, we noticed that Indian traders and firms lacked access to the sophisticated algorithmic tools available in more developed markets.
            </p>
            <p className="text-gray-700 mb-4">
              We built TradeTactics to democratize access to advanced trading technology, helping Indian traders compete effectively in increasingly electronic markets. Our team combines deep technical expertise with practical trading experience, allowing us to build systems that not only execute well but truly understand trading objectives.
            </p>
            <p className="text-gray-700">
              Today, we serve clients ranging from individual proprietary traders to established trading desks, all with the mission of transforming trading logic into powerful algorithms that give our clients a technological edge.
            </p>
          </div>
          
          <div className="bg-muted p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-primary mb-6">Our Values</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold mb-2">Technical Excellence</h4>
                <p className="text-gray-700">
                  We hold ourselves to the highest standards of technical rigor, employing industry best practices in every system we build.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-2">Client Confidentiality</h4>
                <p className="text-gray-700">
                  We understand that trading strategies are intellectual property, and we maintain strict confidentiality around all client engagements.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-2">Continuous Improvement</h4>
                <p className="text-gray-700">
                  Markets evolve, and so do we. We continuously refine our approaches and technologies to stay at the cutting edge.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-2">Long-term Partnerships</h4>
                <p className="text-gray-700">
                  We're not just vendors but partners in your success, committed to supporting you as your strategies and needs evolve.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">Our Leadership Team</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-1">{member.name}</h4>
                  <p className="text-secondary font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
