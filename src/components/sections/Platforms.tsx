import { Cloud, BrainCircuit, Bot, Code, Shield, Wifi, Palette, Building2 } from 'lucide-react';

const platforms = [
  {
    icon: Cloud,
    title: 'Cloud Migration & Modernization',
    description: 'Automated assessment, planning, migration, and optimization for AWS, Azure, and Google Cloud.',
    highlight: '60% Faster Migration',
  },
  {
    icon: BrainCircuit,
    title: 'AI/ML Enterprise Platforms',
    description: 'Pre-built frameworks for deploying, scaling, and governing AI/ML models across your organization.',
    highlight: 'Production-ready AI',
  },
  {
    icon: Bot,
    title: 'Agentic AI Platforms',
    description: 'Comprehensive frameworks for developing, orchestrating, and managing AI agents at scale.',
    highlight: '1000+ API Integrations',
  },
  {
    icon: Code,
    title: 'Low-Code/No-Code',
    description: 'Empower business users and developers to build applications faster with visual environments.',
    highlight: 'Democratize Dev',
  },
  {
    icon: Shield,
    title: 'Security Operations (SOC)',
    description: 'Managed security services with real-time monitoring, threat intelligence, and incident response.',
    highlight: '24/7 Threat Detect',
  },
  {
    icon: Wifi,
    title: 'IoT Analytics',
    description: 'End-to-end solutions for device provisioning, data ingestion, real-time analytics, and management.',
    highlight: 'Complete Lifecycle',
  },
  {
    icon: Palette,
    title: 'Design Systems',
    description: 'Enterprise-ready design frameworks with reusable components ensuring consistency and accessibility.',
    highlight: 'WCAG 2.1 AA',
  },
  {
    icon: Building2,
    title: 'Industry Digital Suites',
    description: 'Pre-configured solutions addressing unique industry challenges, regulations, and best practices.',
    highlight: 'Purpose-Built',
  },
];

export function Platforms() {
  return (
    <section id="technology" className="section-padding bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header - Zig Zag (Image Right) */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
              Platforms & Accelerators
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
              Accelerate Digital <br/> Transformation
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
               Pre-built platforms and accelerators that reduce time-to-value, minimize risk, and fast-track your digital journey. We don't just build from scratch; we build on a foundation of proven success.
            </p>
          </div>
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-border">
            <img 
               src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80" 
               alt="Cloud Technology" 
               className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
          </div>
        </div>

        {/* Platforms Grid - Clean */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <platform.icon className="w-6 h-6 text-primary" />
              </div>

              <h3 className="font-display font-semibold text-foreground mb-2 text-lg">{platform.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2">{platform.description}</p>
               
               <span className="inline-block px-2.5 py-0.5 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider rounded-sm">
                {platform.highlight}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
