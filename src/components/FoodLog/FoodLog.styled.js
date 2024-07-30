import styled from "styled-components/native";
import { TouchableOpacity, Text } from "react-native";

export const Frame = styled.View`
  width: 100%;
  height: 750px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #385989;
`;

export const TitleWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 10%;
  margin-top: 10px;
`;

export const TitleSubWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 50%;
  gap: 10px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: white;
`;

export const ClusterTxtBtn = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 35px;
  border-radius: 17px;
  background-color: rgb(80, 135, 187);
`;

export const TextBtn = styled(Text)`
  color: white;
  font-size: 13px;
  font-weight: bold;
`;

export const MainBox = styled.View`
  width: 90%;
  height: 50%;
  flex: 1;
  margin-top: 10%;
  align-items: center;
  gap: 10px;
`;

export const RowContainer = styled.View`
  width: 100%;
  height: 35%;
  flex-direction: row;
  gap: 10px;
`;

export const ContentBox = styled.View`
  width: 40%;
  height: 100%;
  background-color: #404040;
  padding: 5px;
  flex: 1;
  border-radius: 20px;
  gap: 50px;
`;

export const ContentHeader = styled.View`
  width: 100%;
  min-height: 30%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CenterImage = styled.Image`
  width: 80px;
  height: 80px;
`;

export const PlusImage = styled.Image`
  width: 40px;
  height: 40px;
`;

export const PLUSBTN = styled(TouchableOpacity)``;

export const BottomContainer = styled.View``;

export const TimeText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: white;
  padding: 10px;
`;
