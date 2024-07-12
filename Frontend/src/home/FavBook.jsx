import React from 'react'
import FavBookImg from '../assets/favoritebook.jpg'
import { Link } from 'react-router-dom';

const FavBook = () => {
  return (
    <div className='px-4 lg:px_24 my-20 flex flex:col md:flex-row justify-between items-center gap-12 bg-orange-200'>
        <div className='md:w-1/2'>
            <img src={FavBookImg} alt="" className=' mx-16 rounded-md md:w-10/12'/>
        </div>
            <div className='md:w-1/2 space-y-6'>
            <h2 className='text-6xl font-bold my-5 md:w-3/4 leading-snug'>Find Your Favorite <span 
            className='text-yellow-600 font-extrabold hover:text-black text-5xl'>Book Here!</span></h2>
            <p className='mb-10 text-lg md:w-5/6'>Chances are your friends are discussing their favorite (and least favorite) books on Reader's Cave.</p>
           {/* stat */}
            <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
                <div>
                    <h3 className=' text-3xl font-bold'>400+</h3>
                    <p className='text-base'>Book Listing</p>
                </div>
                <div>
                    <h3 className=' text-3xl font-bold'>200+</h3>
                    <p className='text-base'>Register Users</p>
                </div>
                <div>
                    <h3 className=' text-3xl font-bold'>500+</h3>
                    <p className='text-base'>PDF Downloads</p>
                </div>
            </div>

            <Link to="/shop" className='mt-12 block'><button className='bg-yellow-600 text-white font-semibold px-5 py-2 rounded hover:bg-black 
            transition-all duration-300'>Explore More</button></Link>
        </div>
    </div>
  )
}

export default FavBook
