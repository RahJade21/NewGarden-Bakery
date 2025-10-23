import { about1, about2 } from '../assets/images'
import { aboutUs } from '../constants'

const OurServices = () => {
  return (
    <section style={{ 
          backgroundImage: `url(${about1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
    }} className='h-[400px] w-full relative'>
      <div className='bg-black opacity-50 absolute inset-0'></div>
      <div className='relative z-10 h-full flex flex-col gap-8 justify-center items-center'>
        <h1 className='text-6xl font-inria'>Custom Cakes</h1>
        <p className='text-center max-w-250 text-xl'>Design your dream cake with Charlotte Bakery’s Custom Cakes. Choose flavours, fillings, and designs made to order with premium ingredients. Perfect for birthdays, weddings, and special celebrations, each cake is crafted with care and beautifully presented for unforgettable moments.</p>
      </div>
    </section>
  )
}

export default OurServices