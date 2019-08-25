import React, { Component } from 'react';
import { Header } from '../../styles/components'
import { Produto } from './styles'

export default class Subcategoria extends Component {
  render() {
    return (
      <>
        <Header color={'#de349e'}>
          <h3>Telefonia</h3>
        </Header>
        <Produto>
          <img src="celulares.png" alt="moto G" />
          <h4>R$899,99</h4>
        </Produto>
        <Produto>
          <img src="celulares.png" alt="moto G" />
          <h4>R$899,99</h4>
        </Produto>
        <Produto>
          <img src="celulares.png" alt="moto G" />
          <h4>R$899,99</h4>
        </Produto>
      </>
    );
  }
}
