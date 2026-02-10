import React from "react";
import { motion } from "framer-motion";
import { ImageSlider } from "../micros/ImageSlider";
import { Link } from "react-router-dom";

export function Cta() {
  const images = [
    "/images/slide-one.jpg",
    "/images/slide-two.jpg",
    "/images/slide-three.jpg",
    "/images/slide-four.jpg",
    "/images/slide-five.jpg",
  ];
  return (
    <ImageSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4 max-w-5xl">
          Exploring innovative fungal solutions to address health, promote sustainability, and enhance food security 
        </motion.p>
        <Link to={'/contactus'} className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Get in touch →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </Link>
      </motion.div>
    </ImageSlider>
  );
}
