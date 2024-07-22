import * as S from "./FoodLog.styled";

export const FoodLog = () => {
  return (
    <S.Frame>
      <S.TitleWrapper>
        <S.Title>먹었어요</S.Title>
        <S.TitleSubWrapper>
          <S.ClusterTxtBtn onPress={() => alert("Button pressed!")}>
            <S.TextBtn>식단</S.TextBtn>
          </S.ClusterTxtBtn>
          <S.ClusterTxtBtn onPress={() => alert("Button pressed!")}>
            <S.TextBtn>물 섭취</S.TextBtn>
          </S.ClusterTxtBtn>
        </S.TitleSubWrapper>
      </S.TitleWrapper>
      <S.MainBox>
        <S.RowContainer>
          <S.ContentBox></S.ContentBox>
          <S.ContentBox></S.ContentBox>
        </S.RowContainer>
        <S.RowContainer>
          <S.ContentBox></S.ContentBox>
          <S.ContentBox></S.ContentBox>
        </S.RowContainer>
      </S.MainBox>
    </S.Frame>
  );
};
