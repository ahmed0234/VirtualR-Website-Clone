import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'


function HeroSection() {

    useGSAP(() => {
            gsap.from('.Herotext1', {
                y: 120,
                opacity: 0,
                duration: 1.3,
                ease: 'expo',
                stagger: 0.3
            })
            gsap.from('#Videocon video', {
                y: 120,
                opacity: 0,
                duration: 1.3,
                ease: 'expo',
    
            })

   
    }, []) 


  return (
    <div className='flex flex-col items-center mt-6 lg:mt-16'>
            <h1  className='Herotext1 text-4xl sm:text-6xl lg:text-7xl text-center tracking-tight'>
                     <span className='bggradienthero'>~</span>Ahmed Hassan Website  
                    <span className='bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent'> with tailwindcss</span>
            </h1>
            <p className='Herotext1 mt-10 text-center text-lg text-neutral-500 max-w-4xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente magni architecto deserunt, in ipsa corrupti odit aliquid nulla ipsam, qui tempora praesentium obcaecati, explicabo voluptatem ipsum! Veniam, impedit. Blanditiis, aperiam! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
            <div className='Herotext1 flex justify-center my-7 gap-6'>
                    <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-4 rounded-md text-white flex justify-center items-center'>
                        Start for free
                    </a>
                    <a href="#" className='py-3 px-4 rounded-md border '>
                       Documentation
                    </a>
            </div>

            <div id='Videocon' className='flex flex-col md:flex-row w-full md:mt-10 justify-center'>
                <video autoPlay loop muted className='rounded-lg w-full md:w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4'>
                    <source src={video1} type='video/mp4'/>
                    Your Browser does not support the video tag.
                </video>
                <video  autoPlay loop muted className='rounded-lg w-full md:w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4'>
                    <source src={video2} type='video/mp4'/>
                    Your Browser does not support the video tag.
                </video>

            </div>

    </div>
  )
}

export default HeroSection