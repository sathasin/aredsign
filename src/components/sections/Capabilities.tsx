import { useState } from 'react';
import { 
  BarChart3, Database, Cpu, BrainCircuit, Bot, Palette, 
  Cog, Link, Shield, Wifi, ChevronDown
} from 'lucide-react';

const capabilities = [
  {
    icon: BarChart3,
    title: 'Analytics & BI',
    description: 'Turn Data Into Competitive Advantage. Unlock insights hidden in your data with advanced analytics solutions that empower decision-makers at every level.',
    useCases: ['Credit risk modeling', 'Fraud detection', 'Customer segmentation', 'Supply chain visibility'],
  },
  {
    icon: Database,
    title: 'Data Engineering & DataOps',
    description: 'Build Industrial-Strength Data Infrastructure. Create robust, scalable data foundations that support analytics, AI, and business intelligence at enterprise scale.',
    useCases: ['Modern data warehousing', 'Data lake architecture', 'Real-time streaming pipelines', 'Data quality and observability'],
  },
  {
    icon: Cpu,
    title: 'MLOps',
    description: 'Industrialize Your AI. Bridge the gap between data science and operations with enterprise-grade MLOps practices that ensure your models deliver consistent value.',
    useCases: ['Model training automation', 'Model versioning and registry', 'Drift detection', 'Automated retraining pipelines'],
  },
  {
    icon: BrainCircuit,
    title: 'Data Science',
    description: 'Solve Complex Problems with Data. Our data scientists combine statistical rigor with business acumen to extract actionable insights and build predictive models.',
    useCases: ['Predictive modeling', 'Churn prediction', 'Price optimization', 'Anomaly detection'],
  },
  {
    icon: Bot,
    title: 'AI App Development',
    description: 'Intelligent Systems That Learn and Adapt. Build custom AI-powered applications that enhance user experiences, automate complex workflows, and unlock new capabilities.',
    useCases: ['Conversational AI', 'Document intelligence', 'Computer vision', 'Recommendation engines'],
  },
  {
    icon: BrainCircuit,
    title: 'Agentic AI Systems',
    description: 'Autonomous Intelligence for Complex Workflows. Deploy AI agents that can reason, plan, and execute sophisticated multi-step tasks with minimal supervision.',
    useCases: ['Multi-agent orchestration', 'Retrieval-Augmented Generation (RAG)', 'Context-aware decision making'],
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Experiences Users Love. Transform digital touchpoints into intuitive, delightful experiences that drive engagement, satisfaction, and business results.',
    useCases: ['User research & strategy', 'Interaction design', 'Design systems', 'Accessibility audits'],
  },
  {
    icon: Cog,
    title: 'Intelligent Automation',
    description: 'Work Smarter, Not Harder. Automate repetitive, rule-based processes to increase efficiency, reduce errors, and free your workforce for strategic initiatives.',
    useCases: ['Robotic Process Automation (RPA)', 'Intelligent Document Processing', 'Workflow automation'],
  },
  {
    icon: Link,
    title: 'Blockchain',
    description: 'Trust, Transparency, Transformation. Leverage distributed ledger technology to create transparent, secure, tamper-proof systems reducing friction.',
    useCases: ['Smart contracts', 'Supply chain traceability', 'Tokenization', 'Decentralized identity'],
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Protect What Matters Most. Safeguard your digital assets, ensure compliance, and build resilience against evolving cyber threats.',
    useCases: ['Penetration testing', 'SOC - 24/7 monitoring', 'Zero Trust architecture', 'Compliance (GDPR, HIPAA)'],
  },
  {
    icon: Wifi,
    title: 'IoT & Real-Time',
    description: 'Connect, Monitor, Optimize. Bridge the physical and digital worlds with IoT solutions that enable real-time visibility and predictive insights.',
    useCases: ['IoT platform integration', 'Edge computing', 'Digital twins', 'Predictive maintenance'],
  },
];

export function Capabilities() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="solutions" className="section-padding bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header - Minimal & Text Only to match the request */}
        <div className="max-w-3xl mb-20 animate-slide-up">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
            Our Capabilities
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            We leverage a comprehensive suite of technologies to solve complex challenges. Designed for impact, scalable for growth.
          </p>
        </div>

        {/* Minimal Grid - No Cards, just content */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {capabilities.map((cap, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              {/* Icon - Simple & Clean */}
              <div className="mb-6 inline-flex p-3 rounded-2xl bg-slate-100 text-slate-700 group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300">
                <cap.icon className="w-8 h-8" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="font-display text-lg font-bold text-foreground mb-3 flex items-center justify-between group-hover:text-primary transition-colors">
                {cap.title}
                <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`} />
              </h3>

              {/* Description */}
              <p className="text-base text-slate-600 leading-relaxed mb-4">
                {cap.description}
              </p>

              {/* Minimal Expansion */}
              <div 
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${activeIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
              >
                <div className="overflow-hidden">
                  <div className="pt-2 flex flex-col gap-2 border-l-2 border-primary/20 pl-4">
                    {cap.useCases.map((useCase, i) => (
                      <span key={i} className="text-sm font-medium text-slate-800">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
