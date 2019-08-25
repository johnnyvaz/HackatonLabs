import React, { Component } from 'react';
import { Container, Content } from '../../styles/components';
import { Image, Preco, Title, CardBody, Button } from './styles';
import { Collapse, Card } from 'reactstrap';
import  Header  from '../../styles/Header';

export default class Categoria extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }
  goBack = ()=>{
    const { color, title } = this.props.match.params
    return (`/subcategoria/${color}/${title}`);
  };
  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }
  render() {
    return (
        <Container>
          <Header>
            <a href={this.goBack()} >voltar</a>
            <h3>Produto</h3>
          </Header>
          <Content padding={"5px"}>
            <Image src={"/celulares.png"} alt="motog"/>
            <Title>Smartphone Motorola G7 Play Edição Especial 32GB - Indigo 2GB RAM 5,7” Câm. 13MP + Câm. Selfie 8MP</Title>
            <Preco>R$799,94</Preco>
            <Button onClick={this.toggle} >Detalhes do produto</Button>
            <Collapse isOpen={this.state.collapse}>
              <Card>
                <CardBody>
                O Smartphone Motorola G7 Play Edição Especial na cor Indigo conta com 32GB de memória pra você salvar todas suas fotos e vídeos sem se preocupar. Ele ainda tem tecnologia 4G e tela 5,7"que dá pra curtir seus vídeos tranquilamente. Além disso tem 2GB de memória RAM e processador Octa-core. Curte fazer fotos? Vai adorar a câmera de 13MP, que é perfeita para registrar momentos inesquecíveis, e ainda conta com foco automático e resolução de vídeo Ultra HD 4K. E as selfies vão sair lindas com a câmera de 8MP, e ela ainda tem flash e zoom digital de 8x. Este modelo tem com alta tecnologia e recursos para todas as necessidades na organização e segurança do seu dia a dia. E pra terminar, vem com suporte para dual chip, você consegue se programar entre operadoras e curtir o de melhor delas. </CardBody>
              </Card>
            </Collapse>
            <Button>Comparar com outro produto </Button>
          </Content>
 
        </Container>
    );
  }
}
