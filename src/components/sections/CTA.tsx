import { ArrowRight, Calendar, FileText, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CTA() {
  return (
    <section className="section-padding bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Ready to{' '}
            <span className="gradient-text">Transform</span>
            {' '}Your Business?
          </h2>
          <p className="text-xl text-secondary-foreground/70 mb-12 max-w-2xl mx-auto">
            Whether you're embarking on a comprehensive digital transformation, solving a specific 
            business challenge, or exploring emerging technologies, we're here to help you succeed.
          </p>
          
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold tracking-wide uppercase text-primary">Get Started Today</h3>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            <div className="bg-secondary-foreground/5 backdrop-blur-sm rounded-xl p-6 border border-secondary-foreground/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
              <Calendar className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-display font-semibold mb-2">Free Consultation</h3>
              <p className="text-sm text-secondary-foreground/60 mb-4">Schedule a call with our experts</p>
              <Button variant="hero" size="sm" className="w-full">
                Book Now
              </Button>
            </div>

            <div className="bg-secondary-foreground/5 backdrop-blur-sm rounded-xl p-6 border border-secondary-foreground/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
              <FileText className="w-10 h-10 text-accent mx-auto mb-4" />
              <h3 className="font-display font-semibold mb-2">Request Demo</h3>
              <p className="text-sm text-secondary-foreground/60 mb-4">See our platforms in action</p>
              <Button variant="outline" size="sm" className="w-full border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10">
                Request
              </Button>
            </div>

            <div className="bg-secondary-foreground/5 backdrop-blur-sm rounded-xl p-6 border border-secondary-foreground/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
              <BookOpen className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-display font-semibold mb-2">Case Studies</h3>
              <p className="text-sm text-secondary-foreground/60 mb-4">Download industry insights</p>
              <Button variant="outline" size="sm" className="w-full border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10">
                Download
              </Button>
            </div>
          </div>

          {/* Main CTA */}
          <Button variant="gradient" size="xl" className="group">
            Start Your Transformation Journey
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
