import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from "framer-motion"

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay }
    }
  })
const Projects = () => {
  return (
    <div className='norder-b border-neutral-900 pb-4'>
        <h1 className=' my-20 text-center text-4xl'></h1>

        <div>
            {PROJECTS.map((project , index )=> (
                <div className='mb-8 flex flex-wrap lg:justify-center gap-28'>
                    <div className='w-full lg:w-1/4'></div>
                    <img src={project.image}  width={150}  height={150} alt={project.title} className='mb-6 rounded-3xl'/>

                    <div className='w-full max-w-xl  lg:h-3/4  text-white'>
                    <motion.h6 whileInView={{opacity: 1 , x:0 }} initial={{opacity: 0 ,  x:-100}} transition={{duration:0.5 , delay:0}}  whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.1 }}
              drag="x" >{project.title}</motion.h6>
                    <motion.p whileInView={{opacity: 1 , x:0 }} initial={{opacity: 0 ,  x:-100}} transition={{duration:0.5 , delay:0}}  whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.1 }}
              drag="x" className='mb-4 '>{project.description}</motion.p>
                    {project.technologies.map((tech , index )=>(
                        <motion.span whileInView={{opacity: 1 , x:0 }} initial={{opacity: 0 ,  x:-100}} transition={{duration:0.5 , delay:0}}  whileHover={{ scale: 1.5 }}
                        whileTap={{ scale: 1.1 }}
                        drag="x" key={index} className='mr-2 bg-red-700 px-2 py-1 text-sm font-medium'>{tech}</motion.span>
                    ))}
                    </div>
                </div>
                
            ))}
        </div>
    </div>
  )
}

export default Projects
