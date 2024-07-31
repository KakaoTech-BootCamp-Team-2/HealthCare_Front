import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-color: #385989;
  padding: 10px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: white;
  margin-bottom: 20px;
`;

const NutritionInfo = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 20px;
`;

const InfoBox = styled.View`
  align-items: center;
`;

const InfoText = styled.Text`
  color: white;
  font-size: 18px;
`;

const FoodDetailScreen = ({ route }) => {
  const { foodId } = route.params;
  // 이곳에서 foodId를 이용해 필요한 데이터를 가져옵니다.

  return (
    <Container>
      <Title>김밥(김밥)</Title>
      <NutritionInfo>
        <InfoBox>
          <InfoText>순탄수</InfoText>
          <InfoText>78g</InfoText>
        </InfoBox>
        <InfoBox>
          <InfoText>단백질</InfoText>
          <InfoText>7.5g</InfoText>
        </InfoBox>
        <InfoBox>
          <InfoText>지방</InfoText>
          <InfoText>3g</InfoText>
        </InfoBox>
      </NutritionInfo>
      <InfoText>369kcal</InfoText>
      <InfoText>영양소 상세</InfoText>
    </Container>
  );
};

export default FoodDetailScreen;
