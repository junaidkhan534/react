import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import NotFound from './pages/NotFound'
import Mens from './pages/Mens'
import Women from './pages/Women'
import ContactDetails from './pages/ContactDetails'

const App = () => {

  let navigate = useNavigate()

  return ( 
    <div className='h-screen bg-black text-white'>
      <Header />
      <div className='flex items-center justify-start gap-5 px-4 py-4'>
        <button className='bg-amber-800 px-5 py-2 rounded active:scale-95 cursor-pointer text-xl'
        onClick={() => {
          navigate('/')
        }}
        >Back to Home page</button>
        <button className='bg-teal-950 px-5 py-2 rounded active:scale-95 cursor-pointer text-xl'
        onClick={() => {
          navigate(-1)
        }}
        >Back</button>
        <button className='bg-teal-950 px-5 py-2 rounded active:scale-95 cursor-pointer text-xl'
        onClick={() => {
          navigate(+1)
        }}
        >Next</button>      
      </div>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/contact/:id' element={<ContactDetails/>} />
          <Route path='/product' element={<Product/>} >
            <Route path='men' element={<Mens/>}/>
            <Route path='women' element={<Women/>}/>
          </Route>
          <Route path='*' element={<NotFound/>} />
        </Routes>
      <Footer/>
    </div>
  )
}

export default App
