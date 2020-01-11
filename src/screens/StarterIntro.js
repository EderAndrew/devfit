//Página inicial do aplicativo. Com texto de boas vindas,
//imagem do aplicativo e botão para acessar as configurações.
//Quando o botão é apertado, o aplicativo direciona o usuário para a tela StarterName
import React from 'react';
import styled from 'styled-components/native';

import DefaultButton from '../components/DefaultButton';

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  margin-right: 30px;
`;

const Title = styled.Text`
  font-size: 22px;
  color: #333;
  font-weight: bold;
  margin-top: 40px;
`;

const WelcomeImage = styled.View`
  flex: 1;
  justify-content: center;
`;
const WelcomeLogo = styled.Image`
  width: 250px;
  height: 250px;
`;
const BeginConfigArea = styled.View`
  margin-bottom: 50px;
  width: 100%;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
`;
const Page = props => {
  const start = () => {
    props.navigation.navigate('StarterName');
  };
  return (
    <Container>
      <Title>Bem vindo(a) ao DevFit</Title>
      <WelcomeImage>
        <WelcomeLogo source={require('../assets/boneco.png')} />
      </WelcomeImage>
      <BeginConfigArea>
        <DefaultButton
          width="100%"
          height="60px"
          bgcolor="#0072c0"
          underlayColor="#0B7AC6"
          onPress={start}>
          <ButtonText>Iniciar Configuração</ButtonText>
        </DefaultButton>
      </BeginConfigArea>
    </Container>
  );
};

Page.navigationOptions = {
  header: null,
};

export default Page;
