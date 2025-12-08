import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarPlus, MapPin, Trophy, Users } from "lucide-react";
import { EventStat } from "./types";

interface EventStatsProps {
    stats: EventStat[];
}

const EventStats = ({ stats }: EventStatsProps) => {
    const icons = [Trophy, Users, MapPin, CalendarPlus];

    return (
        <Card className="border-primary">
            <CardHeader>
                <CardTitle className="text-center">Event Statistics</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, index) => {
                        const Icon = icons[index];
                        return (
                            <div key={index} className="text-center">
                                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3">
                                    <Icon className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-muted-foreground font-medium">
                                    {stat.label}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </CardContent>
        </Card>
    );
};

export default EventStats;