import {Menu, X} from 'lucide-react'
import { useState } from 'react'
import logo from '../assets/logo.png'
import {navItems} from '../constants'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'

function Navbar() {

    const Navbartl = gsap.timeline({
        delay: 0,
    })

    useGSAP(() => {
        Navbartl.from('#Logo',{
            y: -40,
            opacity: 0,
            duration: 1,
            ease: 'bounce.out',
        })
        Navbartl.from('#navItems li', {
            y: -40,
            opacity: 0,
            duration: 1,
            ease: 'bounce.out',
            stagger: 0.1,
            delay: -0.7,
        })
        Navbartl.from('#Navbtns a', {
            y: -40,
            opacity: 0,
            duration: 1,
            ease: 'bounce.out',
            stagger: 0.1,
            delay: -0.75,
        })
        Navbartl.from('#Hamburger button', {
            y: -40,
            opacity: 0,
            duration: 1,
            ease: 'bounce.out',
            stagger: 0.1,
            delay: -1.7,
        })

   
    }, [])  



    const [mobileDrawerOpener, setmobileDrawerOpener] = useState(false)

    const toggleNavbar = () => setmobileDrawerOpener(!mobileDrawerOpener)


  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0" id='Logo'>
                        <img className='w-10 h-10 mr-2' src={logo} alt="Logo" />
                        <span className='text-xl tracking-tight'>VirtualR</span>
                </div>
                <ul id='navItems' className='hidden lg:flex ml-14 space-x-12'>
                    {navItems.map((item, i)=>(
                        <li key={i}>
                            <a href={item.href} className='hover:text-orange-500 transition-colors duration-200 ease-linear '>{item.label}</a>
                        </li>
                    ))}
                </ul>
                <div id='Navbtns' className="hidden lg:flex justify-center space-x-12 items-center">
                    <a href="#" className='py-2 px-3 border rounded-md'>Sign In</a>
                    <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md'>Create an Account</a>
                </div>
                <div id='Hamburger' className='lg:hidden flex flex-col justify-end'>
                      <button onClick={toggleNavbar}>
                          {mobileDrawerOpener? <X /> : <Menu />}
                      </button>
                </div>
            </div>
            {mobileDrawerOpener && (
              <div className='fixed right-0 z-20 bg-neutral-900 w-full p-10 flex flex-col justify-center items-center lg:hidden'>
                  <ul>
                      {navItems.map((item, i)=> (
                          <li key={i} className='py-4'>
                              <a href="#" className='hover:text-orange-500 transition-colors duration-200 ease-linear '>{item.label}</a>
                          </li>
                      )) }
                  </ul>
                    <br />
                  <div className="flex lg:hidden justify-center space-x-4 items-center">
                    <a href="#" className='py-2 px-3 border rounded-md'>Sign In</a>
                    <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md'>Create an Account</a>
                </div>
              </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar