import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'
import { connect } from 'react-redux'

import DefaultButton from '../components/DefaultButton'

const Container = styled.SafeAreaView`
    flex:1;
    align-items:center;
    margin-right:30px;
    margin-left:30px;
    margin-top:50px;
`
const Title = styled.Text`
    font-size:22px;
    color:#333;
    margin-bottom:50px;
`
const Texto = styled.Text`
    font-size:16px;
    color:#333;
    text-align:center;
`
const NextButton = styled.Button``
const BoldText = styled.Text`
    font-weight:bold;
`
const DaysArea = styled.View`
    margin-top:40px;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-between;
`

const Page = (props) => {
    const toggleDay = (d) => {
        let newWorkoutDays = [...props.workoutDays]

        if(!props.workoutDays.includes(d)){
            //inserir
            newWorkoutDays.push(d)
        }else{
            //remover
            newWorkoutDays = newWorkoutDays.filter(i=>i!=d)
        }

        props.setWorkoutDays(newWorkoutDays)
        props.navigation.setParams({workoutDays:newWorkoutDays})
    }
     //Pegar apenas o primeiro nome
     let firstName = props.name.split(' ')[0]
    return(
        <Container>
            <Title>Opa, <BoldText>{firstName}</BoldText>! Tudo bem?</Title>
            <Texto>Quais <BoldText>dias da semana</BoldText> você pretende treinar?</Texto>

            <DaysArea>
                <DefaultButton bgcolor={props.workoutDays.includes(0)?'#A5E8BC':false} onPress={()=>toggleDay(0)} width={110} style={{marginBottom:20}} underlayColor='#CCC'>
                    <Text>Domingo</Text>
                </DefaultButton>
                <DefaultButton bgcolor={props.workoutDays.includes(1)?'#A5E8BC':false} onPress={()=>toggleDay(1)} width={110} style={{marginBottom:20}} underlayColor='#CCC'>
                    <Text>Segunda</Text>
                </DefaultButton>
                <DefaultButton bgcolor={props.workoutDays.includes(2)?'#A5E8BC':false} onPress={()=>toggleDay(2)} width={110} style={{marginBottom:20}} underlayColor='#CCC'>
                    <Text>Terça</Text>
                </DefaultButton>
                <DefaultButton bgcolor={props.workoutDays.includes(3)?'#A5E8BC':false} onPress={()=>toggleDay(3)} width={110} style={{marginBottom:20}} underlayColor='#CCC'>
                    <Text>Quarta</Text>
                </DefaultButton>
                <DefaultButton bgcolor={props.workoutDays.includes(4)?'#A5E8BC':false} onPress={()=>toggleDay(4)} width={110} style={{marginBottom:20}} underlayColor='#CCC'>
                    <Text>Quinta</Text>
                </DefaultButton>
                <DefaultButton bgcolor={props.workoutDays.includes(5)?'#A5E8BC':false} onPress={()=>toggleDay(5)} width={110} style={{marginBottom:20}} underlayColor='#CCC'>
                    <Text>Sexta</Text>
                </DefaultButton>
                <DefaultButton bgcolor={props.workoutDays.includes(6)?'#A5E8BC':false} onPress={()=>toggleDay(6)} width={110} style={{marginBottom:20}} underlayColor='#CCC'>
                    <Text>Sábado</Text>
                </DefaultButton>
            </DaysArea>
        </Container>
    )
}


Page.navigationOptions = ({navigation}) => {
    const nextAction = () => {
        if(!navigation.state.params || !navigation.state.params.workoutDays.length){
            alert('Você precisa treinar pelo menos 1 dia')
            return
        }
        navigation.navigate('StarterNivel')
    }

    return{
        title:'',
        headerRight:<NextButton title='Próximo' onPress={nextAction}/>,
        headerRightContainerStyle:{
            marginRight:20
        }
    }
}

const mapStateToProps = (state) => {
    return{
        name:state.userReducer.name,
        workoutDays:state.userReducer.workoutDays
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        setName:(name)=>dispatch({type:'SET_NAME', payload:{name}}),
        setWorkoutDays:(workoutDays)=>dispatch({type:'SET_WORKOUTDAYS', payload:{workoutDays}})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page)