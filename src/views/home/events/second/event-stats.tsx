

const EventStats = () => {

    return (

        <div className="mb-16 md:mb-24 w-full">
            <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center mb-2">
                    <h3 className="text-2xl font-bold text-black">Event Statistics
                    </h3>
                </div>
                <p className="text-foreground max-w-2xl mx-auto">
                    Real numbers showing event statistics
                </p>
            </div>

            {/* Stats Grid */}
            <div className="flex justify-center items-center">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {[

                        { label: "Total Events", value: "15+" },
                        { label: "Total Participants", value: "50K+" },
                        { label: "Districts Covered", value: "12+" },
                        { label: "Upcoming Events", value: "8+" },
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

                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default EventStats;