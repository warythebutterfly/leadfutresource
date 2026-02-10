import React from 'react'
import { Disclosure, Transition } from '@headlessui/react'
import { motion } from 'framer-motion'

const DisclosureIndicator = ({open}) => {
    return (
        <span className="bg-transparent ring-1 ring-[#3f6c85] ring-opacity-20 shadow text-[#09141A] text-2xl h-11 w-11 rounded-full flex justify-center items-center hover:bg-[#09141A] hover:text-accent-50">
            {open ? '-' : '+'}
        </span>
    )
    
}

const questions = [
    {
        question: 'How can I identify a poisonous mushroom?',
        answer: 'Mushrooms are identified in terms of edibility using proven scientific methods. It is not advisable to consume mushrooms picked from the wild unless an experienced person who knows its identity is involved.'
    },
    {
        question: "Are Leadfut's mushrooms edible?",
        answer: 'It is advisable to consume only commercially cultivated mushrooms because they have been scientifically identified by experts, like us. Our mushrooms are completely edible and medicinal. Despite local people picking mushrooms from the wild in Nigeria, incidents of poisoning continue to be recorded.'
    },
    {
        question: 'Do Leadfut mushrooms contain Vitamin D?',
        answer: 'Mushrooms are the only sufficient non-animal source of vitamin D. They can synthesize vitamin D2 when exposed to UV light. However, mushrooms produce vitamin D2, whereas animals produce vitamin D3.'
    },
    {
        question: "What are the health benefits of Leadfut's mushrooms?",
        answer: 'Our mushrooms offer significant health benefits, including decreasing the risk of cancer, lowering sodium intake and the risk of high blood pressure, promoting lower cholesterol, brain health, being a source of vitamin D, stimulating a healthier gut, and supporting a healthy immune system.'
    },
    {
        question: 'Are there any precautions I should take when consuming mushrooms?',
        answer: 'Yes, it is crucial to exercise caution when consuming mushrooms, especially those gathered from the wild. Always ensure mushrooms are properly identified by an expert or obtained from trusted sources to avoid potential toxicity.'
    },
];


const Faq = () => {
    return (
        <div className='mt-16'>

            <motion.div 
                initial={{ opacity: 0, y:100 }} 
                transition={{ duration: 0.5 }}
                whileInView={{ opacity: 1, y:0 }}
                viewport={{ once: true }}
                exit={{ opacity: 0, transition: { duration: 1 }, y: -100 }}
                className="my-14 sm:my-20 lg:my-32"
            >
                <h1 className="text-2xl sm:text-4xl text-center">Frequenty Asked Questions</h1>
            </motion.div>

            <section className='grid lg:grid-cols-5 gap-10 sm:gap-0 md:px-10 lg:px-0'>
                <div className="text-start space-y-5">
                    <span className="relative rounded-full px-3 py-1 text-xs leading-6 text-accent-900 ring-1 ring-accent-900 uppercase text-center" style={{ fontFamily: 'DM Sans' }}>
                            FAQ
                    </span>
                    <p className="text-md text-stone-500">A few things you'd like to know about <span className='text-accent-700 font-semibold'>Leadfut</span></p>
                </div>
                <div className="max-w-4xl place-self-end col-span-4 w-full">
                    <small className='text-[#09141A] uppercase text-opacity-60 font-medium'>QUESTIONS AND ANSWERS</small>
                    <div className="w-full bg-transparent">
                        {questions.map((question, index) => (
                            <Disclosure key={index} as="div" className="border-b my-4">
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button className="flex w-full justify-between items-center text-[#09141A] py-5 text-left text-lg sm:text-2xl font-light focus:outline-none">
                                            <span className='max-w-xs sm:max-w-lg lg:max-w-2xl'>{question.question}</span>
                                            <DisclosureIndicator open={open} />
                                        </Disclosure.Button>
                                        <Transition
                                            enter="transition duration-300 ease-in"
                                            enterFrom="transform opacity-0"
                                            enterTo="transform opacity-100"
                                            leave="transition duration-300 ease-out"
                                            leaveFrom="transform opacity-100"
                                            leaveTo="transform opacity-0"
                                        >
                                            <Disclosure.Panel className="pb-4 pt-3 text-md sm:text-lg text-[#1f3541] font-light">
                                                {question.answer}
                                            </Disclosure.Panel>
                                        </Transition>
                                    </>
                                )}
                            </Disclosure>
                        ))}
                        
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Faq