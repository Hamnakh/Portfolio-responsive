import React from 'react'
import Image from 'next/image'
import { Heebo } from 'next/font/google'

const heebo = Heebo({subsets:['latin']})

const Hero = () => {
    return (
        
        <div className='my-[66px] p-6 mx-auto w-[92%] md:w-[1920] md:h-[508px] flex flex-col-reverse md:flex-row 
        items-center justify-between  bg-slate-600'> 

        {/* text div */}
        <div className=' md:w-[950px] h-[350px] bg-slate-300 flex flex-col md:justify-between 
        items-start justify-evenly'>
            <h1 className={`${heebo.className} text-[27px] md:text-[48px] font-black text-myblack`}>
                Hi, I am Hamna, <br />
                Creative Technologist
            </h1>

            <p className={`${heebo.className}  text-[16px] sm:text-[25px] font-normal`}>An aspiring web developer 
                exploring the world
                 of coding. With every project I want to improve my skills and engaging website,
                  take a look at my journey so far and if you have any opinion, please share with me.</p>
            <button className={`${heebo.className} w-[250px] h-[50px] bg-white text-black text-[18px] 
            font-bold rounded-sm shadow-md shadow-black/60 `}>Download Resume</button>
        </div>



       
      <div className='w-[300px] h-[399px] flex items-center justify-end'>
      
            <Image src={"/images/Pics.png"} width={500} height={500} alt='Picspng'/>  
            
        </div>  

         </div> 
        
      
    )
    }




export default Hero