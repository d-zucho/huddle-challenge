interface CardProps {
  title: string
  description: string
  image: string
}

const Card = ({ title, description, image }: CardProps) => {
  return (
    <article className='max-w-xs text-center px-4 shadow-lg py-12  text-dark-cyan flex flex-col items-center gap-12 rounded-3xl bg-white overflow-hidden bg-pale-cyan/90 h-[500px]'>
      <div className='w-full'>
        <img
          src={image}
          alt={title}
          className='max-w-full overflow-hidden h-[230px] object-contain'
        />
      </div>
      <div className='space-y-5'>
        <h3 className='text-xl font-bold'>{title}</h3>
        <p className='text-sm'>{description}</p>
      </div>
    </article>
  )
}

export default Card
