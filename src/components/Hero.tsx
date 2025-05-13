


const Hero = () => {
  return (
    <section id="hero" className="min-h-screen relative code-bg overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-transparent z-0"></div>
      
      <div className="container mx-auto px-4 pt-12 pb-16 md:py-24">
        <div className="flex justify-center items-center">
          <div className="z-10 animate-fade-up text-center max-w-3xl mx-auto">
            <div className="bg-secondary/10 text-secondary text-sm font-semibold py-1 px-3 rounded-full inline-block mb-4">
              IISc Alumni-Founded
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary">
              Transform Your Trading Logic Into Powerful Algorithms
            </h1>
            
            <p className="text-xl text-gray-700 mb-8">
              We build custom algorithmic trading systems that execute your unique strategies with precision, speed, and reliability in the Indian market.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="#services" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
                }} 
                className="btn-primary"
              >
                Explore Services
              </a>
              
              <a 
                href="#case-studies" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("case-studies")?.scrollIntoView({ behavior: "smooth" });
                }} 
                className="btn-secondary"
              >
                View Case Studies
              </a>
            </div>
            
            <div className="mt-8 grid grid-cols-3 gap-16 max-w-xl mx-auto">
              <div className="text-center">
                <div className="counter" data-value="98">98%</div>
                <p className="text-sm text-gray-600">Execution Accuracy</p>
              </div>
              
              <div className="text-center">
                <div className="counter" data-value="50">50+</div>
                <p className="text-sm text-gray-600">Strategies Automated</p>
              </div>
              
              <div className="text-center">
                <div className="counter" data-value="6">6</div>
                <p className="text-sm text-gray-600">Broker Integrations</p>
              </div>
            </div>
          </div>
          

        </div>
        
        {/* Partner logos */}
        <div className="mt-16 md:mt-24">
          <p className="text-gray-500 text-center text-sm mb-6">TRUSTED BY TRADERS ACROSS PLATFORMS</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="text-gray-400 font-semibold">Zerodha</div>
            <div className="text-gray-400 font-semibold">Upstox</div>
            <div className="text-gray-400 font-semibold">Angel One</div>
            <div className="text-gray-400 font-semibold">Fyers</div>
            <div className="text-gray-400 font-semibold">5paisa</div>
          </div>
        </div>
      </div>
      
      {/* Animated scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a 
          href="#what-we-do" 
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("what-we-do")?.scrollIntoView({ behavior: "smooth" });
          }} 
          className="text-secondary"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
