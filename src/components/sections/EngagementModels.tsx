import { Shield, Clock, Target, CheckCircle2 } from 'lucide-react';

const models = [
  {
    icon: Shield,
    title: 'Fixed-Price Contracts',
    tagline: 'Predictable. Guaranteed. Transparent.',
    description: 'Lock in your budget with complete confidence. Our fixed-price model is ideal when your project scope is well-defined and deliverables are clear. You get guaranteed outcomes, predetermined timelines, and absolute cost certainty—no surprises, no scope creep, just results you can count on.',
    benefits: ['Guaranteed outcomes', 'Predetermined timelines', 'Absolute cost certainty'],
    bestFor: 'System implementations, platform migrations, defined development projects',
    color: 'primary',
  },
  {
    icon: Clock,
    title: 'Time & Material (T&M)',
    tagline: 'Flexible. Adaptive. Efficient.',
    description: 'Embrace agility when requirements evolve. Pay only for the resources you use while maintaining the flexibility to pivot, scale, and adapt as your business needs change. Our T&M model is perfect for iterative development, ongoing support, and projects where innovation requires exploration.',
    benefits: ['Pay only for resources used', 'Pivot and scale easily', 'Perfect for iterative work'],
    bestFor: 'Agile development, R&D initiatives, evolving digital products',
    color: 'primary',
  },
  {
    icon: Target,
    title: 'Performance & Outcome-Based',
    tagline: 'Risk-Shared. Results-Driven. Aligned.',
    description: 'True partnership means shared success. Our compensation is directly tied to achieving your specific business outcomes and KPIs. This model demonstrates our confidence in delivering measurable value and ensures our goals are completely aligned with yours.',
    benefits: ['Shared risk & success', 'Compensation tied to KPIs', 'Measurable value delivery'],
    bestFor: 'Digital transformation, revenue optimization, operational efficiency programs',
    color: 'primary',
  },
];

export function EngagementModels() {
  return (
    <section id="offerings" className="section-padding bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
              Outcomes
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Flexible Engagement Models Built Around{' '}
              <span className="gradient-text">Your Success</span>
            </h2>
            <p className="text-lg text-secondary-foreground/70">
              Choose the partnership approach that aligns with your requirements, risk tolerance, and business objectives.
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-secondary-foreground/10 aspect-video">
             <img 
               src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80" 
               alt="Successful Partnership" 
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {models.map((model, index) => (
            <div
              key={index}
              className="group relative bg-secondary-foreground/5 backdrop-blur-sm rounded-2xl p-8 border border-secondary-foreground/10 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                model.color === 'primary' ? 'bg-primary/20' : 
                model.color === 'accent' ? 'bg-accent/20' : 'bg-secondary-foreground/10'
              }`}>
                <model.icon className={`w-7 h-7 ${
                  model.color === 'primary' ? 'text-primary' : 
                  model.color === 'accent' ? 'text-accent' : 'text-secondary-foreground'
                }`} />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-bold mb-2">{model.title}</h3>
              <p className={`text-sm font-medium mb-4 ${
                model.color === 'primary' ? 'text-primary' : 
                model.color === 'accent' ? 'text-accent' : 'text-secondary-foreground/70'
              }`}>
                {model.tagline}
              </p>
              <p className="text-secondary-foreground/70 text-sm mb-6 leading-relaxed">
                {model.description}
              </p>

              {/* Benefits */}
              <ul className="space-y-2 mb-6">
                {model.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-secondary-foreground/80">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>

              {/* Best For */}
              <div className="pt-4 border-t border-secondary-foreground/10">
                <span className="text-xs font-semibold uppercase tracking-wider text-secondary-foreground/50">Best For:</span>
                <p className="text-sm text-secondary-foreground/70 mt-1">{model.bestFor}</p>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
