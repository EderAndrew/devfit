/* eslint-disable no-shadow */
/* eslint-disable no-alert */
import React, {useEffect} from 'react';
import styled from 'styled-components/native';
import {StackActions, NavigationActions} from 'react-navigation';
import {connect} from 'react-redux';
import Workout from '../components/Workout';
//Importando o json
import workoutJson from '../presetWorkouts.json';

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
  text-align: center;
`;
const Texto = styled.Text`
  font-size: 16px;
  color: #333;
  text-align: center;
  margin-bottom: 50px;
`;
const NextButton = styled.Button``;
const WorkoutList = styled.FlatList`
  width: 100%;
`;
const Page = props => {
  useEffect(() => {
    props.navigation.setParams({myWorkouts: props.myWorkouts});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.myWorkouts]);

  const addWorkout = item => {
    if (props.myWorkouts.findIndex(i => i.id === item.id) < 0) {
      props.addWorkout(item);
    } else {
      props.delWorkout(item);
    }
  };
  return (
    <Container>
      <Title>Opções de treino pré-criados com base no seu nível</Title>
      <Texto>Você selecionou {props.myWorkouts.length} treinos</Texto>
      <WorkoutList
        data={workoutJson}
        renderItem={({item}) => (
          <Workout data={item} addAction={() => addWorkout(item)} />
        )}
        KeyExtractor={item => item.id}
      />
    </Container>
  );
};

Page.navigationOptions = ({navigation}) => {
  let btnNext = 'Ignorar';
  if (
    navigation.state.params &&
    navigation.state.params.myWorkouts.length > 0
  ) {
    btnNext = 'Concluir';
  }
  const nextAction = () => {
    navigation.dispatch(
      StackActions.reset({
        index: 0,
        action: [NavigationActions.navigate({routeName: 'AppTab'})],
      }),
    );
  };

  return {
    title: '',
    headerRight: <NextButton title={btnNext} onPress={nextAction} />,
    headerRightContainerStyle: {
      marginRight: 20,
    },
  };
};

const mapStateToProps = state => {
  return {
    myWorkouts: state.userReducer.myWorkouts,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Page);
