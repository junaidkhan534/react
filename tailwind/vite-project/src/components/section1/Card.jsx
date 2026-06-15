import React from 'react'
import { ArrowRight } from 'lucide-react'
import CardContent from './CardContent'

const Card = (props) => {
    return (
        props.users.map(function(elem,idx){
            return <CardContent key={idx} id={idx} name={elem} img={elem.img} color={elem.color} tag={elem.tag} />
        })
  )
}

export default Card
