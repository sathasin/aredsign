import { Layers, RefreshCw, Link2, Compass, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Layers,
    title: 'Platform Engineering',
    subtitle: 'Build the Foundation for Innovation',
    description: 'We design and operate cloud-native platforms that accelerate development velocity, reduce infrastructure complexity, and empower your teams to focus on innovation rather than operations.',
    features: ['Self-service developer platforms', 'CI/CD pipeline automation', 'Infrastructure as Code (IaC)', 'Container orchestration (Kubernetes)', 'API management & service mesh', 'Observability and monitoring frameworks'],
    impact: 'A fintech startup reduced deployment time from days to minutes with our self-service platform.',
  },
  {
    icon: RefreshCw,
    title: 'Enterprise Transformation',
    subtitle: 'Reimagine Your Digital Future',
    description: 'Navigate the complexity of organizational change with our comprehensive transformation services. We modernize technology stacks, optimize business processes, and cultivate cultures of innovation.',
    features: ['Legacy application modernization', 'Cloud-first architecture design', 'Microservices transformation', 'DevOps & cultural change', 'Digital operating model design', 'Change leadership and training'],
    impact: 'A global manufacturer transformed 200+ legacy applications to cloud-native microservices, achieving 60% faster time-to-market.',
  },
  {
    icon: Link2,
    title: 'Systems Integration',
    subtitle: 'Connect Everything, Seamlessly',
    description: 'Break down silos and create unified digital ecosystems. Our integration expertise spans ESB, APIs, iPaaS, event-driven architectures, and real-time data synchronization.',
    features: ['Enterprise Service Bus (ESB)', 'API design and management', 'ETL/ELT data integration', 'Real-time event streaming (Kafka)', 'B2B/EDI integration', 'Legacy system connectivity'],
    impact: 'A retail chain integrated 15+ disparate systems to achieve real-time visibility, reducing stockouts by 35%.',
  },
  {
    icon: Compass,
    title: 'Strategic Consulting',
    subtitle: 'Navigate Complexity with Confidence',
    description: 'Our consultants bring decades of experience to help you make informed technology investments, prioritize initiatives, and chart clear paths to digital maturity.',
    features: ['Digital transformation strategy', 'Technology architecture and blueprints', 'Cloud strategy and vendor selection', 'Data strategy and governance', 'Innovation workshops and ideation', 'Technology risk assessment'],
    impact: 'We provide actionable roadmaps, not just reports.',
  },
];

export function Services() {
  return (
    <section id="practice-areas" className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 mesh-bg" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="text-left">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Verticals
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Offerings Tailored to Your{' '}
              <span className="gradient-text">Industry Vertical</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              End-to-end digital excellence spanning platform engineering, transformation, integration, and strategic consulting.
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video lg:aspect-auto lg:h-[300px] border border-border">
             <img 
               src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
               alt="Digital Transformation" 
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-500 card-elevated"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-1">{service.title}</h3>
                    <p className="text-primary font-medium text-sm">{service.subtitle}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Impact */}
                <div className="mt-auto pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground italic">
                    <span className="text-primary font-semibold">Real Impact:</span> {service.impact}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="gradient" size="lg" className="group">
            View All Services
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
