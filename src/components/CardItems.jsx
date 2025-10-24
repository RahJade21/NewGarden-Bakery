import { cardItems } from "../constants"

export const CardItems = () => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 font-inria bg-dark-1'>
      {cardItems.map((item, index) => (
        <div key={index} className="w-full h-full bg-dark-2 hover:bg-dark-orange duration-200 py-14 px-2 flex flex-col items-center rounded-xl">
          <img src={item.imgUrl} alt={item.name} className="w-[260px]" />
          <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-10 pt-12 px-5 md:px-10">
            <div>
              <p className="text-gray">$ {item.cost}</p>
              <p className="text-2xl">{item.name}</p>
            </div>
            <div className="pb-1 gap-1 flex flex-col justify-end items-start md:items-end">
              <div className="relative group">
                <img
                  src={item.info}
                  alt="info"
                  className="w-[18px] cursor-pointer"
                />
                
                {/* Tooltip Box */}
                <div className="
                  absolute bottom-full right-0 mb-2 
                  bg-dark-2 text-white px-3 py-2 rounded-md
                  border border-orange shadow-lg
                  opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100
                  transition-all duration-300 origin-bottom-right w-48 text-sm
                  z-20
                ">
                  {item.description}
                </div>
              </div>
              <p className="font-judson text-gray">{item.weight}</p>
              <button className="btn-slide-fillr cursor-pointer"><span>Add</span></button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CardItems
