// "use client";

// import SectionHeader from "@/components/common/section-header";
// import { Badge } from "@/components/ui/badge";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//     BookOpen,
//     Briefcase,
//     Building2,
//     ExternalLink,
//     Globe,
//     GraduationCap,
//     Users
// } from "lucide-react";
// import { useState } from "react";

// interface Partner {
//     id: number;
//     name: string;
//     url: string;
//     category: 'corporate' | 'education' | 'media' | 'digital' | 'community';
//     description?: string;
// }

// const PartnersSection = () => {
//     const [hoveredId, setHoveredId] = useState<number | null>(null);

//     const partners: Partner[] = [
//         {
//             id: 1,
//             name: "Kidlon Baby Care Products",
//             url: "https://kidloncare.com/",
//             category: "corporate",
//             description: "Premium baby care products provider"
//         },
//         {
//             id: 2,
//             name: "Pentagon International Ltd",
//             url: "https://pentagonint.com/",
//             category: "corporate",
//             description: "International business conglomerate"
//         },
//         {
//             id: 3,
//             name: "YGF Digital",
//             url: "https://ygfdigitalbd.com/",
//             category: "digital",
//             description: "Digital solutions and technology services"
//         },
//         {
//             id: 4,
//             name: "Imperial International School",
//             url: "https://www.iisc-bd.com/",
//             category: "education",
//             description: "Premium international education institution"
//         },
//         {
//             id: 5,
//             name: "Panjeree Publications",
//             url: "https://www.panjeree.com/",
//             category: "education",
//             description: "Leading educational publications"
//         },
//         {
//             id: 6,
//             name: "Hikmah Al Falah",
//             url: "https://www.facebook.com/hikmatulfalahh",
//             category: "community",
//             description: "Community and educational initiatives"
//         },
//     ];

//     const handlePartnerClick = (url: string) => {
//         window.open(url, "_blank", "noopener,noreferrer");
//     };

//     const getCategoryIcon = (category: string) => {
//         switch (category) {
//             case 'corporate': return <Building2 className="h-3.5 w-3.5" />;
//             case 'education': return <GraduationCap className="h-3.5 w-3.5" />;
//             case 'digital': return <Globe className="h-3.5 w-3.5" />;
//             case 'media': return <BookOpen className="h-3.5 w-3.5" />;
//             case 'community': return <Users className="h-3.5 w-3.5" />;
//             default: return <Briefcase className="h-3.5 w-3.5" />;
//         }
//     };

//     const getCategoryColor = (category: string) => {
//         switch (category) {
//             case 'corporate': return 'bg-blue-500/10 text-blue-600';
//             case 'education': return 'bg-purple-500/10 text-purple-600';
//             case 'digital': return 'bg-green-500/10 text-green-600';
//             case 'media': return 'bg-pink-500/10 text-pink-600';
//             case 'community': return 'bg-amber-500/10 text-amber-600';
//             default: return 'bg-gray-500/10 text-gray-600';
//         }
//     };

//     const getInitials = (name: string) => {
//         return name
//             .split(" ")
//             .map(word => word[0])
//             .join("")
//             .toUpperCase()
//             .substring(0, 3);
//     };

//     const getDomain = (url: string) => {
//         try {
//             return new URL(url).hostname.replace('www.', '');
//         } catch {
//             return url.replace(/(^\w+:|^)\/\//, '').split('/')[0];
//         }
//     };

//     return (
//         <section className="py-12 md:py-16">
//             <div className="container px-4 md:px-6 max-w-6xl mx-auto">


//                 <SectionHeader
//                     heading="Partners & Sponsors"
//                     title={<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-white">
//                         Trusted by 200+{" "}
//                         <span className="text-primary">
//                             Organizations
//                         </span>
//                     </h2>}
//                     description="Collaborating with industry leaders to create exceptional educational experiences"
//                 />

