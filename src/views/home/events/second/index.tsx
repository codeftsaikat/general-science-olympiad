"use client";

import { useState } from "react";

import SectionHeader from "@/components/common/section-header";
import EventCard from "./event-card";
import EventStats from "./event-stats";
import EventTabs from "./event-tab";
import { eventCategories, eventsData } from "./events-data";

type ActiveTab = 'ongoing' | 'past' | 'future';

const EventsSection = () => {
    const [activeTab, setActiveTab] = useState<ActiveTab>("ongoing");

    const handleTabChange = (value: string) => {
        setActiveTab(value as ActiveTab);
    };

    return (
        <section
            id="second"
            className="py-16 md:py-24 text-black relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100"
        >
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent pointer-events-none" />

            <div className="container px-4 max-w-7xl mx-auto">
                {/* Section Header */}

                <SectionHeader
                    heading="Events & Activities"
                    title={<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                        Explore Our Science Events
                    </h2>}
                    description="From olympiads to discussions, discover opportunities to learn, compete, and grow with our science community"
                />

                {/* Event Tabs */}
                <div className="mb-10">
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
                    <EventStats />
                </div>
            </div>
        </section>
    );
};

export default EventsSection;