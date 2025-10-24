import { clientItems } from '../constants'

const Testimonials = () => {
  return (
    <section className='w-full h-full flex flex-col items-center'>
      <div className='text-4xl md:text-6xl font-inria pb-8'>Testimonials</div>
      <div className='w-full grid grid-cols-6 gap-5 p-18'>
        {clientItems.map((item, index) => (
          <div key={index} className={`bg-red-400 relative group overflow-hidden cursor-pointer ${item.classes}`}>
            <img src={item.image} alt={`client-${index + 1}`} className='w-full h-full object-cover transition-transform duration-200 group-hover:scale-110' />

            <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-all duration-200'></div>

            <div className='absolute inset-0 flex items-center justify-center px-4 text-center text-white opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200'>
              {item.text}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials