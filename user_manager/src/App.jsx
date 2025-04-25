import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import userData from './userData'
import UserList from './pages/UserList'
import UserDetail from './pages/UserDetail'
import UserRegistration from './pages/UserRegistration'
import NotFound from './pages/NotFound'
import { useState } from 'react'
import Nav from './components/Nav'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import styled from 'styled-components'

const AppContainer = styled.div`
  height: 100vh;
  background-color:${props => props.theme === 'dark' ? '#1a1a1a' : '#ffffff'};
`

function App(){
  const [users, setUsers] = useState(userData);
  
  return(
    <ThemeProvider>
      <AppContent users={users} setUsers={setUsers}/>
    </ThemeProvider>
  )
}

function AppContent({users, setUsers}) {
  const {theme} = useTheme();

  return (
      <AppContainer theme={theme}>
        <BrowserRouter>
          <Nav/>
          <Routes>
            <Route path="/" element={<UserList users={users} setUsers={setUsers} />} />
            <Route path="/user/:id" element={<UserDetail users={users} setUsers={setUsers}/>} />
            <Route path="/user" element={<UserRegistration users={users} setUsers={setUsers}/>} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AppContainer>
  )
}

export default App
