import './App.css'
import NavBar from './components/NavBar/NavBar'
import Home from './views/Home/Home'
import Login from './views/Login/Login'
import MyAppointments from './views/MyAppointments/MyAppointments'
import Register from './views/Register/Register'

function App() {

  return (
    
      <div>
        <NavBar />
        <Home />
        <MyAppointments />
        <Register />
        <Login />
      </div>
  )
}

export default App
