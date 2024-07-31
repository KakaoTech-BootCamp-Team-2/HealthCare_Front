import React from "react";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as S from "./Header.styled";

export const HeaderView = () => {
  const navigation = useNavigation();

  return (
    <S.Wrapper>
      <Text
        onPress={() => {
          navigation.navigate("HomeMain"); // HomeStack 내 HomeMain으로 이동
        }}
      >
        메인
      </Text>
      <Text
        onPress={() => {
          navigation.navigate("Statistics"); // HomeStack 내 Statistics으로 이동
        }}
      >
        통계
      </Text>
      <Text
        onPress={() => {
          navigation.navigate("MyPage"); // MyPageStack 내 MyPageMain으로 이동
        }}
      >
        마이페이지
      </Text>
      <Text
        onPress={() => {
          navigation.navigate("Calendar"); 
        }}
      >
        달력
      </Text>
    </S.Wrapper>
  );
};
