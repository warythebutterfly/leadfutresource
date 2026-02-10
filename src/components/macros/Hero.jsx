import React from 'react'
import PrimBtn from '../micros/PrimBtn'
import { motion } from 'framer-motion'

const Hero = () => {

    return (
        <>
            <motion.div initial="hidden"
                animate="visible"
                exit={{ opacity: 0, transition: { duration: 1 } }}
                variants={{ visible: { transition: { staggerChildren: 0.3 } } }} 
                className='grid lg:grid-cols-2 min-h-screen gap-8 sm:gap-3 sm:pl-10 hero bg-[#ebe5d0]'
            >
                <div className="flex justify-around flex-col items-center sm:items-start pt-24 sm:pt-32 lg:pt-0 px-5 sm:px-0 gap-3 sm:gap-5 lg:gap-3">
                    <motion.h1 
                        initial={{ opacity: 0, y:-50 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ ease: "easeIn", duration: 0.5 }}
                        className="text-2xl sm:text-4xl lg:text-5xl text-stone-700 text-start"
                    >
                        Accelerating Sustainability by Incentivizing <br /> 
                        <span className="text-nude-300">Eco-Friendly</span> Practices. 
                    </motion.h1>
                    <div className='space-y-8 sm:space-y-7 lg:space-y-4 text-start'>
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}  
                            className="sm:text-xl lg:text-3xl text-stone-600 font-light"
                        >   
                            From Fungigro's advanced bio solutions to our diverse range of mushrooms, we're driving eco-friendly practices.
                        </motion.div>
                        <div className="">
                            
                            <PrimBtn title={'Get in touch'} to={'/contactus'} />
                            
                        </div>
                    </div>
                </div>
                <div className="h-full w-full place-self-end lg:pt-20">
                    <motion.img 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        src="/images/hero.png" className='h-[45.7em] sm:w-[75%] sm:ml-auto sm:-mt-14 lg:-mt-0' alt="images showing different types of medicinal and edible mushrooms made by Leadfut resources ltd" />
                </div>
            </motion.div>
        </>
    )
}

export default Hero