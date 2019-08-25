import React, { Component } from 'react';
import { Container, Header, Content } from '../../styles/components';
import { Setor } from './styles'

export default class Categoria extends Component {
  render() {
    return (
        <Container>
          <Header>
            <h3>magalu</h3>
          </Header>
          <Content>
            <Setor color={'#ffce00'} img={'/eletrodomesticos.png'}>
              <h2>Eletrodomésticos</h2>
            </Setor>
            <Setor color={'#de349e'} img={'/celulares.png'}>
              <h2>Telefonia</h2>
            </Setor>
            <Setor color={'#8e2073'} img={'/quarto.png'}>
              <h2>Móveis</h2>
            </Setor>
            <Setor color={'#0083ca'} img={'/tvs.png'}>
              <h2>Tv e Vídeo</h2>
            </Setor>
            <Setor color={'#58c22e'} img={'/noteboks.png'}>
              <h2>Informática</h2>
            </Setor>
          </Content>
        </Container>
    );
  }
}
