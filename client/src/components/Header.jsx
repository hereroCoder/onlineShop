import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark,faMagnifyingGlass,faUser,faCartShopping,faArrowsToDot} from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import { useCart } from 'react-use-cart';
import Cart from './Cart';



const Header = () => {
  const [open,setOpen] = useState(false);
  const [theCart,settheCart] = useState(false);


  const {totalItems} = useCart();

  const showNav = ()=>{
    setOpen(!open)
  };
  const openCart=()=>{
    settheCart(!theCart)
  }


  return (
    <header className='flex flex-col justify-center pb-4 gap-3 sticky top-0 bg-white'>
      {/* top */}
      <div className='bg-red-600 py-2'>
        <p className='text-center font-semibold text-lg text-gray-100 capitalize tracking-widest animate-bounce'>(1 Day Delivery) Free Shipping for orders £50+ Offer ends Soon Hurry!!!</p>
      </div>

      {/* middle */}
      <div className='flex justify-between px-4 pt-2 items-center'>
        <a href="#hero">
           <h1 className='font-playfair text-xl font-bold tracking-widest'>W
          <FontAwesomeIcon icon={faArrowsToDot} />
          CHIBZ</h1>
        </a>
       

        {/* search */}
        <div className='hidden sm:flex justify-between px-8 py-2 border-2 border-gray-200 bg-gray-100 items-center w-3/5 rounded-full'>
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
            <p className='bg-red-500 text-white font-bold w-4 h-4 rounded text-center text-sm top-10 fixed'>{totalItems}</p>
            <FontAwesomeIcon icon={faCartShopping} className='text-gray-600 text-lg' onClick={openCart} />
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
      <nav className={`flex flex-col sm:hidden fixed justify-center gap-6 ${open?'right-0':'right-[-200vw]'} top-20 w-2/4 z-30 bg-white items-center py-4`}>
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
      

      {/* cart content */}
      {
        theCart?(
          <div className='flex flex-col fixed justify-center gap-6 top-20 w-2/4 z-50 bg-white items-center py-4 right-0'>
             <Cart/>
          </div>
         
        ):(
          console.log("")
        )
      }

    </header>
  )
}

export default Header

// todo: animate top part