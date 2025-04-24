import React from 'react'
import userData from '../userData';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StatusSpan = styled.span`
    color: ${(props) => (props.$now ? '#04ff00' : '#8f8f8f')};
    font-weight: bold;
`

const UserDetail = ({users, setUsers}) => {
  const {id} = useParams();
  const navigate = useNavigate(); 
  const user = userData.find(u => u.id === id);

  const handleDeleteUser = () => {
    const updatedUserList = users.filter((user) => user.id !== id);
    setUsers(updatedUserList);
    alert(`${user.name}님을 삭제했습니다.`);
    navigate('/');
  }
  
  if(!user) return <div>해당 유저의 정보가 없습니다.</div>;

  return (
    <>
    <div>
      <h2>{user.name}님의 상세 페이지</h2>
      <img src={`/assets/images/${user.imgTitle}`} alt={user.name} width={150} />
      <p><strong>아이디:</strong> {user.id}</p>
      <p><strong>이메일:</strong> {user.email}</p>
      <p><strong>전화번호:</strong> {user.phone}</p>
      <StatusSpan $now={user.status}>{user.status ? '◉온라인' : '◉오프라인'}</StatusSpan>
    </div>
    <button onClick={handleDeleteUser}>삭제하기</button>
    </>
  )
}

export default UserDetail