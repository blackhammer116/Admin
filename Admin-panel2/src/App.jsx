import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signin from './pages/Signin.jsx'
import Dash from './pages/dashboard.jsx'
import { BrowserRouter,Routes,Route,Link,NavLink } from "react-router-dom"
import Users from './components/Users.jsx'
import Employees from './components/Employees.jsx'
import AssignTask from './components/AssignTask.jsx'
import Service from './components/Service.jsx'
import Pending from './components/Pending.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>   
      
    <BrowserRouter>
  
  <Routes>
    <Route  index element={<Signin/>}/>
    <Route  path="/signin" element={<Signin/>}/>
    <Route  path="/users" element={<Users/>}/>
    <Route  path="/employee" element={<Employees/>}/>
    <Route  path="/services" element={<Service/>}/>
    <Route path="/dash" element={<Dash/>} />
    <Route path='/assignTask' element={<AssignTask />} />
    <Route path='/pending' element={<Pending/>} />
  </Routes>
  </BrowserRouter>
 
    </div>
  )
}

export default App
