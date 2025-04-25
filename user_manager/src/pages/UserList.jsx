import React from 'react'
import styled from 'styled-components'
import UserCard from '../components/UserCard'
import { Link } from 'react-router-dom'

const Container = styled.div`
  max-width: 800px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  border: 1px solid black;
  border-radius: 20px;
  margin-bottom: 30px;
`
const Button = styled.button`
  display: block;
  margin: 20px 20px 10px auto;
  background: #ffcc5f;


  &:hover {
    background: #fac043;
    border: #fac043;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
  }

  &:active {
    background: #fac043;
  }
`

const UserList = ({ users }) => {
  return (
    <>
      <Link to="/user">
        <Button>+ 새로운 유저 등록하기</Button>
      </Link>
      <Container>
        {users.map((user) => <UserCard key={user.userNo} user={user} />)}
      </Container>
    </>
  )
}

export default UserList