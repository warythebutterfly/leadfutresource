import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Mission = () => {
  return (
    <>
        <section className="bg-nude-700 min-h-96 flex justify-center items-center text-center py-20 sm:py-40">
            <div className='max-w-xs sm:max-w-2xl lg:max-w-4xl space-y-8 sm:space-y-12 text-nude-50'>
                <span className="relative rounded-full px-3 py-1 text-xs leading-6 text-nude-100 ring-1 ring-stone-400">
                    OUR MISSION
                </span>
                

                <motion.div 
                    initial={{ opacity: 0, y: 100 }} 
                    transition={{ duration: 0.5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl sm:text-3xl lg:text-4xl"
                >  
                    we are committed to fostering a healthier planet through waste stream utilization and pioneering solutions. Empower health and sustainability through advanced fungal solutions and waste-to-nutrition innovations
                </motion.div>

                <Link to={'/about-leadfut'} className='inline-flex items-center gap-2 text-lg sm:text-2xl font-medium group hover:text-secondary-800 text-secondary-800 transition ease-in-out delay-150 hover:-translate-x-1 hover:scale-110 duration-300'>
                    Our story
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 sm:w-9 h-9 transition-transform duration-300 ease-in-out transform-gpu group-hover:scale-x-120 animate-pulse group-hover:animate-none">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                </Link>

            </div>
        </section>
    </>
  )
}

export default Mission