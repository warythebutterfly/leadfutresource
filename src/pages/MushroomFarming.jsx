import React, { useEffect } from 'react'
import { Cta } from '../components/macros/Cta'
import TextGenerateEffect from '../components/micros/TextGenerateEffect';
import { motion } from 'framer-motion';
import SEO from '../Seo';
import Action from '../components/micros/Action';

const MushroomFarming = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // framer motion animation for visible state.
    const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

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

    // strain list array
    const strainList = [
        {
            image: '/images/oyster-mushroom.jpeg',
            name: 'Grey Oyster mushroom',
        },
        {
            image: '/images/white-oyster-mushroom.jpeg',
            name: 'White Oyster mushroom',
            botanical: 'Pluerotus ostreatus'
        },
        {
            image: '/images/Ganoderma-mbrekobenum.jpeg',
            name: 'Ganoderma mbrekobenum',
        },
        {
            image: '/images/Ganoderma-destructans.jpeg',
            name: 'Ganoderma destructans',
        },
        {
            image: '/images/Ganoderma-destructans-fruit.jpeg',
            name: 'Harvested Fruit bodies of Ganoderma destructans',
        },
        {
            image: '/images/Ganoderma-oregonense.jpeg',
            name: 'Ganoderma oregonense',
        },
        {
            image: '/images/Pinhead-Ganoderma.jpeg',
            name: 'Pinhead of Ganoderma destructans',
        },
        {
            image: '/images/Pluerotus-ostreatus-i.jpeg',
            name: 'Ostreatus',
            botanical: 'Pluerotus ostreatus'
        },
        {
            image: '/images/Pluerotus-ostreatus-ii.jpeg',
            name: 'Ostreatus',
            botanical: 'Pluerotus ostreatus'
        },
    ]

    // deliverable products array
    const deliverables = [
        {
            imgSrc: "/images/culture.png",
            title: "Mother cultures",
            desc: 'Petri dish',
            details: [
                { label: "Petri dish" },
                { label: "diameter:", value: "90mm" },
                { label: "Material", value: "polistyren, PS" },
                { label: "Price", value: "NGN 1,000" }
            ]
        },
        {
            imgSrc: "/images/bagged-mushroom.jpeg",
            title: "Bagged Product",
            desc: 'Bag with microfilter',
            details: [
                { label: "Volume", value: "500g" },
                { label: "Material", value: "polistyren, PS" },
                { label: "Price", value: "NGN 2,000" }
            ]
        },
        {
            imgSrc: "/images/oyster-mushroom-deliverable.png",
            title: "Pack of fresh oyster mushroom",
            desc: 'Cling film wrapper',
            details: [
                { label: "Volume", value: "250g" },
                { label: "Price", value: "NGN 1,000" }
            ]
        },
        {
            imgSrc: "/images/bottled-oyster-spawn.png",
            title: "Oyster spawn",
            desc: 'Glass bottle package',
            details: [
                { label: "Volume", value: "250g" },
                { label: "Material", value: "Glass bottle" },
                { label: "Price", value: "NGN 2,000" }
            ]
        },
        {
            imgSrc: "/images/oyster-mushroom-spawn.png",
            title: "Fully ramified oyster mushroom spawn",
            desc: 'Bag with microfilter',
            details: [
                { label: "Volume", value: "500g" },
                { label: "Material", value: "polistyren, PS" },
                { label: "Price", value: "NGN 4,000" }
            ]
        }
    ];


    return (
        <>
            <SEO
                title="Diving into the art and design of mushrooms, explore our diverse range of edible and medicinal mushrooms | Leadfut Resources"
                description="Explore leadfut's wide range of edible and medicinal mushrooms. Whether enjoyed in gourmet dishes or incorporated into wellness routines, our mushrooms are a testament to nature's bountiful offerings and the profound connection between food and health."
                keywords="Mushrooms, Edible mushrooms, Medicinal mushrooms, Nutritional benefits of mushroom, Medicinal values of mushrrom,mushroom cultivation, Ganoderma species, Oyster mushrooms, Mushroom cultivation"
            />

            <motion.div
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, transition: { duration: 1 } }}
                variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
                className='bg-secondary-50 px-3 sm:px-10'
            >
                <section className='pt-20 sm:pt-32 lg:pt-40'>
                    <div className="grid sm:grid-cols-2 mb-10 gap-8 sm:gap-0">
                        <div className=''>
                            <div className="flex flex-col justify-between items-start gap-5 sm:gap-12">
                                <motion.h1 
                                    variants={{
                                        hidden: { opacity: 0, y: -20 },
                                        visible
                                    }}
                                    className="text-3xl sm:text-4xl lg:text-5xl text-stone-700">
                                    Mushrooms: The Art, Design and Future of Fungi
                                </motion.h1>
                                <motion.p 
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible
                                    }}
                                    className="text-md sm:text-xl max-w-lg text-stone-500 hidden sm:block">Enjoyable in gourmet dishes or incorporated into wellness routines, our mushrooms have a connection between food and health.
                                </motion.p>
                            </div>
                        </div>
                        <div className="">
                            <div className='max-w-xs sm:mx-auto sm:max-w-2xl sm:text-center'>
                                <TextGenerateEffect words={"Our diverse range of edible and medicinal mushrooms offers a wealth of benefits for both culinary enjoyment and holistic well-being."} className={'text-xl sm:text-2xl lg:text-3xl fnt-medium text-nude-400 font-light'} />
                            </div>
                        </div>
                    </div>
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className='-mx-3 lg:-mx-10'
                    >
                        <Cta />
                    </motion.div>
                </section>

                
                <section className='py-16'>
                    <div className="flex flex-col justify-center items-center gap-8 text-center">
                        <motion.h1 
                            initial={{ opacity: 0, y:100 }} 
                            transition={{ duration: 0.5 }}
                            whileInView={{ opacity: 1, y:0 }}
                            viewport={{ once: true }}
                            exit={{ opacity: 0, transition: { duration: 1 }, y: -100 }}
                            className="text-4xl sm:text-5xl"
                        >   
                            Strain List
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0, y:-100 }} 
                            transition={{ duration: 0.5 }}
                            whileInView={{ opacity: 1, y:0 }}
                            viewport={{ once: true }}
                            exit={{ opacity: 0, transition: { duration: 1 }, y: -100 }}
                            className="text-xl max-w-xl"
                        >
                            Our collection is constantly growing with varieties suited for different substrates and conditions, ranging from medicinal to edible strains.
                        </motion.p>
                        <a href='mailto:leadfutresources@gmail.com' className="button" style={{'--clr': '#2e2000'}}>
                            <span className="button-decor"></span>
                            <div className="button-content">
                                <div className="button__icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ebe5d0" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                    </svg>
                                </div>
                                <span className="button__text">Leadfu..@gmail.com</span>
                            </div>
                        </a>
                    </div>
                    <div className="mt-12">
                        <motion.ul 
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-2 sm:gap-4">
                            {strainList.map((strain, index) => (
                                <motion.li 
                                    key={index}
                                    variants={item}
                                    className='lg:min-h-56 flex flex-col items-start'>
                                    <img src={strain.image} className="w-full object-cover rounded min-h-56 max-h-56" alt={'An image of ' + strain.name} />
                                    <p className="text-sm uppercase font-medium mt-2 text-secondary-900">{strain.name}</p>
                                    <span className="text-nude-200 italic font-light">{strain.botanical}</span>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </div>
                </section>


                <section className="bg-[#2d1f07] -mx-3 lg:-mx-10 min-h-96 mt-20 lg:px-14 py-20">

                    <div className="flex flex-col items-center justify-center text-gray-100 gap-4 sm:max-w-2xl mx-auto text-center">
                        <motion.h1 
                            initial={{ opacity: 0, y:100 }} 
                            transition={{ duration: 0.5 }}
                            whileInView={{ opacity: 1, y:0 }}
                            viewport={{ once: true }}
                            exit={{ opacity: 0, transition: { duration: 1 }, y: -100 }}
                            className="text-4xl sm:text-5xl"
                        >
                            Deliverables
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0, y:-100 }} 
                            transition={{ duration: 0.5 }}
                            whileInView={{ opacity: 1, y:0 }}
                            viewport={{ once: true }}
                            exit={{ opacity: 0, transition: { duration: 1 }, y: -100 }}
                            className="text-xl text-gray-300">
                            Our products are carefully packed in bags with a microfilter, then consolidated into a single package for secure courier delivery.
                        </motion.p>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3  sm:gap-10 lg:gap-20 mb-20 mt-12">
                        {deliverables.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 100 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                exit={{ opacity: 0, transition: { duration: 1 }, x: 100 }}
                                className="flex flex-col items-center gap-4 justify-between h-full"
                            >
                                <img src={item.imgSrc} className='p-10 lg:p-0' alt="" />
                                <div className='space-y-2 text-center'>
                                    <h2 className="text-3xl font-extralight text-gray-100">{item.title}</h2>
                                    <ul className='text-center flex flex-col items-center text-lg font-extralight'>
                                        <li className="text-gray-300 text-xl mb-5">{item.desc}</li>
                                        {item.details.map((detail, idx) => (
                                            <li key={idx} className="inline-flex gap-2 items-center">
                                                <span className='text-gray-400'>{detail.label}</span>
                                                <span className='text-gray-200 font-normal'>{detail.value}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                        
                    </div>

                    <div className='flex justify-center my-16'>
                        <a href="https://wa.me/2349061176894?text=Hi%20there,%20I'm%20interested%20in%20your%20products" target="_blank" rel="noopener noreferrer" className="px-4 py-2 backdrop-blur-sm border bg-secondary-300/10 border-secondary-500/20 text-white mx-auto text-center rounded-full relative mt-4 text-lg">
                            <span>Contact sales</span>
                            <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-secondary-500 to-transparent" />
                        </a>
                    </div>

                    <div className="">
                        <p className="text-md text-secondary-800 text-center max-w-md mx-auto text-opacity-70">
                            For larger orders, it is possible to adapt the packaging to customer requirements.
                        </p>
                    </div>
                </section>

                <section className='py-10 grid sm:grid-cols-2 gap-10 sm:gap-0'>
                    <div className='max-w-xl px-2 lg:p-6 space-y-7'>
                        <p className='text-md text-stone-600'>
                            Research into the identification, isolation and characterisation of different medicinal attributes from indigenous mushroom species began in 2000 as a Doctor of Philosophy project. Having read about the enormous nutritional and medicinal values that can be derived from these mushrooms, the interest in making mushrooms available all round the year for consumption by artificial production was ignited. Capacity building in commercial mushroom was obtained at Soinghai Center Port Novo in 2011 and the United States of America. LEADFUT RESOURCES LTD has succeeded in growing <span className="italic text-nude-400">Ganoderma</span> species and oyster mushrooms on water hyacinth, oil palm bunch waste, elephant grass and sawdust and reuses table water plastic waste.
                            <br /><br />
                            Constant research is on-going in mushroom cultivation on different environmental wastes, their use in horticulture and for cleaning environmental pollutants.
                            <br /><br />
                            Medicinal mushrooms for the prevention and treatment of some illnesses such as cancer, tumour, fibroid, hypertension, wounds and high blood pressure and its uses in antibiotics production have been identified and investigated. Various researches have been done in these area and papers published. Research and applications confirm that mushroom cultivation is relevant to four sectors of our economy; food, pharmaceutical, agricultural and the environment because of their enormous benefits.
                        </p>
                        <div className="text-center sm:text-start ">
                            <blockquote className="text-lg sm:text-2xl font-medium text-stone-700 mt-8">
                                "The global mushroom market is prognosticated to witness an intense competition in the span of coming years. This is attributed to the rising demand in food and beverage sector. This is why we have gone fully into development and sales of mushrooms. We have different species that will intrest and will sure meet your needs."
                            </blockquote>
                        </div>
                    </div>
                    <div className=''>
                        <img src="/images/mushroom-image.png" alt="" />
                    </div>
                </section>

                {/* Action section component */}
                <Action />
                
            </motion.div>
        </>
    )
}

export default MushroomFarming