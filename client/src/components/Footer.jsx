import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram,faFacebook,faTwitter,faWhatsapp,faTiktok} from "@fortawesome/free-brands-svg-icons";
import {faCopyright} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className='flex flex-col justify-center items-center bg-black text-slate-300 gap-4 py-4 text-xs'>
      {/* more info for desktop */}
      <div className='hidden md:flex mb-4 text-md justify-around w-full'>
        <div className='flex flex-col leading-6'>
          <h3 className='font-bold text-lg'>Company info</h3>
          <a href="#" className='hover:font-bold '>About us</a>
          <a href="#" className='hover:font-bold '>Careers</a>
        </div>

        <div className='flex flex-col leading-6'>
          <h3 className='font-bold text-lg'>Help</h3>
          <a href="#" className='hover:font-bold '>Customer Service</a>
          <a href="#" className='hover:font-bold '>Order Status</a>
          <a href="#" className='hover:font-bold '>FAQ</a>
        </div>
      
      </div>

      {/* socials */}
      <div className='flex justify-center items-center gap-4'>
        <FontAwesomeIcon className='text-2xl hover:text-red-100' icon={faInstagram} />
        <FontAwesomeIcon className='text-2xl hover:text-red-100' icon={faFacebook} />
        <FontAwesomeIcon className='text-2xl hover:text-red-100' icon={faTwitter} />
        <FontAwesomeIcon className='text-2xl hover:text-red-100' icon={faWhatsapp} />
        <FontAwesomeIcon className='text-2xl hover:text-red-100' icon={faTiktok} />
      </div>

      {/* Copyrights */}
      <div className='flex justify-center items-center gap-1'>
        <FontAwesomeIcon icon={faCopyright} />
        <p>2023 All rights reserved</p>
      </div>
     
    </footer>
  )
}

export default Footer