

import combo from '../assets/images/combo.jpg'
import africa from '../assets/images/sunset.jpg'
import groceries from '../assets/images/groceries.jpeg'
import pep from '../assets/images/pep.jpeg'
import choppies from '../assets/images/choppies.jpeg'
import spar from '../assets/images/spar-Tops.webp'
import sefalana from '../assets/images/sefalana.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';



const Hero = () => {
  return (
    <section id='hero' className='bg-white'> 
    <Swiper
      pagination={true} modules={[Pagination]}
    >
      

      <SwiperSlide>
        <div className='relative w-full h-96'>

          <img src={groceries} alt="" className='w-full h-full object-cover'/>
           <div className='absolute bottom-10 w-3/4 md:w-2/5 z-5 bg-white p-4 rounded'>
            <h1 className='hidden md:flex'>Your Favorite Botswana Shops </h1>
            <h1 className='md:hidden'>All Your Favorites</h1>
            <div className='md:flex hidden justify-evenly my-2 '>
              <img src={pep} alt=""      className='w-20 h-20 object-fill'  />
              <img src={choppies} alt="" className='w-20 h-20 object-fill' />
              <img src={sefalana} alt="" className='w-20 h-20 object-fill' />
              <img src={spar} alt=""    className='w-20 h-20 object-fill' />
            </div>
             <p className='text-sm mb-2'>Taste of Botswana in the UK</p>
             <Link to="/onlineShop/Shop" className=" bg-blue py-2 px-6 rounded font-semibold text-white group-hover:cursor-pointer">Shop Now <FontAwesomeIcon icon={faArrowRight} /></Link>
           
          </div>

        </div>
        
      </SwiperSlide>
      <SwiperSlide>
        <div className='relative w-full h-96'>
          <img src={combo} alt="" className='w-full h-full object-cover md:object-scale-down '/>
          <div className='absolute bottom-10 z-5 bg-white p-4 rounded'>
            <h1 className='my-2'>Select A Combo</h1>
            <p className='mb-2'>No code neeeded, price as marked</p>
            <Link to="/onlineShop/Shop" className=" bg-blue py-2 px-6 rounded font-semibold text-white group-hover:cursor-pointer">Shop Now <FontAwesomeIcon icon={faArrowRight} /></Link>
            
          </div>

        </div>

      </SwiperSlide>

    </Swiper>


    </section>
  )
}

export default Hero