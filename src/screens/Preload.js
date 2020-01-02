//Preload que carrega, se o usuário ainda tem um nome registrado, a tela de configuração
//ou, caso o usuário tenha um cadastro no registro, para a página de inicio do aplicativo
import { StackActions, NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'

const Preload = (props) => {
    //Temporário
    props.navigation.dispatch(StackActions.reset({
        index:0,
        actions:[
            NavigationActions.navigate({routeName:'StarterStack'})
        ]
    }))
    /*
    if(!props.name){
        //mandar para StarterStack
        props.navigation.dispatch(StackActions.reset({
            index:0,
            actions:[
                NavigationActions.navigate({routeName:'StarterStack'})
            ]
        }))
    }else{
        //mandar para AppTab
        props.navigation.dispatch(StackActions.reset({
            index:0,
            actions:[
                NavigationActions.navigate({routeName:'AppTab'})
            ]
        }))
    }
    */
    return null
}

const mapStateToProps = (state) => {
  return{
      name:state.userReducer.name
  }
};

export default connect(mapStateToProps)(Preload)