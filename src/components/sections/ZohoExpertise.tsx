import { ArrowRight, CheckCircle2, RefreshCw, Settings, Puzzle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const zohoServices = [
  {
    icon: RefreshCw,
    title: 'Zoho Business Transformation',
    tagline: 'One Platform, Infinite Possibilities',
    description: 'Transform your entire business operations with the Zoho One integrated suite—connecting CRM, finance, HR, projects, analytics, and operations in a unified ecosystem.',
    features: ['Zoho One implementation', 'Business process mapping', 'Role-based access design', 'Training & change management'],
    result: 'Mid-market distributor unified 8 systems, improving efficiency by 40%',
  },
  {
    icon: Settings,
    title: 'Migration to Zoho',
    tagline: 'Seamless Transition, Zero Disruption',
    description: 'Execute flawless migrations from Salesforce, HubSpot, Microsoft Dynamics, SAP, legacy ERPs, and custom platforms to the Zoho ecosystem.',
    features: ['Comprehensive data audit', 'Custom field mapping', 'Phased migration w/ rollback', 'Post-migration hypercare'],
    result: 'Salesforce to Zoho CRM: 500K+ records migrated in 6 weeks',
  },
  {
    icon: Puzzle,
    title: 'Zoho Customization & Integration',
    tagline: 'Tailored to Your Unique Processes',
    description: 'Extend Zoho capabilities with custom development, advanced automations, and deep integrations that align perfectly with your business requirements.',
    features: ['Zoho Creator custom apps', 'Deluge scripting & workflows', 'Third-party API integrations', 'Zoho Analytics dashboards'],
    result: 'E-commerce platform integrated with Shopify, Stripe & FedEx',
  },
];

export function ZohoExpertise() {
  return (
    <section id="zoho-mitigation" className="section-padding bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] opacity-70 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px] opacity-70 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
           <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1 group">
             <img 
               src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80" 
               alt="Zoho Analytics Dashboard" 
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent mix-blend-overlay" />
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 border border-primary/20">
              Zoho Ecosystem Partner
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
              Unified Business <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">Solutions</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Certified Zoho partner delivering comprehensive implementation, migration, and customization services. We help you leverage the full power of the Zoho ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/zoho">
                 <Button variant="default" className="rounded-full h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-primary/40 hover:-translate-y-0.5">
                   Explore Zoho Solutions
                   <ArrowRight className="ml-2 w-4 h-4" />
                 </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Services Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {zohoServices.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-card rounded-3xl p-8 shadow-lg shadow-gray-100/50 dark:shadow-none border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-8 text-primary group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8" />
              </div>

              <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-xs font-bold uppercase tracking-widest text-primary/80 mb-4">{service.tagline}</p>
              
              <p className="text-muted-foreground mb-8 leading-relaxed text-sm">{service.description}</p>

              <div className="pt-6 border-t border-border/50">
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
