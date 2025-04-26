import React from 'react'
import styled from 'styled-components'
import UserCard from '../components/user/UserCard'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { useUsers } from '../context/UserContext'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 800px;
  justify-content: space-around;
  border-radius: 20px;
  margin: 0 auto;
`
const ButtonDiv = styled.div`
  padding: 10px;
  width: 800px;
`
const Button = styled.button`
  display: block;
  margin: 20px 20px 10px auto;
  background: ${props => props.theme === 'dark' ? '#c0c0c0' : '#81d5ff'};
  color: ${props => props.theme === 'dark' ? '#ffffff' : '#000000'};

  &:hover {
    background: ${props => props.theme === 'dark' ? '#c0c0c0' : '#81d5ff'};
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
  }

  &:active {
    background: ${props => props.theme === 'dark' ? '#c0c0c0' : '#81d5ff'};
  }
`

const UserList = () => {
  const { theme, toggleTheme } = useTheme();
  const { users } = useUsers();
  return (
    <>
      <ButtonDiv>
        <Link to="/user">
          <Button theme={theme}>+ 새로운 유저 등록하기</Button>
        </Link>
      </ButtonDiv>
      <Container>
        {users.map((user) => <UserCard key={user.userNo} user={user} />)}
      </Container>
    </>
  )
}

export default UserList