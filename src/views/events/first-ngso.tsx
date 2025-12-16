"use client";

import { Badge } from '@/components/ui/badge';
import { useEffect, useRef, useState } from 'react';

const MissionVisionImpact = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className="py-16 md:py-24" id='first'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-20">

                    <div className="inline-flex items-center gap-2 mb-4">
                        <Badge variant="secondary" className="px-4 py-1.5 border border-primary">
                            Our Purpose & Impact
                        </Badge>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                        Shaping Future <span className="text-primary">Thinkers</span> & <span className="text-primary">Changemakers</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Through innovative education and practical learning, we're building a community of problem-solvers ready to tackle real-world challenges
                    </p>
                </div>

                {/* Vision & Mission Cards */}
                <div className="grid lg:grid-cols-2 gap-8 mb-16 md:mb-24">
                    {/* Vision Card */}
                    <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="relative h-full bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/70 rounded-t-xl"></div>

                            <div className="p-8">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-5">
                                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                                </div>

                                <div className="pl-1 border-l-[3px] border-primary ml-2">
                                    <p className="text-lg text-gray-700 leading-relaxed italic">
                                        "Empowering young minds to think logically, create fearlessly and build a truth-driven world."
                                    </p>
                                </div>

                                <div className="mt-8 pt-6 border-t border-gray-100">
                                    <div className="flex items-center text-gray-600">
                                        <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-sm font-medium">Future-focused approach</span>
                                    </div>
                                    <div className="flex items-center text-gray-600 mt-3">
                                        <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-sm font-medium">Truth-driven innovation</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mission Card */}
                    <div className={`transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="relative h-full bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/80 to-primary/40 rounded-t-xl"></div>

                            <div className="p-8">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-5">
                                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                                </div>

                                <div className="pl-2 border-l-[3px] border-primary ml-2">
                                    <p className="text-lg text-gray-700 leading-relaxed italic">
                                        "Creating a learning ecosystem where Wisdom becomes Power, logic becomes strength and every learner becomes Changemaker."
                                    </p>
                                </div>

                                <div className="mt-8 pt-6 border-t border-gray-100">
                                    <div className="flex items-center text-gray-600">
                                        <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-sm font-medium">Practical learning ecosystems</span>
                                    </div>
                                    <div className="flex items-center text-gray-600 mt-3">
                                        <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-sm font-medium">Changemaker development</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Impact Section */}
                <div className="mb-16 md:mb-24">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center justify-center mb-4">
                            <div className="w-8 h-px bg-primary mr-3"></div>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Impacts Made</h3>
                            <div className="w-8 h-px bg-primary ml-3"></div>
                        </div>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Real numbers showing our global reach and community impact
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
                        {[
                            { value: "10,000+", label: "Participants", sub: "Across The World" },
                            { value: "80+", label: "Countries", sub: "Global Reach" },
                            { value: "1,000+", label: "Institutions", sub: "Connected" },
                            { value: "1M+", label: "People Reached", sub: "Total Impact" },
                            { value: "200+", label: "Partners", sub: "Collaborations" },
                            { value: "700+", label: "Representatives", sub: "Community Leaders" }
                        ].map((stat, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-200 rounded-lg p-5 text-center transition-all duration-300 hover:border-primary hover:shadow-sm group"
                            >
                                <div className="text-2xl md:text-3xl font-bold text-primary mb-2 group-hover:scale-105 transition-transform duration-300">
                                    {stat.value}
                                </div>
                                <div className="font-semibold text-gray-900 mb-1">
                                    {stat.label}
                                </div>
                                <div className="text-xs text-gray-500 uppercase tracking-wide">
                                    {stat.sub}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default MissionVisionImpact;