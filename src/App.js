import React from 'react'
import LoginButton from './login/Login'
import LogoutButton from './logout/Logout'
import Profile from './profile/profile'

const App = () => {
  return (
    <div>
      <p>This is an Example of an Auth0</p>
      <LoginButton/>
      <LogoutButton/>
      <Profile/>
    </div>
  )
}

export default App