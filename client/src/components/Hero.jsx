

import combo from '../assets/images/combo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'

const Hero = () => {
  return (
    <section id='hero' className='pt-40'>
      <div className='flex justify-center items-center flex-col md:flex-row'>
        <div>
          <img src={combo} alt="" className='w-30 m-2 rounded-2xl'/>
        </div>
        
        <div className='text-center text-lg leading-10'>
         
          <h1 className='font-bold text-6xl'>Select a Holiday Combo</h1>
          <p className='text-4xl font-bold'>Save upto 70% off</p>
          <p>No code neeeded, price as marked</p>
          <button className='bg-red-600 px-8 py-2 rounded-full text-white hover:animate-bounce hover:font-bold'>Shop Now <FontAwesomeIcon icon={faArrowRight} /></button>
           <p className='text-sm'>Taste of Southren Africa in the UK</p>

        </div>
        
      </div>

    </section>
  )
}

export default Hero