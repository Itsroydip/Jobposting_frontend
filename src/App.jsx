import {Login,Register, Home, Addjob} from './pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Toaster} from 'react-hot-toast'
import './App.css'
function App() {  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/job/create" element={<Addjob />} />
          
        </Routes>      
      </BrowserRouter>
      <Toaster/>
    </>

  )
}

export default App
