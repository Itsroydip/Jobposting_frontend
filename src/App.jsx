import {Login,Register} from './pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Toaster} from 'react-hot-toast'
import './App.css'
function App() {  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register/>} />
          
        </Routes>      
      </BrowserRouter>
      <Toaster/>
    </>

  )
}

export default App
