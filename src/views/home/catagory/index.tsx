import SectionHeader from "@/components/common/section-header";
import ExpandableCardDemo from "./category"; // Use local component

const CategoriesSection = () => {
    return (
        <section id="categories-section" className="py-16 md:py-24 text-black relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100"
        >
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent pointer-events-none" />

            <div className="container px-4 max-w-7xl mx-auto">
                {/* Header Section */}
                <SectionHeader
                    heading="Learning Pathways"
                    title={<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-black">
                        Specially Designed{" "}
                        Categories
                    </h2>
                    }
                    description=" 8 tailored learning pathways designed to nurture talent at every stage of development,
                        from early childhood to professional mastery."
                />

                <ExpandableCardDemo />
            </div>
        </section>
    );
};

export default CategoriesSection;