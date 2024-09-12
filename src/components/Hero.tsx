import HeroBg from '../assets/images/bg-hero-mobile.svg'
import MobileHeroImg from '../assets/images/illustration-mockups.svg'

const Hero = () => {
  return (
    <div className='text-center md:text-left px-8 py-12 md:px-20 w-full relative z-0 md:flex md:gap-12 md:items-center md:justify-between'>
      <div
        className='w-full absolute  inset-0 -z-10'
        style={{
          backgroundImage: `url(${HeroBg})`,
        }}
      ></div>
      <div className='space-y-8 max-w-lg flex-1'>
        <h1 className='text-2xl md:text-5xl font-bold text-dark-cyan'>
          Build The Community Your Fans Will Love
        </h1>
        <p className='text-[18px] text-pale-cyan'>
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as your
          engage in genuine discussions.
        </p>
        <button className='bg-primary text-white py-3 px-10 rounded-full'>
          Get Started For Free
        </button>
      </div>
      <div className='max-w-full mt-12 flex-1 md:max-w-[50%]'>
        <img src={MobileHeroImg} alt='' className='max-w-full' />
      </div>
    </div>
  )
}

export default Hero
