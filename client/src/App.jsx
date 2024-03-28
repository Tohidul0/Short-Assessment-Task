import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import LogIn from './Pages/LogIn'
import SignUp from './Pages/SignUp'

function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/Login' element={<LogIn></LogIn>}></Route>
        <Route path='/Signup' element={<SignUp></SignUp>}></Route>
      </Routes>
    </>
  )
}

export default App
