import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity, Text } from 'react-native-gesture-handler';

export const Wrapper = styled.View`
  width: 100%;
  height: 750px;
  display:flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items:center;
  background-color:rgb(75, 121, 83) ;
`;
export const TitleWrapper = styled.View`
display: flex;
flex-direction: row;
justify-content:space-around;
align-items:center;
width:90%;
height: 8%;
margin-top: 10px;

`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color:white;
  `;

export const TitleSubWrapper = styled.View`
display:flex;
flex-direction:row;
align-items: center;
justify-content:center;
width:35%;
height: 40px;
margin-left: 130px;

`;

export const TitleSubButton = styled(TouchableOpacity)`
width: 60px;
height: 100%;
display: flex;
flex-direction:row;
justify-content: center;
align-items: center;

`
export const TitleSubButtonText = styled.Text`
  color: ${({ selected }) => (selected ? 'rgb(27,85,54)' : 'white')};
  font-weight: 700;
  font-size: 18px;
`;


export const CenterWrapper = styled.View`
width: 90%;
height: 65%;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
export const CenterStringWrapper = styled.View`
width: 100%;
height: 8%;
display: flex;
justify-content: center;
align-items: center;

`;

export const CenterStringText = styled.Text`
font-weight: bold;
color: white;
font-size: 17px;
`
export const CenterTimerWrapper = styled.View`
width: 100%;
height: 13%;
display:flex;
flex-direction:row;
align-items:center;
justify-content: center;
`;
export const CenterTimerMinute = styled.Text`
font-weight:700;
font-size: 50px;
color:white;
`;

export const CenterTimerText = styled.Text`
font-weight: bold;
font-size: 18px;
color:white;
margin-top: 17px;
`
export const CenterImageWrapper = styled.View`
width: 100%;
height: 70%;
background-color: gray;
`;
export const CenterBurnWrapper = styled.View`
width: 100%;
height: 10%;
dispay:flex;
flex-direction: row;
justify-content: center;
align-items: center;

`;

export const CenterBurnImage = styled.Image`
width: 30px;
height: 30px;
`;

export const CenterBurnText1 = styled.Text`
font-weight: bold;
color: white;
font-size: 17px;
margin-left: 10px;
`;
export const CenterBurnText2 = styled.Text`
font-weight: 700;
color: white;
font-size: 17px;
margin-left: 10px;
`

export const BottomWrapper = styled.View`
width: 90%;
height: 20%;
display:flex;
align-items:center;
justify-content:center;

`;


export const BottomButtonWrapper = styled(TouchableOpacity)`
width: 250px;
height: 65px;
border-radius:30px;
background-color: rgb(44,105,67);
display:flex;
align-items:center;
justify-content:center;
`;
export const BottomButtonWrapperText = styled.Text`
font-weight: bold;
font-size: 17px;
color:white;

`

