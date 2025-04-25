import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useInput from '../components/useInput';

const Title = styled.p`
  font-size: 30px;
  font-weight: 800;
  color: #ff6f61;  /* 부드럽고 따뜻한 핑크 색상 */
  text-align: center;
  margin-bottom: 20px;
`

const EnrollDiv = styled.div`
  width: 400px;
  height: 700px;
  border: 1px solid #f1d0a9;
  border-radius: 15px;
  background-color: #fff8e7;
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
  color: #333;
  font-weight: bold;
  margin-right: 20px;
`
const P = styled.p`
  font-size: 16px;
  color: #333;
  font-weight: bold;
`
const InputField = styled.input`
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #e4a0b1;
  margin-top: 5px;
  margin-left: 30px;
  font-size: 14px;
  outline: none;
  transition: border 0.3s ease;

  &:focus {
    border-color: #ff6f61;
  }
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
  border: ${(props) => (props.$selected ? '3px solid #ff6f61' : '1px solid gray')};
  cursor: pointer;
`

const UserRegistration = ({ users, setUsers }) => {
  const navigate = useNavigate();

  const name = useInput('');
  const id = useInput('');
  const email = useInput('');
  const phone = useInput('');
  const status = useInput(true);
  const [selectedImg, setSelectedImg] = useState('dog1.jpg');

  const dogImages = ['dog1.PNG', 'dog2.PNG', 'dog3.PNG', 'dog4.PNG', 'dog5.PNG', 
    'dog6.PNG', 'dog7.PNG', 'dog8.PNG', 'dog9.PNG', 'dog10.PNG'];

  const handleSubmit = (e) => {
    e.preventDefault();

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

    // 입력 후 상태 초기화
    name.setValue('');
    id.setValue('');
    email.setValue('');
    phone.setValue('');
    status.setValue(true);
    setSelectedImg('dog1.jpg'); // 기본 이미지로 초기화

    navigate(`/`)
  };

  return (
      <EnrollDiv>
      <Title>새로운 유저 등록하기</Title>
      <EnrollForm onSubmit={handleSubmit}>
        <DetailDiv>
          <InputLabel>이름 : </InputLabel>
          <InputField type="text" value={name.value} onChange={name.onChange} />
        </DetailDiv>
        <DetailDiv>
          <InputLabel>아이디 :</InputLabel>
          <InputField type="text" value={id.value} onChange={id.onChange} />
        </DetailDiv>
        <DetailDiv>
          <InputLabel>이메일 :</InputLabel>
          <InputField type="text" value={email.value} onChange={email.onChange} />
        </DetailDiv>
        <DetailDiv>
          <InputLabel>전화번호 :</InputLabel>
          <InputField type="text" value={phone.value} onChange={phone.onChange} />
        </DetailDiv>
        <DetailDiv>
          <InputLabel>상태 : </InputLabel>
          <CheckDiv>
            <InputCheckField type="checkbox" checked={status.value} onChange={() => status.setValue(!status.value)}/>
            <StatusLabel $online={status.value}>{status.value ? '온라인' : '오프라인'}</StatusLabel>
          </CheckDiv>
        </DetailDiv>
        <P>프로필 이미지 선택 :</P>
        <ImgSelect>
          {dogImages.map((imgName) => (
            <ImgOption
              key={imgName}
              src={`/assets/images/${imgName}`} 
              alt={`강아지 ${imgName}`}
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
