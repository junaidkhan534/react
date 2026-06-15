import React from 'react'
import { ArrowRight } from 'lucide-react'
import Card from './Card'

const RightContent = (props) => {
    console.log(props.users)
  return (
    <div className='h-[85vh] w-2/3 gap-10 rounded-4xl flex  overflow-x-auto'>
        <Card users={props.users}/>
    </div>
  )
}

export default RightContent
