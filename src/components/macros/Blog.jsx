import React from 'react'
import { Link } from 'react-router-dom'
import { BlogDetails } from '../../content/BlogDetails'
import { motion } from 'framer-motion'

const Blog = () => {

    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2
          }
        }
    }
      
    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { ease: [0.17, 0.67, 0.83, 0.67], duration: 1 } }
    }

    return (
        <section className='py-16 space-y-14 sm:space-y-20 px-5 sm:px-10'>

            <div className="text-center space-y-4 max-w-xs sm:max-w-md mx-auto">
                <motion.span 
                    initial={{ opacity: 0, y:-100 }} 
                    transition={{ duration: 0.5 }}
                    whileInView={{ opacity: 1, y:0 }}
                    class="relative rounded-full px-3 py-1 text-xs leading-6 text-ston-600 ring-1 ring-stone-400 uppercase">
                    Blog
                </motion.span>
                <motion.h1 
                    initial={{ opacity: 0, y:100 }} 
                    transition={{ duration: 0.5 }}
                    whileInView={{ opacity: 1, y:0 }}
                    viewport={{ once: true }}
                    exit={{ opacity: 0, transition: { duration: 1 }, y: -100 }}
                    className="text-center text-2xl sm:text-4xl text-stone-700"
                >
                    Insights & Inspiration Dive into Our Blog
                </motion.h1>
            </div>

            <motion.ul 
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid sm:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-4 lg:gap-8">

                <motion.li 
                    variants={item}
                    className='font-medium sm:font-semibold text-xl sm:text-2xl underline underline-offset-4 sm:col-span-3 lg:col-span-1'>
                    Recent Updates
                </motion.li>

                {/* The blog details array is imported from BlogDetails.js */}
                {BlogDetails.slice(0, 3).map((blog, index) => (
                    <motion.li 
                        variants={item} 
                        key={index} 
                        className="bg-[#f4f1ec] blog-card p-4"
                    >
                        <div className="flex flex-col items-start gap-2.5">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46" />
                                </svg>
                            </div>
                            
                            <h2 
                                className="text-base font-medium line-clamp-3" 
                                dangerouslySetInnerHTML={{ __html: blog.title.replace(/\b(Ganoderma lucidum|Ganoderma colossum)\b/g, '<span class="text-nude-400 italic">$1</span>') }}
                            >
                            </h2>
                            <p className="text-xs text-stone-500 font-light">
                                {blog.authors}
                            </p>
                            <a href={blog.link} target='_blank' className="bg-transaparent rounded-3xl text-xs px-2.5 py-1.5 text-black border border-black mt-4">
                                Read article
                            </a>
                        </div>
                    </motion.li>
                ))}

            </motion.ul>

            <div className="text-center ">
                <Link to={'/blog'} className="bg-transaparent rounded-3xl text-md px-3.5 py-2 text-black border border-black mt-4">
                    Visit Blog
                </Link>
            </div>

        </section>
    )
}

export default Blog