import React from 'react';
import {
  Header, Barra,
 } from './styles';
const Index = (props)=>{

  return(<div>
    <Header {...props}>
    {props.children}
  </Header>
  <Barra />
  </div>);

}
export default Index;