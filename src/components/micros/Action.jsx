import React from 'react'
import { motion } from 'framer-motion'
import PrimBtn from './PrimBtn'
import handleBookMeetingClick from '../../utils/BookCalendly'

const Action = () => {
  return (
    <>
        {/* cta */}
        <div className="flex flex-col gap-5 justify-center items-center max-w-xl mx-auto pt-5 pb-24">
            <span className="relative rounded-full px-3 py-1 text-xs leading-6 text-accent-900 ring-1 ring-accent-900 uppercase text-center" style={{ fontFamily: 'DM Sans' }}>
                REACH OUT
            </span>
            <h1 className="text-2xl sm:text-4xl text-center">Get in touch with us today.</h1>
            <div className="inline-flex gap-4 items-center">
                <motion.div 
                    initial={{ opacity: 0, x: -100 }} 
                    transition={{ type: 'spring', duration: 0.3, delay: 0.5 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <PrimBtn to={'/contactus'} title={'Contact us'} />
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, x: -100 }} 
                    transition={{ type: 'spring', duration: 0.3 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <PrimBtn title={'Book a meeting'} onClick={handleBookMeetingClick} />
                </motion.div>
            </div>
        </div>
    </>
  )
}

export default Action