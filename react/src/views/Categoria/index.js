import React, { Component } from 'react';
import { Container, Content } from '../../styles/components';
import { Setor } from './styles'
import  Header  from '../../styles/Header'

export default class Categoria extends Component {
  render() {
    return (
        <Container>
          <Header>
            <h3>magalu</h3>
          </Header>
          <Content>
            <Setor to="/subcategoria/ffce00/Eletro Pesado" color={'#ffce00'} img={'/eletrodomesticos.png'}>
              <h2>Eletro Pesado</h2>
            </Setor>
            <Setor to="/subcategoria/de349e/Telefonia e Info" color={'#de349e'} img={'/telefoniainfo.png'}>
              <h2>Telefonia e Info</h2>
            </Setor>
            <Setor to="/subcategoria/8e2073/Móveis" color={'#8e2073'} img={'/quarto.png'}>
              <h2>Móveis</h2>
            </Setor>
            <Setor to="/subcategoria/0083ca/Tv e Vídeo" color={'#0083ca'} img={'/tvs.png'}>
              <h2>Tv e Vídeo</h2>
            </Setor>
            <Setor to="/subcategoria/77c1e4/Eletroportáteis" color={'#77c1e4'} img={'/eletroportáteis.png'}>
              <h2>Eletroportáteis</h2>
            </Setor>
            <Setor to="/subcategoria/58c22e/Brinquedos" color={'#58c22e'} img={'/brinquedos.png'}>
              <h2>Brinquedos</h2>
            </Setor>
          </Content>
        </Container>
    );
  }
}
