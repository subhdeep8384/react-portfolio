import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { SiMongodb } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { DiRedis } from 'react-icons/di'
import { FaNodeJs } from 'react-icons/fa'
import { BiLogoPostgresql } from 'react-icons/bi'
import { motion } from "framer-motion"

const iconVariants = (duration) =>({
  initial: {y : -10 },
  animate:{
    y :[10 , -10 ],
    transition : {
      duration : duration ,
      ease : "linear",
      repeat : Infinity,
      repeatType : "reverse"
    },
  },
})

const Technology = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h1 whileInview={{opacity : 1 , y:0}}  dragConstraints={{ left: -100, right: 100 }} initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}  whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.1 }}
              drag="x" className='my-20 text-center text-5xl bg-gradient-to-r from-red-500 via-slate-500 to-white bg-clip-text text-3xl tracking-tight text-transparent'>TECHNOLOGY</motion.h1>
    

    <div className='flex flex-wrap items-center justify-center gap-5 text-white text-4xl'>
      <div >
        <motion.div variants={iconVariants(3)} initial="initial"  animate="animate" whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.1 }}
              drag="x" className='rounded-2xl border-4 border-neutral-700 p-4'>
            <RiReactjsLine  className='text-7xl text-cyan-400'/>
        </motion.div>
      </div>

      <div >
        <motion.div variants={iconVariants(1)} initial="initial"  animate="animate"  whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.1 }}
              drag="x" className='rounded-2xl border-4 border-neutral-700 p-4'>
            <TbBrandNextjs  className='text-7xl text-gray-400'/>
        </motion.div>
      </div>

      <div >
        <motion.div variants={iconVariants(0.2)} initial="initial"  animate="animate"  whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.1 }}
              drag="x" className='rounded-2xl border-4 border-neutral-700 p-4'>
            <SiMongodb  className='text-7xl text-green-400'/>
        </motion.div>
      </div>

      <div >
        <motion.div variants={iconVariants(2)} initial="initial"  animate="animate"  whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.1 }}
              drag="x" className='rounded-2xl border-4 border-neutral-700 p-4'>
            <DiRedis  className='text-7xl text-red-400'/>
        </motion.div>
      </div>

      <div >
        <motion.div variants={iconVariants(1.5)} initial="initial"  animate="animate"  whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.1 }}
              drag="x" className='rounded-2xl border-4 border-neutral-700 p-4'>
            <FaNodeJs  className='text-7xl text-yellow-400'/>
        </motion.div>
      </div>


      <div >
        <motion.div variants={iconVariants(0.5)} initial="initial"  animate="animate"  whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.1 }}
              drag="x" className='rounded-2xl border-4 border-neutral-700 p-4'>
            <BiLogoPostgresql  className='text-7xl text-blue-400'/>
        </motion.div>
      </div>

      </div>
    </div>
  )
}

export default Technology
