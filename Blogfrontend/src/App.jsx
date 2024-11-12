import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import { Route, Routes } from 'react-router-dom'
import Blogs from './components/Blogs'
import AddBlog from './components/AddBlog'
import Main from './components/Main'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/l' element={<Login/>}/>
      <Route path='/s' element={<Signup/>}/>
      <Route path='/n' element={<Navbar/>}/>
      <Route path='/b' element={<Main child={<Blogs/>}/>}/>
      <Route path='/ab'  element={<Main child={<AddBlog/>}/>}/>
        
    </Routes>
    </>
  )
}

export default App
