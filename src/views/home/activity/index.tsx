"use client";

import SectionHeader from "@/components/common/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    ArrowRight,
    Globe,
    GraduationCap,
    Lightbulb,
    Mic,
    Sparkles,
    Trophy,
} from "lucide-react";
import { useEffect, useState } from "react";

const SimpleActivitiesSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const activities = [
        {
            id: 1,
            title: "NGSO",
            subtitle: "National Genius Search Olympiad",
            description: "Nationwide competition for young innovators",
            icon: <Trophy className="h-12 w-12" />,
            color: "bg-gradient-to-br from-teal-500 to-teal-600",
        },
        {
            id: 2,
            title: "Seminars",
            subtitle: "Educational Workshops",
            description: "Expert-led sessions on emerging topics",
            icon: <Mic className="h-12 w-12" />,
            color: "bg-gradient-to-br from-blue-500 to-blue-600",
        },
        {
            id: 3,
            title: "Institutional Campaign",
            subtitle: "School & College Programs",
            description: "Curriculum integration and teacher training",
            icon: <GraduationCap className="h-12 w-12" />,
            color: "bg-gradient-to-br from-green-500 to-green-600",
        },
        {
            id: 4,
            title: "IGSO",
            subtitle: "International Genius Search Olympiad",
            description: "Global platform for exceptional talents",
            icon: <Globe className="h-12 w-12" />,
            color: "bg-gradient-to-br from-purple-500 to-purple-600",
        },
        {
            id: 5,
            title: "Science Discussions",
            subtitle: "Research & Innovation Forums",
            description: "Scientific discourse and project showcases",
            icon: <Lightbulb className="h-12 w-12" />,
            color: "bg-gradient-to-br from-amber-500 to-amber-600",
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % activities.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const currentActivity = activities[currentIndex];

    return (
        <section className="py-16 md:py-20" id="about">
            <div className="container px-4 max-w-6xl mx-auto">

                <SectionHeader
                    heading="Our Activities"
                    title={<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-white">
                        Explore Our <span className="text-primary"> Activity </span>
                    </h2>}
                    description="5 specialized programs to nurture talent at every level"
                />

                {/* Auto-Changing Banner */}
                <div className="mb-12">
                    <div
                        className={`rounded-2xl p-8 md:p-12 text-white transition-all duration-500 ${currentActivity.color}`}
                    >
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="flex-1">
                                <Badge className="mb-4 bg-white/20 text-white border-0">
                                    <Sparkles className="mr-2 h-3 w-3" />
                                    Featured Activity
                                </Badge>

                                <h3 className="text-3xl md:text-4xl font-bold mb-2">
                                    {currentActivity.title}
                                </h3>
                                <p className="text-xl mb-4 text-white/90">
                                    {currentActivity.subtitle}
                                </p>
                                <p className="text-white/80 mb-6">
                                    {currentActivity.description}
                                </p>

                                <Button className="bg-white text-gray-900 hover:bg-white/90 gap-2">
                                    Learn More
                                    <ArrowRight className="h-4 w-4" />
                                </Button>
                            </div>

                            <div className="p-6 bg-white/20 rounded-2xl backdrop-blur-sm">
                                {currentActivity.icon}
                            </div>
                        </div>

                        {/* Dots Indicator */}
                        <div className="flex justify-center gap-2 mt-8">
                            {activities.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`h-2 rounded-full transition-all ${currentIndex === index
                                        ? "w-8 bg-white"
                                        : "w-2 bg-white/50 hover:bg-white/80"
                                        }`}
                                    aria-label={`Go to activity ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Activity Grid */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {activities.map((activity, index) => (
                        <div
                            key={activity.id}
                            className={`text-center p-4 rounded-lg cursor-pointer transition-all bg-white ${currentIndex === index
                                ? "ring-2 ring-primary scale-105"
                                : "hover:bg-gray-50"
                                }`}
                            onClick={() => setCurrentIndex(index)}
                        >
                            <div
                                className={`h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-3 text-white ${activity.color}`}
                            >
                                {activity.icon}
                            </div>
                            <h4 className="font-bold text-gray-900">{activity.title}</h4>
                            <p className="text-xs text-gray-500 mt-1">{activity.subtitle}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SimpleActivitiesSection;