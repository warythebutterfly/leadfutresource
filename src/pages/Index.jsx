import React, { useEffect } from 'react';
import Hero from '../components/macros/Hero';
import Mission from '../components/macros/Mission';
import Products from '../components/macros/Products';
import {Testimonial} from '../components/macros/Testimonial';
import Blog from '../components/macros/Blog';
import {Cta} from '../components/macros/Cta';
import { motion } from "framer-motion";
import SEO from '../Seo';

const Index = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            
            <SEO
                title="Exploring Innovative Fungal Solutions for Health and Sustainability | Leadfut Resources"
                description="Leadfut Resources pioneers innovative fungal solutions to tackle health challenges, promote sustainability, and fortify food security. We transform waste into valuable bio products, including Fungi Gro, biomass briquettes, and mushrooms. Our consultancy and training services further enhance industry practices."
                keywords="Fungal solutions, Waste utilization, Fungi Gro, Biomass briquettes, Mushroom farming, Consultancy, Training, Waste-to-bio products, Pathogen detection, Sustainability, Health, Food security, Environmental health"
            />


            <motion.div
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, transition: { duration: 1 } }}
                variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
            >
                <Hero />
                <Mission />
                <Products /> 
                <Testimonial />
                <Blog />
                <Cta />
            </motion.div>
        </>
    )
}

export default Index