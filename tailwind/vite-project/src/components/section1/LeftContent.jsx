import React from 'react'
import { ArrowUpRight } from 'lucide-react';

const LeftContent = () => {
    return (
        <div className='w-1/3 flex flex-col justify-between px-10 pt-12'>
            <div>

            <h3 className='text-3xl font-black tracking-wide pb-6 font-sans'>
                Prospective <br />
                Customer <br />
                Segmentation
            </h3>
            <p className='font-light text-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ulla jbssh  jkbsjhs skjbs  bjubsj Lorem ipsum dolor sit amet
            </p>
            </div>
            <div>
                <ArrowUpRight size={68} strokeWidth={2.25} />
            </div>
        </div>
    )
}

export default LeftContent
