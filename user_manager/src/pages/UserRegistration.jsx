import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useInput from '../components/useInput';
import { useUsers } from '../context/UserContext';
import { useTheme } from '../context/ThemeContext';

const Title = styled.p`
  font-size: 30px;
  font-weight: 800;
  color: ${props => props.theme === 'dark' ? '#ffffff' : '#000000;' };
  text-align: center;
  margin-bottom: 20px;
`

const EnrollDiv = styled.div`
  margin-top: 30px;
  width: 400px;
  height: 600px;
  border-radius: 8px;
  background: ${props => props.theme === 'dark' ? '#494949' : '#ddeeff;' };
  padding: 20px;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
`
const EnrollForm = styled.form`
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`
const DetailDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const InputLabel = styled.label`
  font-size: 16px;
  color: ${props => props.theme === 'dark' ? '#ffffff' : '#000000;' };
  font-weight: bold;
  margin-right: 20px;
`
const P = styled.p`
  font-size: 16px;
  color: ${props => props.theme === 'dark' ? '#ffffff' : '#000000;' };
  font-weight: bold;
`
const InputField = styled.input`
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #000000;
  margin-top: 5px;
  margin-left: 30px;
  font-size: 14px;
  outline: none;
  transition: border 0.3s ease;
`
const InputCheckField = styled.input`
  width: 20px;
  height: 20px;
  appearance: none;
  border: 2px solid #ccc;
  border-radius: 20px;

  &:checked {
    background-color: #66ff61;
    border-color: #ccc;
  }

  &:focus {
    outline: none;
  }
`
const CheckDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const StatusLabel = styled.p`
  width: 80px;
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => (props.$online ? 'green' : 'gray')};
`;

const ImgSelect = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
`

const ImgOption = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  border: ${(props) => (props.$selected ? '3px solid #2b2eff' : '1px solid gray')};
  cursor: pointer;
`

const UserRegistration = () => {
  const {theme} = useTheme();
  const {users, setUsers} = useUsers();
  const navigate = useNavigate();

  const name = useInput('');
  const id = useInput('');
  const email = useInput('');
  const phone = useInput('');
  const status = useInput(true);
  const [selectedImg, setSelectedImg] = useState('profile1.png');

  const profileImg = ['profile1.png', 'profile2.png', 'profile3.png', 'profile4.png'];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.value.trim() || !id.value.trim() || !email.value.trim() || !phone.value.trim()) {
      alert('모든 정보를 입력해주세요!');
      return;
    }

    const maxUserNo = users.length > 0 ? Math.max(...users.map(u => u.userNo || 0)) : 0;

    const newUser = {
      userNo: maxUserNo + 1,
      name: name.value,
      id: id.value,
      email: email.value,
      phone: phone.value,
      status: status.value,
      imgTitle: selectedImg,
    };
  

    setUsers([...users, newUser]);

    name.setValue('');
    id.setValue('');
    email.setValue('');
    phone.setValue('');
    status.setValue(true);
    setSelectedImg('profile1.png'); 

    navigate(`/`)
  };

  return (
      <EnrollDiv theme={theme}>
      <Title theme={theme}>새로운 유저 등록하기</Title>
      <EnrollForm onSubmit={handleSubmit}>
        <DetailDiv>
          <InputLabel theme={theme}>이름 : </InputLabel>
          <InputField type="text" value={name.value} onChange={name.onChange} />
        </DetailDiv>
        <DetailDiv>
          <InputLabel theme={theme}>아이디 :</InputLabel>
          <InputField type="text" value={id.value} onChange={id.onChange} />
        </DetailDiv>
        <DetailDiv>
          <InputLabel theme={theme}>이메일 :</InputLabel>
          <InputField type="text" value={email.value} onChange={email.onChange} />
        </DetailDiv>
        <DetailDiv>
          <InputLabel theme={theme}>전화번호 :</InputLabel>
          <InputField type="text" value={phone.value} onChange={phone.onChange} />
        </DetailDiv>
        <DetailDiv>
          <InputLabel theme={theme}>상태 : </InputLabel>
          <CheckDiv>
            <InputCheckField type="checkbox" checked={status.value} onChange={() => status.setValue(!status.value)}/>
            <StatusLabel $online={status.value}>{status.value ? '온라인' : '오프라인'}</StatusLabel>
          </CheckDiv>
        </DetailDiv>
        <P theme={theme}>프로필 이미지 선택 :</P>
        <ImgSelect>
          {profileImg.map((imgName) => (
            <ImgOption
              key={imgName}
              src={`/assets/images/${imgName}`} 
              alt={`${imgName}`}
              onClick={() => setSelectedImg(imgName)}
              $selected={selectedImg === imgName}
            />
          ))}
        </ImgSelect>
        <button type="submit">등록하기</button>
      </EnrollForm>
      </EnrollDiv>
  );
};

export default UserRegistration;
