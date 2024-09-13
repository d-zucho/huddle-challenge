import Logo from '../assets/images/logo_copy.svg'
import Location from '../assets/images/icon-location.svg'
import Phone from '../assets/images/icon-phone.svg'
import Email from '../assets/images/icon-email.svg'
import { NavLinks } from '../lib/data'
const Footer = () => {
  return (
    <footer className='bg-dark-cyan pt-40 pb-20 px-4'>
      <div className='pb-8'>
        <img src={Logo} alt='' className='w-40' />
      </div>
      <div className='flex flex-col gap-7'>
        <div className='flex gap-8 items-start'>
          <img src={Location} alt='Location' className='w-6' />
          <div className='flex flex-col text-pale-cyan'>
            <span>Lorem ipsum dolor sit amet,</span>
            <span>consectetur adipiscing elit, sed do</span>
            <span>
              eliusmod tempor incidindunt ut labore et dolore magna aliqua
            </span>
          </div>
        </div>

        <div className='flex gap-8 items-start'>
          <img src={Phone} alt='Location' className='w-6' />
          <div className='flex flex-col text-pale-cyan'>+1-543-123-4567</div>
        </div>

        <div className='flex gap-8 items-start'>
          <img src={Email} alt='Location' className='w-6' />
          <div className='flex flex-col text-pale-cyan'>
            <span>example@fylo.com</span>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-4 text-white mt-16 text-[18px]'>
        {NavLinks.map((link, index) => (
          <span key={index}>{link}</span>
        ))}
      </div>

      <div className='text-center text-pale-cyan text-sm mt-20'>
        <span>&copy; Copyright 2018 Huddido. All rights reserved.</span>
      </div>
    </footer>
  )
}

export default Footer
