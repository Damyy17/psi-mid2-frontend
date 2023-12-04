import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/LogIn'
import Layout from './components/Layout'
import CreateAppointment from './pages/CreateAppointment'
import Profile from './pages/Profile'
import Appointments from './pages/Appointments'
import Medications from './pages/Medications'

function App() {
  return (
    <>
      <Routes>
        <Route 
          path='/'
          element={<Layout />}
        >
          <Route 
            path='/create-appointment'
            element={ <CreateAppointment />}
          />
          <Route
            path='/profile'
            element={ <Profile />}
          />
          <Route
            path='/appointments'
            element={ <Appointments />}
          />
           <Route 
            path="/medications" 
            element={<Medications />} 
          />
        </Route>
        <Route
            path='/login'
            element={ <Login />}
          />
      </Routes>
    </>
  )
}

export default App
