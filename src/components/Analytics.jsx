import React from 'react'
import Laptop from '../assets/laptop.png'

const Analytics = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/" width="300px" />
                <div className='flex flex-col justify-center'>
                    <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
                    <h1 className=' md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytcs Centerally</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur
                        adipisicing elit. Ducimus dignissimos
                        possimus praesentium non, doloribus exercitationem
                        accusamus velit laudantium provident molestiae est
                        repudiandae impeditnemo aliquid quidem iusto quibusdam reiciendis
                        dolorem!</p>
                        <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium  my-6 mx-auto md:mx-0 py-3  font-semibold'>Get Started</button>

                </div>

            </div>

        </div>
    )
}

export default Analytics