import { navLinks } from '../constants';
import { hamburger } from '../assets/icons';
import { phone } from '../assets/icons'

const Nav = () => {
  return (
    <header className='w-screen text-white py-8 fixed z-10'>
      <nav className='w-full flex justify-end items-center px-8 md:px-10 pt-2'>
        {/* <div className='flex pr-48 gap-2'>
          <img src={phone} alt="phone" width={20} height={18}/>
          <p>+62 867 7798 3856</p>
        </div> */}
        <ul className='flex gap-16 max-md:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='hidden pt-1 max-md:block'>
          <img src={hamburger} alt="Hamburger" width={25} height={25}/>
        </div>
      </nav>
    </header>
  )
}

export default Nav