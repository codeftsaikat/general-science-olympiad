"use client";

import SectionHeader from "@/components/common/section-header";
import ExpandableCardDemo from "@/components/expandable-card-demo-grid";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Award,
    Brain,
    Calendar,
    ChevronRight,
    Compass,
    GraduationCap,
    Lightbulb,
    Rocket,
    Sparkles,
    Star,
    Target,
    Users,
    Zap
} from "lucide-react";
import { useEffect, useState } from "react";

const CategoriesSection = () => {
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const element = document.getElementById("categories-section");
        if (element) observer.observe(element);

        return () => {
            if (element) observer.unobserve(element);
        };
    }, []);

    const categories = [
        {
            id: 1,
            name: "Wonderist",
            classRange: "Class 1-2",
            ageRange: "Age 6-7",
            icon: <Sparkles className="h-8 w-8" />,
            description: "Foundational learning with play-based activities to spark curiosity and basic problem-solving skills.",
            color: "from-pink-400 to-rose-500",
        },
        {
            id: 2,
            name: "Explorers",
            classRange: "Class 3-4",
            ageRange: "Age 8-9",
            icon: <Compass className="h-8 w-8" />,
            description: "Introduction to structured learning with hands-on exploration and basic logical thinking.",
            color: "from-blue-400 to-cyan-500",
        },
        {
            id: 3,
            name: "Innovators",
            classRange: "Class 5-6",
            ageRange: "Age 10-11",
            icon: <Lightbulb className="h-8 w-8" />,
            description: "Developing creative thinking and problem-solving skills through project-based learning.",
            color: "from-amber-400 to-orange-500",
        },
        {
            id: 4,
            name: "Vanguard",
            classRange: "Class 7-8",
            ageRange: "Age 12-13",
            icon: <Target className="h-8 w-8" />,
            description: "Advanced critical thinking and leadership skills development for young adolescents.",
            color: "from-emerald-400 to-green-500",
        },
        {
            id: 5,
            name: "Pioneers",
            classRange: "Class 9-10",
            ageRange: "Age 14-16",
            icon: <Rocket className="h-8 w-8" />,
            description: "Specialized skill development and career exploration with real-world applications.",
            color: "from-violet-400 to-purple-500",
        },
        {
            id: 6,
            name: "Trailblazers",
            classRange: "Class 11-12",
            ageRange: "Age 17-19",
            icon: <Zap className="h-8 w-8" />,
            description: "College preparation and advanced research skills with professional mentorship.",
            color: "from-red-400 to-pink-500",
        },
        {
            id: 7,
            name: "Scholars",
            classRange: "University Level",
            ageRange: "Age 20-24",
            icon: <GraduationCap className="h-8 w-8" />,
            description: "Advanced academic research, professional networking, and industry collaboration.",
            color: "from-indigo-400 to-blue-500",
        },
        {
            id: 8,
            name: "Masterminds",
            classRange: "Graduate & Open",
            ageRange: "Age 25+",
            icon: <Brain className="h-8 w-8" />,
            description: "Expert-level collaboration, innovation, and thought leadership in specialized fields.",
            color: "from-gray-700 to-gray-900",
        },
    ];

    const selectedCategoryData = categories.find(cat => cat.id === selectedCategory) || categories[0];

    return (
        <section id="categories-section" className="py-16 md:py-24 text-black relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100"
        >
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent pointer-events-none" />

            <div className="container px-4 max-w-7xl mx-auto">
                {/* Header Section */}
                <SectionHeader
                    heading="Learning Pathways"
                    title={<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-black">
                        Specially Designed{" "}
                        Categories
                    </h2>
                    }
                    description=" 8 tailored learning pathways designed to nurture talent at every stage of development,
                        from early childhood to professional mastery."
                />

                {/* Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {categories.map((category, index) => (
                        <Card
                            key={category.id}
                            className={`group cursor-pointer transition-all duration-300 hover:shadow-xl border-2 ${selectedCategory === category.id
                                ? "border-primary shadow-lg scale-[1.02]"
                                : "border-border hover:border-primary"
                                } ${isVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-8"
                                }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                            onClick={() => setSelectedCategory(category.id)}
                        >
                            <CardContent className="p-6">
                                {/* Icon with gradient background */}
                                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${category.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <div className="text-white">
                                        {category.icon}
                                    </div>
                                </div>

                                {/* Category Name and Details */}
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                                            {category.name}
                                        </h3>
                                        {selectedCategory === category.id && (
                                            <ChevronRight className="h-5 w-5 text-primary animate-pulse" />
                                        )}
                                    </div>

                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <Users className="h-3 w-3" />
                                        <span>{category.classRange}</span>
                                        <Calendar className="h-3 w-3" />
                                        <span>{category.ageRange}</span>
                                    </div>


                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Selected Category Detail */}
                <div className={`transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}>
                    <Card className="border-primary/20 shadow-lg overflow-hidden">
                        <div className={`h-2 bg-gradient-to-r ${selectedCategoryData.color}`} />
                        <CardHeader>
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div className="flex items-center gap-4">
                                    <div className={`p-3 rounded-xl bg-gradient-to-br ${selectedCategoryData.color}`}>
                                        <div className="text-white">
                                            {selectedCategoryData.icon}
                                        </div>
                                    </div>
                                    <div>
                                        <CardTitle className="text-2xl md:text-3xl flex items-center gap-2">
                                            {selectedCategoryData.name}
                                            <Badge variant="secondary" className="ml-2">
                                                {selectedCategoryData.ageRange}
                                            </Badge>
                                        </CardTitle>
                                        <p className="text-muted-foreground mt-1">
                                            {selectedCategoryData.classRange}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    <Badge variant="outline" className="px-3 py-1">
                                        <Star className="mr-1 h-3 w-3" />
                                        Featured Category
                                    </Badge>
                                </div>
                            </div>
                        </CardHeader>

                        <CardContent className="space-y-6">
                            {/* Description */}
                            <div>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    {selectedCategoryData.description}
                                </p>
                            </div>

                            {/* What to Expect */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                                        <Award className="h-4 w-4 text-primary" />
                                        What You&apos;ll Learn
                                    </h4>
                                    <ul className="space-y-2">
                                        {getLearningOutcomes(selectedCategoryData.id).map((outcome, index) => (
                                            <li key={index} className="flex items-start">
                                                <ChevronRight className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                                <span className="text-sm text-muted-foreground">{outcome}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                                        <Target className="h-4 w-4 text-primary" />
                                        Program Highlights
                                    </h4>
                                    <ul className="space-y-2">
                                        {getProgramHighlights(selectedCategoryData.id).map((highlight, index) => (
                                            <li key={index} className="flex items-start">
                                                <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2 mt-1.5 flex-shrink-0" />
                                                <span className="text-sm text-muted-foreground">{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                        </CardContent>
                    </Card>
                </div>

            </div>

            <ExpandableCardDemo />
        </section>
    );
};

// Helper functions for dynamic content
function getLearningOutcomes(categoryId: number): string[] {
    switch (categoryId) {
        case 1: // Wonderist
            return [
                "Basic problem-solving through play",
                "Introduction to logical patterns",
                "Creative expression skills",
                "Foundational digital literacy"
            ];
        case 2: // Explorers
            return [
                "Structured logical thinking",
                "Basic coding concepts",
                "Scientific observation skills",
                "Team collaboration basics"
            ];
        case 3: // Innovators
            return [
                "Advanced problem-solving techniques",
                "Creative project development",
                "Basic algorithmic thinking",
                "Presentation and communication skills"
            ];
        case 4: // Vanguard
            return [
                "Critical analysis skills",
                "Leadership development",
                "Advanced programming concepts",
                "Research methodology basics"
            ];
        case 5: // Pioneers
            return [
                "Specialized skill development",
                "Career exploration",
                "Real-world project implementation",
                "Professional communication"
            ];
        case 6: // Trailblazers
            return [
                "Advanced research techniques",
                "College preparation skills",
                "Professional portfolio development",
                "Industry-standard tool mastery"
            ];
        case 7: // Scholars
            return [
                "Academic research methodology",
                "Industry collaboration skills",
                "Advanced technical specialization",
                "Professional networking"
            ];
        case 8: // Masterminds
            return [
                "Thought leadership development",
                "Innovation strategy",
                "Mentorship and coaching skills",
                "Industry disruption techniques"
            ];
        default:
            return [];
    }
}

function getProgramHighlights(categoryId: number): string[] {
    switch (categoryId) {
        case 1: // Wonderist
            return [
                "Interactive play-based learning",
                "Parent involvement activities",
                "Progress tracking dashboard",
                "Digital safety education"
            ];
        case 2: // Explorers
            return [
                "Hands-on experiments and projects",
                "Age-appropriate coding challenges",
                "Field trip opportunities",
                "Skill badges and rewards"
            ];
        case 3: // Innovators
            return [
                "Project showcase events",
                "Mentor matching program",
                "Competition preparation",
                "Portfolio development"
            ];
        case 4: // Vanguard
            return [
                "Leadership workshops",
                "Community service projects",
                "Advanced technology access",
                "College prep seminars"
            ];
        case 5: // Pioneers
            return [
                "Industry expert sessions",
                "Internship opportunities",
                "Career counseling",
                "Advanced certification paths"
            ];
        case 6: // Trailblazers
            return [
                "College application support",
                "Research paper publication guidance",
                "Professional networking events",
                "Scholarship assistance"
            ];
        case 7: // Scholars
            return [
                "Industry collaboration projects",
                "Conference presentation opportunities",
                "Publication support",
                "Professional certification"
            ];
        case 8: // Masterminds
            return [
                "Executive mentorship",
                "Innovation funding guidance",
                "Thought leadership platform",
                "Global network access"
            ];
        default:
            return [];
    }
}

export default CategoriesSection;