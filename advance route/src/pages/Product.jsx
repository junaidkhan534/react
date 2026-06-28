import React from 'react'
import Mens from './Mens'
import Women from './Women'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
        <Link className='text-center font-semibold m-5 px-4 py-2 text-3xl underline' to='/product/men'>Men</Link>
        <Link className='text-center font-semibold m-5 px-4 py-2 text-3xl underline' to='/product/women'>Women</Link>
        {/* <h1>Product Page</h1> */}
        <Outlet/>
    </div>
  )
}

export default Product