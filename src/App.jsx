import { Hero, Filter, FilterDisplay, OurServices, Testimonials, Footer } from './sections';
import Nav from './components/Nav';

const App = () => {
  return (
    <main className='bg-dark-1 text-white font-karla'>
      <Nav />
      <section>
        <Hero />
      </section>
      <section>
        <Filter />
      </section>
      <section>
        <FilterDisplay />
      </section>
      <section>
        <OurServices />
      </section>
      <section>
        <Testimonials />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  )
}

export default App