//                 {/* Partners Grid */}
//                 <div className="mb-8">
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
//                         {partners.map((partner) => (
//                             <Card
//                                 key={partner.id}
//                                 className={`
//                   group relative cursor-pointer overflow-hidden
//                   border hover:border-primary transition-all duration-300
//                   ${hoveredId === partner.id ? 'shadow-lg scale-[1.02]' : 'shadow-sm'}
//                   hover:shadow-lg
//                 `}
//                                 onMouseEnter={() => setHoveredId(partner.id)}
//                                 onMouseLeave={() => setHoveredId(null)}
//                                 onClick={() => handlePartnerClick(partner.url)}
//                             >
//                                 <CardContent className="p-5">
//                                     <div className="flex items-start gap-4">
//                                         {/* Logo/Initials */}
//                                         <div className="relative">
//                                             <div className="h-14 w-14 flex items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border group-hover:scale-110 transition-transform duration-300">
//                                                 <span className="text-lg font-bold text-primary">
//                                                     {getInitials(partner.name)}
//                                                 </span>
//                                             </div>

//                                             {/* Category Badge */}
//                                             <div className="absolute -bottom-1 -right-1">
//                                                 <Badge
//                                                     variant="outline"
//                                                     className={`text-xs px-2 py-0.5 ${getCategoryColor(partner.category)} border`}
//                                                 >
//                                                     {getCategoryIcon(partner.category)}
//                                                 </Badge>
//                                             </div>
//                                         </div>

//                                         {/* Partner Info */}
//                                         <div className="flex-1 min-w-0">
//                                             <div className="flex items-start justify-between gap-2">
//                                                 <h3 className="font-bold text-gray-900 text-sm md:text-base line-clamp-2 group-hover:text-primary transition-colors">
//                                                     {partner.name}
//                                                 </h3>
//                                                 <ExternalLink className="h-3.5 w-3.5 text-gray-400 group-hover:text-primary flex-shrink-0 mt-0.5" />
//                                             </div>

//                                             {partner.description && (
//                                                 <p className="text-xs text-gray-500 mt-1 line-clamp-2">
//                                                     {partner.description}
//                                                 </p>
//                                             )}

//                                         </div>
//                                     </div>
//                                 </CardContent>
//                             </Card>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default PartnersSection;



import hikmah from "../../../assets/partners/hikmah.jpg"
import imperial from "../../../assets/partners/imperial.png"
import kidlon from "../../../assets/partners/kidlon.png"
import panjeree from "../../../assets/partners/panjeree.png"
import pentagon from "../../../assets/partners/pentagon.png"
import ygf from "../../../assets/partners/ygf.jpg"



const partners = [
    {
        name: "Kidlon",
        logo: kidlon,
        url: "https://kidloncare.com/",
    },
    {
        name: "Pentagon International",
        logo: pentagon,
        url: "https://pentagonint.com/",
    },
    {
        name: "YGF Digital",
        logo: ygf,
        url: "https://ygfdigitalbd.com/",
    },
    {
        name: "Imperial International School",
        logo: imperial,
        url: "https://www.iisc-bd.com/",
    },
    {
        name: "Panjeree Publications",
        logo: panjeree,
        url: "https://www.panjeree.com/",
    },
    {
        name: "Hikmah Al Falah",
        logo: hikmah,
        url: "https://www.facebook.com/hikmatulfalahh",
    },
]

export default function PartnersSection() {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-6 max-w-5xl">
                <p className="text-center text-sm uppercase tracking-widest text-muted-foreground mb-12">
                    Trusted by leading organizations
                </p>

                <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
                    {partners.map((partner) => (
                        <a
                            key={partner.name}
                            href={partner.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-center opacity-100 transition-opacity duration-300"
                        >
                            {partner.logo ? (
                                <img
                                    src={partner.logo || "/placeholder.svg"}
                                    alt={partner.name}
                                    width={120}
                                    height={40}
                                    className="h-20 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                                />
                            ) : (
                                <span className="text-lg font-semibold tracking-tight text-foreground">{partner.name}</span>
                            )}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}
