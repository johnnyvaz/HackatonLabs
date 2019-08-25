import React, { Component } from 'react';
import { Container, Content } from '../../styles/components'
import { Produto, Linha } from './styles'
import  Header from '../../styles/Header'

export default class Subcategoria extends Component {
  geraLink = ()=>{
    const { color, title } = this.props.match.params
    return (`/subcategoria/${color}/${title}/produto`);
  };
  render() {
    const { color, title } = this.props.match.params
    return (
      <Container>
        <Header color={(`#${color}`)}>
          <a href="/">voltar</a>
          <h3>{title}</h3>
        </Header>
        <Content padding={"5px"}>
        <Linha>
            <Produto to={this.geraLink()}>
              <img src="/celular1.jpg" alt="moto G" />
              <h5>R$1.299,99</h5>
            </Produto>
            <Produto to={this.geraLink()}>
              <img src="/celular2.jpg" alt="moto G" />
              <h5>R$999,99</h5>
            </Produto>
            <Produto to={this.geraLink()}>
              <img src="/celular3.jpg" alt="moto G" />
              <h5>R$1.199,99</h5>
            </Produto>
          </Linha>
          <Linha>
            <Produto to={this.geraLink()}>
              <img src="/celular4.jpg" alt="moto G" />
              <h5>R$1.899,99</h5>
            </Produto>
            <Produto to={this.geraLink()}>
              <img src="/celular5.jpg" alt="moto G" />
              <h5>R$1.799,99</h5>
            </Produto>
            <Produto to={this.geraLink()}>
              <img src="/celular6.jpg" alt="moto G" />
              <h5>R$699,99</h5>
            </Produto>
          </Linha>
          <Linha>
            <Produto to={this.geraLink()}>
              <img src="/celular7.jpg" alt="moto G" />
              <h5>R$699,99</h5>
            </Produto>
            <Produto to={this.geraLink()}>
              <img src="/celular8.jpg" alt="moto G" />
              <h5>R$599,99</h5>
            </Produto>
            <Produto to={this.geraLink()}>
              <img src="/celular9.jpg" alt="moto G" />
              <h5>R$1.799,99</h5>
            </Produto>
          </Linha>
          <Linha>
            <Produto to={this.geraLink()}>
              <img src="/celular10.jpg" alt="moto G" />
              <h5>R$1.699,99</h5>
            </Produto>
            <Produto to={this.geraLink()}>
              <img src="/celular11.jpg" alt="moto G" />
              <h5>R$699,99</h5>
            </Produto>
            <Produto to={this.geraLink()}>
              <img src="/celular12.jpg" alt="moto G" />
              <h5>R$899,99</h5>
            </Produto>
          </Linha>
        </Content>
      </Container>
    );
  }
}
