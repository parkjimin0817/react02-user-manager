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
  height: 600px;
  border: 1px solid #f1d0a9;
  border-radius: 15px;
  background-color: #fff8e7;
  padding: 20px;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
`
const EnrollForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
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
  font-size: 14px;
  outline: none;
  transition: border 0.3s ease;

  &:focus {
    border-color: #ff6f61;
  }
`

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
  border: ${(props) => (props.selected ? '3px solid #ff6f61' : '1px solid gray')};
  cursor: pointer;
`

const UserRegistration = ({ users, setUsers }) => {
  const navigate = useNavigate();

  const name = useInput('');
  const id = useInput('');
  const email = useInput('');
  const phone = useInput('');
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
      imgTitle: selectedImg,
      status: false
    };

    setUsers([...users, newUser]);

    // 입력 후 상태 초기화
    name.setValue('');
    id.setValue('');
    email.setValue('');
    phone.setValue('');
    setSelectedImg('dog1.jpg'); // 기본 이미지로 초기화

    navigate(`/`)
  };

  return (
      <EnrollDiv>
      <Title>새로운 유저 등록하기</Title>
      <EnrollForm onSubmit={handleSubmit}>
        <div>
          <InputLabel>이름 : </InputLabel>
          <InputField type="text" value={name.value} onChange={name.onChange} />
        </div>
        <div>
          <InputLabel>아이디 :</InputLabel>
          <InputField type="text" value={id.value} onChange={id.onChange} />
        </div>
        <div>
          <InputLabel>이메일 :</InputLabel>
          <InputField type="text" value={email.value} onChange={email.onChange} />
        </div>
        <div>
          <InputLabel>전화번호 :</InputLabel>
          <InputField type="text" value={phone.value} onChange={phone.onChange} />
        </div>
        <P>이미지 선택 :</P>
        <ImgSelect>
          {dogImages.map((imgName) => (
            <ImgOption
              key={imgName}
              src={`/assets/images/${imgName}`}  // public/assets/images 폴더에서 이미지를 가져옴
              alt={`강아지 ${imgName}`}
              onClick={() => setSelectedImg(imgName)}
              selected={selectedImg === imgName}
            />
          ))}
        </ImgSelect>
        <button type="submit">등록하기</button>
      </EnrollForm>
      </EnrollDiv>
  );
};

export default UserRegistration;
