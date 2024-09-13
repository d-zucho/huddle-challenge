import Logo from '../assets/images/logo.svg'

const Header = () => {
  return (
    <header className='py-7 px-4 flex justify-between bg-pale-cyan'>
      <div>
        <img src={Logo} alt='logo' className='w-32' />
      </div>
      <div>
        <button className='uppercase font-bold text-xs bg-white px-6 py-2 rounded-full shadow-md'>
          Try it free
        </button>
      </div>
    </header>
  )
}

export default Header
