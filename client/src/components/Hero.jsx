import heropic from '../assets/images/heropic.jpg'
import anothercombo from '../assets/images/anothercombo.jpg'
import combo from '../assets/images/combo.jpg'
import lastcombo from '../assets/images/lastcombo.jpg'
import bigcombo from '../assets/images/bigcombo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'

const Hero = () => {
  return (
    <section className="container" id='hero'>
      <div className='flex justify-center items-center flex-col md:flex-row'>
        <div>
          <img src={anothercombo} alt="" className='w-30 m-2 rounded-2xl'/>
        </div>
        
        <div className='text-center text-lg leading-10'>
          <h2 className='font-bold text-6xl'>Holiday Combo Sale</h2>
          <p className='text-4xl font-bold'>Save upto 70%</p>
          <p>No code neeeded, price as marked</p>
          <button className='bg-red-600 px-8 py-2 rounded-full text-white hover:animate-bounce hover:font-bold'>Shop Now <FontAwesomeIcon icon={faArrowRight} /></button>

        </div>
        
      </div>

    </section>
  )
}

export default Hero