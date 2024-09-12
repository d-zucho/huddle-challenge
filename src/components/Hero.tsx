import HeroBg from '../assets/images/bg-hero-mobile.svg'
import MobileHeroImg from '../assets/images/illustration-mockups.svg'

const Hero = () => {
  return (
    <div className='text-center px-8 pt-12 w-full relative z-0'>
      <div
        className='w-full absolute  inset-0 -z-10'
        style={{
          backgroundImage: `url(${HeroBg})`,
        }}
      ></div>
      <div className='space-y-8'>
        <h1 className='text-2xl font-bold'>
          Build The Community Your Fans Will Love
        </h1>
        <p className='text-[18px]'>
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as your
          engage in genuine discussions.
        </p>
        <button className='bg-primary text-white py-3 px-10 rounded-full'>
          Get Started For Free
        </button>
      </div>
      <div className='max-w-full mt-12'>
        <img src={MobileHeroImg} alt='' className='max-w-full' />
      </div>
    </div>
  )
}

export default Hero
