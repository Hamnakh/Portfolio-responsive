import { Heebo } from "next/font/google";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FaGrinStars } from "react-icons/fa";
import  Link  from "next/link";

const heebo = Heebo({subsets: ["latin"]})

const Footer = () => {
    return (
        <div className="bg-black h-[226px] w-[1920px] text-cyan-50 flex flex-col items-center justify-center space-y-4 ">
            <div className="flex space-x-5">
            <Link href={""}> <FaFacebook className=' text-textcolour w-[35px] h-[35px]' />
            </Link>
            <Link href={""}> <FaLinkedin  className='text-textcolour w-[35px] h-[35px]'/>
            </Link>
            
            <Link href={""}> <BsGithub className=' text-textcolour w-[35px] h-[35px]'/>
            </Link>
            <Link href={""}>  <FaGrinStars className=' text-textcolour w-[35px] h-[35px]'/>
            </Link>
            </div>
            
            <p className={`${heebo.className} text-textcolour text-center font-medium text-[24px]`}>@2024 All Rights Reserved.</p>
        </div>
    )
}
export default Footer