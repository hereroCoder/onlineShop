import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram,faFacebook,faTwitter,faWhatsapp,faTiktok} from "@fortawesome/free-brands-svg-icons";
import {faCopyright} from "@fortawesome/free-solid-svg-icons";
import logo from '../assets/icons/logo.png'

const Footer = () => {
  return (
    <footer className='flex flex-col justify-between px-1/5 items-center bg-black text-slate-300 gap-4 py-4 text-xs'>
      {/* more info for desktop */}
      <img src={logo} alt="logo" className='w-20'/>
      <div className='hidden md:flex mb-4 text-md justify-around w-full'>
        <div className='flex flex-col leading-6'>
          <h3 className='font-bold text-lg mb-2'>About Chibz</h3>
          <a href="#" className='hover:font-bold '>History</a>
          <a href="#" className='hover:font-bold '>Careers</a>
          <a href="#" className='hover:font-bold '>suppliers</a>
        </div>

        <div className='flex flex-col leading-6'>
          <h3 className='font-bold text-lg mb-2'>Help</h3>
          <a href="#" className='hover:font-bold '>Customer Service</a>
          <a href="#" className='hover:font-bold '>Order Status</a>
          <a href="#" className='hover:font-bold '>FAQ</a>
        </div>

         <div className='flex flex-col leading-6'>
          <h3 className='font-bold text-lg mb-2'>our website</h3>
          <a href="#" className='hover:font-bold '>Terms & Conditions</a>
          <a href="#" className='hover:font-bold '>Privacy & Cookie Policy</a>
          <a href="#" className='hover:font-bold '>Accessibility</a>
        </div>
      
      </div>

      {/* socials */}
      <div className='flex justify-center items-center gap-4'>
        <FontAwesomeIcon className='text-2xl cursor-pointer hover:scale-110' icon={faInstagram} />
        <FontAwesomeIcon className='text-2xl cursor-pointer hover:scale-110' icon={faFacebook} />
        <FontAwesomeIcon className='text-2xl cursor-pointer hover:scale-110' icon={faTwitter} />
        <FontAwesomeIcon className='text-2xl cursor-pointer hover:scale-110' icon={faWhatsapp} />
        <FontAwesomeIcon className='text-2xl cursor-pointer hover:scale-110' icon={faTiktok} />
      </div>

      {/* Copyrights */}
      <div className='flex justify-center items-center gap-1'>
        <FontAwesomeIcon icon={faCopyright} />
        <p>2024 W.CHIBZ All rights reserved. By Wame Chibamo</p>
      </div>
     
    </footer>
  )
}

export default Footer