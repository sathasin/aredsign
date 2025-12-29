import Pooja from "@/assets/pooja.png";
import Santhosh from "@/assets/S.santhosh.jpeg";
import Ananthan from "@/assets/Ananthan.png";
import Karunya from "@/assets/Karunya.png";

export type TeamCategory = 'Management' | 'Engineers' | 'Advisors';

export type TeamMember = {
    id: string;
    name: string;
    role: string;
    category: TeamCategory;
    short: string;
    bio: string;
    image: string;
    socials: { label: string; href: string }[];
};

export const teamMembers: TeamMember[] = [
    // Management
    {
        id: "ananthan",
        name: "Ananthan Ayyasamy",
        role: "Leadership",
        category: "Management",
        short: "Driving strategic vision and organizational growth.",
        bio: "Strategic leader focused on long-term value creation and operational excellence.",
        image: Ananthan,
        socials: [],
    },
    {
        id: "karunya",
        name: "Karunya Gunavathy",
        role: "Leadership",
        category: "Management",
        short: "Leading operational initiatives and business development.",
        bio: "Experienced in managing cross-functional teams and delivering business outcomes.",
        image: Karunya,
        socials: [],
    },

    // Engineers
    {
        id: "pooja",
        name: "Pooja",
        role: "Software Engineer",
        category: "Engineers",
        short:
            "Passionate Software Engineer dedicated to building scalable, efficient, and user-centric solutions.",
        bio:
            "A skilled Software Engineer with a strong background in developing robust applications and solving complex technical challenges. Committed to continuous learning and driving innovation.",
        image: Pooja,
        socials: [
            { label: "LinkedIn", href: "#" },
            { label: "Twitter", href: "#" },
            { label: "GitHub", href: "#" },
        ],
    },
    {
        id: "santhosh",
        name: "S.Santhosh",
        role: "Software Developer",
        category: "Engineers",
        short:
            "Innovative Software Developer with a flair for creating seamless digital experiences and robust code.",
        bio:
            "Focused on delivering high-quality software solutions, mastering new technologies, and contributing to the success of complex projects through clean and efficient code.",
        image: Santhosh,
        socials: [
            { label: "LinkedIn", href: "#" },
            { label: "Twitter", href: "#" },
            { label: "GitHub", href: "#" },
        ],
    },

    // Advisors
    {
        id: "balaji",
        name: "Balaji",
        role: "Advisor",
        category: "Advisors",
        short: "Providing expert guidance on technology and market strategy.",
        bio: "Veteran industry expert helping shape the strategic direction of the company.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80", // Placeholder
        socials: [],
    },
    {
        id: "aishwarya",
        name: "Aishwarya",
        role: "Advisor",
        category: "Advisors",
        short: "Strategic advisor on business operations and growth.",
        bio: "Bringing deep insights into operational efficiency and sustainable growth.",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80", // Placeholder
        socials: [],
    },
];
