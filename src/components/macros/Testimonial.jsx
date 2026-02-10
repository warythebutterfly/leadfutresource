import React from 'react';
import CardStack from '../micros/CardStack';
import cn from '../../utils/cn';
import PrimBtn from '../micros/PrimBtn';
import { motion } from 'framer-motion';

export function Testimonial() {
  return (
    <>
      <section className='px-3 sm:px-24 py-9 sm:py-14 svg-bg bg-nude-50 testimonia testimonial'>

        <div className='max-h-[40rem] py-8 sm:py-20 bgnude-300 bg-opacity-30 flex flex-col items-center justify-center w-full gap-10 sm:gap-20 rounded-3xl sm:rounded-[em]'>

          <div className="flex justify-center space items-center flex-col gap-4">
            <div className="">
              <span className="relative rounded-full px-3 py-1 text-xs leading-6 text-nude-50 ring-1 ring-nude-50 uppercase">
                  Testimonial
              </span>
            </div>
            <motion.h1 
              initial={{ opacity: 0, y:100 }} 
              transition={{ duration: 0.5 }}
              whileInView={{ opacity: 1, y:0 }}
              viewport={{ once: true }}
              exit={{ opacity: 0, transition: { duration: 1 }, y: -100 }}
              className='text-2xl sm:text-4xl text-nude-50 max-w-md text-center'>What our customers are saying</motion.h1>
          </div>
    
          <div className="">
            <CardStack items={CARDS} />
          </div>

          <PrimBtn to={'/contactus'} title={'Get in touch'} />
          
        </div>

        
      </section>
    </>
  )
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({ children, className }) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "DISI BIBOYE",
    designation: "Student Researcher",
    content: (
      <p>
        Durum <Highlight>wheat waste glucose</Highlight> agar is a very good media...I used it for my final year project and the result was amazing...it supports the growth of <Highlight> microorganisms</Highlight> buoyantly. ..it forms a stable, and firm gel. 🙏
      </p>
    ),
  },
  {
    id: 1,
    name: "Fustina",
    designation: "Microbiologist",
    content: (
      <p>
        Durum <Highlight>wheat waste glucose</Highlight> agar is a solid medium that promotes the <Highlight>growth of molds and other fungi</Highlight> without having to wait for about 7 days to produce full growth. It is a medium I will recommend any microbiologist to try.
      </p>
    ),
  },
  {
    id: 2,
    name: "Oreoluwa",
    designation: "Lab scientist",
    content: (
      <p>
        Durum <Highlight>wheat waste dextrose</Highlight> agar is an alternative agar that can be used to grow both <Highlight>fungi and bacteria</Highlight>, I used it for my project and it gave me amazing result and also stress free of not having to wait 7days for full growth. It is also very affordable 
      </p>
    ),
  },
];
