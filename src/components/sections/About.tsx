import { Globe, Users, Info } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
           {/* Image - Left (Zig-Zag vs Hero) */}
           <div className="relative order-2 lg:order-1">
             <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-border/50">
               <img 
                 src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                 alt="Collaboration" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
             </div>
             {/* Floating Badge */}
             <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-2xl shadow-xl border border-border hidden md:block">
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                   <Users className="w-6 h-6" />
                 </div>
                 <div>
                   <div className="font-bold text-lg">Expert Team</div>
                   <div className="text-sm text-muted-foreground">Global Professionals</div>
                 </div>
               </div>
             </div>
           </div>

           {/* Text - Right */}
           <div className="order-1 lg:order-2">
             <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
               We Build Valuable <br/>
               <span className="text-primary">Technology Solutions</span>
             </h2>
             
             <p className="text-xl text-slate-600 leading-relaxed mb-8">
               AramAnalytics is a trusted technology partner delivering cloud, AI, and enterprise software solutions that drive measurable business outcomes. We combine global expertise with local agility.
             </p>

             <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-foreground mb-1">Global Delivery</h3>
                    <p className="text-muted-foreground">Ensuring 24/7 support and fast time-to-market.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                   <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Info className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-foreground mb-1">Trusted Partner</h3>
                    <p className="text-muted-foreground">Committed to security, compliance, and success.</p>
                  </div>
                </div>
             </div>
           </div>
        </div>

      </div>
    </section>
  );
}
