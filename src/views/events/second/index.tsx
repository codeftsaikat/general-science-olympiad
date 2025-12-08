"use client";

import { Badge } from "@/components/ui/badge";
import { useState } from "react";

import EventCard from "./event-card";
import EventStats from "./event-stats";
import EventTabs from "./event-tab";
import { eventCategories, eventsData, eventStats } from "./events-data";

type ActiveTab = 'ongoing' | 'past' | 'future';

const EventsSection = () => {
    const [activeTab, setActiveTab] = useState<ActiveTab>("ongoing");

    const handleTabChange = (value: string) => {
        setActiveTab(value as ActiveTab);
    };

    return (
        <section className="py-16 md:py-24 bg-gray-50/50">
            <div className="container px-4 mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <div className="inline-flex items-center gap-2 mb-4">
                        <Badge variant="secondary" className="px-4 py-1.5 border border-primary">
                            Events & Activities
                        </Badge>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                        Explore Our <span className="text-primary">Science Events</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        From olympiads to discussions, discover opportunities to learn, compete, and grow with our science community
                    </p>
                </div>

                {/* Event Tabs */}
                <div className="-scroll-mb-10">
                    <EventTabs
                        activeTab={activeTab}
                        onTabChange={handleTabChange}
                        eventCategories={eventCategories}
                    />
                </div>


                {/* Events Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {eventsData[activeTab].map((event) => (
                        <EventCard
                            key={event.id}
                            event={event}
                            isFeatured={event.isFeatured}
                        />
                    ))}
                </div>

                {/* Event Statistics */}
                <div className="mb-12">
                    <EventStats stats={eventStats} />
                </div>
            </div>
        </section>
    );
};

export default EventsSection;