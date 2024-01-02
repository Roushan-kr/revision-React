import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <UserContextProvider>
      <div className="text-center">hi i have acess </div>
      <div className="text-center  justify-center">
        <Login/>
        <Profile/>
      </div>
    </UserContextProvider>
  )
}

export default App
