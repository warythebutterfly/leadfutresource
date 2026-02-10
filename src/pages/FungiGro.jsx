import React, { useEffect } from 'react'
import PrimBtn from '../components/micros/PrimBtn'
import ProductFeatures from '../components/macros/ProductFeatures'
import { motion } from 'framer-motion'
import SEO from '../Seo'
import Action from '../components/micros/Action'

const FungiGro = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

    return (
        <>
            
            <SEO
                title="Fungigro: Revolutionizing Fungal Solutions for a Healthier Planet"
                description="Fungigro transforms waste streams like wheat bran and sawdust into valuable resources for fungi growth. Affordable and effective, it enables biosecurity measures and promotes health and sustainability."
                keywords="Fungigro, Fungal solutions, Waste stream utilization, Wheat bran, Sawdust, Fungi growth, Affordable fungi solution, Pathogen detection, Pathogen isolation, Plant by-products, Environmental health, Sustainable practices"
            />

            <motion.div
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, transition: { duration: 1 } }}
                variants={{ visible: { transition: { staggerChildren: 0.3 } } }} 
                className='bg-primary-50/30 overflow-x-hidden'
            >

                <div 
                    className='bg-green-950 flex flex-col items-start gap-16 sm:gap-48 sm:min-h-[33em] pt-28 sm:pt-32 pb-5 px-4 sm:px-10'
                >
                    
                    <span className="relative rounded-full px-3 py-1 text-xs leading-6 text-primary-100 ring-1 ring-primary-100 uppercase text-center">
                        FungiGro
                    </span>
                    <motion.h1
                        variants={{
                            hidden: { opacity: 0, y: -20 },
                            visible
                        }}
                        exit={{ opacity: 0, y: 20}}
                        className="text-3xl sm:text-6xl tracking-wide text-primary-100 smmax-w-6xl"
                    >
                       Driving sustainability through <br /> waste-to-advanced fungi solutions
                    </motion.h1>
                    
                </div>
                
                <section className='min-h-screen mt-10 sm:mt-24'>
                    <div className="text-center">
                        <span className="relative rounded-full px-3 py-1 text-xs leading-6 text-green-950 ring-1 ring-green-900 uppercase text-center" style={{ fontFamily: 'DM Sans' }}>
                            PRODUCT
                        </span>
                    </div>

                    <div className="sm:px-10 py-8">
                        <div className="grid lg:grid-cols-2 gap-10 items-center">
                            <motion.img  
                                initial={{ opacity: 0, x: -100 }} 
                                transition={{ duration: 0.5 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                exit={{ opacity: 0, transition: { duration: 1 }, x: -100 }}
                                src="/images/fungigro-product.png" 
                                className='place-self-end lg:w-[30em] lg:h-[40em] px-2 sm:px-0 rounded-3xl' 
                                alt="Picture showcasing Fungigro, a product by leadfut resources. Made from waste streams like wheat bran and sawdust. Packaged in beautiful light green packaging" 
                            />

                            <motion.div 
                                initial={{ opacity: 0, x: 100 }} 
                                transition={{ duration: 0.5 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                exit={{ opacity: 0, transition: { duration: 1 }, x: 100 }} 
                                className="flex flex-col items-start sm:items-center lg:items-start gap-5 lg:max-w-xl"
                            >
                                <h1 className="text-3xl sm:text-4xl text-stone-700 px-5 sm:px-0 sm:text-center lg:text-start">FUNGIGRO. <br /> A product by Leadfut</h1>
                                <div className="inline-flex items-center gap-6 px-5 sm:px-0">
                                    <p className="text-lg font-medium">Price NGN2,300</p>
                                    <PrimBtn title={'Contact sales'} to={"https://wa.me/2349061176894?text=Hi%20there,%20I'm%20interested%20in%20your%20products"} />
                                </div>
                                <p className="font-light px-5 sm:px-0">
                                    We are revolutionizing fungal solutions for a healthier planet. Our innovative approach harnesses waste streams like wheat bran and sawdust, turning them into valuable resources for fungi growth. With Fungigro, we empower health and sustainability while addressing major disposal problems faced by industries.
                                </p>
                                <div className="px-3 sm:px-0 w-full">
                                    <ProductFeatures />
                                </div>
                            </motion.div>

                        </div>
                    </div>

                    <div className="sm:px-10 py-8 sm:py-16">
                        <div className="grid lg:grid-cols-2 gap-10 lg:gap-0 items-center">
                            <motion.div 
                                initial={{ opacity: 0, x: -100 }} 
                                transition={{ duration: 0.5 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                exit={{ opacity: 0, transition: { duration: 1 }, x: -100 }} 
                                className="flex flex-col items-start sm:items-center lg:items-start gap-5 lg:max-w-xl lg:ml-10"
                            >
                                <h1 className="text-3xl sm:text-4xl text-stone-700 px-5 sm:px-0 sm:text-center lg:text-start">Convenient Pre-Poured Agar Plates:</h1>
                                <div className="inline-flex items-center gap-6 px-5 sm:px-0">
                                    <p className="text-lg font-medium">Price NGN2,300</p>
                                    <PrimBtn title={'Contact sales'} to={"https://wa.me/2349061176894?text=Hi%20there,%20I'm%20interested%20in%20your%20products"} />
                                </div>
                                <p className="font-light px-5 sm:px-0">
                                    Skip the hassle of pouring your own plates—we've got you covered with pre-filled plates containing Durum Wheat waste glucose agar (DWWGA). Each plate comes with a generous layer of agar, ideal for fostering fungus growth! Just introduce your samples onto the surface and let nature take its course. Our pre-poured petri dishes streamline the experimental process, making research and student projects more accessible and efficient.
                                </p>
                                
                            </motion.div>
                            <div className="lg:w-[35em] lg:h-[35em]">
                                <motion.img  
                                    initial={{ opacity: 0, x: 100 }} 
                                    transition={{ duration: 0.5 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    exit={{ opacity: 0, transition: { duration: 1 }, x: 100 }} 
                                    src="/images/agar.jpg" 
                                    alt="Pre-poured Agar medium plates" 
                                    className='w-full h-full sm:rounded-2xl'
                                />
                            </div>
                        </div>
                    </div>


                    <div className="sm:text-center max-w-2xl mx-auto pb-10 px-4 sm:px-0">
                        <blockquote className="text-md sm:text-xl font-medium text-gray-600 my-8">
                            “In my over three decades as an educator and researcher, I have witnessed students struggling under financial strain of acquiring the traditional fungi growth medium and this predicament extends to scientists who use such products for their work. So we developed fungigro. Fungigro is an affordable bio substance for detection, isolation and cultivation of fungi from plant, animal, food and humans to ensure safety and health."
                        </blockquote>
                        <span className="text-end text-sm mt-5">
                            Dr Nwanneka Lauretta Ofodile,<br /> CEO Leadfut resouces Ltd
                        </span>
                    </div>
                    
                </section>

                <section className='px-3 lg:px-10 pt-14 pb-20'>
                    <h1 className="text-4xl sm:text-6xl pb-12 sm:pb-16 text-green-950">Product features.</h1>
                    <div className="grid sm:grid-cols-3 gap-5 sm:gap-3 lg:gap-5">
                        <div className="bg-stone-700/15 h-72 sm:h-80 lg:h-96 rounded-xl p-6 sm:p-3 lg:p-6">
                            <div className="flex flex-col justify-between items-start h-full">
                                <div>
                                    <p className="text-lg text-green-900">Cost structure</p>
                                    <h2 className="text-3xl lg:text-4xl">Affordability</h2>
                                </div>
                                <div className='text-xl'>
                                    Fungigro is affordable to all customers. Our pricing structure makes Fungigro accessible to a wide range of industries and applications.
                                </div>
                            </div>
                        </div>
                        <div className="bg-stone-700/15 h-72 sm:h-80 lg:h-96 rounded-xl p-6 sm:p-3 lg:p-6">
                            <div className="flex flex-col justify-between items-start h-full">
                                <div>
                                    <p className="text-lg text-green-900">Fast paced</p>
                                    <h2 className="text-3xl lg:text-4xl">Rapid growth</h2>
                                </div>
                                <div className='text-xl'>
                                    Speed up fungal growth for multiple uses, like mushroom farming and pollution cleanup. Improve efficiency in research, agriculture, and industry.
                                </div>
                            </div>
                        </div>
                        <div className="bg-stone-700/15 h-72 sm:h-80 lg:h-96 rounded-xl p-6 sm:p-3 lg:p-6">
                            <div className="flex flex-col justify-between items-start h-full">
                                <div>
                                    <p className="text-lg text-green-900">Health</p>
                                    <h2 className="text-3xl lg:text-4xl">Sustainability</h2>
                                </div>
                                <div className='text-xl'>
                                    Boost environmental health with local resources. Ensure food safety by detecting contaminants reliably. Support sustainability by reducing reliance on traditional methods.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Action />

            </motion.div>
        </>
    )
}

export default FungiGro