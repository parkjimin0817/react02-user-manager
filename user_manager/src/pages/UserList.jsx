import React from 'react'
import styled from 'styled-components'
import UserCard from '../components/UserCard'
import { Link } from 'react-router-dom'

const Container = styled.div`
  display: flex;
  margin-bottom: 30px;
`

const UserList = ({users}) => {
  return (
    <>
    <Container>
      {users.map((user) => <UserCard key={user.userNo} user={user}/>)}
    </Container>
    <Link to="/user">
      <button>새로운 유저 등록하기</button>
    </Link>
    </>
  )
}

export default UserList