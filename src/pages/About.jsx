import React, { useEffect, useState, Fragment } from 'react'
import Faq from '../components/macros/Faq'
import PrimBtn from '../components/micros/PrimBtn'
import { Dialog, Transition } from '@headlessui/react'
import TextGenerateEffect from '../components/micros/TextGenerateEffect'
import { motion } from 'framer-motion'
import SEO from '../Seo'
import Action from '../components/micros/Action'

const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // framer motion animation for visible state.
    const visible = { opacity: 1, x: 0, transition: { duration: 0.5 } };

    // Leadfut team details array
    const teamDetails = [
        {
            id: 2,
            name: 'Dr Ofodile Lauretta Nwanneka',
            position: 'Chief Executive Officer',
            image: '/images/dr-ofodile.JPG',
            profile: (
                <div class="space-y-3">
                    <h3 class="font-semibold text-accent-50">Academic Excellence and Research</h3>
                    <p>
                        Dr. Lauretta N. Ofodile, a Chief Lecturer at Yaba College of Technology, is renowned for her groundbreaking research in mycology and mushroom biotechnology. With numerous publications and prestigious grants, she's a leader in waste management and mushroom production.
                    </p>
                    <h3 class="font-semibold text-accent-50">Leadership and Impactful Mentorship</h3>
                    <p>
                        Beyond academia, Dr. Ofodile leads impactful initiatives as the Convener of the Environmental Research Group and President of the Wited Multipurpose Cooperative Society. Her mentorship and contributions to agricultural innovation empower scholars and entrepreneurs alike.
                    </p>
                </div>
            ),
            linkedin: 'https://www.linkedin.com/in/nwanneka-ofodile-phd-0a8a3b20',
            alt: 'Photo of Dr Ofodile Lauretta Nwanneka the cheif executive officer of Leadfut resources ltd'
        },
        {
            id: 1,
            name: 'Mrs Esther Burnnet',
            position: 'Chief operating office',
            image: '/images/esther-burnett.JPG',
            profile: (
                <div class="space-y-3">
                    <h3 class="font-semibold text-accent-50">Academic Endeavour and Career</h3>
                    <p>
                        Esther M. Burnett is a versatile Computer Engineering professional who graduated with highest honors. With a degree from an esteemed institution. Esther excels in collaborating with cross-functional teams, demonstrating strong programming skills, and applying problem-solving abilities to address complex challenges. Her experience extends to hosting cryptographic protocols, blockchain development, and contributing to product enhancements. Esther's proficiency spans a wide array of languages, frameworks, and developer tools, making her a valuable asset in any software engineering endeavor.
                    </p>
                </div>
            ),
            linkedin: 'https://www.linkedin.com/in/esther-chukwunwike',
            alt: 'Photo of Mrs Esther Burnnett the cheif operations officer of Leadfut resources ltd'

        },
        {
            id: 3,
            name: ' Ms Carol Chinwuju Chukwunwike',
            position: 'Sales/marketing executive',
            image: '/images/carol-main.jpg',
            profile: (
                <div class="space-y-3">
                    <h3 class="font-semibold text-accent-50">Sociologist & Market Officer</h3>
                    <p>
                        Carol Chinwuju Chukwunwike is a dynamic sociologist with a flair for marketing. With three years of experience in the marketing field, Carol has honed her skills to become an outstanding market officer. Her expertise lies in understanding consumer behavior and crafting strategic marketing plans to effectively reach target audiences. Carol's unique blend of sociological insights and marketing acumen makes her a valuable asset in any marketing team.
                    </p>
                </div>
            ),
            linkedin: 'https://www.linkedin.com/in/carol-chukwunwike-1449a5205?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
            alt: 'Photo of Ms Carol Chukwunwike the sales/marketing executive of Leadfut resources ltd'
        },
        {
            id: 4,
            name: 'Mr Blake Burnnet',
            position: 'Community manager',
            image: '/images/Blake.JPG',
            profile: (
                <div class="space-y-3">
                    <h3 class="font-semibold text-accent-50">Academic Endeavour and Career</h3>
                    <p>
                        My name is Thomas Lee Blake Burnett, and I am a passionate History Major at Arizona State University. With experience in sales at Verizon, I have developed strong communication skills and a customer-centric approach, ensuring positive experiences and promoting open feedback channels. As a Community Manager for Leadfurt Resource, I am committed to fostering a supportive and engaging environment where members can collaborate, share ideas, and flourish, drawing upon my love for history and reading to enrich our community interactions.
                    </p>
                </div>
            ),
            linkedin: 'https://www.linkedin.com/in/thomas-blake-burnett',
            alt: 'Photo of Mr Blake Burnnett the community manager of Leadfut resources ltd'

        },
    ]

    // Team scroll stagger animation
    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2
          }
        }
    }

    // Team scroll stagger animation for each item
    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { ease: [0.17, 0.67, 0.83, 0.67], duration: 1 } }
    }

    return (
        <>
            <SEO
                title="About Leadfut Resources Ltd: Pioneering Fungal Solutions for Health and Sustainability"
                description="Learn about Leadfut Resources Ltd, a pioneering company committed to fostering a healthier planet through innovative fungal solutions. Explore our journey, mission, and contributions to addressing health challenges, promoting sustainability, and fortifying food security."
                keywords="Fungal solutions, Food security, Waste stream utilization, growth media, Wheat bran uses, uses of sawdust, waste-to-nutrition innovations, Mushroom, Edible mushrooms, Medicinal mushrooms"
            />

            <motion.div 
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, transition: { duration: 1 } }}
                variants={{ visible: { transition: { staggerChildren: 0.3 } } }} 
                className='bg-[#09141A]'
            >
                <div 
                    className="flex justify-center items-center pt-28 px-3 sm:px-10 lg:px-0 lg:pt-10 bg-[#09141A] lg:h-screen">
                    <div className="sm:grid sm:grid-cols-2 items-center lg:gap-12 relative min-w-full">

                        <motion.div 
                            variants={{
                                hidden: { opacity: 0, x: -20 },
                                visible
                            }}
                            className='sm:pt-0 sm:max-w-xl w-full h-full'
                        >
                            <div className="flex justify-center items-center absolute w-full h-full sm:static top-0 right-0">
                                <div className="text-center sm:text-start max-w-md space-y-3">
                                    <h1 className="text-4xl text-accent-100">We are Leadfut</h1>
                                    <div>
                                        <p className="text-xl text-accent-50 text-opacity-70">Based in Lagos and Ogun states, Nigeria. We are Reinventing waste-to-nutrition innovations.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div 
                            variants={{
                                hidden: { opacity: 0, x: 20 },
                                visible
                            }}
                            className='sm:justify-end h-[20em] lg:h-[35em] flex justify-center relative sm:static blur-[1.5px] sm:blur-none'>
                            <img src="/images/dots.svg" className='lg:-mr-5 h-full' alt="dots" />
                        </motion.div>

                    </div>
                </div>
                <section className="flex justify-center items-center min-h-[25em] sm:max-w-2xl mx-auto px-5 sm:px-0 text-center">
                    <TextGenerateEffect words={"We are on a mission to redefine waste-to-nutrition and energy innovations to pave the way for a sustainable future. With a steadfast commitment to environmental stewardship and technological innovation, we're dedicated to transforming waste streams into valuable resources."} className={'text-xl sm:text-3xl text-slate-300 sm:font-medium'} />
                </section>
                <section className='sm:px-5 lg:px-10 sm:pb-32'>
                    <div className="grid sm:grid-cols-2 sm:gap-3 lg:gap-5">

                        <motion.div 
                            initial={{ opacity: 0, x: -100 }} 
                            transition={{ duration: 0.5 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            exit={{ opacity: 0, transition: { duration: 1 }, x: -100 }}
                            className="h-[30em] lg:h-[40em] w-full sm:rounded-3xl bg-accent-900 bg-opacity-10 flex justify-center items-center"
                        >
                            <div className="text-start flex flex-col items-start gap-4 max-w-md px-5">
                                <h1 className="text-3xl lg:text-4xl text-accent-100">A new way of growing fungi</h1>
                                <p className="text-lg lg:text-xl text-accent-50">Through relentless dedication and cutting-edge research, we've emerged as pioneers in the field, harnessing the power of fungi to revolutionize biosecurity, food production, and beyond. </p>
                                <p className="text-accent-400 text-md sm:text-lg">We’ve seen this problem again and again and we’re solving it.</p>
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, x: 100 }} 
                            transition={{ duration: 0.5 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            exit={{ opacity: 0, transition: { duration: 1 }, x: 100 }}
                            className="h-[30em] lg:h-[40em] w-full sm:rounded-3xl bg-nude-200 flex justify-center items-center"
                        >
                            <blockquote className="text-2xl lg:text-3xl font-medium max-w-md text-nude-600 px-5">
                                “As we continue to innovate and expand our reach, we remain steadfast in our commitment to fostering a healthier planet. Join us on this journey of transformation as we lead the way towards a brighter, greener tomorrow.”
                            </blockquote>
                        </motion.div>

                    </div>
                </section>
                <section className="bg-white pt-14 sm:pt-20 pb-14 px-4 lg:px-10 space-y-5">

                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-16 gap-4 sm:px-4">
                        <motion.div 
                            initial={{ opacity: 0 }} 
                            transition={{ duration: 1 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            exit={{ opacity: 0, transition: { duration: 1 }, x: -100 }}
                            className='text-start lg:w-2/4 space-y-4'
                        >
                            <span className="relative rounded-full px-3 py-1 text-xs leading-6 text-accent-900 ring-1 ring-accent-900 uppercase text-center" style={{ fontFamily: 'DM Sans' }}>
                                MAGIC TEAM
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-medium text-[#1e485e] sm:max-w-xl">The magic team that keeps the wheels turning.</h2>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0 }} 
                            transition={{ duration: 1 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            exit={{ opacity: 0, transition: { duration: 1 }, x: -100 }}
                            className='lg:w-2/4 flex justify-end'
                        >
                            <p className="text-lg font-medium max-w-xl text-start text-[#1b4a63] text-opacity-80">At Leadfut, our success is fueled by our handpicked team of passionate individuals dedicated to driving innovation and sustainability</p>
                        </motion.div>
                    </div>

                    <motion.ul 
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid sm:grid-cols-4 gap-14 sm:gap-3 lg:gap-7"
                    >
                        
                        {teamDetails.map((detail, index) => (
                            <motion.li 
                                key={index} 
                                className='space-y-3'
                                variants={item}
                            >
                                <div className="flex flex-col items-start gap-6 md:gap-0 lg:gap-6 pb-5 border-b">
                                    <div className="sm:h-[30em] w-full">
                                        <img className='h-full w-full lg:w-auto sm:object-cover lg:h-[28em] object-fill' src={detail.image} alt={detail.alt} />
                                    </div>
                                    <div className="text-start space-y-1">
                                        <h1 className="text-2xl text-gray-800">{detail.name}</h1>
                                        <p className="text-gray-500 font-mediu">{detail.position}</p>
                                    </div>
                                </div>
                                <div className="inline-flex items-center gap-2">
                                    
                                    <ProfileModal name={detail.name} profile={detail.profile} linkedin={detail.linkedin} />

                                    <a href={detail.linkedin} target='_blank' className="flex justify-center items-center h-7 w-7 rounded-md bg-accent-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" className='w-4' viewBox="0 0 448 512"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/></svg>
                                    </a>

                                </div>
                            </motion.li>
                        ))}
                        
                    </motion.ul>

                    <Faq />

                    <div className="bg-accent-500/5 rounded-3xl min-h-[37em] sm:min-h-[30em] grid sm:grid-cols-2 items-center md:gap-10 -mx-4 pl-4 sm:-mx-0 sm:pl-0">
                        <div className="flex justify-center">
                            <div className="text-start max-w-md space-y-5">
                                <h1 className="text-3xl lg:text-5xl">A handpicked team</h1>
                                <p className="text-xl text-gray-500">Each member brings unique expertise and insights to the table, united by a shared commitment to excellence and environmental stewardship. </p>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <div className="text-start max-w-md space-y-5">
                                <h1 className="text-3xl lg:text-5xl">A strong network</h1>
                                <p className="text-xl text-gray-500">Our success extends beyond our team to a robust network of partners, collaborators, and supporters. We are funded by <span className="font-semibold">
                                        Research and Innovation Systems for Africa (RISA) and UK International Development 
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Action section component*/}
                    <Action />

                </section>
            </motion.div>
        </>
    )
}

export default About




function ProfileModal({ name, profile, linkedin }) {
        
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>
            <div className="">
                <button
                type="button"
                onClick={openModal}
                className="rounded-md bg-accent-50/50 px-4 py-2 text-sm font-medium text-[#09141A] hover:bg-accent-800/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
                >
                    View Profile
                </button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md sm:max-w-lg transform overflow-hidden rounded-2xl bg-[#09141A] p-6 text-left align-middle shadow-xl transition-all text-gray-300">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-white mb-6 flex justify-between items-center"
                                    >
                                        <span>
                                            { name + "'s" } Profile
                                        </span>
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-900/30 px-1 py-1 text-sm font-medium text-white hover:bg-blue-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                            </svg>
                                        </button>

                                    </Dialog.Title>
                                    {profile}
                                    <div className="mt-4">
                                        <a
                                            href={linkedin}
                                            target='_blank'
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            Visit Linkedin
                                        </a>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
