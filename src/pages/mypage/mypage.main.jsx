import * as React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import * as mypg from './styled/mypage.main';
import bellimg from '../../../assets/images/bellimg.png';
import settingimg from '../../../assets/images/settingimg.png'
import forkimg from '../../../assets/images/forkimg.png';
import goalimg from '../../../assets/images/goalimg.png';
import smileimg from '../../../assets/images/smileimg.png';
import smile2 from '../../../assets/images/smile2.png'

const MyPageScreen = () => {
  return (
<mypg.Wrapper>
  <mypg.TitleWrapper>
    <mypg.Title>마이홈</mypg.Title>
    <mypg.TitleSubWrapper>
      <mypg.alramButton>
        <mypg.alramImg source={bellimg}></mypg.alramImg>
      </mypg.alramButton>
      <mypg.settingsButton>
        <mypg.settingsImg source={settingimg}></mypg.settingsImg>
      </mypg.settingsButton>
    </mypg.TitleSubWrapper>
  </mypg.TitleWrapper>
  <mypg.MainScroll>
        <mypg.MainView>
          <mypg.SecondWrapper>
           <mypg.SecondInnerWrapper>
            <mypg.SecondInnerTitleWrapper>
              <mypg.SecondInnerTitleImg source={forkimg}></mypg.SecondInnerTitleImg>
              <mypg.SecondInnerTitle >식단</mypg.SecondInnerTitle>
            </mypg.SecondInnerTitleWrapper>
            
            <mypg.SecondInnerSubTitle >일반식단</mypg.SecondInnerSubTitle>
           </mypg.SecondInnerWrapper>
           <mypg.SecondInnerLine></mypg.SecondInnerLine>

           <mypg.SecondInnerWrapper>
           <mypg.SecondInnerTitleWrapper>
             <mypg.SecondInnerTitleImg source={goalimg}></mypg.SecondInnerTitleImg>
              <mypg.SecondInnerTitle >목표</mypg.SecondInnerTitle>
            </mypg.SecondInnerTitleWrapper>
            <mypg.SecondInnerSubTitle>{50}kg</mypg.SecondInnerSubTitle>
           </mypg.SecondInnerWrapper>

           <mypg.SecondInnerLine></mypg.SecondInnerLine>
        
           <mypg.SecondInnerWrapper>
            <mypg.SecondInnerTitleWrapper>
            <mypg.SecondInnerTitleImg source={smileimg}></mypg.SecondInnerTitleImg>
              <mypg.SecondInnerTitle>변화</mypg.SecondInnerTitle>
            </mypg.SecondInnerTitleWrapper>
            <mypg.SecondInnerSubTitle>-{0}kg</mypg.SecondInnerSubTitle>
           </mypg.SecondInnerWrapper>
          </mypg.SecondWrapper>

          <mypg.CenterWrapper>
            <mypg.CenterFirstWrapper>
              <mypg.CenterProfileImg source = {smile2}></mypg.CenterProfileImg>
            </mypg.CenterFirstWrapper>
            <mypg.CenterSecondWrapper>
              <mypg.CenterSecondName>{'한주리'} 님!</mypg.CenterSecondName>
            </mypg.CenterSecondWrapper>
            <mypg.CenterThirdWrapper>
              <mypg.CenterThirdWrappers>
                <mypg.CenterThirdText>피드</mypg.CenterThirdText>
                <mypg.CenterThirdNumber>{0}</mypg.CenterThirdNumber>
              </mypg.CenterThirdWrappers>
              <mypg.CenterThirdWrappers>
                <mypg.CenterThirdText>팔로워</mypg.CenterThirdText>
                <mypg.CenterThirdNumber>{0}</mypg.CenterThirdNumber>
              </mypg.CenterThirdWrappers>
              <mypg.CenterThirdWrappers>
                <mypg.CenterThirdText>팔로잉</mypg.CenterThirdText>
                <mypg.CenterThirdNumber>{0}</mypg.CenterThirdNumber>
              </mypg.CenterThirdWrappers>
            </mypg.CenterThirdWrapper>
            <mypg.CenterForthWrapper>
            <mypg.CenterForthButton>
              <mypg.CenterForthButtonText>프로필 편집</mypg.CenterForthButtonText>
            </mypg.CenterForthButton>
            <mypg.CenterForthButton>
            <mypg.CenterForthButtonText>로그아웃</mypg.CenterForthButtonText>
            </mypg.CenterForthButton>
             
            </mypg.CenterForthWrapper>
          </mypg.CenterWrapper>
          <mypg.BottomWrapper>
          <mypg.CenterProfileImg2 source = {smile2}></mypg.CenterProfileImg2>
          <mypg.CenterProfileText>등록된 피드가 없어요</mypg.CenterProfileText>
          </mypg.BottomWrapper>
        </mypg.MainView>
      </mypg.MainScroll>
  
</mypg.Wrapper>
  );
};

export default MyPageScreen;
