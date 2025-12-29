import { Trophy, Award, Lightbulb, Users, Globe, ShieldCheck } from 'lucide-react';

const reasons = [
  {
    icon: Trophy,
    title: 'Proven Track Record',
    description: '500+ successful projects across 25+ countries, serving Fortune 500 companies and innovative startups alike.',
  },
  {
    icon: Award,
    title: 'Industry-Certified Experts',
    description: 'Our team holds 1,000+ certifications including AWS, Azure, GCP, Salesforce, Kubernetes, and domain-specific credentials.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation-First Approach',
    description: 'Dedicated R&D labs exploring emerging technologies—ensuring you benefit from cutting-edge solutions.',
  },
  {
    icon: Users,
    title: 'Agile & Transparent',
    description: 'Real-time project visibility, iterative delivery, and continuous collaboration ensure you are always in control.',
  },
  {
    icon: Globe,
    title: 'Global Delivery, Local Presence',
    description: '24/7 support with delivery centers across time zones and local teams who understand your market.',
  },
  {
    icon: ShieldCheck,
    title: 'Security & Compliance',
    description: 'ISO 27001, SOC 2 Type II, GDPR, HIPAA-compliant operations with security embedded in every solution.',
  },
];

export function WhyPartner() {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 mesh-bg" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Strategic Partners - Moved Top */}
        <div className="mb-12">
            <div className="text-center mb-10">
                 <p className="text-sm font-semibold tracking-widest text-primary uppercase">
                    Strategic Partners
                </p>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-80">
                {/* Zoho */}
                <div className="group flex items-center gap-3 transition-opacity hover:opacity-100 cursor-pointer">
                    <div className="w-10 h-10 rounded bg-[#E41F2B] flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">Z</div>
                    <span className="text-2xl font-bold text-foreground">Zoho</span>
                </div>

                {/* TrustGrid */}
                <div className="group flex items-center gap-3 transition-opacity hover:opacity-100 cursor-pointer">
                    <div className="w-10 h-10 rounded bg-[#00A859] flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">TG</div>
                    <span className="text-2xl font-bold text-foreground">TrustGrid</span>
                </div>

                {/* Microsoft */}
                <div className="group flex items-center gap-3 transition-opacity hover:opacity-100 cursor-pointer">
                    <div className="w-10 h-10 rounded bg-[#00A4EF] flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">M</div>
                    <span className="text-2xl font-bold text-foreground">Microsoft</span>
                </div>
            </div>
        </div>

        {/* Section Header - Moved Below Partners */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Why Partner{' '}
            <span className="gradient-text">With Us?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Experience the difference of working with a team invested in your success.
          </p>
        </div>

        {/* Reasons Grid - Moved Down */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group text-center p-6 rounded-2xl bg-card/50 border border-border/50 hover:bg-card hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <reason.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{reason.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
