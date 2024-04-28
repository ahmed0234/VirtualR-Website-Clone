import {features} from '../constants'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger);

function FeaturesSection() {
  
  useGSAP(() => {
    
    gsap.from('#Featuretext', {
      y: 120,
      opacity: 0,
      duration: 1.4,
      ease: 'expo',
      scrollTrigger: {
        trigger: '#Featuretext',
        start: 'top 80%',
        // markers: true,

      }
    })
    
    gsap.from('#FeatureCards', {
      y: 120,
      opacity: 0,
      duration: 1.4,
      ease: 'expo',
      scrollTrigger: {
        trigger: '#Featuretext',
        start: 'top 75%',
        // markers: true,

      }
    })




  }, []) 

  return (
    <div id='FeaturesSection' className="relative mt-20 border-b border-neutral-800 min-h-fit">

        <div className="text-center ">

            <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-6 py-2 uppercase">
                feature
            </span>

            <h2 id='Featuretext' className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">Easily Build your 
              <span className="bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent"> code</span>
            </h2>
        </div>

        <div id='FeatureCards' className="flex flex-wrap mt-10 lg:mt-20">

            {features.map((item, index)=>(
              <div key={index} className='w-full sm:w-1/2 lg:w-1/3'> 
                <div className='flex '>
                    <div className='flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full'>
                        {item.icon}
                    </div>
                    <div >
                        <h5 className='mt-1 mb-6 text-xl'>{item.text}</h5>
                        <p className='text-sm p-2 mb-16 text-neutral-400'>{item.description}</p>
                    </div>
                </div>
              </div>
            ))}
            
        </div>



    </div>
  )
}

export default FeaturesSection