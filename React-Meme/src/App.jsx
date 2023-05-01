import React, { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Form from './components/Form'
import Footer from './components/Footer'
function App() {

  return (
    <div>
        <Nav/>
        <div className='main'>
        <Form/>
        </div>
        <Footer/>
    </div>
  )
}

export default App
