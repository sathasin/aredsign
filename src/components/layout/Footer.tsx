import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

const footerLinks = {
  services: [
    'Platform Engineering',
    'Enterprise Transformation',
    'Systems Integration',
    'Strategic Consulting',
    'AI & ML Solutions',
  ],
  capabilities: [
    'Analytics & BI',
    'Data Engineering',
    'MLOps',
    'Agentic AI',
    'UI/UX Design',
  ],
  industries: [
    'BFSI',
    'Healthcare',
    'Retail',
    'Manufacturing',
    'Government',
  ],
  company: [
    'About Us',
    'Careers',
    'Case Studies',
    'Blog',
    'Contact',
  ],
};

export function Footer() {
  return (
    <footer id="footer" className="bg-secondary text-secondary-foreground pt-20 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-10 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <img src="/Aramlogo.png" alt="Aram Analytics" className="h-10 w-auto object-contain" />
            </a>
            <p className="text-secondary-foreground/70 mb-6 leading-relaxed">
              Empowering enterprises with cutting-edge digital transformation, AI-powered solutions, and end-to-end technology excellence.
            </p>
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="mailto:contact@aramanalytics.com" className="flex items-center gap-3 text-secondary-foreground/70 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                <span className="text-sm">contact@aramanalytics.com</span>
              </a>
              <a href="tel:+917530044868" className="flex items-center gap-3 text-secondary-foreground/70 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <span className="text-sm">75300 44868</span>
              </a>
              <div className="flex items-start gap-3 text-secondary-foreground/70">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Tenkasi, Tamil Nadu, India</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a href="#services" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities */}
          <div>
            <h4 className="font-display font-semibold mb-4">Capabilities</h4>
            <ul className="space-y-2">
              {footerLinks.capabilities.map((link, index) => (
                <li key={index}>
                  <a href="#capabilities" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-display font-semibold mb-4">Industries</h4>
            <ul className="space-y-2">
              {footerLinks.industries.map((link, index) => (
                <li key={index}>
                  <a href="#industries" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-secondary-foreground/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-secondary-foreground/60">
              © {new Date().getFullYear()} Aram Analytics. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-9 h-9 rounded-lg bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
