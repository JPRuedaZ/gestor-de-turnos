import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Home from './views/Home/Home'
import Login from './views/Login/Login'
import MyAppointments from './views/MyAppointments/MyAppointments'
import Register from './views/Register/Register'
import Landin from './views/Landing/Landing'
import Error from './views/Error/Error'
import NewAppointment from './views/NewAppointment/NewAppointment'

function App() {
  const location = useLocation();
  const validRoutes = ["/home", "/login", "/appointments", "/register", "/appointments/new"]; // Lista de rutas válidas en tu aplicación

  let isErrorPage = validRoutes.includes(location.pathname);
 

  return (
      <div className="App">
        {isErrorPage && <NavBar />}
        <Routes>
         <Route path="/" element={<Landin />}/>
         <Route path="/home" element={<Home />}/>
         <Route path="/login" element={<Login />}/>
         <Route path="/appointments" element={<MyAppointments />}/>
         <Route path="/register" element={<Register />}/>
         <Route path="/appointments/new" element={<NewAppointment />}/>
         <Route path="*" element={<Error />}/>
        </Routes>
      </div>
  )
}

export default App
