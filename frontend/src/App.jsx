

import MainNavbar from './Navbar'
import Home from './Pages/Home'
import About from './Pages/About/index'
import Footer from './Footer/index'
import { Routes, Route } from 'react-router-dom'
import Courses from './Pages/Courses'
import Blogs from './Pages/Blogs';
import Features from './Pages/Pages/Features'
import Testimonial from './Pages/Pages/Testimonial'
import Team from './Pages/Pages/Team'
import Contact from './Pages/Contact'

//import './App.css'

function App() {


  return (
    <>
      <MainNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/features" element={<Features />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
      <Footer />


    </>
  )
}

export default App
