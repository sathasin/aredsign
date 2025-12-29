import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Offerings", href: "#offerings" },
  { name: "Practice Areas", href: "#practice-areas" },
  { name: "Solutions", href: "#solutions" },
  { name: "Capabilities", href: "#solutions" },
  { name: "Industries", href: "#industries" },
  { name: "Technology", href: "#technology" },
  { name: "Zoho Mitigation", href: "#zoho-mitigation" },
  { name: "Partners", href: "#partners" },
  { name: "Careers", href: "#careers" },
  { name: "About Us", href: "#about" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-xl shadow-lg py-3"
          : "bg-background/20 backdrop-blur-sm border-b border-white/10 py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <img
              src="/Aramlogo.png"
              alt="Aram Analytics"
              className="h-10 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium text-sm transition-all duration-300 hover:text-primary relative group ${
                  isScrolled ? "text-foreground" : "text-foreground"
                }`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              variant="default"
              size="lg"
              className="shadow-md hover:shadow-lg transition-all bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6"
              onClick={() => document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" })}
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-foreground"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-foreground"}`} />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-card/98 backdrop-blur-xl shadow-xl animate-fade-in-up border-b border-border/50 h-[calc(100vh-80px)] overflow-y-auto">
            <div className="container mx-auto px-4 py-8">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <div key={link.name} className="border-b border-border/10 last:border-0">
                    <a
                      href={link.href}
                      className="block py-4 font-medium text-lg text-foreground hover:text-primary transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  </div>
                ))}
                <div className="mt-8">
                  <Button
                    variant="default"
                    size="lg"
                    className="w-full justify-center bg-primary text-primary-foreground h-12 text-base rounded-xl shadow-lg"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
