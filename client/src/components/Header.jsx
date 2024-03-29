import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark,faMagnifyingGlass,faUser,faCartShopping,faArrowsToDot} from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import { useCart } from 'react-use-cart';
import Cart from './Cart';
import logo from '../assets/icons/logo.png';



const Header = ({changeItems,changeCategory}) => {

  const [selectedCategory,setSelectedCategory] = useState('');

  const [searchedItems,setSearchedItems] = useState('')

  changeCategory(selectedCategory)

//seach items from input
  const handleClick = () =>{
      changeItems(searchedItems)
   }

//open cart or close
  const [open,setOpen] = useState(false);

//
  const [theCart,settheCart] = useState(false);


  const {totalItems} = useCart();

  const showNav = ()=>{
    setOpen(!open)
  };
  
  const openCart=()=>{
    settheCart(!theCart)
  }


  return (
    <header className='flex flex-col justify-center pb-4 gap-3 sticky top-0 left-0 right-0 bg-white z-50 w-full'>
      {/* top */}
      <div className='bg-blue text-white flex justify-end gap-3 p-2 px-10 md:px-24'>
        <a href="/onlineShop/" className='border-r pr-2 hover:underline'>Sign in</a>
        <a href="/onlineShop/" className='border-r pr-2 hover:underline'>Register</a>
        <a href="/onlineShop/" className='border-r pr-2 hidden md:flex hover:underline'>Careers</a>
        <a href="/onlineShop/" className='border-r pr-2 hidden md:flex hover:underline'>Countact us</a>
        <a href="/onlineShop/" className='border-r pr-2 hidden md:flex hover:underline'>Help</a>
      </div> 

      {/* middle */}
      <div className='flex justify-between pt-2 items-center px-10 md:px-24'>
        <a href="/onlineShop/">
           <img src={logo} alt="logo" className='w-20 md:w-28' />
        </a>
       

        {/* search */}
        <div className='hidden sm:flex justify-between border-2 bg-slate-100 items-center w-3/6 rounded-full'>
          <select name="" id="" className='bg-white p-3 rounded-bl-full rounded-tl-full outline-none ' onChange={(e)=>setSelectedCategory(e.target.value)}>
            <option value="" >All</option>
            <option value="Grocery" >Grocery</option>
            <option value="Snacks" >Snacks</option>
            <option value="Household" >Household</option>
            <option value="Drinks" >Drinks</option>
            <option value="Cosmetics" >Cosmetics</option>
          </select>
          <input 
            type="text" 
            placeholder='Search for products...' 
            className='outline-none bg-transparent'
            onChange={(e)=>setSearchedItems(e.target.value)}
          />
         <FontAwesomeIcon icon={faMagnifyingGlass} className='hover:cursor-pointer bg-blue text-white p-3 rounded-full ' onClick={handleClick} />
        </div>
       
        {/* account and cart */}
        <div className='flex gap-5'>
          {/* <div className='flex flex-col justify-center items-center hover:cursor-pointer'>
            <FontAwesomeIcon icon={faUser} className='text-gray-600 text-2xl' />
            <p className='hidden sm:block text-sm'>Account</p>
          </div> */}
           <div className='flex flex-col justify-center items-center hover:cursor-pointer' onClick={openCart}>
            <div>
              <p className='bg-orange text-stone-950 font-black text-lg w-5 h-5 rounded-full absolute flex items-center justify-center p-3 '>{totalItems}</p>
            </div>
            <FontAwesomeIcon icon={faCartShopping} className='text-gray-600 text-2xl'  />
            <p className='hidden sm:block text-sm'>Cart</p>
          </div>


        {/* hamburger
          {open?(
            <FontAwesomeIcon icon={faXmark} className='text-3xl right-2 z-50 sm:hidden w-4 text-gray-600 hover:cursor-pointer' onClick={showNav}/>

          ):(
            <FontAwesomeIcon icon={faBars} className='text-3xl text-gray-600 right-2 z-50 sm:hidden w-4 hover:cursor-pointer ' onClick={showNav}/>
          )
          } */}
          
         
        </div>

      </div>
      <nav className={`flex flex-col sm:hidden fixed justify-center gap-6 ${open?'right-0':'right-[-200%]'} top-0 w-3/4 h-full z-5 bg-white items-center`}>
        <a href="#household" className='hover:bg-gray-100 rounded duration-200 hover:font-semibold px-2'>Household</a>
        <a href="#self-care" className='hover:bg-gray-100 rounded duration-200 hover:font-semibold px-2'>Skin-Care</a>
        <a href="#drinks" className='hover:bg-gray-100 rounded duration-200 hover:font-semibold px-2'>Drinks</a>
        <a href="#snacks" className='hover:bg-gray-100 rounded duration-200 hover:font-semibold px-2'>Snacks</a>
        <a href="#foods" className='hover:bg-gray-100 rounded duration-200 hover:font-semibold px-2'>Dry Foods</a>
      </nav>
      

      {/* bottom */}
     

      {/* cart content */}
      {
        theCart?(
          <div className='flex fixed justify-star w-full gap-4 h-screen z-50 bg-white py-4 right-0 top-0 overflow-scroll'>
             <Cart showNav={showNav}/>
            <FontAwesomeIcon icon={faXmark} className='text-3xl  text-gray-600 hover:cursor-pointer absolute right-5 max-sm:top-2 md:right-10' onClick={openCart}/>
          </div>
         
        ):(
          console.log("")
        )
      }

      {/* search on small screens */}
      <div className='flex sm:hidden justify-between border-2 bg-slate-100 items-center rounded-full w-4/5 shrink m-auto'>
         <select name="" id="" className='bg-white rounded-bl-full rounded-tl-full outline-none py-2' onChange={(e)=>setSelectedCategory(e.target.value)}>
            <option value="" >All</option>
            <option value="Grocery" >Grocery</option>
            <option value="Snacks" >Snacks</option>
            <option value="Household" >Household</option>
            <option value="Drinks" >Drinks</option>
            <option value="Cosmetics" >Cosmetics</option>
          </select>
             <input 
            type="text" 
            placeholder='Search' 
            className='outline-none bg-transparent p-0 w-1/2'
            onChange={(e)=>setSearchedItems(e.target.value)}
          /><FontAwesomeIcon icon={faMagnifyingGlass} className='hover:cursor-pointer bg-blue text-white p-3 rounded-full ' onClick={handleClick} />
         
        
      </div>

      {/* free shipping promotion */}
      <div className='bg-orange text-white flex justify-center p-2'>
      <p className='hidden md:flex text-center font-semibold text-black capitalize tracking-widest animate-bounce'>UK & Ireland (1 Day Delivery) Free Shipping for orders £50+ Offer ends Soon Hurry!!!</p> 
      <p className='md:hidden text-center font-semibold text-base text-black capitalize tracking-widest'>Free Shipping for orders £50+ </p> 
      </div>

    </header>
  )
}

export default Header
