import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark,faMagnifyingGlass,faUser,faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';



const Header = () => {
  const [open,setOpen] = useState(false);

  const showNav = ()=>{
    setOpen(!open)
  };



  return (
    <header className='flex flex-col justify-center pb-6 gap-3 sticky top-0 bg-white'>
      {/* top */}
      <div className='bg-gray-100 py-2'>
        <p className='text-center font-semibold text-sm'><span className='text-red-400'>Free</span> Shipping for orders over £50</p>
      </div>

      {/* medium */}
      <div className='flex justify-between px-4 items-center'>
        <h1 className='font-playfair text-xl font-bold tracking-widest'>Uandje Reka</h1>

        {/* search */}
        <div className='hidden md:flex justify-between px-8 py-2 border-2 border-gray-200 bg-gray-100 items-center w-3/5 rounded-full'>
          <input type="text" placeholder='Search' className='outline-none bg-transparent w-2/3'/>
         <FontAwesomeIcon icon={faMagnifyingGlass} className='text-gray-300' />
        </div>

        {/* account and cart */}
        <div className='flex gap-4'>
          <div className='flex flex-col justify-center items-center'>
            <FontAwesomeIcon icon={faUser} className='text-gray-600 text-lg' />
            <p className='hidden sm:block text-sm'>Account</p>
          </div>
           <div className='flex flex-col justify-center items-center'>

            <FontAwesomeIcon icon={faCartShopping} className='text-gray-600 text-lg' />
            <p className='hidden sm:block text-sm'>Cart</p>
          </div>

        {/* hamburger */}
          {open?(
            <FontAwesomeIcon icon={faXmark} className='text-3xl right-2 z-50 sm:hidden w-4 text-gray-600' onClick={showNav}/>

          ):(
            <FontAwesomeIcon icon={faBars} className='text-3xl text-gray-600 right-2 z-50 sm:hidden w-4' onClick={showNav}/>
          )
          }
          
         
        </div>

      </div>
      <nav className={`flex flex-col sm:hidden fixed justify-center gap-6 ${open?'right-0':'right-[-200vw]'} top-20 w-2/4 z-50 bg-white items-center py-4`}>
        <a href="#cleaning" className='hover:bg-gray-100 rounded duration-200 hover:font-semibold px-2'>Household</a>
        <a href="#skincare" className='hover:bg-gray-100 rounded duration-200 hover:font-semibold px-2'>Skin-Care</a>
        <a href="#drinks" className='hover:bg-gray-100 rounded duration-200 hover:font-semibold px-2'>Drinks</a>
        <a href="#snacks" className='hover:bg-gray-100 rounded duration-200 hover:font-semibold px-2'>Snacks</a>
        <a href="#foods" className='hover:bg-gray-100 rounded duration-200 hover:font-semibold px-2'>Dry Foods</a>
      </nav>
      

      {/* bottom */}
      <nav className='hidden sm:flex justify-center items-center gap-6'>
        <a href="#cleaning" className='hover:bg-gray-100 rounded duration-200 hover:font-semibold px-2'>Household</a>
        <a href="#skincare" className='hover:bg-gray-100 rounded duration-200 hover:font-semibold px-2'>Skin-Care</a>
        <a href="#drinks" className='hover:bg-gray-100 rounded duration-200 hover:font-semibold px-2'>Drinks</a>
        <a href="#snacks" className='hover:bg-gray-100 rounded duration-200 hover:font-semibold px-2'>Snacks</a>
        <a href="#foods" className='hover:bg-gray-100 rounded duration-200 hover:font-semibold px-2'>Dry Foods</a>
      </nav>

    </header>
  )
}

export default Header