import React from 'react'
import userData from '../userData';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  width: 400px;
  height: 600px;
  border: 1px solid #f1d0a9;
  border-radius: 15px;
  background-color: #fff8e7;
  padding: 20px;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
`
const UserInfo = styled.div`
  
`
const DetailP = styled.p`
  box-sizing: border-box;
  width: 200px;
  border: 1px solid black;
  text-align: center;
  
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

const UserDetail = ({users, setUsers}) => {
  const {id} = useParams();
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
    <Container>
      <h2>{user.name}님의 상세 정보</h2>
      <Img src={`/assets/images/${user.imgTitle}`} alt={user.name} width={150} />
      <UserInfo>
        <StatusSpan $now={user.status}>{user.status ? '◉온라인' : '◉오프라인'}</StatusSpan>
        <DetailP><strong>이름:</strong> {user.name}</DetailP>
        <p><strong>아이디:</strong> {user.id}</p>
        <p><strong>이메일:</strong> {user.email}</p>
        <p><strong>전화번호:</strong> {user.phone}</p>
        <button onClick={handleDeleteUser}>삭제하기</button>
      </UserInfo>
    </Container>
    </>
  )
}

export default UserDetail