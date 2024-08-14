import React, { useEffect } from 'react'
import './Preloader.css'
import { preLoaderAnim } from '../animation'


const preloader = () => {

    useEffect(()=>{
        preLoaderAnim()

    },[])


  return (
    <div className='preloader'>
        <div className="text-container">
            welcome
        </div>
    </div>
  )
}

export default preloader
