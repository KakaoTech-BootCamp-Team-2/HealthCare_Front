import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity, Text, Touchable, ScrollView } from "react-native";

export const Wrapper = styled.View`
flex:1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items:center;
  background-color:white;
`;

export const TitleWrapper = styled.View`
display: flex;
flex-direction: row;
justify-content:flex-start;
align-items:flex-end;
width: 100%;
height: 13%;
margin-top: 10px;   
padding: 10px;
`;

export const Title = styled.Text`
  font-size: 25x;
  font-weight: 900;
  margin-left: 20px;
  margin-top: 15px;

`;

export const TitleSubWrapper = styled.View`
width: 30%;
height: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
margin-left: 180px;

`;

export const alramButton = styled(TouchableOpacity)`
width: 40%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;


`;

export const alramImg = styled.Image`
width: 60%;
height: 75%;

`;
export const settingsButton = styled(TouchableOpacity)`
width: 50%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
`;
export const settingsImg = styled.Image`
width: 60%;
height: 80%;
`;
export const MainScroll = styled(ScrollView)`
width: 100%;
height: 100%;
`
export const MainView = styled.View`

  width: 100%;
  height: 900px;

`;

export const SecondWrapper = styled.View`
width: 100%;
height: 15%;
display: flex;
flex-direction: row;
justify-content:center;
align-items:center;

`;

export const SecondInnerWrapper = styled.View`
width: 30%;
height: 80%;
display: flex;
flex-direction: column;
justify-content:center;
align-items:center;
`;
export const SecondInnerLine = styled.View`
width: 1px;
height: 60%;
background-color: gray;
`;

export const SecondInnerTitleWrapper = styled.View`
width: 60%;
height: 30%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;


`;

export const SecondInnerTitleImg = styled.Image`
width: 27px;
height: 27px;

`;
export const SecondInnerTitle = styled.Text`
font-size: 16px;
font-weight: 700;
color: gray;
`;
export const SecondInnerSubTitle = styled.Text`
font-size: 16px;
font-weight: 900;
color: gray;
margin-top: 10px;
`;

export const CenterWrapper = styled.View`
width: 100%;
height: 40%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`;

export const CenterFirstWrapper = styled.View`
width: 100%;
height: 40%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`;
export const CenterProfileImg = styled.Image`
width: 100px;
height: 100px;


`;
export const CenterSecondWrapper = styled.View`
width: 100%;
height: 10%;
flex-direction: column;
align-items: center;
justify-content: center;

`;
export const CenterSecondName = styled.Text`
font-weight: 900;
font-size: 23px;
color: black;
`;

export const CenterThirdWrapper = styled.View`
width: 100%;
height: 15%;
display: flex;
flex-direction: row;
justify-content: center;

`;
export const CenterThirdWrappers = styled.View`
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: row;

margin: 10px;
`;
export const CenterThirdText = styled.Text`
font-weight:600;
font-size: 17px;
color: gray;
margin: 7px;
`;
export const CenterThirdNumber = styled.Text`
font-weight: 700;
font-size: 20px;
color: black;
`;
export const CenterForthWrapper = styled.View`
width: 100%;
height: 30%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;

`;
export const CenterForthButton = styled(TouchableOpacity)`
width: 37%;
height: 50%;
display: flex;
align-items: center;
justify-content: center;
border-radius: 30px;
background-color: rgb(230,230,230);
margin: 8px;
`;
export const CenterForthButtonText = styled.Text`
font-weight: 900;
font-size: 16px;
color: black;
`;

export const BottomWrapper = styled.View`
width: 100%;
height: 45%;
display: flex;
align-items: center;
justify-content: center;
background-color:rgb(230,230,230);
`;
export const CenterProfileImg2 = styled.Image`
width: 80px;
height: 80px;


`;
export const CenterProfileText = styled.Text`
font-size: 17px;
color: gray;
font-weight: 600;
margin-top: 15px;
`