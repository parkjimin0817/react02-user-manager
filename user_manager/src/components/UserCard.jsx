import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useTheme } from '../context/ThemeContext'

const Container = styled.div`
    display: flex;
    width: 200px;
    height: 100px;
    justify-content: space-around;
    align-items: center;
    border: 1px solid ${props => props.theme === 'dark' ? '#000000' : '#f1d0a9' };
    border-radius: 15px;
    padding: 10px;
    margin: 10px;
    background: ${props => props.theme === 'dark' ? '#494949' : '#fff6e0;' };
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;

    &:hover{
        transform: translateY(-3px);
    }
`
const Img = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 20px;
`
const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    color: ${props => props.theme === 'dark' ? '#ffffff' : '#000000;' };
`
const Name = styled.h3`
    font-size: 20px;
    margin: 0 auto;
`
const Id = styled.span`
    font-size: 16px;
`
const StatusSpan = styled.span`
    font-size: 16px;
    color: ${props => props.$isOnline ? '#04ff00' : '#777777'};
    font-weight: bold;
`


const UserCard = ({user}) => {
    const { theme } = useTheme();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/user/${user.id}`)
    }

  return (
    <Container onClick={handleClick} theme={theme}>
        {/* 프로필 사진 */}
        <Img src={`/assets/images/${user.imgTitle}`} alt={user.name} />
        {/* 유저 정보 */}
        <UserInfo theme={theme}>
            <Name>{user.name}</Name>
            <Id>{user.id}</Id>
            <StatusSpan $isOnline={user.status}>{user.status ? '◉온라인' : '◉오프라인'}</StatusSpan>
        </UserInfo>
    </Container>
  )
}

export default UserCard;