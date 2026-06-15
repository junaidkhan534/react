import React from 'react'
import Navbar from './Navbar'
import PageContent from './PageContent'

const section1 = (props) => {
  return (
    <div className='h-screen'>
      <Navbar />
      <PageContent users={props.users}/>
    </div>
  )
}

export default section1
