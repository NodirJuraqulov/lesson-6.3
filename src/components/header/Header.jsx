import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";
import { BsCart2 } from "react-icons/bs";
import toast from 'react-hot-toast';
import { COLLACTION } from '../../static'

const Header = () => {
  const handlClick = () => {
        toast.success(`${elem.title}`)
    }  
  return (
    <header className='h-18 border-b-1 border-gray-300 flex items-center'>
        <div className="wrapper flex gap-5 container mx-auto items-center justify-between">
            <div className='flex gap-10 items-center'>
                <h1 className='font-bold text-3xl'>SAMSUNG</h1>

                <ul className='flex gap-5'>
                    {
                        COLLACTION?.map((elem) => (
                            <li key={elem.id}>
                                <a href={elem.path} className='text-[18px] font-medium hover:underline' onClick={() => {toast.success(`${elem.title}`, {position: "top-center"})}}>{elem.title}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className="nav_search flex items-center gap-8">
                <form action="" className='bg-gray-200 px-3.5 py-2 rounded-3xl flex items-center'>
                    <CiSearch className='absolute text-2xl' />
                    <input type="text" placeholder='Search' className='ml-8' />
                </form>

                <div className="nav_icon flex gap-3 items-center">
                    <BsCart2 className='text-2xl' />
                    <FaRegUser className='text-2xl' />
                </div>
            </div>
        </div>
    </header>



    // <div className='icon flex gap-5 items-center container mx-auto'>Header <span onClick={handlClick}><FaRegUserCircle className='text-4xl' /></span> <span onClick={() => {toast.error("xato", {position: "bottom-right"})}}><FaInstagram className='text-4xl' /></span></div>
  )
}

export default Header