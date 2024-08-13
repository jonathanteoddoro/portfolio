import next from './assets/next.svg'
import react from './assets/react.svg'
import js from './assets/js.svg'
import python from './assets/python.svg'
import node from './assets/node.svg'
import { FaNode } from "react-icons/fa";

function Experiencia(){
    return(
        <>
            <h2 className='text-center mb-[48px] mt-[88px] text-[20px] text-[#C5C5C5]'>
                Experiência em:
            </h2>
            <div className='flex flex-wrap flex-row justify-around md:mx-[20%] mx-[20%] gap-4'>
            <img src={next} title="Next.js" className='w-[42px] transition-transform duration-300 transform hover:scale-125'></img>
<img src={react} title="React" className='w-[42px] transition-transform duration-300 transform hover:scale-125'></img>
<img src={js} title="JavaScript" className='w-[42px] transition-transform duration-300 transform hover:scale-125'></img>
<img src={python} title="Python" className='w-[42px] transition-transform duration-300 transform hover:scale-125'></img>

                <FaNode size={72} color="#c5c5c5" title='Node.js' className='transition-transform duration-300 transform hover:scale-125' />

            </div>
        </>
    )
}
export default Experiencia