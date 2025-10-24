import { CardItems } from "../components/CardItems"


const FilterDisplay = () => {
  return (
    <section className="bg-dark-1 m-4">
      <div className="flex flex-col items-center">
        <div className="">
          <CardItems />
        </div>
        <div className="bg-dark-1 py-10 pb-14">
          <button className="btn-slide-fill2 cursor-pointer"><span>View All</span></button>
        </div>
      </div>
    </section>
  )
}

export default FilterDisplay