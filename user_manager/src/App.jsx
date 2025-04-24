import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import userData from './userData'
import UserList from './pages/UserList'
import UserDetail from './pages/UserDetail'
import UserRegistration from './pages/UserRegistration'
import NotFound from './pages/NotFound'
import { useState } from 'react'


function App() {
    const [users, setUsers] = useState(userData);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList users={users} setUsers={setUsers} />} />
        <Route path="/user/:id" element={<UserDetail users={users} setUsers={setUsers}/>} />
        <Route path="/user" element={<UserRegistration users={users} setUsers={setUsers}/>} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
