import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity, Text } from 'react-native';


export const Wrapper = styled.View`
  width: 100%;
  height: 750px;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  background-color:rgb(129, 170, 210) ;
`;
export const TitleWrapper = styled.View`
display: flex;
flex-direction: row;
justify-content:flex-start;
align-items:center;
width:90%;
height: 10%;
`
export const TitleSubWrapper = styled.View`
display:flex;
flex-direction:row;
align-items: center;
justify-content:flex-end;
width:40%;
margin-left:97;

`;
export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color:white;
  `;
export const TitleQuestion = styled.Image`
`;


export const TitleSubText = styled.Text`
color:white;
font-weight:800;
margin-right: 7px;
`;

export const TitleClusterButton = styled(TouchableOpacity)`
display:flex;
justify-content: center;
align-items: center;  
  width: 55%;
  height: 35px;
   border-radius: 17px; 
 background-color: rgb( 80, 135, 187);    
`;

export const ButtonText1 = styled(Text)`
  color: white;
  font-size: 13px;
  font-weight: bold;
`;

export const QuestionButton = styled(TouchableOpacity)`
display:flex;
justify-content: center;
align-items: center;  
  width: 20px;
  height: 20px;
   border-radius: 15px; 
   margin-left: 5px;
 background-color: rgb( 80, 135, 187);    
`;

export const QuestionImage = styled.Text`
color:white;
font-weight:bold;
 
`;
//////////////////////////////////////////
export const CenterWrapper = styled.View`
display:flex;
flex-direction: column;
justify-content: center;
align-items:center;
width: 90%;
height:45%;

`
export const CenterFirstWrapper = styled.View`
display:flex;
flex-direction: row;
justify-content: center;
align-items:center;
width: 100%;
height:15%;

`
export const CenterFirstKcal  = styled.Text`
font-size: 33px;
font-weight: 700;
color:white;
`
export const CenterSecondKcal  = styled.Text`
font-size: 16px;
font-weight: 900;
color: rgb( 80, 135, 187);
margin-top: 5px;
`
export const CenterSecondWrapper = styled.View`
display:flex;
flex-direction: row;
justify-content: center;
align-items:center;
width: 100%;
height:12%;
background-color: blue;
`
export const CenterThirdWrapper = styled.View`
display:flex;
flex-direction: row;
justify-content: center;
align-items:center;
width: 100%;
height:63%;
background-color: gray;
`
export const CenterForthWrapper = styled.View`
display:flex;
flex-direction: row;
justify-content: center;
align-items:center;
width: 100%;
height:10%;
background-color: pink;
`


export const BottomWrapper = styled.View`
display:flex;
flex-direction: column;
justify-content: center;
align-items:center;
width: 90%;
height:25%;
background-color: green;
`
