import React, {useState} from "react";
import { ScrollView, Alert } from "react-native";
import * as reg from './styled/signup.main';

const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const hostname = 'http://3.35.206.176:8080';

  async function signup() {
    if (password !== confirmPassword) {
      Alert.alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    try {
      const response = await fetch(`${hostname}/api/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Content-Length': 74,
        },
        body: JSON.stringify({
          username: username,
          name: name,
          password: password,
        }),
       
      });

      if (response.ok) {
        Alert.alert('회원가입 성공');
      } else {
        const errorText = await response.text();
        Alert.alert('회원가입 실패', errorText);
      }
    } catch (error) {
      console.error('오류 발생:', error);
      Alert.alert('오류 발생:', error.message);
    }
  }

  return (
    <reg.Wrapper>
      <reg.TitleWrapper>
        <reg.TitleText>회원가입</reg.TitleText>
      </reg.TitleWrapper>
      <reg.InputsWrapper>
        <reg.IdInput type="text"
                placeholder="아이디"
                value={username}
                onChange={(e) => setUsername(e.target.value)}/>
        <reg.EmailInput type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}/>
        <reg.PasswordInput type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
        <reg.ConfirmPasswordInput type="passwordconfirm"
          placeholder="비밀번호 확인"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)} />
      </reg.InputsWrapper>
      <reg.SignUpButton>
        <reg.SignUpText onPress = {signup}>회원가입</reg.SignUpText>
      </reg.SignUpButton>
    </reg.Wrapper>
  );
};

export default SignUpScreen;
