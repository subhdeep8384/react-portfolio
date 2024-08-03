import React from 'react'
import gold from '../assets/gold.jpg'
import { EXPERIENCES } from '../constants'
import { motion } from "framer-motion"
const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay }
    }
  })

const Experience = () => {
    return (
        <div className='border-b border-neutral-800 pb-24'>
      <motion.h1 whileInView={{opacity: 1 , x:0 }} initial={{opacity: 0 ,  x:-100}} transition={{duration:0.5 , delay:0}} variants={container(0.5)}  className='my-20 text-center text-6xl text-white font-light'>Experiens<span className='text-gray-600'>ces</span></motion.h1>



            <div className='flex flex-wrap '>
                <div className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex items-center justify-center'>
                        <motion.img whileInView={{opacity: 1 , x:0 }} initial={{opacity: 0 ,  x:-100}} transition={{duration:0.5 , delay:0}} variants={container(0.5)} className='rounded-3xl' src={gold} alt="about image" />
                    </div>
                    </div>

                    <div className='w-full lg:w-1/2'>
                    <div className='flex justify-center lg:justify-start'>
                        <motion.p whileInView={{opacity: 1 , x:0 }} initial={{opacity: 0 ,  x:-100}} transition={{duration:0.5 , delay:0}} variants={container(0.5)} className='my-2 max-w-xl py-4 text-white'>Father Business :- gold smith 
                        <motion.p whileInView={{opacity: 1 , x:0 }} initial={{opacity: 0 ,  x:-100}} transition={{duration:0.5 , delay:0}} variants={container(0.5)} className='text-white'>Apna kaam apni gand mai daal lo bhen k lodo</motion.p>
                        </motion.p>
                        
                    </div>
                </div>

            </div>

            <div>
            </div>
        
            
       
        </div>
    )
}

export default Experience
