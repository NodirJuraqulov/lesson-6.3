import React from 'react'
import toast from 'react-hot-toast';
import { HEADER } from '../../static'

const Footer = () => {
  return (
    <footer className='w-[95%] mx-auto border-t-2 border-b-2 border-gray-200 mb-5'>
        <div className='container mx-auto grid grid-cols-4'>
            {
                HEADER?.map((item) => (
                    <ul key={item.id} className='border-1 border-gray-200 pl-2 py-4'>
                        <h3 className='mb-5 text-2xl font-medium'>{item.title}</h3>
                        {
                            item.items?.map((i) => (
                                <li key={i} className='mb-4 cursor-pointer w-full hover:underline hover:text-blue-700' onClick={() => {toast.success(`${i}`, {position: "bottom-right"})}}>{i}</li>
                            ))
                        }
                    </ul>
                ))
            }
        </div>
    </footer>
  )
}

export default Footer