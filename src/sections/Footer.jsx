import { logo, location, uparrow } from "../assets/icons"

const Footer = () => {
  return (
    <section className="font-inria flex flex-col gap-12">
      <div className="flex justify-between px-18 text-xl">
        <div className="flex flex-col gap-2">
          <p className="text-3xl font-semibold">The Biggest Online Bakery Store in Indonesia</p>
          <p>With excellent customer service and delivery teams</p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <p className="text-2xl font-semibold">24/7 Delivery Service Team</p>
          <p>We're open 24 hours a day, everyday, for orders and delivery</p>
        </div>
      </div>

      <div class="w-full h-[2px] bg-gray-400"></div>

      <div className="flex items-end justify-between px-18">
        <div className="flex gap-8">
          <img src={logo} alt="logo" className="w-60"/>
            <div className="flex flex-col justify-center gap-3 text-lg max-w-150 leading-8">
              <p className="text-orange">Jl. Dharma Putra 11 No.11, RT.8/RW.7, South Kebayoran Lama, Kebayoran Lama, South Jakarta City, Jakarta 12240</p>
              <a href="#" className="flex items-center gap-2 group">
                <img src={location} alt="location" className="w-4 h-6" />
                <p className="text-md text-orange font-bold relative">
                  Shop Location
                  <span
                    className="absolute left-0 bottom-0 h-[2px] w-0 bg-orange transition-all duration-300 group-hover:w-full"
                  ></span>
                </p>
              </a>
            </div>
        </div>
        <div>
          <img src={uparrow} alt="uparrow" className="w-12 pb-10" />
        </div>
      </div>

      <div className="bg-orange w-full flex justify-center p-4 text-black font-bold">
        <p>© 2025 New Garden. All Rights Reserved.</p>
      </div>
    </section>
  )
}

export default Footer