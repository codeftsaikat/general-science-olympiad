
import SectionHeader from "@/components/common/section-header"
import hikmah from "../../../assets/partners/hikmah.jpg"
import imperial from "../../../assets/partners/imperial.png"
import kidlon from "../../../assets/partners/kidlon.png"
import panjeree from "../../../assets/partners/panjeree.png"
import pentagon from "../../../assets/partners/pentagon.png"
import ygf from "../../../assets/partners/ygf.jpg"



const partners = [
    {
        name: "Kidlon",
        logo: kidlon,
        url: "https://kidloncare.com/",
    },
    {
        name: "Pentagon International",
        logo: pentagon,
        url: "https://pentagonint.com/",
    },
    {
        name: "YGF Digital",
        logo: ygf,
        url: "https://ygfdigitalbd.com/",
    },
    {
        name: "Imperial International School",
        logo: imperial,
        url: "https://www.iisc-bd.com/",
    },
    {
        name: "Panjeree Publications",
        logo: panjeree,
        url: "https://www.panjeree.com/",
    },
    {
        name: "Hikmah Al Falah",
        logo: hikmah,
        url: "https://www.facebook.com/hikmatulfalahh",
    },
]

export default function PartnersSection() {
    return (
        <section className="py-20 bg-background">
            <SectionHeader
                heading="Partners & Sponsors"
                title={<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-black">
                    Trusted By Leading Organizations
                </h2>}
                description="Collaborating with industry leaders to create exceptional educational experiences"
            />
            <div className="container mx-auto px-6 max-w-5xl">

                <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
                    {partners.map((partner) => (
                        <a
                            key={partner.name}
                            href={partner.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-center opacity-100 transition-opacity duration-300"
                        >
                            {partner.logo ? (
                                <img
                                    src={partner.logo || "/placeholder.svg"}
                                    alt={partner.name}
                                    width={120}
                                    height={40}
                                    className="h-20 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                                />
                            ) : (
                                <span className="text-lg font-semibold tracking-tight text-foreground">{partner.name}</span>
                            )}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}
