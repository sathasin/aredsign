import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { Capabilities } from '@/components/sections/Capabilities';
import { Industries } from '@/components/sections/Industries';
import TeamSection from '@/components/sections/team/TeamSection';
import { Platforms } from '@/components/sections/Platforms';
import { About } from '@/components/sections/About';
import { EngagementModels } from '@/components/sections/EngagementModels';
import { ZohoExpertise } from '@/components/sections/ZohoExpertise';
import { WhyPartner } from '@/components/sections/WhyPartner';
import { CTA } from '@/components/sections/CTA';
import { Footer } from '@/components/layout/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative selection:bg-primary/20">
      <Navbar />
      <main>
        {/* Matches navbar order: Outcomes, Verticals, Solutions, Technology, Industries, Partners, About */}
        <Hero />
        <div id="offerings">
          <EngagementModels />
        </div>
        <Services />           {/* Practice Areas */}
        <Capabilities />       {/* Solutions & Capabilities */}
        <Industries />         {/* Industries */}
        <Platforms />          {/* Technology */}

        <ZohoExpertise />

        <div id="partners">
          <WhyPartner />
        </div>
        
        <div id="careers">
            {/* Placeholder for Careers if needed in future */}
        </div>

        <About />              {/* About Us */}
        <TeamSection />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
