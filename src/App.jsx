import './App.css'
import './index.css'
import Arrow from './components/Arrow'
import Avatar from './components/Avatar'
import Contact from './components/Contact'
import Design1 from './components/Design1'
import Edu from './components/Edu'
import Front from './components/Front'
import Journey from './components/Journey'
import Nav from './components/Nav'
import Project from './components/Project'
import Skills from './components/Skills'
import Work from './components/Work'
import {BrowserRouter} from "react-router-dom"


function App() {
  

  return (
    <>
    <BrowserRouter>
      <Nav/>
      <Avatar/>
      <Design1/>
      <Skills/>
      <Journey/>
      <Edu/>
      <Project/>
      <Front/>
      <Arrow/>
      <Work/>
      <Contact/>
      </BrowserRouter>
     </>
  )
}

export default App
