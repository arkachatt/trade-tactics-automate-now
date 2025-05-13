
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  // Sections for navigation
  const sections = [
    { id: "hero", label: "Home" },
    { id: "services", label: "Services" },
    { id: "process", label: "Process" },
    { id: "case-studies", label: "Case Studies" },
    { id: "faq", label: "FAQ" },
    { id: "contact", label: "Contact" },
  ];

  // Handle scroll for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`w-full z-50 transition-all duration-300 ${sticky ? "sticky-nav" : "bg-white"}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a 
              href="#hero" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("hero");
              }}
              className="text-2xl font-montserrat font-bold text-primary"
            >
              <span className="text-secondary">Trade</span>Tactics
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(section.id);
                }}
                className="text-gray-700 hover:text-secondary transition-colors duration-300"
              >
                {section.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
              className="btn-primary"
            >
              Schedule Consultation
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-secondary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 bg-white">
            <div className="flex flex-col space-y-4">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(section.id);
                  }}
                  className="text-gray-700 hover:text-secondary transition-colors duration-300 px-2 py-1"
                >
                  {section.label}
                </a>
              ))}
              <a 
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
                className="btn-primary w-full"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
