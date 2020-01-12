import React from 'react';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Title = styled.Text``;

const TmpScreen = () => {
  return (
    <Container>
      <Title>Página Temporária</Title>
    </Container>
  );
};

export default TmpScreen;
