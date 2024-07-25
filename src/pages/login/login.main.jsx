import React from "react";
import { ScrollView } from "react-native";
import * as log from './styled/login.main';
import SignUpScreen from "../singup/signup.main";
const LoginScreen = ({ navigation }) => {
  return (
    <log.Wrapper>
      <log.TitleWrapper>
        <log.TitleText>로그인</log.TitleText>
      </log.TitleWrapper>
      <log.InputsWrapper>
        <log.IdInput placeholder="아이디" />
        <log.PasswordInput placeholder="비밀번호" secureTextEntry={true} />
      </log.InputsWrapper>
      <log.LoginButton>
        <log.LoginText>로그인</log.LoginText>
      </log.LoginButton>
      <log.JoinButton  onPress={() => navigation.navigate('SignUp')}>
        <log.JoinText >회원가입</log.JoinText>
      </log.JoinButton>
    </log.Wrapper>
  );
};

export default LoginScreen;
