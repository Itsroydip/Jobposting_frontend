import {Login,Register} from './pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
function App() {  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        
      </Routes>      
    </BrowserRouter>

  )
}

export default App
