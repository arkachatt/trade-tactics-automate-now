
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhatWeDo from "../components/WhatWeDo";
import WhyChooseUs from "../components/WhyChooseUs";
import Services from "../components/Services";
import Process from "../components/Process";
import WhoWeServe from "../components/WhoWeServe";
import CaseStudies from "../components/CaseStudies";
import TechnologyStack from "../components/TechnologyStack";
import AboutUs from "../components/AboutUs";
import FAQ from "../components/FAQ";
import ContactUs from "../components/ContactUs";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Index = () => {
  useEffect(() => {
    // Set the document title
    document.title = "TradeTactics - Transform Your Trading Logic Into Powerful Algorithms";
    
    // Add meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "TradeTactics builds custom algorithmic trading systems that execute your unique strategies with precision, speed, and reliability in the Indian market."
      );
    }
    
    // Scroll to top on initial load
    window.scrollTo(0, 0);
    
    // Set up cookie consent banner (simplified implementation)
    const hasConsent = localStorage.getItem("cookieConsent");
    if (!hasConsent) {
      const banner = document.createElement("div");
      banner.className = "fixed bottom-0 left-0 right-0 bg-gray-800 text-white py-4 px-6 flex justify-between items-center";
      banner.innerHTML = `
        <p class="text-sm mr-4">We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.</p>
        <button class="bg-secondary text-white px-4 py-2 rounded-md text-sm" id="accept-cookies">Accept</button>
      `;
      document.body.appendChild(banner);
      
      document.getElementById("accept-cookies")?.addEventListener("click", () => {
        localStorage.setItem("cookieConsent", "true");
        banner.remove();
      });
    }
    
    // Exit intent popup (simplified implementation)
    const showExitIntent = (e: MouseEvent) => {
      if (e.clientY < 0 && !localStorage.getItem("exitPopupShown")) {
        // In a real implementation, you would show a modal here
        console.log("Exit intent detected - would show popup");
        localStorage.setItem("exitPopupShown", "true");
        // Remove the event listener after showing once
        document.removeEventListener("mouseleave", showExitIntent);
      }
    };
    
    document.addEventListener("mouseleave", showExitIntent);
    
    return () => {
      document.removeEventListener("mouseleave", showExitIntent);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <WhatWeDo />
      <WhyChooseUs />
      <Services />
      <Process />
      <WhoWeServe />
      <CaseStudies />
      <TechnologyStack />
      <AboutUs />
      <FAQ />
      <ContactUs />
      <Newsletter />
      <Footer />
      
      {/* Sticky CTA (hidden on small screens, visible on scroll) */}
      <div className="hidden md:block fixed bottom-8 right-8 z-40">
        <a 
          href="#contact" 
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          }} 
          className="btn-primary shadow-lg"
        >
          Schedule Consultation
        </a>
      </div>
      
      {/* Live chat widget placeholder */}
      <div className="fixed bottom-8 left-8 z-40 bg-secondary text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Index;
