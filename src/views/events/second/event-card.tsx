import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, ExternalLink, MapPin, Users } from "lucide-react";
import { EventData } from "./types";

interface EventCardProps {
    event: EventData;
    isFeatured?: boolean;
}

const EventCard = ({ event, isFeatured = false }: EventCardProps) => {
    const handleExternalLink = (url: string) => {
        if (url && url.startsWith('http')) {
            window.open(url, '_blank', 'noopener,noreferrer');
        }
    };

    const getStatusColor = (status: EventData['status']): string => {
        switch (status) {
            case 'ongoing': return 'bg-green-100 text-green-800 border-green-200';
            case 'upcoming': return 'bg-blue-100 text-blue-800 border-blue-200';
            case 'completed': return 'bg-gray-100 text-gray-800 border-gray-200';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const getStatusIcon = (status: EventData['status']): string => {
        switch (status) {
            case 'ongoing': return '⏳';
            case 'upcoming': return '📅';
            case 'completed': return '✅';
            default: return '📌';
        }
    };

    return (
        <Card className={`overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-lg ${isFeatured ? 'lg:col-span-2' : ''}`}>
            {/* Card Header with Status */}
            <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-2">
                    <div className="space-y-1">
                        <div className="flex items-center gap-2">
                            <Badge variant="outline" className={getStatusColor(event.status)}>
                                {getStatusIcon(event.status)} {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                            </Badge>
                            <Badge variant="secondary" className="text-primary border-primary">
                                {event.category}
                            </Badge>
                        </div>
                        <CardTitle className="text-xl line-clamp-2">{event.title}</CardTitle>
                        <CardDescription className="text-base">{event.shortTitle}</CardDescription>
                    </div>
                </div>
            </CardHeader>

            {/* Card Content */}
            <CardContent className="pb-4">
                {/* Event Details */}
                <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2 text-primary" />
                        <span>{event.date}</span>
                    </div>

                    <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-2 text-primary" />
                        <span>{event.location}</span>
                    </div>

                    <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="h-4 w-4 mr-2 text-primary" />
                        <span>{event.participants} participants</span>
                    </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    {event.description}
                </p>

            </CardContent>

            {/* Card Footer with Actions */}
            <CardFooter className="pt-4 border-t">
                <div className="flex flex-col sm:flex-row gap-3 w-full">
                    <Button
                        onClick={() => handleExternalLink(event.buttonLink)}
                        className={`flex-1 ${event.status === 'upcoming' || event.status === 'ongoing' ? '' : 'bg-secondary hover:bg-secondary/90'}`}
                        variant={event.status === 'upcoming' || event.status === 'ongoing' ? 'default' : 'secondary'}
                    >
                        {event.buttonText}
                    </Button>

                    {(event.galleryLink || event.videoLink) && (
                        <Button
                            onClick={() => handleExternalLink(event.galleryLink || event.videoLink || '#')}
                            variant="outline"
                            size="sm"
                            className="border-primary text-primary hover:bg-primary/5"
                        >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            {event.galleryLink ? 'Gallery' : 'Watch'}
                        </Button>
                    )}
                </div>
            </CardFooter>
        </Card>
    );
};

export default EventCard;