

import combo from '../assets/images/combo.jpg'
import africa from '../assets/images/sunset.jpg'
import groceries from '../assets/images/groceries.jpeg'
import pep from '../assets/images/pep.jpeg'
import choppies from '../assets/images/choppies.jpeg'
import spar from '../assets/images/spar-Tops.webp'
import sefalana from '../assets/images/sefalana.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


const Hero = () => {
  return (
    <section id='hero' className='bg-white'> 
    <Swiper
      // spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      

      <SwiperSlide>
        <div className='relative w-full h-96'>

          <img src={groceries} alt="" className='object-scale-down'/>
           <div className='absolute top-1/4 z-5 bg-white p-4 rounded border-2 border-blue'>
            <h1>Your Favorite Botswana Shops </h1>
            <p>Brought to your door steps</p>
            <div className='grid grid-cols-4 gap-2 '>
              <img src={pep} alt=""      className='w-24 h-24 object-fill'  />
              <img src={choppies} alt="" className='w-24  h-24 object-fill' />
              <img src={sefalana} alt="" className='w-24  h-24 object-fill' />
              <img src={spar} alt=""     className='w-24  h-24 object-fill' />
            </div>
            <button className='bg-blue px-8 py-2 rounded-full text-white hover:animate-bounce hover:font-bold m-2'>Shop Now <FontAwesomeIcon icon={faArrowRight} /></button>
            <p className='text-sm'>Taste of Botswana in the UK</p>
          </div>

        </div>
        
      </SwiperSlide>
      <SwiperSlide>
        <div className='relative w-full h-96'>
          <img src={combo} alt="" className='w-3/4 h-full object-contain'/>
          <div className='absolute top-1/4 z-5 bg-white p-4 rounded right-20 border-2 border-blue'>
            <h1 className='my-2'>Select A Combo</h1>
            <p className='mb-2'>No code neeeded, price as marked</p>
            <button className='bg-blue px-8 py-2 rounded-full text-white hover:animate-bounce hover:font-bold mb-2'>Shop Now <FontAwesomeIcon icon={faArrowRight} /></button>
            <p className='text-sm'>Taste of Botswana in the UK</p>
          </div>

        </div>

      </SwiperSlide>

    </Swiper>


    </section>
  )
}

export default Hero