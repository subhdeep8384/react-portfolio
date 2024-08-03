import React from 'react'
import aboutImg from "../assets/about.jpg"
import { ABOUT_TEXT } from '../constants'
import { motion } from "framer-motion"



const About = () => {
    return (
        <div className=' border-x-neutral-900 pb-4 text-white'>
            <motion.h1 whileInView={{opacity: 1 , x:0 }} initial={{opacity: 0 ,  x:-100}} transition={{duration:0.5 , delay:0}}  whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 1.1 }}
              drag="x" className='my-50 text-center text-4xl font-light mt-56 mb-24'>About <span className='text-gray-400'>Me</span></motion.h1>



            <div className='flex flex-wrap '>
                <div className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex items-center justify-center'>
                        <motion.img whileInView={{opacity: 1 , x:0 }} initial={{opacity: 0 ,  x:-100}} transition={{duration:0.5 , delay:1}}  whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.1 }}
              drag="x" className='rounded-3xl' src={aboutImg} alt="about image" />
                    </div>
                    </div>

                    <div  className='w-full lg:w-1/2'>
                    <div className='flex justify-center lg:justify-start'>
                        <motion.p whileInView={{opacity: 1 , x:0 }} initial={{opacity: 0 ,  x:100}} transition={{duration:0.5 , delay:0.5}}  whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.1 }}
              drag="x" className='my-2 max-w-xl py-4'>{ABOUT_TEXT}</motion.p>
                    </div>

                    
                </div>
            </div>
        </div>
    )
}

export default About
