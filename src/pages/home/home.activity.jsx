
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as act from '../home/styled/home.activity';
import fireImg from '../../../assets/images/fireImg.png';
function HomeActivity() {
  const [selectedButton, setSelectedButton] = React.useState(null);

  const handleButtonPress = (button) => {
    setSelectedButton(button);
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <act.Wrapper>
        <act.TitleWrapper>
          <act.Title>나의 활동</act.Title>
          <act.TitleSubWrapper>
            <act.TitleSubButton onPress={() => handleButtonPress('운동')}>
              <act.TitleSubButtonText selected={selectedButton === '운동'}>운동</act.TitleSubButtonText>
            </act.TitleSubButton>
            <act.TitleSubButton onPress={() => handleButtonPress('걸음 수')}>
              <act.TitleSubButtonText selected={selectedButton === '걸음 수'}>걸음 수</act.TitleSubButtonText>
            </act.TitleSubButton>
          </act.TitleSubWrapper>
        </act.TitleWrapper>

        <act.CenterWrapper>
          <act.CenterStringWrapper>
            <act.CenterStringText>
              오늘 내 운동 시간은?
            </act.CenterStringText>
          </act.CenterStringWrapper>
          <act.CenterTimerWrapper>
            <act.CenterTimerMinute>{0}</act.CenterTimerMinute>
            <act.CenterTimerText>분</act.CenterTimerText>
          </act.CenterTimerWrapper>
          <act.CenterImageWrapper>

          </act.CenterImageWrapper>
          <act.CenterBurnWrapper>
            <act.CenterBurnImage source={fireImg}></act.CenterBurnImage>
            <act.CenterBurnText1>소모량</act.CenterBurnText1>
            <act.CenterBurnText2>{0}kcal</act.CenterBurnText2>
          </act.CenterBurnWrapper>

        </act.CenterWrapper>
        <act.BottomWrapper>
          <act.BottomButtonWrapper>
            <act.BottomButtonWrapperText>기록하기</act.BottomButtonWrapperText>
          </act.BottomButtonWrapper>
        </act.BottomWrapper>
      </act.Wrapper>
    </GestureHandlerRootView>
  );
}

   
  

export default HomeActivity;
