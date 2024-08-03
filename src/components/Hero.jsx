import React from 'react'
import HERO_CONTENT from '../constants/index'
import myprofile from '../assets/myprofile.png'
import { motion } from "framer-motion"


const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay }
  }
})

                                      
const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2 '>
          <div className='flex flex-col items-center lg:items-start text-white'>
            <motion.h1  whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.1 }}
              drag="x"
              dragConstraints={{ left: -100, right: 100 }} initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className='pb-16 text-6xl  font-thin tracking-tighter lg:mt-16 '>Shubhodeep pal </motion.h1>
            <motion.span variants={container(0.5)} initial="hidden" animate="visible" whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.1 }}
              drag="x"
              dragConstraints={{ left: -100, right: 100 }} className='bg-gradient-to-r from-purple-500 via-slate-500 to-purple-400 bg-clip-text text-3xl tracking-tight text-transparent'>Full stack developer</motion.span>
            <motion.p whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.1 }}
              drag="x"
              dragConstraints={{ left: -100, right: 100 }} variants={container(0)} initial="hidden" animate="visible" className='my-2 max-w-xl py-6 font-light tracking-tighter'>
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex justify-center rounded-2xl'>
            <motion.img initial={{x:100 , opacity: 0 }} animate={{x:0 , opacity: 1}} transition={{duration:0.5 , delay: 0}} whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 1.1 }}
              drag="x"
              dragConstraints={{ left: -100, right: 100 }} className="rounded-3xl" src={myprofile} alt="" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Hero
