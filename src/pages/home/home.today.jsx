
import * as React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import * as home from '../home/styled/home.today';


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
            <home.CenterSecondWrapper></home.CenterSecondWrapper>
            <home.CenterThirdWrapper></home.CenterThirdWrapper>
            <home.CenterForthWrapper></home.CenterForthWrapper>
        </home.CenterWrapper>
        <home.BottomWrapper>

        </home.BottomWrapper>
       
    </home.Wrapper>
  );
}


  
  

export default HomeToday;
