
import * as React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import * as home from '../home/styled/home.today';
import fireImg from '../../../assets/images/fireImg.png';
import pychartImage from '../../../assets/images/pychart2.png'

function HomeToday() {
  return (
    <home.Wrapper>
        <home.TitleWrapper>
            <home.Title>오늘 하루</home.Title>
            <home.QuestionButton>
                <home.QuestionImage>?</home.QuestionImage>
            </home.QuestionButton>
            <home.TitleSubWrapper>
                <home.TitleSubText>New!</home.TitleSubText>
                <home.TitleClusterButton onPress={() => alert('Button pressed!')}>
                <home.ButtonText1>모아보기</home.ButtonText1>
                </home.TitleClusterButton>
            </home.TitleSubWrapper>
        </home.TitleWrapper>
        <home.CenterWrapper>
            <home.CenterFirstWrapper>
                <home.CenterFirstKcal>{0}</home.CenterFirstKcal>
                <home.CenterSecondKcal> / {1331} kcal</home.CenterSecondKcal>
            </home.CenterFirstWrapper>
            <home.CenterSecondWrapper>
                <home.CenterSecondPercentWp>
                <home.CenterSecondNutrition theme='first'>
                      <home.CenterSecondNutritionText theme='first'>
                            탄
                        </home.CenterSecondNutritionText>
                    </home.CenterSecondNutrition>
                 

                    <home.CenterSecondNumber>
                        {0}
                    </home.CenterSecondNumber>
                    <home.CenterSecondPercent>
                        %
                    </home.CenterSecondPercent> 
                </home.CenterSecondPercentWp>

                <home.CenterSecondPercentWp>
                <home.CenterSecondNutrition theme = 'second'>
                      <home.CenterSecondNutritionText theme = 'second'>
                            단
                        </home.CenterSecondNutritionText>
                    </home.CenterSecondNutrition>
                 

                    <home.CenterSecondNumber>
                        {0}
                    </home.CenterSecondNumber>
                    <home.CenterSecondPercent>
                        %
                    </home.CenterSecondPercent> 
                </home.CenterSecondPercentWp>

                <home.CenterSecondPercentWp>
                <home.CenterSecondNutrition theme ='third'>
                      <home.CenterSecondNutritionText theme= 'third'>
                            지
                        </home.CenterSecondNutritionText>
                    </home.CenterSecondNutrition>
                 

                    <home.CenterSecondNumber>
                        {0}
                    </home.CenterSecondNumber>
                    <home.CenterSecondPercent>
                        %
                    </home.CenterSecondPercent> 
                </home.CenterSecondPercentWp>
            </home.CenterSecondWrapper>
            <home.CenterThirdWrapper></home.CenterThirdWrapper>
            <home.CenterForthWrapper>
                <home.CenterForthWp1>
                     <home.FireImage source={fireImg}></home.FireImage>
                    <home.CenterForthWp1Kcal>{0} Kcal</home.CenterForthWp1Kcal>
                    <home.CenterForthWp1Text> 소모</home.CenterForthWp1Text>
                </home.CenterForthWp1>
                <home.CenterForthLine></home.CenterForthLine>
                <home.CenterForthWp2>
                    <home.CenterForthWp2Kcal>{1331}kcal</home.CenterForthWp2Kcal>
                    <home.CenterForthWp2Text>더 먹을 수 있어요</home.CenterForthWp2Text>
                </home.CenterForthWp2>
            </home.CenterForthWrapper>
        </home.CenterWrapper>
        <home.BottomWrapper>
            <home.BottomWp1>
                <home.BottomComponentWp>
                    <home.BottomWp1Nutrition>순탄수</home.BottomWp1Nutrition>
                    <home.BottomWp1Bar></home.BottomWp1Bar>
                    <home.BottomWp1Text>{0} / 190g </home.BottomWp1Text>
                </home.BottomComponentWp>
                <home.BottomComponentWp>
                    <home.BottomWp1Nutrition>단백질</home.BottomWp1Nutrition>
                    <home.BottomWp1Bar></home.BottomWp1Bar>
                    <home.BottomWp1Text>{0} / 60g </home.BottomWp1Text>
                </home.BottomComponentWp>
                <home.BottomComponentWp>
                    <home.BottomWp1Nutrition>지방</home.BottomWp1Nutrition>
                    <home.BottomWp1Bar></home.BottomWp1Bar>
                    <home.BottomWp1Text>{0} / 37g </home.BottomWp1Text>
                </home.BottomComponentWp>
              
            </home.BottomWp1>
            <home.BottomWp2>
                <home.BottomWp2SupgarWp>
                    <home.BottomWp2SugarText>당 {0}g </home.BottomWp2SugarText>
                </home.BottomWp2SupgarWp>
                <home.BottomWp2DetailWp>
                    <home.BottomWp2DetailImage source = {pychartImage}></home.BottomWp2DetailImage>
                    <home.BottomWp2DetailText  onPress={() => alert('Button pressed')}>영양소 상세</home.BottomWp2DetailText>
                    <home.BottomWp2DetailText2>{'>'}</home.BottomWp2DetailText2>
                </home.BottomWp2DetailWp>
            </home.BottomWp2>
        </home.BottomWrapper>
       
    </home.Wrapper>
  );
}


  
  

export default HomeToday;
