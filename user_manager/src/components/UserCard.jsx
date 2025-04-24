import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
    width: 200px;
    height: 300px;
    border: 1px solid black;
    border-radius: 15px;
    padding: 10px;
    margin: 10px;

    &:hover{
        transform: translateY(-4px);
    }
`
const Img = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 25px;
    border: 1px solid black;
`
const UserInfo = styled.div`
    
`
const StatusSpan = styled.span`
    color: ${(props) => (props.$now ? '#04ff00' : '#8f8f8f')};
    font-weight: bold;
`

const UserCard = ({user}) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/user/${user.id}`)
    }

  return (
    <Container onClick={handleClick}>
        {/* 프로필 사진 */}
        <Img src={`/assets/images/${user.imgTitle}`} alt={user.name} />
        {/* 유저 정보 */}
        <UserInfo>
            <h2>{user.name}</h2>
            <h3>{user.id}</h3>
            <StatusSpan $now={user.status}>{user.status ? '◉온라인' : '◉오프라인'}</StatusSpan>
        </UserInfo>
    </Container>
  )
}

export default UserCard;