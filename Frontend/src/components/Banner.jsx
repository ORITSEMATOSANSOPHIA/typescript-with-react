import React from 'react'
import BannerCard from '../home/BannerCard'

const Banner = () => {
  return (
   <div className='px-4 lg:px-20 bg-red-200 flex items-center'>
    <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
      {/* left side */}
      <div  className='md:w-1/2 space-y-8 h-full'>
        <h2 className='text-4xl leading-snug font-bold text-black'>Buy and Sell Your Books <span className='text-red-700'>for the Best Prices</span></h2>
        <p className='md:w-4/5'> Gain access to a massive audience of book lovers. Reader"s Cave is a great place to promote your books..</p>
          <div>
            <input type="search" name='search' id='search' placeholder='Search a book'
             className='py-1 px-1 rounded-s-sm outline-none' />
             <button className='bg-black px-4 py-1 text-white font-medium hover:bg-red-700 transition-all duration-200'>Search</button>
          </div>
      </div>

      {/* right side */}
      <div>
        <BannerCard></BannerCard>
      </div>
    </div>
   </div>
  )
}

export default Banner






