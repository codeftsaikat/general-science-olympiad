import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, CalendarCheck, CalendarDays } from "lucide-react";
import { EventCategory } from "./types";

interface EventTabsProps {
    activeTab: 'ongoing' | 'past' | 'future';
    onTabChange: (value: string) => void;
    eventCategories: EventCategory[];
}

const EventTabs = ({ activeTab, onTabChange, eventCategories }: EventTabsProps) => {
    return (
        <Tabs defaultValue="ongoing" value={activeTab} onValueChange={onTabChange} className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-lg mx-auto">
                {eventCategories.map((category) => {
                    let Icon;
                    switch (category.id) {
                        case 'ongoing':
                            Icon = CalendarCheck;
                            break;
                        case 'past':
                            Icon = Calendar;
                            break;
                        case 'future':
                            Icon = CalendarDays;
                            break;
                        default:
                            Icon = Calendar;
                    }

                    return (
                        <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2 p-4 rounded-lg">
                            <Icon className="h-4 w-4" />
                            <span>{category.name.split(' ')[0]}</span>
                            <span className="ml-1 text-xs text-primary px-2 py-0.5 rounded-full">
                                {category.count}
                            </span>
                        </TabsTrigger>
                    );
                })}
            </TabsList>

            {/* Tab Contents */}
            <div className="mt-8">
                <TabsContent value="ongoing" className="mt-0">
                    <div className="mb-6 text-center">
                        <h3 className="text-2xl font-bold mb-2">Currently Running Events</h3>
                        <p className="text-muted-foreground">Active events you can participate in right now</p>
                    </div>
                </TabsContent>

                <TabsContent value="past" className="mt-0">
                    <div className="mb-6 text-center">
                        <h3 className="text-2xl font-bold mb-2">Completed Events</h3>
                        <p className="text-muted-foreground">Past events with photos, videos, and outcomes</p>
                    </div>
                </TabsContent>

                <TabsContent value="future" className="mt-0">
                    <div className="mb-6 text-center">
                        <h3 className="text-2xl font-bold mb-2">Upcoming Events</h3>
                        <p className="text-muted-foreground">Future events you can prepare for and register</p>
                    </div>
                </TabsContent>
            </div>
        </Tabs>
    );
};

export default EventTabs;