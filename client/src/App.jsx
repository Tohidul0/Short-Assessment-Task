import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import LogIn from './Pages/LogIn'
import SignUp from './Pages/SignUp'
import Mission from './Pages/Mission'
import PrivateRoute from './Components/PrivateRoute'
import Dashboard from './Pages/Dashboard'

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/Login' element={<LogIn></LogIn>}></Route>
        <Route path='/Signup' element={<SignUp></SignUp>}></Route>
        <Route path="/dashboard" element ={<Dashboard></Dashboard>}></Route>
        <Route element={<PrivateRoute/>}>
              
              <Route path='/missions' element={<Mission></Mission>}></Route>
           
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
