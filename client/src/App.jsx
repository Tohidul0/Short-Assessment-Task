import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import LogIn from './Pages/LogIn'

function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/Login' element={<LogIn></LogIn>}></Route>
      </Routes>
    </>
  )
}

export default App
