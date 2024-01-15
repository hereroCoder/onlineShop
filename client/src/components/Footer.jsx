import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram,faFacebook,faTwitter,faWhatsapp,faTiktok} from "@fortawesome/free-brands-svg-icons";
import {faCopyright} from "@fortawesome/free-solid-svg-icons";
import logo from '../assets/icons/logowhite.png'
import botswana from '../assets/images/botswana.png'
import FooterAccordion from './FooterAccordion';

const Footer = () => {
  return (
    <footer className='flex flex-col justify-between items-center bg-blue gap-4 py-4 text-xs'>
      {/* more info for desktop */}
      {/*  */}
      <div className=' hidden items-center sm:flex mb-4 text-md sm:justify-around w-full'>
        <div className='flex flex-col leading-6 gap-3'>
          <img src={logo} alt="logo" className='w-20'/>
          <img src={botswana} alt="" className='w-20'/>

        </div>
        <div className='flex flex-col leading-6'>
          <h3>About Chibz</h3>
          <a href="" className='hover:underline '>History</a>
          <a href="" className='hover:underline '>Careers</a>
          <a href="" className='hover:underline '>suppliers</a>
        </div>

        <div className='flex flex-col leading-6'>
          <h3>Help</h3>
          <a href="" className='hover:underline '>Customer Service</a>
          <a href="" className='hover:underline '>Order Status</a>
          <a href="" className='hover:underline '>FAQ</a>
        </div>

         <div className='flex flex-col leading-6'>
          <h3>Our Website</h3>
          <a href="" className='hover:underline '>Terms & Conditions</a>
          <a href="" className='hover:underline '>Privacy & Cookie Policy</a>
          <a href="" className='hover:underline '>Accessibility</a>
        </div>
      
      </div>
      
      {/* footer for smaller screen */}
      <div className='sm:hidden'>
          <FooterAccordion/>
      </div>

      {/* socials */}
      <div className='flex justify-center flex-wrap items-center gap-4'>
        <FontAwesomeIcon className='text-2xl cursor-pointer text-white hover:scale-110' icon={faInstagram} />
        <FontAwesomeIcon className='text-2xl cursor-pointer text-white hover:scale-110' icon={faFacebook} />
        <FontAwesomeIcon className='text-2xl cursor-pointer text-white hover:scale-110' icon={faTwitter} />
        <FontAwesomeIcon className='text-2xl cursor-pointer text-white hover:scale-110' icon={faWhatsapp} />
        <FontAwesomeIcon className='text-2xl cursor-pointer text-white hover:scale-110' icon={faTiktok} />
      </div>

      {/* Copyrights */}
      <div className='flex justify-center items-center gap-1'>
        <FontAwesomeIcon icon={faCopyright} className='text-white' />
        <p className='text-xs'><script>document.write(new Date().getFullYear())</script> Chibz| All rights reserved| By Wame Chibamo</p>
      </div>
     
    </footer>
  )
}

export default Footer