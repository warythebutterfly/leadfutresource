import React, {useEffect} from 'react'
import BriqquetesSolutions from '../components/macros/BriqquettesSolutions'
import Action from '../components/micros/Action'
import SEO from '../Seo'

const Briqquettes = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // titles for slide-show text. Defining props from BriqquetteSolutions
    const titles = [
        "Environmental Friendly",
        "Accessible and Budget-Friendly",
        "Reliable Ignition and Steady Combustion",
        "Pure Sawdust and Rice Bran Composition",
        "Support for Sustainable Development Goals"
    ]

    // image for slide-show text. Defining props from BriqquetteSolutions
    const imageUrl = "/images/Briqqs-hero.JPG"

    return (
        <>
            <SEO
                title="Leadfut Briquettes - Sustainable Energy from Waste | Eco-Friendly Charcoal Alternatives"
                description="Discover Leadfut Briquettes, made from pure sawdust and rice bran. Our eco-friendly briquettes offer consistent burning efficiency, minimal ash production, and optimal thermal value. Transforming waste into energy, Leadfut Resources promotes sustainable living and community empowerment through renewable energy solutions."
                keywords="Leadfut Briquettes, Sustainable Energy, Eco-Friendly Charcoal, Biomass Energy, Renewable Energy Solutions, Waste to Energy, Sawdust Briquettes, Rice Bran Briquettes, Consistent Burning Efficiency, Minimal Ash Production, Optimal Thermal Value, Green Energy, Energy Equity, Clean Energy, Sustainable Living, Community Empowerment"
            />

            <section className='bg-black text-white'>
                <div class="pb-20 pt-20 lg:pt-28 px-5 lg:px-14">
                    <div class="grid sm:grid-cols-2 items-center gap-10 sm:gap-6">
                        <div class="flex flex-col w-full justify-center items-start sm:p-4 ">

                            <h1 class="text-3xl md:text-5xl text-nude-200">
                                Leadfut Briqquettes
                            </h1>

                            <h2 class="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-3">
                                Transforming Waste into Empowering Energy Solutions
                            </h2>

                            <p class=" text-gray-50 mb-4">
                                We offer briquettes made from pure sawdust and rice bran, rigorously tested for efficiency. They advocate for sustainable energy to combat energy issues in Nigeria.
                            </p>

                            <div className='mt-5'>
                                <a href="https://wa.me/2349061176894?text=Hi%20there,%20I'm%20interested%20in%20your%20products" target="_blank" rel="noopener noreferrer" className="px-4 py-2 backdrop-blur-sm border bg-secondary-300/10 border-secondary-500/20 text-white mx-auto text-center rounded-full relative mt-4 text-lg">
                                    <span>Contact sales</span>
                                    <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-secondary-500 to-transparent" />
                                </a>
                            </div>

                        </div>
                        <img class="rounded-2xl" src="/images/briqquettes-box.JPG" />
                    </div>
                </div>

                {/* using imported slide-show with defined props */}
                <BriqquetesSolutions titles={titles} imageUrl={imageUrl} />

                <div class="bg-black py-24 sm:py-32">
                    <div class="mx-auto max-w-7xl px-6 lg:px-8">
                        <div class="mx-auto max-w-2xl lg:text-center">
                            <span className="relative rounded-full px-3 py-1 text-xs leading-6 text-nude-300 ring-1 ring-nude-200 uppercase text-center" style={{ fontFamily: 'DM Sans' }}>
                                BURN SMARTER
                            </span>
                            <p class="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">Support the development of renewable, sustainable energy in Nigeria.</p>
                            <p class="mt-6 text-lg leading-8 text-gray-100">At Leadfut Resources, our briquettes are exclusively made from pure sawdust and rice bran. These materials undergo stringent testing to ensure consistent burning efficiency, minimal ash production, and optimal thermal caloric value, resulting in a top-tier end product. </p>
                        </div>
                        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                            <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                                <div class="relative pl-16">
                                    <dt class="text-base font-semibold leading-7 text-gray-100">
                                        <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-nude-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                                            </svg>
                                        </div>
                                        Environmental Friendly
                                    </dt>
                                    <dd class="mt-2 text-base leading-7 text-gray-100">By utilizing organic residues and promoting sustainable energy practices, Leadfut briquettes contribute to environmental conservation efforts. Users can enjoy the benefits of clean energy while minimizing their carbon footprint and supporting eco-friendly initiatives.</dd>
                                </div>
                                <div class="relative pl-16">
                                    <dt class="text-base font-semibold leading-7 text-gray-100">
                                        <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-nude-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                                            </svg>
                                        </div>
                                        Accessible and Budget-Friendly
                                    </dt>
                                    <dd class="mt-2 text-base leading-7 text-gray-100">Similar to fast food, Leadfut briquettes offer accessibility and affordability without compromising quality. They provide a convenient solution for individuals and families seeking reliable energy sources without breaking the bank.</dd>
                                </div>
                                <div class="relative pl-16">
                                    <dt class="text-base font-semibold leading-7 text-gray-100">
                                        <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-nude-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
                                            </svg>
                                        </div>
                                        Reliable Ignition and Steady Combustion
                                    </dt>
                                    <dd class="mt-2 text-base leading-7 text-gray-100">Leadfut briquettes are formulated with additives to improve ignition and ensure steady combustion. This feature enhances user experience by simplifying the lighting process and maintaining a consistent burn throughout the cooking or heating duration.</dd>
                                </div>
                                <div class="relative pl-16">
                                    <dt class="text-base font-semibold leading-7 text-gray-100">
                                        <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-nude-600">
                                            <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" />
                                            </svg>
                                        </div>
                                        Pure Sawdust and Rice Bran Composition
                                    </dt>
                                    <dd class="mt-2 text-base leading-7 text-gray-100"> Leadfut briquettes are made exclusively from pure sawdust and rice bran, ensuring a clean burn without any harmful additives or chemicals. This composition also contributes to minimal ash production, making cleanup hassle-free.</dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>

            </section>

            {/* Action component for contact and book meeting */}
            <div className="bg-gray-300 pt-12">
                <Action />
            </div>

        </>
    )
}

export default Briqquettes