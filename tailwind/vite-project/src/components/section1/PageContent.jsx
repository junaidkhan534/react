import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const PageContent = (props) => {
  
  return (
    <div className='flex gap-10'>
      <LeftContent/>
      <RightContent users={props.users}/>
    </div>
  )
}

export default PageContent
