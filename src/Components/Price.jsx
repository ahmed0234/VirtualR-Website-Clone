

import {CheckCircle2} from 'lucide-react'
import {pricingOptions} from '../constants'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger);
function Price() {

    useGSAP(() => {
        
        gsap.from('.PricingText', {
            y: 120,
            opacity: 0,
            duration: 1.3,
            ease: 'expo',
            stagger: 0.1,
            scrollTrigger: {
                trigger: '.PricingText',
                start: 'top 85%',
                // markers: true,
            }
        })
        
      }, []) 
  return (

    <div id='PricingSection' className='mt-20'>
        <h2 className='PricingText text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide'>
            Pricing
        </h2>
        <div className="PricingText flex flex-wrap">
            {pricingOptions.map((items, index)=> (
                <div key={index} className='w-full sm:w-1/2 lg:w-1/3 p-2 '>
                    <div className='p-10 border border-neutral-700 rounded-xl'>
                        <p className='text-4xl mb-8'>{items.title} {index === 1 && <span className='text-lg bg-gradient-to-r from-orange-500 to-red-400 bg-clip-text font-semibold ml-2 text-transparent'>(Most Popular)</span>}</p>
                        <p className='mb-8'>
                            <span className='text-5xl mt-6 mr-2'>{items.price}</span>
                            <span className='text-neutral-400 tracking-tight'>/Month</span>
                        </p>
                        <ul>
                            {items.features.map((featureItems, i)=> (
                                <li key={i} className='mt-8 flex items-center '>
                                    <CheckCircle2 />    
                                    <span className='ml-2'>{featureItems}</span>
                                </li>
                            ))}
                        </ul>
                        <a href="#" className='inline-flex justify-center items-center text-center w-full 
                        h-12 p-5 tracking-tight text-xl hover:bg-orange-600 border border-orange-900 rounded-lg transition duration-200 mt-14'>Subscribe</a>

                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Price