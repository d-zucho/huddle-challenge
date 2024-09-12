import { CardFeatures } from '../lib/data'
import Card from './Card'

const Features = () => {
  return (
    <section className='bg-slate-100 px-4 py-20'>
      <div className='flex flex-col items-center md:flex-row gap-8'>
        {CardFeatures.map((feature, index) => (
          <div key={index}>
            <Card
              title={feature.title}
              description={feature.description}
              image={feature.image}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
