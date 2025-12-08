"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import {
    Calendar,
    ExternalLink,
    Facebook,
    Play,
    Video
} from "lucide-react";
import Image from "next/image";

const MediaCoverageSection = () => {
    const mediaCoverage = [
        {
            id: 1,
            title: "Somoy TV Coverage",
            channel: "Somoy TV",
            url: "https://youtu.be/CsGAVg0hDbk?si=BE1TH0byvAfL1xjS",
            type: "video" as const,
            date: "2024",
            views: "50K+ views",
        },
        {
            id: 2,
            title: "Independent TV Feature",
            channel: "Independent TV",
            url: "https://youtu.be/2dMm67pg8ew?si=KSoMaBrEKEAasoxW",
            type: "video" as const,
            date: "2024",
            views: "35K+ views",
        },
        {
            id: 3,
            title: "Ekhon TV Interview",
            channel: "Ekhon TV",
            url: "https://www.facebook.com/share/r/17ZF5ppxxj/",
            type: "social" as const,
            date: "2024",
            views: "25K+ reach",
        },
        {
            id: 4,
            title: "Sorejomin Barta Feature",
            channel: "Sorejomin Barta",
            url: "https://www.facebook.com/share/v/1Bvg4Yiim1/",
            type: "social" as const,
            date: "2024",
            views: "20K+ reach",
        },
    ];

    const handleMediaClick = (url: string) => {
        window.open(url, "_blank", "noopener,noreferrer");
    };

    const getYouTubeThumbnail = (url: string) => {
        try {
            const videoId = url.match(
                /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/))([\w-]+)/
            )?.[1];
            return videoId
                ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
                : null;
        } catch {
            return null;
        }
    };

    return (
        <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="container px-4 md:px-6 max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <Badge
                        variant="outline"
                        className="mb-4 px-4 py-1.5 border-primary"
                    >
                        Media Coverage
                    </Badge>

                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                        Featured in{" "}
                        <span className="text-primary">
                            National Media
                        </span>
                    </h2>

                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Watch our coverage on leading television channels
                    </p>
                </div>

                {/* Simple Carousel */}
                <div className="mb-12 px-4">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent>
                            {mediaCoverage.map((item) => {
                                const thumbnail = getYouTubeThumbnail(item.url);
                                return (
                                    <CarouselItem
                                        key={item.id}
                                        className="md:basis-1/2 lg:basis-1/3"
                                    >
                                        <Card
                                            className="cursor-pointer hover:shadow-xl transition-all duration-300 border-2 hover:border-primary mx-2"
                                            onClick={() => handleMediaClick(item.url)}
                                        >
                                            <CardContent className="p-0">
                                                {/* Thumbnail */}
                                                <div className="relative aspect-video overflow-hidden bg-gray-100 rounded-md">
                                                    {thumbnail ? (
                                                        <Image
                                                            src={thumbnail}
                                                            alt={`${item.title} thumbnail`}
                                                            fill
                                                            className="object-cover hover:scale-105 transition-transform duration-500"
                                                        />
                                                    ) : (
                                                        <div className="absolute inset-0 flex items-center justify-center">
                                                            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                                                                <Play className="h-8 w-8 text-primary" />
                                                            </div>
                                                        </div>
                                                    )}

                                                    {/* Play Button Overlay */}
                                                    <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                                                        <div className="h-12 w-12 rounded-full bg-white/90 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                                                            <Play className="h-6 w-6 text-primary" />
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Content */}
                                                <div className="p-4">
                                                    <div className="flex items-center justify-between mb-2">
                                                        <Badge
                                                            variant="outline"
                                                            className={
                                                                item.type === "video"
                                                                    ? "bg-red-500/10 text-red-600 border-red-200"
                                                                    : "bg-indigo-500/10 text-indigo-600 border-indigo-200"
                                                            }
                                                        >
                                                            {item.type === "video" ? (
                                                                <Video className="h-3 w-3 mr-1" />
                                                            ) : (
                                                                <Facebook className="h-3 w-3 mr-1" />
                                                            )}
                                                            {item.type === "video" ? "Video" : "Social"}
                                                        </Badge>
                                                        <ExternalLink className="h-4 w-4 text-gray-400" />
                                                    </div>

                                                    <h3 className="font-bold text-gray-900 text-sm md:text-base mb-2 line-clamp-2">
                                                        {item.title}
                                                    </h3>

                                                    <div className="flex items-center justify-between text-xs text-gray-500">
                                                        <div className="flex items-center gap-4">
                                                            <span className="font-medium">{item.channel}</span>
                                                            {item.date && (
                                                                <span className="flex items-center gap-1">
                                                                    <Calendar className="h-3 w-3" />
                                                                    {item.date}
                                                                </span>
                                                            )}
                                                        </div>
                                                        {item.views && <span>{item.views}</span>}
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </CarouselItem>
                                );
                            })}
                        </CarouselContent>

                        {/* Navigation */}
                        <div className="flex justify-center gap-4 mt-8">
                            <CarouselPrevious className="static translate-y-0" />
                            <CarouselNext className="static translate-y-0" />
                        </div>
                    </Carousel>
                </div>

                {/* Simple Video List */}
                {/* <div className="mb-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {mediaCoverage.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center gap-4 p-4 rounded-lg border hover:border-primary/30 hover:bg-gray-50 cursor-pointer transition-all"
                                onClick={() => handleMediaClick(item.url)}
                            >
                                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                                    {item.type === "video" ? (
                                        <Play className="h-5 w-5 text-primary" />
                                    ) : (
                                        <Facebook className="h-5 w-5 text-primary" />
                                    )}
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-medium text-gray-900">{item.title}</h4>
                                    <p className="text-sm text-gray-500">{item.channel}</p>
                                </div>
                                <ExternalLink className="h-4 w-4 text-gray-400" />
                            </div>
                        ))}
                    </div>
                </div> */}

                {/* CTA */}
                {/* <div className="text-center">
                    <Button className="gap-2">
                        <Sparkles className="h-4 w-4" />
                        View All Media Coverage
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div> */}
            </div>
        </section>
    );
};

export default MediaCoverageSection;