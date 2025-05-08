
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const links = {
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Team", href: "#about" },
      { name: "Careers", href: "#" },
      { name: "Contact Us", href: "#contact" },
    ],
    services: [
      { name: "Strategy Automation", href: "#services" },
      { name: "Backtesting", href: "#services" },
      { name: "Broker Integration", href: "#services" },
      { name: "Risk Management", href: "#services" },
    ],
    resources: [
      { name: "Blog", href: "#" },
      { name: "Case Studies", href: "#case-studies" },
      { name: "FAQs", href: "#faq" },
      { name: "Documentation", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
    ],
  };

  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <a href="#" className="text-2xl font-bold mb-4 block">
              <span className="text-secondary">Trade</span>Tactics
            </a>
            <p className="mb-6 text-gray-300">
              Transform your trading logic into powerful algorithms. We build custom algorithmic trading systems for the Indian market.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {links.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith('#')) {
                        e.preventDefault();
                        document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                      }
                    }} 
                    className="text-gray-300 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {links.services.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith('#')) {
                        e.preventDefault();
                        document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                      }
                    }} 
                    className="text-gray-300 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {links.resources.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith('#')) {
                        e.preventDefault();
                        document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                      }
                    }} 
                    className="text-gray-300 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-300">
                &copy; {currentYear} TradeTactics. All rights reserved.
              </p>
            </div>
            
            <div className="flex space-x-6">
              {links.legal.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-300 hover:text-secondary transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
