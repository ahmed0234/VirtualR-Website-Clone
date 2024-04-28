import {testimonials} from '../constants'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger);


function Tertimonials() {
    useGSAP(() => {
        
        gsap.from('.testimonialtext', {
            y: 120,
            opacity: 0,
            duration: 1.3,
            ease: 'expo',
            stagger: 0.1,
            scrollTrigger: {
                trigger: '.testimonialtext',
                start: 'top 85%',
                // markers: true,
            }
        })
        
      }, []) 
  return (
    <div id='TestimonialSection' className='mt-20 tracking-wide '>
        <h2 className='testimonialtext text-center text-3xl sm:text-5xl lg:text-6xl my-10 lg:my-20'>
            What people are saying!
        </h2>
        <div className='testimonialtext flex flex-wrap justify-center'>

            {testimonials.map((testimonial, i)=>(
                <div key={i} className='w-full sm:w-1/2 lg:w-1/3 px-4 py-2'>
                    <div className='bg-neutral rounded-md p-6 text-sm border border-neutral-800 font-thin'>
                        <p>{testimonial.text}</p>
                        <div className='flex mt-8 items-center'>
                            <img className='w-12 h-12 mr-6 rounded-full border border-neutral-300 ' src={testimonial.image} alt={testimonial.user}  />
                            <div className='flex flex-col gap-1'>
                                <h6>{testimonial.user}</h6>
                                <span className='text-sm font-normal italic text-neutral-500'>{testimonial.company}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    </div>
  )
}

export default Tertimonials