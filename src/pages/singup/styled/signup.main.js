import styled from "styled-components/native";
import { TouchableOpacity, Text, Touchable, ScrollView } from "react-native";

export const Wrapper = styled(ScrollView).attrs({
  contentContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})`
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
  margin-bottom: 20px;
`;

export const IdInput = styled.TextInput`
  height: 60px;
  border-radius: 35px;
  margin-bottom: 10px;
  padding: 20px;
  width: 100%;
  font-weight: bold;
  font-size: 16px;
  background-color: rgb(240,240,240);
`;

export const EmailInput = styled.TextInput`
  height: 60px;
  border-radius: 35px;
  margin-bottom: 10px;
  padding: 20px;
  width: 100%;
  font-weight: bold;
  font-size: 16px;
  background-color: rgb(240,240,240);
`;

export const PasswordInput = styled.TextInput`
  height: 60px;
  border-radius: 35px;
  margin-bottom: 10px;
  padding: 20px;
  width: 100%;
  font-weight: bold;
  font-size: 16px;
  background-color: rgb(240,240,240);
`;

export const ConfirmPasswordInput = styled.TextInput`
  height: 60px;
  border-radius: 35px;
  margin-bottom: 10px;
  padding: 20px;
  width: 100%;
  font-weight: bold;
  font-size: 16px;
  background-color: rgb(240,240,240);
`;

export const SignUpButton = styled.TouchableOpacity`
  height: 60px;
  border-radius: 35px;
  margin-bottom: 10px;
  padding: 10px;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

export const SignUpText = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: bold;
`;
