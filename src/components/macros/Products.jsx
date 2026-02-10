import React from 'react'
import PrimBtn from '../micros/PrimBtn'
import { motion } from 'framer-motion'

const Products = () => {

    // function that handles session booking
    function handleBookMeetingClick(event) {
        event.preventDefault(); // Prevent default behavior of the link
        Calendly.initPopupWidget({url: 'https://calendly.com/dah4mulah/30min?background_color=e5e1d8&primary_color=2fb34c'});
    }

    return (
        <>
            <section className='min-h-[50em] product py-8 px-3 sm:px-12 sm:py-16 space-y-16'>
                <div className="flex justify-center space items-center flex-col gap-4">
                    <img src="/images/logo.png" className='h-16 sm:h-24' alt="leadfut logo" />
                    <h1 className='text-2xl sm:text-4xl text-nude-900 max-w-md sm:max-w-lg text-center'>
                        Transforming waste into sustenance and high-value commodities
                    </h1>
                    <div className="inline-flex items-center gap-4">
                        <span className="relative rounded-full px-3 py-1 text-xs leading-6 text-stone-900 ring-1 ring-stone-900 uppercase">
                            product
                        </span>
                        <span className="relative rounded-full px-3 py-1 text-xs leading-6 text-stone-900 ring-1 ring-stone-900 uppercase">
                            services
                        </span>
                    </div>
                </div>
                
                <div className="text-gray-900 body-font">
                    <div className="flex lg:flex-row flex-col-reverse items-center gap-6 lg:gap-0">
                        <div className="lg:flex-grow lg:w-1/2 lg:pr-24 md:pr-16 flex flex-col items-start md:text-left md:mb-0 lg:gap-2">
                            <motion.h2 
                                initial={{ opacity: 0 }} 
                                transition={{ duration: 1 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="title-font sm:text-6xl text-4xl mb-4 font-medium text-nude-900 ">Pioneering <br /> waste-to-nutrition <br /> innovations.
                            </motion.h2>
                            
                            <motion.p 
                                initial={{ opacity: 0, y: 100 }} 
                                transition={{ duration: 1 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mb-8 leading-relaxed sm:text-xl font-light">
                                Addressing disposal issues with Fungigro and mushrooms from plant by-products like wheat bran and industrial waste such as sawdust bringing down methane emission and contributing to climate change mitigation
                            </motion.p>

                            <div className="flex justify-center">
                                <PrimBtn title={'Discover how'} to={'/products/fungigro'} />
                            </div>
                        </div>

                        <div className="lg:max-w-2xl lg:w-full">
                            <motion.img 
                                initial={{ opacity: 0, x: 100 }} 
                                transition={{ duration: 0.5 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="object-cover object-center rounded-2xl" alt="hero" src="/images/waste-ii.jpg" />
                        </div>
                    </div>
                </div>

                <div className="text-gray-900 body-font">
                    <div className="flex lg:flex-row flex-col-reverse items-center gap-6 lg:gap-0">

                        <div className="lg:flex-grow lg:w-1/2 lg:pr-24 md:pr-16 flex flex-col items-start text-left md:mb-0 lg:gap-2">
                            <motion.h2 
                                initial={{ opacity: 0 }} 
                                transition={{ duration: 1 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }} 
                                className="title-font sm:text-6xl text-4xl mb-4 font-medium text-nude-900">Edible & medicinal mushrooms.
                            </motion.h2>
                            <motion.p 
                                initial={{ opacity: 0, y: 100 }} 
                                transition={{ duration: 1 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }} 
                                className="mb-8 leading-relaxed sm:text-xl font-light">
                                The global mushroom market is becoming more competitive due to rising demand in the food and beverage sector. This drives our focus on mushroom development and sales.
                            </motion.p>
                            <div className="flex justify-center">
                                {/* <button className="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-black rounded text-lg">
                                    Discover how
                                </button> */}
                                <PrimBtn title={'Discover how'} to={'/products/mushroom'} />
                            </div>
                        </div>

                        <div className="lg:max-w-2xl lg:w-full">
                            <motion.img 
                                initial={{ opacity: 0, y: -100 }} 
                                transition={{ duration: 0.5 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }} 
                                className="object-cover object-center rounded-2xl" alt="hero" src="/images/mushrrom-product.png" />
                        </div>
                        
                    </div>
                </div>

                <div className="text-gray-900 body-font">
                    <div className="flex lg:flex-row flex-col-reverse items-center gap-6 lg:gap-0">
                        <div className="lg:flex-grow lg:w-1/2 lg:pr-24 md:pr-16 flex flex-col items-start md:text-left md:mb-0 lg:gap-2">
                            <motion.h2 
                                initial={{ opacity: 0 }} 
                                transition={{ duration: 1 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="title-font sm:text-6xl text-4xl mb-4 font-medium text-nude-900 ">Pioneering <br /> waste-to-energy <br /> innovations.
                            </motion.h2>
                            
                            <motion.p 
                                initial={{ opacity: 0, y: 100 }} 
                                transition={{ duration: 1 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mb-8 leading-relaxed sm:text-xl font-light">
                                    Briquettes are akin to the fast food version of charcoal—accessible, reliable, and budget-friendly, yet their composition might not be the most appealing. Unlike pure lump charcoal, which is formed solely from wood, briquettes are crafted from compressed wood by-products and other organic residues.
                            </motion.p>

                            <div className="flex justify-center">
                                <PrimBtn title={'Discover how'} to={'/products/biomass'} />
                            </div>
                        </div>

                        <div className="lg:max-w-2xl lg:w-full">
                            <motion.img 
                                initial={{ opacity: 0, x: 100 }} 
                                transition={{ duration: 0.5 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="object-cover object-center rounded-2xl w-full h-[28em]" alt="hero" src="/images/biomas.JPG" />
                        </div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, x: -100 }} 
                        transition={{ duration: 0.8, }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }} 
                        className="bg-stone-800 rounded-3xl h-80 sm:h-96 lg:h-[30em] min-w-3xl max-w-3xl flex justify-center items-center px-4 sm:px-8 lg:px-20"
                    >
                        <div className="text-center space-y-8">
                            
                            <span className="relative rounded-full px-3 py-1 text-xs leading-6 text-stone-200 ring-1 ring-stone-300 uppercase">
                                expert consultancy
                            </span>

                            <div className="text-md sm:text-3xl text-white">
                                We offer trainings on farming edible mushroom, briquette production, and  developing mushroom farms. <br /> <br />
                                <span className="text-sm font-light sm:text-xl">
                                    Book a meeting today, Let's explore potential collaborations and opportunities together.
                                </span>
                            </div>
                            
                            <button onClick={handleBookMeetingClick} className="bg-black shadow-lg rounded-3xl text-md font-medium px-3.5 py-2 text-stone-200 ring-1 ring-stone-600">
                                Book a meeting
                            </button>

                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default Products