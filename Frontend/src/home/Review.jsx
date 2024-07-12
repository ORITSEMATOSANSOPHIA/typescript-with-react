import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

//react icons
import {FaStar} from 'react-icons/fa6'
import { Avatar } from "flowbite-react";
import proPic from '../assets/profile.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';


const Review = () => {
  return (
    <div className='my-12 px-4 lg:px-24'>
       <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Our Customer's Review</h2>
       <div>
       <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='shadow-2xl bg-orange-200 py-8 px-4 md-m5 rounded-lg border'>
            <div className='space-y-6'>
                {/* text */}
                <div className='mt-5'>
                     <Avatar img={proPic}
                     alt="avatar of Jese" rounded className='w-10 mb-2' />
                     <h5 className=' text-xl font-medium '>Nuella Fred</h5>
                     <p className='text-base mb-4'>Book Lover </p>
                     <p className='mb-5'>One of the huge strengths of this novel for me was the world building - descriptively brilliant, feeling authentic and realistic in its scientific basis but still very much focusing on the human aspect -
                     the two sides to the coin so to speak are interwoven in fine fashion to give a solid backdrop to the drama going on.</p>
              </div>
              <div className='text-yellow-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-orange-200 py-8 px-4 md-m5 rounded-lg border'>
            <div className='space-y-6'>

                {/* text */}
                <div className='mt-5'>
                     <Avatar img={proPic}
                     alt="avatar of Jese" rounded className='w-10 mb-2' />
                     <h5 className=' text-xl font-medium '>Nuella Fred</h5>
                     <p className='text-base mb-4'>Book Lover </p>
                     <p className='mb-5'>A beautiful, poingnant story that is so incredibly, lyrically captivating you are seduced from the very first word. An absolute work of art,
                     each page overflows with beautiful, sensual, evocative images.</p>
              </div>
              <div className='text-yellow-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-orange-200 py-8 px-4 md-m5 rounded-lg border'>
            <div className='space-y-6'>

                {/* text */}
                <div className='mt-5'>
                     <Avatar img={proPic}
                     alt="avatar of Jese" rounded className='w-10 mb-2' />
                     <h5 className=' text-xl font-medium '>Nuella Fred</h5>
                     <p className='text-base mb-4'>Book Lover </p>
                     <p className='mb-5'>insightful? Really? God, I was naive. This novel, while entertaining is so problematic I rarely have time to descend into my criticism. It continues the Orientalism that Edward Said loathed so very much; rather than "skillfully entering" 
                     but the sappy ending, the frankly sexist portrayals at some points, and Sayuri's outright inability to identify outside of her Chairman is rather frightening. 
                        It serves to objectify fetishism at its worst. Yet I can only give you three stars, because I'm still partly under your spell, Golden. Damn.</p>
              </div>
              <div className='text-yellow-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-orange-200 py-8 px-4 md-m5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='mt-5'>
                     <Avatar img={proPic}
                     alt="avatar of Jese" rounded className='w-10 mb-2' />
                     <h5 className=' text-xl font-medium '>Nuella Fred</h5>
                     <p className='text-base mb-4'>Book Lover </p>
                     <p className='mb-5'>I liked the writing style. Some people may find it pretentious but I understood that this is an attempt to write as close as possible to Japanese style of writing and story-telling and to seem poetic. The writing also helped me to see the world through Chiyo’s eyes and better understand her mind.
                         I should mention that Chiyo and Sayuri are the same person.</p>
              </div>
              <div className='text-yellow-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                
            </div>
        </SwiperSlide>
      </Swiper>
       </div>
    </div>
  )
}

export default Review
