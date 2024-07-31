import React, { useState, useEffect } from 'react';
import { ScrollView, Text } from 'react-native';
import { LocaleConfig } from 'react-native-calendars';
import moment from 'moment';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';
import cancelimg from '../../../assets/images/cancel.png';
import { useNavigation } from "@react-navigation/native";


// Locale 설정
LocaleConfig.locales['ko'] = {
  monthNames: [
    '1월', '2월', '3월', '4월', '5월', '6월',
    '7월', '8월', '9월', '10월', '11월', '12월'
  ],
  monthNamesShort: [
    '1.', '2.', '3.', '4.', '5.', '6.', '7.', '8.', '9.', '10.', '11.', '12.'
  ],
  dayNames: [
    '일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'
  ],
  dayNamesShort: [
    '일', '월', '화', '수', '목', '금', '토'
  ],
  today: '오늘'
};
LocaleConfig.defaultLocale = 'ko';

// 스타일 컴포넌트 정의
const TotalWrapper = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  background-color: white;
`;
const SubTotalWrapper= styled.View`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: blue;
  margin-top: 50px;
`;
const SubTotalCloseWrapper = styled(TouchableOpacity)`
width: 30px;
height: 30px;
background-color: pink;
margin-left: 10px;
`;
const SubTotalClose = styled.Image`
width: 95%;
height: 95%;
`

const SubWrapper = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: gray;
`;

const SubWrapper2 = styled.View`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: blue;
`;

const Header = styled.View`
  width: 90%;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const HeaderWrapper2 = styled.View`
  width: 100%;
  height: 30px;
  background-color: gray;
`;

const MonthText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

const Button = styled(TouchableOpacity)`
  padding: 13px 20px;
  border-radius: 20px;
  background-color: ${({ active }) => (active ? '#000' : '#f0f0f0')};
  margin: 5px;
`;

const ButtonText = styled.Text`
  color: ${({ active }) => (active ? '#fff' : '#000')};
  font-size: 14px;
`;

const StyledCalendarWrapper = styled.View`
  width: 95%;
  height: 500px;
  overflow: hidden;
`;

const DayContainerWrapper = styled.View`
  width: 55px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;

`;

const StyledDayContainer = styled.View`
  width: 45px;
  height: 45px;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background-color: ${({ state }) =>
    state === 'today' ? '#ffff76' : '#f0f0f0'};
  margin-top: 10px;
`;

const StyledDayText = styled.Text`
  color: ${({ state }) =>
    state === 'disabled' ? '#d9e1e8' : state === 'today' ? 'red' : '#2d4150'};
  font-weight: bold;
`;

const DividerLine = styled.View`
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CalText = styled.Text`
font-weight:bold;
font-size: 10px;
color: #d9e1e8;;
`

// DayComponent 정의
const DayComponent = ({ date, state }) => {
  return (
    <DayContainerWrapper>
      <StyledDayContainer state={state}>
        <StyledDayText>{date.day}</StyledDayText>
      </StyledDayContainer>
      <DividerLine>
        <CalText>{220}</CalText>
    </DividerLine> 
    </DayContainerWrapper>
  );
};



// CalendarScreen 컴포넌트 정의
function CalendarScreen() {
  const navigation = useNavigation();

  const [currentMonth, setCurrentMonth] = useState(moment().format('YYYY-MM'));
  const [markedDates, setMarkedDates] = useState({});

  const updateMarkedDates = (year, month) => {
    const firstDay = moment([year, month - 1]).startOf('month').format('YYYY-MM-DD');
    const lastDay = moment([year, month - 1]).endOf('month').format('YYYY-MM-DD');
    const dates = {};
    let day = moment(firstDay);

    while (day.isSameOrBefore(lastDay)) {
      dates[day.format('YYYY-MM-DD')] = { 
        customStyles: {
          container: {
            backgroundColor: '#f0f0f0',
          },
          text: {
            color: '#2d4150',
          },
        }
      };
      day = day.add(1, 'day');
    }
    setMarkedDates(dates);
  };

  useEffect(() => {
    const year = moment().year();
    const month = moment().month() + 1;
    updateMarkedDates(year, month);
  }, []);

 /* const handleMonthChange = (direction) => {
    const newMonth = moment(currentMonth).add(direction, 'months');
    setCurrentMonth(newMonth.format('YYYY-MM'));
    updateMarkedDates(newMonth.year(), newMonth.month() + 1);
  };*/

  return (
    <TotalWrapper>
        <SubTotalWrapper>
            <SubTotalCloseWrapper   
            onPress={() => {
          navigation.navigate("Main"); }}>
            <SubTotalClose source={cancelimg}/>
            </SubTotalCloseWrapper>
        </SubTotalWrapper>
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
      <SubWrapper>
        <Header>
          <MonthText>{moment(currentMonth).format('YYYY. MM')}</MonthText>
        </Header> 
        <SubWrapper2>
          <ScrollView horizontal contentContainerStyle={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Button active={true}>
              <ButtonText active={true}>먹었어요</ButtonText>
            </Button>
            <Button>
              <ButtonText>태웠어요</ButtonText>
            </Button>
            <Button>
              <ButtonText>몸무게</ButtonText>
            </Button>
            <Button>
              <ButtonText>물 섭취</ButtonText>
            </Button>
            <Button>
              <ButtonText>물 섭취2</ButtonText>
            </Button>
          </ScrollView>
        </SubWrapper2>
        <StyledCalendarWrapper>
 <Calendar
            current={currentMonth}
            markingType={'custom'}
            markedDates={markedDates}
            onMonthChange={(month) => {
              const year = month.year;
              const monthNumber = month.month;
              setCurrentMonth(moment([year, monthNumber - 1]).format('YYYY-MM'));
              updateMarkedDates(year, monthNumber);
            }}
            hideExtraDays={true}
            theme={{

              'stylesheet.calendar.header': {
                header: {
                    backgroundColor:'white',
                    flexDirection:'row',
                    marginTop: 10,
                },
                week: {
                  marginTop: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                },
                dayHeader: {
                    color: 'gray', // 요일 텍스트 색상
                    fontSize: 16,   // 요일 텍스트 크기
                    fontWeight: 'bold', // 요일 텍스트 굵기
                    textTransform: 'uppercase', // 요일 텍스트 대문자 변환
                  }
            
              },
              backgroundColor: '#ffffff',
              calendarBackground: '#ffffff',
              textSectionTitleColor: '#b6c1cd',
              selectedDayBackgroundColor: '#00adf5',
              selectedDayTextColor: '#ffffff',
              todayTextColor: '#00adf5',
              dayTextColor: '#2d4150',
              textDisabledColor: '#d9e1e8',
              dotColor: 'black',
              selectedDotColor: '#ffffff',
              arrowColor: 'black',
              monthTextColor: 'black',
              indicatorColor: 'blue',
              textDayFontFamily: 'monospace',
              textMonthFontFamily: 'monospace',
              textDayHeaderFontFamily: 'monospace',
              textDayFontWeight: '300',
              textMonthFontWeight: 'bold',
              textDayHeaderFontWeight: '300',
              textDayFontSize: 16,
              textMonthFontSize: 16,
              textDayHeaderFontSize: 16,
            }}
            dayComponent={({ date, state }) => <DayComponent date={date} state={state} />}
          />
        </StyledCalendarWrapper> 
      </SubWrapper>
    </ScrollView>
    </TotalWrapper>

  );
}

export default CalendarScreen;
