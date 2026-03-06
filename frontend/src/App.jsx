

import MainNavbar from './Navbar'
import Home from './Pages/Home'
import About from './Pages/About/index'
import Footer from './Footer/index'
import { Routes, Route } from 'react-router-dom'

//import './App.css'

function App() {


  return (
    <>
      <MainNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

      </Routes>
      <Footer/>
      

    </>
  )
}

export default App
