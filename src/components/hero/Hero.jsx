import React from 'react'
import toast from 'react-hot-toast';
import './main.css'

const Hero = ({title, main_title, desc, more, image, hover, color, collection}) => {
  return (
    <div style={{background: `url(${image}) no-repeat center/cover`, color: color}} className='w-full h-[950px] flex justify-center py-12 mb-4 mt-4 container mx-auto'>
        <div className='text-center flex flex-col justify-between'>
            <div className='text-center'>
                <h3 className='text-5xl font-bold mb-6'>{title}</h3>

                <ul className='flex items-center gap-6 justify-center'>
                    {
                        collection?.map((i) => (
                            <li key={i} className='text-xl font-medium hover:underline cursor-pointer' onClick={() => {toast.success(`${i}`, {position: "top-center"})}}>{i}</li>
                        ))
                    }
                </ul>
            </div>

            <div className='text-center'>
                <h2 className='text-[60px] font-bold mb-3'>{main_title}</h2>
                <p className='text-xl font-normal mb-3'>{desc}</p>

                <div className='flex items-center gap-8 justify-center'>
                    <a href="#" className='font-medium hover:underline'>{more}</a>
                    <button id={hover} className='btn w-30 h-12 rounded-3xl font-medium'>Buy now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero