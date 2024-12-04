import React from 'react'
import Image from 'next/image';
import { Heebo } from "next/font/google";
import  Imagehtml  from '@/public/images/html.png';
import Imagejava from '@/public/images/java.png'
import Imagecss from '@/public/images/Css.png'
import Imagefigma from '@/public/images/figma.png'
import Imagets from '@/public/images/TS.png'
import Imageseo from '@/public/images/seo1.jpg'
import Imageteaching from '@/public/images/teaching.jpg'

const heebo = Heebo({subsets:['latin']})

const Skills = () => {

    return(
       <div className='bg-slate-600 h-[926px] w-[1920px]'>
            
       
        <div className='w-[1004px] h-[1013px] bg-slate-600 my-[66px] p-6 mx-auto  '>
        <h1
          className={`${heebo.className} text-[40px] text-cyan-50 font-black text-center text-4xl`}> Skills
        </h1>


            <h2 className='text-3xl text-cyan-50 text-center'>Using Skills</h2>
            <div className=' flex '>
            <div className='bg-slate-600 h-[513px] w-[304px] p-10 text-cyan-50 mx-20 space-y-4 '>
            <h2 className='text-start'>html</h2>
            <div className='h-[120px]'>
                <Image src={Imagehtml} alt="htmlpic"></Image> 
             </div>
             
            <h2 >CSS</h2>
            <div >
                <Image src={Imagecss} alt='csspic'></Image>
            </div>

            <h2>Javascript</h2>
            <div>
                <Image src={Imagejava} alt='javapic'></Image>
            </div> 
            </div> 

            <div className='bg-slate-600 right h-[513px] w-[304px] p-10 text-cyan-50 mx-auto space-y-4  '>
            <h2>Figma</h2>
            <div >
                <Image src={Imagefigma} alt='javapic'></Image>
            </div>  


            <h2>T.S</h2>
            <div >
                <Image src={Imagets} alt='javapic'></Image>
            </div>  


            <h2>SEO</h2>
            <div className='w-[99.24px] h-[213px]'>
                <Image src={Imageseo} alt='seo'></Image>
            </div>  
            </div>
            </div>



            <div className='mx-auto h-[213px] w-[204px] text-cyan-50 bg-slate-600'>
                <h2 className='font-bold text-lg'>Teaching Experience</h2>
                <Image src={Imageteaching} alt='teaching' ></Image>
            </div>
            </div>
            </div>

            
    )
}
export default Skills