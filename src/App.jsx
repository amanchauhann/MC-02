import './App.css'
import Archives from './Pages/Archives'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archives" element={<Archives />} />
      </Routes>
    </>
  )
}

export default App
