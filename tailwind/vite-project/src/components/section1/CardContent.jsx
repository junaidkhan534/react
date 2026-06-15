import React from 'react'
import { ArrowRight } from 'lucide-react'
const CardContent = (props) => {
    // console.log(props.id)
  return (
      <div className='relative shrink-0 h-full w-80 rounded-3xl overflow-hidden'>
            <img className='h-full inset-0  w-full object-cover absolute' src={props.img} alt="" />
            <div className=' absolute inset-0 z-10 flex flex-col justify-between p-4'>
                <h2 className='bg-white h-10 w-10 rounded-full flex items-center justify-center'>{props.id+1}</h2>
                <div>
                    <p className='text-white mt-24 mb-4 tracking-wide leading-1.1 p-6 font-mono'>
                         in est ullam quibusdam ratione, facilis, vitae nobis suscipit? Accusantium et est nesciunt molestias. Error, dolorem necessitatibus!
                    </p>
                    <div className='flex items-center justify-center text-white'>
                        <button style={{backgroundColor: props.color}} className=' rounded-full px-5 py-1'>
                            {props.tag}
                        </button>
                        <button style={{backgroundColor: props.color}} className=' rounded-full p-1'>
                            <ArrowRight />
                        </button>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default CardContent
