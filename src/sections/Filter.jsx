import { schedule } from "../assets/icons"
import { search, cart } from "../assets/icons"

const Filter = () => {
  return (
    <section>
      <div className='bg-dark-2 h-fit flex flex-col md:flex-row justify-between items-center p-10 text-[orange] font-karlas'>
        <div className="hidden md:block">
          Filter by:
          <div className='pt-4 flex flex-col gap-1'>
            <p className="text-lg text-[orange]">Daily Items</p>
            <p className="text-[gray]">Pastry</p>
            <p className="text-[gray]">Best Seller</p>
          </div>
        </div>
        <div className='text-6xl font-inria'>Customer <br /> Favorites</div>
        <div className="items-center gap-3 hidden md:flex">
          <img src={schedule} alt="schedule" className="w-[32px] h-[32px]" />
          <p className="text-[14px] max-w-xs">Loaded and delivered baked goods to clients, ensuring timely and safe transport. Reviewed orders pre- and post-delivery to confirm accuracy</p>
        </div>
      </div>

      <div className="bg-dark-2 m-4 px-2 flex items-center justify-between rounded-md">
        <div className="flex">
          <img src={search} alt="search" className="w-[50px] p-2" />
          <input type="text" className="w-full"/>
        </div>
        <div className="flex items-center">
          <img src={cart} alt="cart" className="w-[40px]" />
          <p className="font-inria text-[orange] px-3">Total: 0</p>
        </div>
      </div>
    </section>

    
  )
}

export default Filter