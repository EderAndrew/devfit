//Tela de configuração inicial. Só aparece se o usuário ainda não criou seu cadastro
import React from 'react'
import styled from 'styled-components/native'
import { connect } from 'react-redux'


const Container = styled.SafeAreaView`
    flex:1;
    align-items:center;
    margin-left:30px;
    margin-right:30px;
`
const HeaderText = styled.Text`
    font-size:22px;
    color:#333;
    margin-top:50px;
    margin-bottom:50px;
`

const NameInput = styled.TextInput`
    border:1px solid #CCC;
    width:100%;
    height:60px;
    border-radius:10px;
    box-shadow: 10px 5px 5px black;
    font-size:16px;
    padding:10px;
`

const NextButton = styled.Button``

const Page = (props) => {
    const nextAction = () => {
        if(!props.name){
            alert("Você precisa de um nome")
            return
        }
        props.navigation.navigate('StarterDias')
    }

    const handleChangeName = (t) => {
        props.setName(t)
        props.navigation.setParams({name:t})
    }
    return(
        <Container>
            <HeaderText>Qual é o seu nome?</HeaderText>
            <NameInput 
                value={props.name}
                onChangeText={handleChangeName}
                autoFocus={true}
                autoCapitalize='words'
                onSubmitEditing={nextAction}
            />
        </Container>
    )
}

//Transformando o navigationOptions em função para que possamos manipular a barra de navegação da tela
Page.navigationOptions = ({navigation}) => {
    const nextAction = () => {
        if(!navigation.state.params || !navigation.state.params.name){
            alert('Você precisa de um nome')
            return
        }
        navigation.navigate('StarterDias')
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
        name:state.userReducer.name
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        setName:(name)=>dispatch({type:'SET_NAME', payload:{name}})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page)