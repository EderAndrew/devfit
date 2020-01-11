/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';
import {connect} from 'react-redux';

import DefaultButton from '../components/DefaultButton';

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  margin-right: 30px;
  margin-left: 30px;
  margin-top: 50px;
`;
const Title = styled.Text`
  font-size: 22px;
  color: #333;
  margin-bottom: 50px;
`;
const Texto = styled.Text`
  font-size: 16px;
  color: #333;
  text-align: center;
  margin-bottom: 50px;
`;
const NextButton = styled.Button``;
const BoldText = styled.Text`
  font-weight: bold;
`;
const LevelArea = styled.View`
  width: 100%;
`;

const Page = props => {
  let funnyPhrase = ' ';

  switch (props.workoutDays.length) {
    case 1:
      funnyPhrase = 'Só 1 dia não vai adiantar muito, mas...';
      break;
    case 2:
      funnyPhrase = '2 dias eu acho pouco, mas quem sou eu pra te julgar?';
      break;
    case 3:
      funnyPhrase = 'Legal, 3 dias da pro gasto...';
      break;
    case 4:
      funnyPhrase = 'Legal, 4 dias vai ser Top!';
      break;
    case 5:
      funnyPhrase = 'É isso ai! 5 dias é o mínimo, lets GO!';
      break;
    case 6:
      funnyPhrase = 'É, 6 dias não é pra todo mundo!';
      break;
    case 7:
      funnyPhrase = 'Wooow! Todo dia? WTF?!';
      break;
  }

  const setMyLevel = l => {
    props.setLevel(l);
    props.navigation.setParams({level: l});
  };
  return (
    <Container>
      <Title>{funnyPhrase}</Title>
      <Texto>
        <BoldText>Qual seu Nível Hoje?</BoldText>
      </Texto>

      <LevelArea>
        <DefaultButton
          bgcolor={props.level === 'beginner' ? '#A5E8BC' : false}
          onPress={() => setMyLevel('beginner')}
          style={{marginBottom: 20}}
          underlayColor="#CCC">
          <Text>Iniciante / Um Frango</Text>
        </DefaultButton>
        <DefaultButton
          bgcolor={props.level === 'intermediate' ? '#A5E8BC' : false}
          onPress={() => setMyLevel('intermediate')}
          style={{marginBottom: 20}}
          underlayColor="#CCC">
          <Text>Intermediário / Me viro bem</Text>
        </DefaultButton>
        <DefaultButton
          bgcolor={props.level === 'advanced' ? '#A5E8BC' : false}
          onPress={() => setMyLevel('advanced')}
          style={{marginBottom: 20}}
          underlayColor="#CCC">
          <Text>Avançado / Primo do The Rock</Text>
        </DefaultButton>
      </LevelArea>
    </Container>
  );
};

Page.navigationOptions = ({navigation}) => {
  const nextAction = () => {
    if (!navigation.state.params || !navigation.state.params.level) {
      ('Você precisa escolher uma opção');
      return;
    }
    navigation.navigate('StarterRecommendations');
  };

  return {
    title: '',
    headerRight: <NextButton title="Próximo" onPress={nextAction} />,
    headerRightContainerStyle: {
      marginRight: 20,
    },
  };
};

const mapStateToProps = state => {
  return {
    level: state.userReducer.level,
    workoutDays: state.userReducer.workoutDays,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setLevel: level => dispatch({type: 'SET_LEVEL', payload: {level}}),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Page);
