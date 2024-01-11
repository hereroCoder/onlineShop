import React from 'react'
import spices from '../assets/images/spices.webp'
import drinks from '../assets/images/cold-drinks.webp'
import alcohol from '../assets/images/alcohol.webp'
import spreads from '../assets/images/spreads.webp'
import hotdrink from '../assets/images/hotdrink.webp'

const Collection = () => {
  return (
    <section className='py-10 w-4/5 m-auto'>
      <h2 className='text-center mb-10'>Top Seller Collections</h2>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4'>
        <div className='bg-white'>
          <img src={spices} alt="" className='w-52 hover:scale-105 cursor-pointer m-auto'/>
          <p className='py-2 text-center'>Spices</p>
        </div>
        <div className='bg-white'>
          <img src={alcohol} alt="" className='w-52 hover:scale-105 cursor-pointer m-auto'/>
          <p className='py-2 text-center'>Alcohol</p>
        </div>
        <div className='bg-white'>
          <img src={drinks} alt="" className='w-52 hover:scale-105 cursor-pointer m-auto'/>
          <p className='py-2 text-center'>Drinks</p>
        </div>
        <div className='bg-white'>
          <img src={spreads} alt="" className='w-52 hover:scale-105 cursor-pointer m-auto'/>
          <p className='py-2 text-center'>Spreads</p>
        </div>
        <div className='bg-white'>
          <img src={hotdrink} alt="" className='w-52 hover:scale-105 cursor-pointer m-auto'/>
          <p className='py-2 text-center'>Hot Drinks</p>
        </div>
      </div>

    </section>
  )
}

export default Collection