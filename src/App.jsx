import { Routes, Route } from "react-router-dom"
import Navbar from "./layout/Navbar"
import Footer from "./layout/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Treatments from "./pages/Treatments"
import Location from "./pages/Location"
import Contact from "./pages/Contact"
import Book from "./pages/Book"


function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/about"} element={<About/>}/>
        <Route path={"/treatments"} element={<Treatments/>}/>
        <Route path={"/location"} element={<Location/>}/>
        <Route path={"/contact"} element={<Contact/>}/>
        <Route path={"/book"} element={<Book/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
