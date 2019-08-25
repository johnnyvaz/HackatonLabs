import styled from 'styled-components';
import { CardBody as CB } from 'reactstrap';

export const Image = styled.img`
    width: 80%;
    height: auto;
    margin: 10px auto;
`;
export const Preco = styled.span`
   font-size: 10vw;
   text-align: center;
   color: #000;
`;
export const Button = styled.span`
   font-size: 4vw;
   text-align: center;
   color: #555;
   text-decoration: underline;
   padding: 20px;
   border-top: solid 1px #ccc;
   border-bottom: solid 1px #ccc;
`;
export const Title = styled.h3`
    color:#555;
    font-size:5vw;
    margin: 10px;
`;
export const CardBody = styled(CB)`
    color: #000;
`;