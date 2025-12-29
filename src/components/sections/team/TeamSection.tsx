import { useEffect, useRef, useState } from "react";
import { teamMembers, type TeamMember, type TeamCategory } from "./TeamData";
import { Linkedin, Twitter, ArrowRight, Github } from "lucide-react";

// Reusable Slider Component
function TeamSlider({ 
    title, 
    category, 
    imagePosition = "right" 
}: { 
    title: string; 
    category: TeamCategory; 
    imagePosition?: "left" | "right";
}) {
    const members = teamMembers.filter((m) => m.category === category);
    const [active, setActive] = useState<TeamMember | undefined>(undefined);

    const selected = active ?? members[0];
    const bigListRef = useRef<HTMLDivElement>(null);
    const bigItemRefs = useRef<(HTMLDivElement | null)[]>([]);

    // Reset bigItemRefs when members change
    if (bigItemRefs.current.length !== members.length) {
         bigItemRefs.current = Array(members.length).fill(null);
    }

    // Keep big gallery in sync: center the selected slide
    useEffect(() => {
        if (!selected || !bigListRef.current) return;
        const idx = members.findIndex((m) => m.id === selected.id);
        const el = bigItemRefs.current[idx];
        if (el) el.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }, [selected, members]);

    const handleNext = () => {
        const current = members.findIndex((m) => m.id === selected.id);
        const nextIndex = (current + 1) % members.length;
        const nextEl = bigItemRefs.current[nextIndex];
        if (nextEl && bigListRef.current) {
            nextEl.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
        }
    };

    if (members.length === 0) return null;

    return (
        <div className="mb-24 last:mb-0">
            <h3 className={`text-xl md:text-2xl font-display font-bold mb-6 pl-4 border-l-4 border-primary text-foreground ${imagePosition === "left" ? "md:text-right md:border-l-0 md:border-r-4 md:pr-4 md:pl-0" : ""}`}>
                {title}
            </h3>
            
            {/* Master-detail layout */}
            <div className={`relative grid gap-6 md:grid-cols-2 items-start`}>
                {/* TEXT DETAILS - Swapped logic via order classes */}
                <div className={`relative overflow-hidden rounded-[20px] border border-border bg-card p-6 md:p-8 shadow-xl min-h-[360px] flex flex-col justify-between transition-all duration-300 ${imagePosition === "left" ? "md:order-2" : "md:order-1"}`}>
                    <div className="relative flex-1 flex flex-col">
                        <div>
                            <div className="text-2xl md:text-3xl font-bold tracking-tight mb-2 text-foreground font-display">{selected.name}</div>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-primary bg-primary/10">
                                    {selected.role}
                                </span>
                            </div>
                        </div>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4 flex-1">
                            {selected.short}
                        </p>
                        <p className="text-xs md:text-sm text-foreground/80 leading-relaxed mb-6">
                            {selected.bio}
                        </p>
                    </div>
                    <div className="flex items-center justify-between gap-4 pt-4 border-t border-border/50">
                        <div className="flex items-center gap-3">
                            {selected.socials.map((social, i) => (
                                <a key={i} aria-label={social.label} href={social.href || "#"} className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all">
                                    {social.label === 'LinkedIn' && <Linkedin className="w-4 h-4" />}
                                    {social.label === 'Twitter' && <Twitter className="w-4 h-4" />}
                                    {social.label === 'GitHub' && <Github className="w-4 h-4" />}
                                </a>
                            ))}
                        </div>
                        <button
                            type="button"
                            onClick={handleNext}
                            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                            aria-label="Next team member"
                        >
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* IMAGES SLIDER - Swapped logic via order classes */}
                <div className={`relative ${imagePosition === "left" ? "md:order-1" : "md:order-2"}`}>
                    {/* Horizontal big-image gallery; scrolling changes selection */}
                    <div
                        ref={bigListRef}
                        className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory no-scrollbar flex-nowrap"
                        onScroll={() => {
                            const container = bigListRef.current;
                            if (!container) return;
                            requestAnimationFrame(() => {
                                const center = container.scrollLeft + container.clientWidth / 2;
                                let closest = 0;
                                let min = Number.POSITIVE_INFINITY;
                                bigItemRefs.current.forEach((node, index) => {
                                    if (!node) return;
                                    const rectLeft = node.offsetLeft;
                                    const rectCenter = rectLeft + node.offsetWidth / 2;
                                    const d = Math.abs(rectCenter - center);
                                    if (d < min) { min = d; closest = index; }
                                });
                                // Only update if changed
                                if (members[closest] && members[closest].id !== selected.id) {
                                     setActive(members[closest]);
                                }
                            });
                        }}
                    >
                        {members.map((m, i) => (
                            <div
                                key={m.id}
                                ref={(el) => { bigItemRefs.current[i] = el; }}
                                className="snap-center shrink-0 w-[70vw] md:w-[300px] lg:w-[320px]"
                            >
                                <div className="p-1 rounded-[20px] bg-card border border-border shadow-sm">
                                    <div
                                        onClick={() => setActive(m)}
                                        className={`relative w-full overflow-hidden rounded-[16px] transition-all duration-500 group cursor-pointer aspect-[4/5] ${selected?.id === m.id
                                            ? "grayscale-0 ring-2 ring-primary ring-offset-2 ring-offset-background"
                                            : "grayscale hover:grayscale-0 opacity-80 hover:opacity-100"
                                            }`}
                                    >
                                        <img
                                            src={m.image}
                                            alt={m.name}
                                            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <p className="text-white font-bold text-lg">{m.name}</p>
                                            <p className="text-white/80 text-sm">{m.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default function TeamSection() {
    // One-time keyframes injection for subtle reveals
    useEffect(() => {
        const id = "team-animations";
        if (document.getElementById(id)) return;
        const style = document.createElement("style");
        style.id = id;
        style.textContent = `
      @keyframes fadeUp { from { opacity: 0; transform: translateY(12px) } to { opacity: 1; transform: translateY(0) } }
      .animate-fade-up { animation: fadeUp .6s cubic-bezier(.16,1,.3,1) both; }
    `;
        document.head.appendChild(style);
        return () => { const n = document.getElementById(id); if (n) n.remove(); };
    }, []);

    return (
        <section id="about-us" className="py-24 relative bg-background">
            {/* Subtle grid background */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:24px_24px]" />
            <div className="container mx-auto px-4 2xl:px-6 max-w-7xl xl:max-w-[1200px] relative z-10">
                <div className="relative mb-16">
                     <span className="block text-center text-sm font-semibold text-primary tracking-wider uppercase mb-3">Our People</span>
                    <div className="pt-2 text-center">
                        <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-6 text-foreground font-display">Meet the Team</h2>
                        <p className="max-w-3xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed">
                            A diverse group of leaders, engineers, and thinkers working together to build the future.
                        </p>
                    </div>
                </div>

                {/* Management: Left */}
                <TeamSlider title="Management Team" category="Management" imagePosition="left" />
                
                {/* Engineers: Right */}
                <TeamSlider title="Engineers" category="Engineers" imagePosition="right" />
                
                {/* Advisors: Left */}
                <TeamSlider title="Advisors" category="Advisors" imagePosition="left" />

            </div>
        </section>
    );
}
