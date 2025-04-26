import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import UserList from './pages/UserList'
import UserDetail from './pages/UserDetail'
import UserRegistration from './pages/UserRegistration'
import NotFound from './pages/NotFound'
import { useState } from 'react'
import Nav from './components/Nav'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import styled from 'styled-components'
import { UserProvider } from './context/UserContext'

const AppContainer = styled.div`
  background-color:${props => props.theme === 'dark' ? '#1a1a1a' : '#ffffff'};
`

function App(){
  return(
    <ThemeProvider>
      <UserProvider>
        <AppContent/>
      </UserProvider>
    </ThemeProvider>
  )
}

function AppContent() {
  const {theme} = useTheme();

  return (
      <AppContainer theme={theme}>
        <BrowserRouter>
          <Nav/>
          <Routes>
            <Route path="/" element={<UserList/>} />
            <Route path="/user/:id" element={<UserDetail/>} />
            <Route path="/user" element={<UserRegistration/>} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AppContainer>
  )
}

export default App
