import React from 'react'
import { CONTACT } from '../constants'
import { motion } from "framer-motion"

const contact = () => {
  return (
    <div className='border-b border-l-neutral-700 pb-20'>
        <motion.h1 
        whileInView={{opacity : 1 , y:0 }} initial = {{opacity:0 , y :-100}} transition={{duration :0.5 , delay :0.2 }}
        className='my-10 text-center text-4xl bg-gradient-to-r from-purple-500 via-slate-500'>Get in touch </motion.h1>
        <div className='text-center tracking-tighter text-gray-600'>
            <p className='my-4'>Jhaorda mazra burari delhi </p>
            <p className='m4-4 '> 8384077201</p>
            <p><a href="https://subhdeeppal7@gmaiil.com" target='_blank'>subhdeeppal7@gmail.com</a></p>
        </div>
      
    </div>
  )
}

export default contact
