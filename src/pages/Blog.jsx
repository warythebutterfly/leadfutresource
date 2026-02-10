import React, { useEffect } from 'react'
import {BlogDetails} from '../content/BlogDetails'
import { motion } from 'framer-motion';
import TextGenerateEffect from '../components/micros/TextGenerateEffect';
import SEO from '../Seo';

const Blog = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const PrifilePhoto = () => {
        return(
            <img src="/images/Nwanneka-Ofodile.png" alt="" className="h-11 w-11 rounded-full" />
        )
    }

    const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

    return (
        <>
        <SEO
            title="Leadfut Blog: Explore our research, insights and inspirations."
            description="Explore the latest insights, research, and articles on innovative fungal solutions, waste stream utilization and pioneering solutions from Leadfut Resources Ltd. Stay updated with our blog as we address health challenges, promote sustainability, and fortify food security."
            keywords="Fungal solutions, Innovative mushroom solutions, Mushroom study, Food security, Waste stream utilization, growth media, Wheat bran uses, uses of sawdust, waste-to-nutrition innovations, Mushroom, Edible mushrooms, Medicinal mushrooms"
        />


            <motion.div 
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, transition: { duration: 1 } }}
                variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
            >
                <div className="h-[20em] sm:h-[25em] flex justify-center items-center border-nude-800 sm:border-x mx-4 sm:mx-10 pt-20">
                    <div className="text-center space-y-4 sm:space-y-6">
                        <motion.h1 
                            variants={{
                                hidden: { opacity: 0, y: -20 },
                                visible
                            }}
                            className="text-nude-600 text-2xl sm:text-4xl lg:text-6xl tracking-wider uppercase font-semibold">
                                The leadfut blog
                        </motion.h1>
                        <div className='max-w-xs sm:max-w-2xl mx-auto'>
                            <TextGenerateEffect words={"Explore latest insights, research, and articles on innovative fungal solutions, waste stream utilization and pioneering solutions from Leadfut Resources Ltd."} className={"text-sm sm:text-xl"} />
                        </div>
                    </div>
                </div>
                <section className="pb-20 pt-8 sm:pt-16 border-t border-nude-800">
                    <div className="border border-nude-500 mx-3 sm:mx-10">

                        {/* mapping throught the BlogDetails array imported */}

                        {BlogDetails.map((blog, index) => (
                            <div key={index} className={`p-5 sm:p-8 border-b ${index === BlogDetails.length - 1 ? '' : 'border-nude-500'} group hover:bg-nude-50 hover:bg-opacity-40`}>
                                <div className="grid sm:grid-cols-5 gap-4 sm:gap-8">
                                    <div>
                                        <img src={blog.image} alt="" />
                                    </div>
                                    <div className="sm:col-span-3 flex flex-col justify-between items-start gap-4">
                                        <p className="text-md font-extralight uppercase">{blog.date}</p>
                                        <a href={blog.link} target='_blank' rel="noopener noreferrer">
                                            <h2 className="text-2xl sm:text-3xl font-semibold max-w-2xl group-hover:underline underline-offset-4">{blog.title}</h2>
                                        </a>

                                        <div className="flex flex-col sm:flex-row items-start sm:items-center sm:gap-4 text-md font-extralight uppercase">
                                            <p className="inline-flex items-center gap-4">
                                                <PrifilePhoto />
                                                <span className="text-xs sm:text-sm max-w-md">{blog.authors}</span>
                                            </p>
                                            •<span>{blog.duration}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="line-clamp-4">{blog.summary}</p>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                   
                </section>
            </motion.div>
        </>
    )
}

export default Blog