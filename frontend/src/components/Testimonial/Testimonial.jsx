// import React from 'react';
import { Pagination } from 'swiper';
import {Swiper,SwiperSlide} from 'swiper/react'
import "swiper/css"
import "swiper/css/pagination"
import patientAvatar from '../../assets/images/patient-avatar.png'
import patientAvatara from '../../assets/images/patient-avatar-a.png'
import patientAvatarb from '../../assets/images/patient-avatar-b.png'

// Removed unused import
import {HiStar} from 'react-icons/hi';
const Testimonial= () => {
  return (
    <div className='mt-[30px] lg:mt-[55px] '>
        <Swiper modules={[Pagination]} spaceBetween={30} slidesPerView={1} pagination={{clickable:true}}
        breakpoints={{

            640: {
                slidesPerView:1,
                spaceBetween:0,
            },
            768:{
                slidesPerView:2,
                spaceBetween:20,
            },
            1024:{
                slidesPerView:3,
                spaceBetween:30,
            },
        }}>

            <SwiperSlide>

                <div className='py-[30px] px-5 rounded-[13px]'>
                    <div className='flex items-center gap-[13px]'>
                        <img src={patientAvatar} alt="" />
                        <div>
                            <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Rinkesh Sinha</h4>
                        <div className='flex items-center gap-[2px]'>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                            
                            </div>
                            </div>
                    </div>

                    <p className='text-[16px]  leading-7 mt-4  text-textColor font-[400]'>
                    Finding a doctor can be overwhelming, but not with this web app! The Our Patient Says section made the process a breeze. Reading about others experiences put my mind at ease, and I found a doctor I trust. Kudos to the team for creating such a user-friendly platform!
                    </p>
                </div>
            </SwiperSlide>

            
            <SwiperSlide>

                <div className='py-[30px] px-5 rounded-[13px]'>
                    <div className='flex items-center gap-[13px]'>
                        <img src={patientAvatara} alt="" />
                        <div>
                            <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Rahul Kumar</h4>
                        <div className='flex items-center gap-[2px]'>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                            
                            </div>
                            </div>
                    </div>

                    <p className='text-[16px]  leading-7 mt-4  text-textColor font-[400]'>
                    I was skeptical about finding the right doctor online, but this web app exceeded my expectations! The Our Patient Says section gave me confidence in choosing a provider. After reading others positive experiences, I booked an appointment and received top-notch care. Highly recommend!
                    </p>
                </div>
            </SwiperSlide>

            
            <SwiperSlide>

                <div className='py-[30px] px-5 rounded-[13px]'>
                    <div className='flex items-center gap-[13px]'>
                        <img src={patientAvatarb} alt="" />
                        <div>
                            <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Shruti Pandey </h4>
                        <div className='flex items-center gap-[2px]'>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                            </div>
                            </div>
                    </div>

                    <p className='text-[16px]  leading-7 mt-4  text-textColor font-[400]'>
                    I can not thank this web app enough for making my healthcare experience so smooth and stress-free. The testimonials from other patients gave me the confidence to try it out, and I am thrilled I did. Its like having a supportive healthcare team right at my fingertips!
                    </p>
                </div>
            </SwiperSlide>
        </Swiper>
      
    </div>
  );
};

export default Testimonial;