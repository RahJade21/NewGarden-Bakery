import { logo, facebook, instagram, whatsapp } from '../assets/icons'
import { mainbg, mainbg2, mainbg3 } from '../assets/images'
import Button from '../components/Button'
import { useState, useEffect } from 'react'

const Hero = () => {
  const backgrounds = [mainbg, mainbg2, mainbg3]
  const [currentBg, setCurrentBg] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length)
    }, 8000)

    return () => clearInterval(interval)
  })

  return (
    <section style={{ 
          backgroundImage: `url(${mainbg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
    }} className='h-screen w-full py-8 sm:py-24 px-14 sm:px-18'>
      <div className='lg:flex justify-between items-end'>
        <div className='flex flex-col gap-4 sm:gap-6 max-w-xl sm:max-w-2xl'>
          <img src={logo} alt="Logo" className='w-[320px] sm:w-[420px] pb-2 sm:pb-10' />
          <h1 className='font-inria text-4xl sm:text-5xl'>Traditional Artisian Bakery</h1>
          <p className='font-karla text-xs sm:text-sm'>A traditional artisan bakery uses high-quality ingredients and time-honored techniques, such as hand-shaping and long fermentation, to create handcrafted baked goods in smaller batches. These bakeries prioritize quality, flavor, and craftsmanship over mass production, often using natural starters and avoiding artificial preservatives</p>
          <div>
            <button className='btn-slide-fill'><span>Shop Now</span></button>
          </div>
        </div>
        <div className='flex flex-row md:flex-row gap-5 sm:gap-10 pt-10'>
          <a href="">
            <img src={facebook} alt="facebook" className='w-[24px] h-[24px] md:w-[36px] md:h-[36px]'/>
          </a>
          <a href="">
            <img src={instagram} alt="instagram" className='w-[24px] h-[24px] md:w-[36px] md:h-[36px]'/>
          </a>
          <a href="">
            <img src={whatsapp} alt="whatsapp" className='w-[24px] h-[24px] md:w-[36px] md:h-[36px]'/>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero