
import {CheckCircle2} from 'lucide-react'
import codeImg from '../assets/code.jpg'
import { checklistItems } from '../constants'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);
function Workflow() {

    useGSAP(() => {
        
        gsap.from('.Workflowtext', {
            y: 120,
            opacity: 0,
            duration: 1.3,
            ease: 'expo',
            stagger: 0.1,
            scrollTrigger: {
                trigger: '.Workflowtext',
                start: 'top 90%',
                // markers: true,
            }
        })
        
      }, []) 
  return (
    <div id='WorkflowSection' className='mt-20'>
        <h2  className='Workflowtext text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide'>
            Accelerate your <span className='bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent'> coding workflow.</span>
        </h2>
        <div className='Workflowtext flex flex-wrap justify-center mt-9'>

            <div className='p-2 w-full lg:w-1/2' >
                    <img src={codeImg} alt="Code" />
            </div>

            <div className=' pt-12 w-full lg:w-1/2 '>
                   {checklistItems.map((item, i)=>( 
                        <div key={i} className='flex mb-12 '>
                            <div className='text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full'>

                                <CheckCircle2 />
                            </div>
                            <div>
                                <h5 className='mt-1 mb-2 text-xl'>{item.title}</h5>
                                <p className='text-sm text-neutral-500 '>{item.description}</p>
                            </div>
                        </div>
                   ))} 
            </div>

        </div>

    </div>
  )
}

export default Workflow