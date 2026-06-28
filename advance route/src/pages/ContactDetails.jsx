import React from 'react'
import { useParams } from 'react-router-dom'

const ContactDetails = () => {
    let param = useParams()
    console.log(param);
    
  return (
    <div>
        <h1>ContactDetails </h1>
    </div>
  )
}

export default ContactDetails