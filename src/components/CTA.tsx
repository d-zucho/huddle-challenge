const CTA = () => {
  return (
    <section className='px-4 py-12 flex flex-col items-center w-full mx-auto bg-slate-100'>
      <div className='bg-white rounded-2xl flex flex-col items-center gap-8 w-fit shadow-lg px-8 md:px-10 py-12 text-center translate-y-1/2'>
        <h3 className='text-xl font-bold md:text-3xl'>
          Ready To Build Your Community?
        </h3>
        <button className='font-bold text-sm md:text-base bg-primary text-white px-6 py-2 rounded-full w-fit shadow-md'>
          Get Started For Free
        </button>
      </div>
    </section>
  )
}

export default CTA
