import { useState } from 'react';
import { 
  Building2, Heart, ShoppingBag, Factory, Radio, Zap, 
  Plane, Landmark, Truck, ArrowRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const industries = [
  {
    icon: Building2,
    name: 'Banking, Financial Services & Insurance (BFSI)',
    shortName: 'BFSI',
    description: 'Digital banking, intelligent finance, and regulatory-compliant platforms that transform customer experience and operations.',
    highlights: [
      'Neo-banking and mobile-first experiences',
      'AI-powered fraud detection and AML',
      'Wealth & treasury management platforms',
      'Open banking APIs and ecosystem integration',
    ],
    stat: '1M+ daily transactions secured',
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Heart,
    name: 'Healthcare & Life Sciences',
    shortName: 'Healthcare',
    description: 'Patient-centric, data-driven care—from clinical operations to research and population health.',
    highlights: [
      'Telemedicine & remote patient monitoring',
      'Clinical decision support and risk prediction',
      'Clinical trials and pharmacovigilance platforms',
      'HIPAA-compliant data platforms',
    ],
    stat: '22% reduction in ICU admissions',
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: ShoppingBag,
    name: 'Retail, E‑commerce & Consumer Goods',
    shortName: 'Retail',
    description: 'Omnichannel commerce and personalization that drive conversion, loyalty, and lifetime value.',
    highlights: [
      'Headless commerce and marketplace platforms',
      'AI-powered product discovery and recommendations',
      'Unified inventory & demand forecasting',
      'Loyalty, offers, and engagement journeys',
    ],
    stat: '34% increase in online conversion',
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Factory,
    name: 'Manufacturing & Industrial',
    shortName: 'Manufacturing',
    description: 'Industry 4.0 factories with connected assets, predictive maintenance, and real-time visibility.',
    highlights: [
      'Smart factory and IIoT implementations',
      'Predictive maintenance and asset intelligence',
      'Digital twins and OEE analytics',
      'Supply chain control towers',
    ],
    stat: '70% reduction in unplanned downtime',
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Radio,
    name: 'Telecommunications & Media',
    shortName: 'Telecom',
    description: 'Connected experiences and intelligent networks that unlock new digital revenue streams.',
    highlights: [
      'AI-driven network optimization',
      'Customer 360 and churn prediction',
      '5G monetization platforms',
      'OTT and digital content experiences',
    ],
    stat: '40% congestion reduction',
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Zap,
    name: 'Energy & Utilities',
    shortName: 'Energy',
    description: 'Smart, sustainable, and resilient utilities with grid intelligence and asset optimization.',
    highlights: [
      'Smart grid monitoring and AMI',
      'Outage management and SAIDI improvement',
      'Renewable energy optimization',
      'Predictive asset management',
    ],
    stat: '35% improvement in reliability indices',
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Plane,
    name: 'Travel & Hospitality',
    shortName: 'Travel',
    description: 'Seamless journeys and personalized guest experiences across every touchpoint.',
    highlights: [
      'Cloud PMS and booking platforms',
      'Mobile-first check-in and digital keys',
      'Revenue management and dynamic pricing',
      'Guest engagement and loyalty journeys',
    ],
    stat: '25% uplift in ancillary revenue',
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Landmark,
    name: 'Government & Public Sector',
    shortName: 'Government',
    description: 'Citizen-centric digital government with secure, transparent services at scale.',
    highlights: [
      'Citizen service and case management portals',
      'Smart city and urban IoT platforms',
      'Benefits eligibility and enrollment automation',
      'Open data and transparency platforms',
    ],
    stat: '100+ services digitized',
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Truck,
    name: 'Logistics & Supply Chain',
    shortName: 'Logistics',
    description: 'End-to-end visibility, optimization, and resilience across global supply chains.',
    highlights: [
      'Control tower and real-time visibility',
      'TMS, WMS, and last-mile optimization',
      'Route optimization and load planning',
      'Carbon footprint tracking and reporting',
    ],
    stat: '18% reduction in logistics cost',
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
  },
];

export function Industries() {
  const [activeIndustry, setActiveIndustry] = useState(0);

  return (
    <section id="industries" className="section-padding bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/15 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
            Industries We Serve
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Deep Vertical{' '}
            <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-lg text-secondary-foreground/70">
            From BFSI and healthcare to retail, manufacturing, telecom, energy, public sector, and logistics, we bring sector-specific playbooks and proven solutions.
          </p>
        </div>

        {/* Industry Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {industries.map((industry, index) => (
            <button
              key={index}
              onClick={() => setActiveIndustry(index)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeIndustry === index
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-secondary-foreground/10 text-secondary-foreground/70 hover:bg-secondary-foreground/20'
              }`}
            >
              {industry.shortName}
            </button>
          ))}
        </div>

        {/* Active Industry Card */}
        <div className="max-w-6xl mx-auto animate-scale-in">
          <div className="bg-card backdrop-blur-sm rounded-2xl p-8 border border-border shadow-lg">
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              {/* Left side: Info */}
              <div className="lg:col-span-5">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  {(() => {
                    const IconComponent = industries[activeIndustry].icon;
                    return <IconComponent className="w-8 h-8 text-primary" />;
                  })()}
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 text-foreground">
                  {industries[activeIndustry].name}
                </h3>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  {industries[activeIndustry].description}
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent border border-accent/20">
                  <span className="font-semibold">{industries[activeIndustry].stat}</span>
                </div>
              </div>

              {/* Middle: Highlights */}
              <div className="lg:col-span-4">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                  Key Solutions
                </h4>
                <div className="grid gap-3 mb-8">
                  {industries[activeIndustry].highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 border border-secondary">
                      <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-foreground/90 text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="group w-full sm:w-auto justify-between">
                  Explore Solutions
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>

              {/* Right: Image */}
              <div className="lg:col-span-3 h-full min-h-[200px] rounded-xl overflow-hidden relative">
                 <img 
                    src={industries[activeIndustry].image} 
                    alt={industries[activeIndustry].name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
