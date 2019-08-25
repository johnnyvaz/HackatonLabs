import React, { Component } from 'react';
import { Container, Header, Content } from '../../styles/components';
import { Image, Preco } from './styles';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

export default class Categoria extends Component {
  render() {
    return (
        <Container>
          <Header>
            <h3>Produto</h3>
          </Header>
          <Content>
            <Image src={"/celulares.png"} alt="motog"/>
            <Preco>R$799,90</Preco>
            <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
            Anim pariatur cliche reprehenderit,
             enim eiusmod high life accusamus terry richardson ad squid. Nihil
             anim keffiyeh helvetica, craft beer labore wes anderson cred
             nesciunt sapiente ea proident.
            </CardBody>
          </Card>
        </Collapse>
          </Content>
        </Container>
    );
  }
}
