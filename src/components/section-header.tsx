import React from "react"

type Props = {
    heading: string
    title: React.ReactNode | string
    description: string
}

const SectionHeader = (props: Props) => {
    return (
        <div className="text-center mb-12 md:mb-20">

            <div className="inline-flex items-center gap-2 mb-4">
                <div className="px-4 py-2 text-sm font-semibold rounded-full border border-primary/90 text-white">
                    {props.heading}
                </div>
            </div>
            {typeof props.title === "string" ? <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
                {props.title}
            </h2>
                : props.title
            }

            <p className="text-lg text-white/50 max-w-3xl mx-auto">
                {props.description}
            </p>
        </div>
    )
}

export default SectionHeader