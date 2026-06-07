import React from 'react'
import { Bookmark } from 'lucide-react'

const card = (props) => {
  return (
    <div className='card'>
        <div className="top">
          <img src={props.name.brandLogo} alt=""/>
          <button>save <Bookmark size={15}/></button>
        </div>
        <div className="center">
          <div className='a'>
            <h3>{props.name.companyName}</h3>
            <span>{props.name.datePosted}</span>
          </div>
          <h1>{props.name.post}</h1>
          <div className='b'>
            <h4>{props.name.tag1}</h4>
            <h4>{props.name.tag2}</h4>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h3>{props.name.pay}</h3>
            <span>{props.name.location}</span>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
      
  )
}

export default card
