import React, { useEffect } from 'react'
import Faq from '../components/macros/Faq'
import { motion } from 'framer-motion';
import SEO from '../Seo';
import PrimBtn from '../components/micros/PrimBtn';


const Contact = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

    return (
        <>
            <SEO
                title="Contact Us: Get in Touch with Leadfut Sales Team"
                description="Contact our sales team to learn more about our products like Fungigro, medicinal and edible mushrooms and briskets and our consultancy, and how it can revolutionize your fungal solutions. Whether you're interested in biosecurity, waste utilization, or sustainable practices, we're here to help."
                keywords="Contact Leadfut resources ltd, Fungigro, Biosecurity, Waste utilization, Sustainable practices, Fungal solutions"
            />

            <motion.div 
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, transition: { duration: 1 } }}
                variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
            >
                
                <div  
                    className='contact-bg h-[30em] sm:h-[40em] relative'>
                    <div className="absolute w-full h-full top-0 right-0 flex justify-center items-center bg-black bg-opacity-35">
                        <div className="flex flex-col items-center gap-4 sm:gap-6 max-w-xl text-center px-4 sm:px-0">
                            <span className="relative rounded-full px-3 py-1 text-xs leading-6 text-white ring-1 ring-white uppercase">
                                contact us
                            </span>
                            <motion.h1 
                                variants={{
                                    hidden: { opacity: 0, y: -20 },
                                    visible
                                }}
                                className="text-4xl sm:text-5xl lg:text-7xl text-white"
                            >
                                We're here <br /> to help
                            </motion.h1>

                            <motion.p 
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible
                                }}
                                className={'text-lg sm:text-2xl text-gray-200 font-medium'} 
                            >
                                We always enjoy meeting new people and tackling new challenges. Drop us a line below and let's talk.
                            </motion.p>

                            <a >

                            </a>

                            <a 
                                href="https://wa.me/2349061176894?text=Hi%20there,%20I'm%20interested%20in%20your%20products" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="px-4 py-2 backdrop-blur-sm border bg-black border-gray-600 text-nude-50 mx-auto text-center rounded-full relative mt-4">
                                <span>Send us a message →</span>
                                <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
                            </a>
                            
                        </div>
                    </div>
                </div>

                <div className="px-5 sm:px-20 bg-nude-50 pt-3">
                    <Faq />
                </div>

            </motion.div>
        </>
    )
}

export default Contact