/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect, useRef} from 'react';
import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const DaysScroll = styled.ScrollView`
  width: 100%;
  height: 50px;
`;
const DaysButton = styled.TouchableHighlight`
  width: ${props => props.width};
  justify-content: center;
  align-items: center;
`;
const DaysItem = styled.View`
  width: 90%;
  height: 30px;
  background-color: #eee;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
`;
const DaysText = styled.Text``;

const screenWidth = Math.round(Dimensions.get('window').width);
let dayW = Math.round(screenWidth / 9);
let offsetW = Math.round((screenWidth - dayW) / 2);

const Day = props => {
  return(
    <DaysText>{props.day}</DaysText>
  );
};

export default props => {
  const DayRef = useRef();

  const [selectedDay, setSelectedDay] = useState(props.selectedDay);

  const handleScrollEnd = e => {
    /*
    let posX = e.nativeEvent.contentOffset.x;
    let targetMonth = Math.round(posX / thirdW);
    setSelectedMonth(targetMonth);
    */
  };

  const scrollToDay = m => {
    /*
    let posX = m * thirdW;
    MonthRef.current.scrollTo({x: posX, y: 0, animated: true});
    */
  };

  useEffect(() => {
    props.setSelectedDay(selectedDay);
  }, [selectedDay]);

  useEffect(() => {
    setTimeout(() => {
      if (props.selectedMonth === new Date().getMonth()) {
        scrollToDay(new Date().getDate());
      }
      scrollToDay(1);
    }, 10);
  }, [props.selectedDay]);

  let days = [];
  let daysInMonth = new Date(new Date().getFullYear(), (props.selectedMonth+1), 0).getDate();
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }
  return (
    <DaysScroll
      ref={DayRef}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      decelerationRate="fast"
      snapToInterval={dayW}
      contentContainerStyle={{paddingLeft: offsetW, paddingRight: offsetW}}
      onMomentumScrollEnd={handleScrollEnd}>
      {days.map((d, k) => (
        <Day
          key={k}
          day={d}
          month={props.selectedMonth}
          dailyProgress={props.dailyProgress}
          workoutDays={props.workoutDays}
          onPress={() => scrollToDay(d)}
        />
      ))}
    </DaysScroll>
  );
};
