import styled from "styled-components/native";

export const Wrapper = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

export const TitleWrapper = styled.View`
  margin-bottom: 20px;
`;

export const TitleText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: black;
`;

export const InputsWrapper = styled.View`
  width: 90%;
  height: 180px;
  display:flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;


`;

export const IdInput = styled.TextInput`
 height: 40px;
  border-radius: 35px;
  margin-bottom: 10px;
  padding: 25px;
  width: 100%;
  height: 70px;
  font-weight: bold;
  font-size: 16px;
  background-color: rgb(240,240,240);
`;

export const PasswordInput = styled.TextInput`
 height: 40px;
  border-radius: 35px;
  margin-bottom: 10px;
  padding: 25px;
  width: 100%;
  height: 70px;
  font-weight: bold;
  font-size: 16px;
  background-color: rgb(240,240,240);
`;

export const LoginButton = styled.TouchableOpacity`
 height: 40px;
  border-radius: 35px;
  margin-bottom: 10px;
  padding: 10px;
  width: 90%;
  height: 70px;
  dispay:flex;
  justify-content: center;
  align-items:center;
  background-color: black;
`;

export const LoginText = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: bold;
`;

export const JoinButton = styled.TouchableOpacity`
 height: 40px;
  border-radius: 35px;
  margin-bottom: 10px;
  padding: 10px;
  width: 90%;
  height: 70px;
  dispay:flex;
  justify-content: center;
  align-items:center;
  background-color: black;
`;

export const JoinText = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: bold;
`;
