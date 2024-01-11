import React from 'react'
import sunset from '../assets/images/sunset.jpg'

const About = () => {
  return (
    <section className='py-5 w-4/5 m-auto mb-10'>
      <h2 className='text-center mb-10'>Who we are</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      <p className='text-center leading-10'>
Welcome to Chibz! We're not just an online shop; we're your connection to the heart of Botswana, right here in the UKFrom delicious snacks to essential household items, Chibz is your gateway to experiencing the authentic flavors and quality products from Botswana. Whether you're from Botswana or simply curious about something new, everyone is invited to enjoy the convenience and richness that Chibz delivers to your doorstep!</p>
 <img src={sunset} alt="" className= 'w-full m-auto'/>

      </div>
      


    </section>
  )
}

export default About