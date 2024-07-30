import * as S from "./FoodLog.styled";
import MORNING_IMG from "../../../assets/images/morning.png";
import LUNCH_IMG from "../../../assets/images/lunch.png";
import DINNER_IMG from "../../../assets/images/dinner.png";
import DESSERT_IMG from "../../../assets/images/dessert.png";
import PLUS from "../../../assets/images/plus.png";

export const FoodLog = () => {
  return (
    <S.Frame>
      <S.TitleWrapper>
        <S.Title>먹었어요</S.Title>
        <S.TitleSubWrapper>
          <S.ClusterTxtBtn onPress={() => alert("Button pressed!")}>
            <S.TextBtn>식단</S.TextBtn>
          </S.ClusterTxtBtn>
          {/* <S.ClusterTxtBtn onPress={() => alert("Button pressed!")}>
            <S.TextBtn>물 섭취</S.TextBtn>
          </S.ClusterTxtBtn> */}
        </S.TitleSubWrapper>
      </S.TitleWrapper>
      <S.MainBox>
        <S.RowContainer>
          <S.ContentBox>
            <S.ContentHeader>
              <S.CenterImage source={MORNING_IMG}></S.CenterImage>
              <S.PLUSBTN>
                <S.CenterImage source={PLUS} />
              </S.PLUSBTN>
            </S.ContentHeader>
            <S.BottomContainer>
              <S.TimeText>아침</S.TimeText>
            </S.BottomContainer>
          </S.ContentBox>
          <S.ContentBox>
            <S.ContentHeader>
              <S.CenterImage source={LUNCH_IMG}></S.CenterImage>
              <S.PLUSBTN>
                <S.CenterImage source={PLUS} />
              </S.PLUSBTN>
            </S.ContentHeader>
            <S.BottomContainer>
              <S.TimeText>점심</S.TimeText>
            </S.BottomContainer>
          </S.ContentBox>
        </S.RowContainer>
        <S.RowContainer>
          <S.ContentBox>
            <S.ContentHeader>
              <S.CenterImage source={DINNER_IMG}></S.CenterImage>
              <S.PLUSBTN>
                <S.CenterImage source={PLUS} />
              </S.PLUSBTN>
            </S.ContentHeader>
            <S.BottomContainer>
              <S.TimeText>저녁</S.TimeText>
            </S.BottomContainer>
          </S.ContentBox>
          <S.ContentBox>
            <S.ContentHeader>
              <S.CenterImage source={DESSERT_IMG}></S.CenterImage>
              <S.PLUSBTN>
                <S.CenterImage source={PLUS} />
              </S.PLUSBTN>
            </S.ContentHeader>
            <S.BottomContainer>
              <S.TimeText>간식</S.TimeText>
            </S.BottomContainer>
          </S.ContentBox>
        </S.RowContainer>
      </S.MainBox>
    </S.Frame>
  );
};
