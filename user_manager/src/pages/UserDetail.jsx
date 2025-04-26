import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useUsers } from '../context/UserContext';
import { useTheme } from '../context/ThemeContext';

const Container = styled.div`
  margin-top: 30px;
  width: 400px;
  height: 600px;
  border-radius: 8px;
  background: ${props => props.theme === 'dark' ? '#494949' : '#ddeeff;' };
  padding: 20px;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
`
const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`
const DetailP = styled.p`
  display: flex;
  justify-content: space-between;
  color: ${props => props.theme === 'dark' ? '#ffffff' : '#000000;' };
  width: 250px;
  border-bottom: 1px solid #b3b3b3;
  padding-bottom: 10px;
  margin-bottom: 15px;
`
const DetailSpan = styled.span`
  width: 150px;
  font-size: 16px;
  color: ${props => props.theme === 'dark' ? '#ffffff' : '#000000;' };
  text-align: left;
`
const Img = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 15px;
`
const StatusSpan = styled.span`
  font-size: 20px;
  color: ${(props) => (props.$now ? '#04ff00' : '#8f8f8f')};
  font-weight: bold;
`
const DeleteButton = styled.button`
  background: #fcb8b8;
  border: #ff4f4f;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    background: #ff4f4f;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
  }

  &:active {
    background: #ff4f4f;
  }
`

const UserDetail = () => {
  const {id} = useParams();
  const {users, setUsers} = useUsers();
  const {theme} = useTheme();
  const navigate = useNavigate(); 
  const user = users.find(u => u.id === id);

  const handleDeleteUser = () => {
    const updatedUserList = users.filter((user) => user.id !== id);
    setUsers(updatedUserList);
    alert(`${user.name}님을 삭제했습니다.`);
    navigate('/');
  }
  
  if(!user) return <div>해당 유저의 정보가 없습니다.</div>;

  return (
    <>
    <Container theme={theme}>
      <h2 theme={theme}>{user.name}님의 상세 정보</h2>
      <Img src={`/assets/images/${user.imgTitle}`} alt={user.name} width={150} />
      <UserInfo>
        <StatusSpan $now={user.status}>{user.status ? '◉온라인' : '◉오프라인'}</StatusSpan>
        <DetailP theme={theme}><strong>이름:</strong> <DetailSpan theme={theme}>{user.name}</DetailSpan></DetailP>
        <DetailP theme={theme}><strong>아이디:</strong> <DetailSpan theme={theme}>{user.id}</DetailSpan></DetailP>
        <DetailP theme={theme}><strong>이메일:</strong> <DetailSpan theme={theme}>{user.email}</DetailSpan></DetailP>
        <DetailP theme={theme}><strong>전화번호:</strong> <DetailSpan theme={theme}>{user.phone}</DetailSpan></DetailP>
        <DeleteButton onClick={handleDeleteUser}>삭제하기</DeleteButton>
      </UserInfo>
    </Container>
    </>
  )
}

export default UserDetail