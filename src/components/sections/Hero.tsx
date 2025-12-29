import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-background overflow-hidden selection:bg-primary/10">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Text Content - Left */}
          <div className="max-w-3xl animate-slide-up">
             <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-8">
              AramAnalytics Solutions
            </div>
            
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 text-foreground leading-[1.1]">
              Strategic Technology Partner for Global Enterprises
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed max-w-xl">
              We deliver scalable, secure, and intelligent technology infrastructure tailored to drive your business growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Button
                variant="default"
                size="xl"
                className="rounded-full px-8 h-14 text-lg bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                onClick={() => document.getElementById('verticals')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Solutions
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="rounded-full px-8 h-14 text-lg border-2 border-border hover:bg-secondary/50"
                onClick={() => document.getElementById('outcomes')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Why Choose Us
              </Button>
            </div>

            {/* Simple Stats */}
            <div className="grid grid-cols-3 gap-8 border-t pt-8">
              <div>
                <div className="text-3xl font-display font-bold text-primary mb-1">500+</div>
                <div className="text-sm text-muted-foreground font-medium">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-primary mb-1">25+</div>
                <div className="text-sm text-muted-foreground font-medium">Countries Served</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-primary mb-1">99%</div>
                <div className="text-sm text-muted-foreground font-medium">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Hero Image - Right */}
          <div className="relative lg:h-[800px] flex items-center justify-center animate-slide-up-delayed">
             {/* Abstract Tech Illustration Placeholder */}
             <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-full max-h-[700px]">
               <img
                 src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop"
                 alt="Digital Transformation Illustration"
                 className="w-full h-full object-contain drop-shadow-2xl"
               />
             </div>
             
             {/* Decorative Background Blob */}
             <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl" />
          </div>
          
        </div>
      </div>
    </section>
  );
}
