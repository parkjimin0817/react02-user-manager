import React from 'react'
import styled from 'styled-components'
import UserCard from '../components/UserCard'
import { Link } from 'react-router-dom'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 800px;
  border: 1px solid black;
  border-radius: 20px;
  margin-bottom: 30px;
`
const Button = styled.button`
  display: block;
  margin: 20px 20px 10px auto;
`

const UserList = ({ users }) => {
  return (
    <>
      <Link to="/user">
        <Button>새로운 유저 등록하기</Button>
      </Link>
      <Container>
        {users.map((user) => <UserCard key={user.userNo} user={user} />)}
      </Container>
    </>
  )
}

export default UserList