import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity, Text } from 'react-native';


export const Wrapper = styled.View`
  width: 100%;
  height: 750px;
  display:flex;
  flex-direction: column;
  justify-content: flex-start;
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
margin-top: 10px;
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
`
export const CenterSecondPercentWp = styled.View`
display: flex;
flex-direction: row;
align-items:flex-end;
margin: 5px;
`

const changeBackColor = (theme) =>(theme === 'first' ? 'white' : (theme === 'second' ? 'rgb(255,255,153)' : 'rgb(44, 68, 103)'));
export const CenterSecondNutrition= styled.View`
width:28px;
height: 28px;
display: flex;
align-items:center;
justify-content:center;
border-radius: 20px;
background-color: ${({theme})=> changeBackColor(theme)};
`


const changeTextColor = (theme) =>(theme === 'first' ? 'rgb( 67, 119, 163)' : (theme === 'second' ? 'rgb( 67, 119, 163)' : 'white'));
export const CenterSecondNutritionText = styled.Text`
color: ${({theme})=>changeTextColor(theme)};
font-size: 16px;
font-weight:800;

`


export const CenterSecondNumber= styled.Text`
font-size:25px;
font-weight:700;
color: white;
margin-left: 7px;
margin-top: 3px;

`
export const CenterSecondNumber2 = styled.Text`
font-size:16px;
font-weight:900;
color:rgb( 80, 135, 187);

`
export const CenterSecondPercent= styled.Text`
font-size: 15px;
font-weight: 700;
margin-left:10px;
color:white;
margin-left: 2px;

`

//////////////////////////////////////////
export const CenterThirdWrapper = styled.View`
display:flex;
flex-direction: row;
justify-content: center;
align-items:center;
width: 100%;
height:70%;
background-color: gray;
`
///////////////////////////////////////////
export const CenterForthWrapper = styled.View`
display:flex;
flex-direction: row;
justify-content: center;
align-items:center;
width: 100%;
height:10%;

`;
export const CenterForthWp1 = styled.View`
width: 40%;
height: 100%;
display:flex;
flex-direction:row;
align-items: center;
justify-content:center;


`;

export const FireImage = styled.Image`
width: 25px;
height: 25px;
`;

export const CenterForthWp1Kcal = styled.Text`
font-weight: 900;
font-size: 14px;
color:white;
`

export const CenterForthWp1Text = styled.Text`
font-weight: bold;
font-size: 14px;
color: white;
`
export const CenterForthLine = styled.View`
width: 2px;
height: 50%;
background-color: white;
`
export const CenterForthWp2 = styled.View`
width: 60%;
height: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content:flex-start;
`
export const CenterForthWp2Kcal = styled.Text`
font-weight: 900;
font-size: 14px;
color: rgb(0,250,154);
margin-left: 18px;
`;
export const CenterForthWp2Text = styled.Text`
font-weight: bold;
font-size: 15px;
color: white;
margin-left: 5px;
`


export const BottomWrapper = styled.View`
display:flex;
flex-direction: column;
justify-content: center;
align-items:center;
width: 90%;
height:25%;
`;

export const BottomWp1 = styled.View`
display:flex;
flex-direction: row;
justify-content: center;
align-items:center;
width: 100%;
height: 70%;

`;

export const BottomComponentWp = styled.View`
display:flex;
flex-direction: column;
justify-content: center;
align-items:center;
width: 33%;
height: 100%;
`
export const BottomWp1Nutrition = styled.Text`
font-weight: bold;
font-size: 15px;
color:white;
`;
export const BottomWp1Bar = styled.View`
width: 80%;
height: 7px;
border-radius: 20px;
background-color: rgb( 80, 135, 187);
margin-top:15px;
`;
export const BottomWp1Text = styled.Text`
font-weight: 450;
font-size: 17px;
color:white;
margin-top:15px;
`;

export const BottomWp2 = styled.View`
display:flex;
flex-direction: row;
justify-content: space-around;
align-items:center;
width: 100%;
height: 30%;
background-color:rgb( 80, 135, 187) ;
border-radius: 30px;
`;

export const BottomWp2SupgarWp = styled.View`
display:flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 20%;
height: 80%;
`;
export const BottomWp2SugarText = styled.Text`
font-weight: 700;
font-size:16px;
color: white;
`

export const BottomWp2DetailWp = styled(TouchableOpacity)`
display:flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 35%;
height: 80%;
margin-left: 95px;
`;

export const BottomWp2DetailText = styled.Text`
font-weight: 700;
font-size: 16px;
color: white;
margin-left: 6px;
`
export const BottomWp2DetailText2 = styled.Text`
font-size: 20px;
color: white;
margin-left: 6px;
`

export const BottomWp2DetailImage = styled.Image`
width: 25px;
height: 25px;
`


